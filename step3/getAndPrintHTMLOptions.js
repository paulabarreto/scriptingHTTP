var https = require('https');

var printData = [];


function getAndPrintHTML (options) {

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
    printData.push(data);
    console.log(printData);

  });
});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions));
