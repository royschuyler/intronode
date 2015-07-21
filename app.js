#!/usr/bin/env node


// var argv = require('yargs').argv;

// var prompt = require('prompt');
// var fs = require('fs');

// // console.log(name)

// function cheer(name){
//   // process.stdout(name)
//   console.log(name)
// }

// cheer(name);

// var help = require('./app/help');
// var zipFile = require('./app/zipFile')
// var bigfile = require('./app/bigfile');



// if (argv.help) {

// help();

// }

// if (argv.file) {
//   zipFile(argv.file);
// }

// prompt.override = argv;
// prompt.message = prompt.delimiter = '';
// prompt.start();

//   prompt.get('name', function (err, result) {
//     printHelloMessage(result.name)
// });

// function printHelloMessage(name) {
//   console.log('Hello ' + name);
//   var stream = fs.createReadStream('./app/bigfile');
//   stream.pipe(process.stdout).end;
//   process.stdout.write('Hello ' + name + ' again!\n')
// }


var name = 'sarah';
var nameArr = name.split('');
// console.log(nameArr)

for (i = 0; i < nameArr.length; i++) {
  var prefix;
  if (nameArr[i] === 'a' || nameArr[i] === 'e' || nameArr[i] === 'i' || nameArr[i] === 'o' || nameArr[i] === 'u'){
    prefix = 'an';
  }
  else{
    prefix = 'a '
  }

  var string = 'Give me ' + prefix + ' ' + nameArr[i]
  console.log(string)
}









