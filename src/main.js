import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Dictionary } from './../src/dictionaryApi.js';

$(document).ready(function() {
  $('.dictionary').click(function() {
    console.log("WE HERE");
    const searchWord = $('#word').val();
    $('#word').val("");
    console.log(searchWord);


    let definition = new Dictionary();
    let promise = definition.getDefinitionByWord(searchWord);

    promise.then(function(response) {
      const body = JSON.parse(response);
      body.forEach(function(wordObj){
          $('#result').append(`<p>${searchWord} means ${wordObj.shortdef}</p>`);
      });
      console.log(body);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
