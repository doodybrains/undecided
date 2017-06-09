const fs = require('fs-extra');
var say = require('say');
var createHTML = require('create-html');
'use strict';
var inquirer = require('inquirer');


// make number of link questions dynamic
// make html template dynamic
//initialize git and push to gh-pages?

var linkQuestions = [
  {
    type: 'input',
    name: 'linkOneTitle',
    message: 'What is the name of your first link?'
  },
  {
    type: 'input',
    name: 'linkOneUrl',
    message: 'What is the URL for your first link?'
  },
  {
    type: 'input',
    name: 'linkTwoTitle',
    message: 'What is the name of your second link?'
  },
  {
    type: 'input',
    name: 'linkTwoUrl',
    message: 'What is the URL for your second link?'
  },
  {
    type: 'input',
    name: 'linkThreeTitle',
    message: 'What is the name of your third link?'
  },
  {
    type: 'input',
    name: 'linkThreeUrl',
    message: 'What is the URL for your third link?'
  }
];

var html = createHTML({
  title: 'site',
  body: '<a id="one" href="<%= linkOneUrl %>"><%= linkOneTitle %></a><a href="<%= linkTwoUrl %>"><%= linkTwoTitle %></a><a href="<%= linkThreeUrl %>"><%= linkThreeTitle %></a>',
  css: './style.css',
  script: 'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'
})

var dir = './src';

var boringCss = 'html {box-sizing: border-box;}*, *:before, *:after {box-sizing: inherit;}body {border: 10px solid gray;height:100vh;padding: 0;margin:0;} a{text-align:center;text-transform:uppercase;letter-spacing:.09em;display:block;margin:0 auto;text-align:center;border:1px solid gray;width:100px;}';
var litCss = 'html {box-sizing: border-box;}*, *:before, *:after {box-sizing: inherit;}body {border: 10px solid #9370DB;height:100vh;padding: 0;margin:0;}a{color:#40E0D0;font-weight:800;font-size:1.2em;text-align:center;text-transform:uppercase;letter-spacing:.09em;position:absolute;display:block;border:1px solid hotpink;width:100px;}a:first-child{top:23%;left:85%;}a:nth-child(2){bottom:42%;right:13%;}a:nth-child(3){top:38%;right:48%;}';

function createFiles(style, links) {
  fs.writeFile('links.json', JSON.stringify(links, null, 4), (err)  => {
    if (err) throw err;
  });
  fs.writeFile('index.html', html, function (err) {
    if (err) console.log(err)
  })
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  if (style.which === 'i want my website to be boring.') {
    fs.writeFile('src/style.css', boringCss, function (err) {
      if (err) console.log(err)
      // say.speak('this website is gonna be boring.', 'Alex', .5);
    })
  } else {
    fs.writeFile('src/style.css', litCss, function (err) {
      if (err) console.log(err)
      // say.speak('this website is gonna be lit!', 'Victoria', 1);
    })
  }
}

function makeLinks() {
  inquirer.prompt(linkQuestions).then(function (answers) {
     makeWebsite(answers);
   });
}

function makeWebsite(links) {
  inquirer.prompt([
    {
      type: 'list',
      name: 'which',
      message: 'Choose one.',
      choices: ['I want my website to be boring.', 'I want to my website to be lit.'],
      filter: function (val) {
        return val.toLowerCase();
      }
    }
  ]).then(function (answers) {
    createFiles(answers, links);
  });
}

module.exports.makeLinks = makeLinks;
