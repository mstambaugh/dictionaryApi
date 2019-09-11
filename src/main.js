import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Dictionary } from './../src/dictionaryApi.js';

$(document).ready(function() {
  $('.dictionary').click(function() {
    const searchWord = $('#word').val();
    $('#word').val("");
    console.log(thesWord);


    let definition = new Dictionary();
    let promise = definition.getDefinitionByWord(searchWord);

    promise.then(function(response) {
      const body = JSON.parse(response);
      body.forEach(function(wordObj){
        $('#result').append(`<p>${searchWord} means ${wordObj.shortdef}</p>`);
      });

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

    const thesWord = $('#word').val();
    $('#word').val("");
    console.log(thesWord);

    let synonym = new Thesaurus();
    let promise = synonym.getSynonymByWord(thesWord)
    promise.then(function(response) {
      const body = JSON.parse(response);
      body.forEach(function(wordObj2){
        $('#result2').append(`<p>${thesWord} means ${wordObj2.shortdef}</p>`);
      });
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

  });
});
