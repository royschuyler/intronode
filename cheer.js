#!/usr/bin/env node

var prompt = require('prompt');
prompt.start();

prompt.get('name', function (err, result) {
    printHelloMessage(result.name)
});

function printHelloMessage(name) {
  var lowerCase = name.toLowerCase();
  var nameArr = lowerCase.split('');
  for (i = 0; i < nameArr.length; i++) {
    var prefix;

    if (nameArr[i] === 'a' || nameArr[i] === 'e' || nameArr[i] === 'i' || nameArr[i] === 'o' || nameArr[i] === 'u'){
      prefix = 'an';
    }
    else{
      prefix = 'a '
    }

    if (nameArr[i] === ' ') {
      nameArr.splice(i, 1)
    }

    var string = 'Give me ' + prefix + ' ' + nameArr[i]
    console.log(string)
   }
  }
