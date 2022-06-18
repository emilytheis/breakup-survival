// const fs = require('fs');
import Papa from "papaparse";
// fs.readFile('../tips/breakup-survival-tips.csv', 'utf-8', (err, data) => {
//   if(err) { throw err; }
//   console.log('data: ', data);
// });

$(document).ready(function($) {
  var breakupTipsData;

  // This is a click event that allows us to trigger the randomize data funtion
  $('.js--next-suggestion').on('click', function(event) {
    event.preventDefault();

    $('.animate-content').transition({
      opacity: 0
    }, 500, 'easeOutExpo', 
    function() {
      randomizeData(breakupTipsData);
      $('.animate-content').transition({ opacity: 1 });
    });
  });

  // This initially gets the data from the spreadheet and transforms it into an object
  function getCardData() {
    // Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1ZqCUv_Ps0lHS0_I8Onk_xcdP9ThUS2ALtmxre5o7h5Q/pub?output=csv',
 
    // callback: function(data, tabletop) {
    //   breakupTipsData = data;
    //   randomizeData(breakupTipsData);

    //   if($('.beating-hearts-baby').length) {
    //     $('body').removeClass('beating-hearts-baby');
    //   }
    // },
    // simpleSheet: true } );

    Papa.parse('https://docs.google.com/spreadsheets/d/1ZqCUv_Ps0lHS0_I8Onk_xcdP9ThUS2ALtmxre5o7h5Q/pub?output=csv', {
      download: true,
      header: true,
      complete: function(results) {
        breakupTipsData = results.data
        randomizeData(breakupTipsData);
        
        if($('.beating-hearts-baby').length) {
          $('body').removeClass('beating-hearts-baby');
        }
      }
    })
  }

  // Randomize
  function randomizeData(data) {
    var dbRow = Math.random() * (data.length - 1) + 1;

    dbRow = Math.round(dbRow);
    var suggestionData = data[dbRow];
    var elements = ['type', 'name', 'suggestion', 'comment'];

    // Grab the content and put 'er in
    elements.forEach( function (el, index, elements) {
      elements[index] = document.getElementById(el);
      elements[index].textContent = suggestionData[el];
    });
  }

  getCardData();
});
