var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  html = html.split("");
  html = html.reverse();
  html = html.join("");
  console.log(html);
}

console.log(getHTML(requestOptions, printReverse));
