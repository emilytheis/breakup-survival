$(document).ready(function($) {
  var googleSheetJSON;

  // This is a click event that allows us to trigger the randomize data funtion
  $('.js--next-suggestion').on('click', function(event) {
    event.preventDefault();

    $('.animate-content').transition({
      opacity: 0
    }, 500, 'easeOutExpo', 
    function() {
      randomizeData(googleSheetJSON);
      $('.animate-content').transition({ opacity: 1 });
    }); 
  });

  // This initially gets the data from the spreadheet and transforms it into an object
  function getCardData() {
    $.getJSON('https://spreadsheets.google.com/feeds/list/1ZqCUv_Ps0lHS0_I8Onk_xcdP9ThUS2ALtmxre5o7h5Q/od6/public/values?alt=json',
      function(data){
        googleSheetJSON = data.feed.entry;
        randomizeData(googleSheetJSON);
    });

    if($('.beating-hearts-baby').length) {
      $('body').removeClass('beating-hearts-baby');
    }
  }

  // Randomize 
  function randomizeData(data) {
    var dbRow = Math.random() * (data.length - 1) + 1;
    
    dbRow = Math.round(dbRow);
    var jsonRow = data[dbRow];
    var suggestionData = {
      type: data[dbRow].gsx$type.$t,
      name: data[dbRow].gsx$name.$t,
      suggestion: data[dbRow].gsx$suggestion.$t,
      comment: data[dbRow].gsx$comment.$t,
    };

    var elements = ['type', 'name', 'suggestion', 'comment'];

    // Grab the content and put 'er in
    elements.forEach( function (el, index, elements) {
      elements[index] = document.getElementById(el);
      elements[index].textContent = suggestionData[el];
    });
  }

  getCardData();
});
