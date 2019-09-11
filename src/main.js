import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Dictionary } from './../src/dictionaryApi.js';
import { Thesaurus } from './../src/dictionaryApi.js';

$(document).ready(function() {
  $('#searchBtn').click(function() {
    const searchWord = $('#word').val();

    console.log(searchWord);


    let definition = new Dictionary();
    let promise1 = definition.getDefinitionByWord(searchWord);

    promise1.then(function(response) {
      const body = JSON.parse(response);
      body.forEach(function(wordObj){
        $('#result').append(`<p>${searchWord} means ${wordObj.shortdef}</p>`);
      });

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });


    const thesWord = $('#word').val();
    // $('#word').val("");
    console.log(thesWord);

    let synonym = new Thesaurus();
    let promise2 = synonym.getSynonymByWord(thesWord)

    promise2.then(function(response) {
      const body2 = JSON.parse(response);
      console.log(body2[0].meta.syns[0]);
        $('#result2').append(`<p>${thesWord} means ${body2[0].meta.syns[0].join(", ")}</p>`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

  });
});
