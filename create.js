const fs = require('fs-extra');
var say = require('say');
var createHTML = require('create-html');
'use strict';
var inquirer = require('inquirer');

var html = createHTML({
  title: 'site',
  body: '<a id="one" href="<%= linkOne.url %>"><%= linkOne.title %></a><a href="<%= linkTwo.url %>"><%= linkTwo.title %></a><a href="<%= linkThree.url %>"><%= linkThree.title %></a>',
  css: './style.css',
  script: 'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'
})

var linkObject = {
  "linkOne": {
   "title": "",
   "url": ""
   },
   "linkTwo": {
    "title": "",
    "url": ""
  },
  "linkThree": {
   "title": "",
   "url": ""
  }
};

var dir = './src';

var boringCss = 'html {box-sizing: border-box;}*, *:before, *:after {box-sizing: inherit;}body {border: 10px solid gray;height:100vh;padding: 0;margin:0;} a{text-align:center;text-transform:uppercase;letter-spacing:.09em;display:block;margin:0 auto;text-align:center;border:1px solid gray;width:100px;}';
var excitingCss = 'html {box-sizing: border-box;}*, *:before, *:after {box-sizing: inherit;}body {border: 10px solid #9370DB;height:100vh;padding: 0;margin:0;}a{color:#40E0D0;font-weight:800;font-size:1.2em;text-align:center;text-transform:uppercase;letter-spacing:.09em;position:absolute;display:block;border:1px solid hotpink;width:100px;}a:first-child{top:23%;left:85%;}a:nth-child(2){bottom:42%;right:13%;}a:nth-child(3){top:38%;right:48%;}';


function createFile(style) {
  fs.writeFile('links.json', JSON.stringify(linkObject, null, 4), (err)  => {
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
      say.speak('this website is gonna be boring.', 'Alex', .5);
    })
  } else {
    fs.writeFile('src/style.css', excitingCss, function (err) {
      if (err) console.log(err)
      say.speak('this website is gonna be lit!', 'Victoria', 1);
    })
  }
}

function chooseSiteStyle() {
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
    createFile(answers);
  });
}

module.exports.chooseSiteStyle = chooseSiteStyle;
