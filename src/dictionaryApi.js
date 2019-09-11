export class Dictionary {
getDefinitionByWord(searchWord) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchWord}?key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
