function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1ZqCUv_Ps0lHS0_I8Onk_xcdP9ThUS2ALtmxre5o7h5Q/pub?output=csv',
                   callback: function(data, tabletop) {
                      var dbRow = Math.random() * (data.length - 1) + 1;
                      dbRow = Math.round(dbRow);
                      var suggestionData = data[dbRow];
                      var elements = ['type', 'name', 'suggestion', 'comment'];

                      // Grab the content and put 'er in
                      elements.forEach( function (el, index, elements) {
                        elements[index] = document.getElementById(el);
                        elements[index].textContent = suggestionData[el];
                      });
                   },
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)
