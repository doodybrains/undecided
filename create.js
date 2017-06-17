'use strict';
const fs = require('fs');
var say = require('say');
var inquirer = require('inquirer');
var dir = './src';
var path = require('path');
var unirest = require('unirest');
var shortid = require('shortid');

var boringCss = 'html {box-sizing: border-box;}*, *:before, *:after {box-sizing: inherit;}body {border: 10px solid gray;height:100vh;padding: 0;margin:0;} a{text-align:center;text-transform:uppercase;letter-spacing:.09em;display:block;margin:0 auto;text-align:center;border:1px solid gray;width:100px;}';
var litCss = 'html {box-sizing: border-box;}*, *:before, *:after {box-sizing: inherit;}body {border: 10px solid #9370DB;height:100vh;padding: 0;margin:0;}a{color:#40E0D0;font-weight:800;font-size:1.2em;text-align:center;text-transform:uppercase;letter-spacing:.09em;position:absolute;display:block;border:1px solid hotpink;width:100px;}a:first-child{top:23%;left:85%;}a:nth-child(2){bottom:42%;right:13%;}a:nth-child(3){top:38%;right:48%;}';

function createCss(style, links) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  if (style.which === 'i want my website to be boring.') {
    fs.writeFile('src/style.css', boringCss, function (err) {
      if (err) console.log(err)
      say.speak('this website is gonna be boring.', 'Alex', .5);
    })
  } else {
    fs.writeFile('src/style.css', litCss, function (err) {
      if (err) console.log(err)
      say.speak('this website is gonna be fire!', 'Alex', 1);
    })
  }

  makeHtml(links);
}

function makeHtml(links) {
  const linkHash = links;
  var anchornames = [];
  for (var name in linkHash) {
    if (linkHash.hasOwnProperty(name)) {
      var value = linkHash[name];
      anchornames.push(value);
    }
  }

  var html = makeAnchors(anchornames);
  makeHtmlPage(html);
}

function makeHtmlPage(html) {
  var links = "";
  html.forEach(function(element) {
    var str = element;
    var link = str.trim().split(/\s*,\s*/)[0];
    var url = str.trim().split(/\s*,\s*/)[1];
    links = links + `<a href="${url}">${link}</a>`;
  });
  deployWebsite(links);
}

function makeAnchors(links) {
  var anchors=[];
  links.forEach(function(element) {
     anchors.push(`${element}`);
  });
  return anchors.concat(' ');
}

function makeLinkQuestions() {
  var objects = [];
  var numberOfLinks = process.argv[2];
  const linkAmount = numberOfLinks;
  for (var x = 0; x < linkAmount; x++) {
    objects[x] = {type: 'input', name: `${x}`, message: `enter the name and url of link ${x}`};
  }
  makeLinks(objects);
}

function makeLinks(objects) {
  inquirer.prompt(objects).then(function (answers) {
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
    createCss(answers, links);
  });
}

function deployWebsite(htmllinks) {
  var short = shortid.generate();
  var id = parseInt(short);

  unirest.post('https://desolate-scrubland-97851.herokuapp.com/links')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send({ "id": id, "link": htmllinks })
  .end(function (response) {
    console.log('sent');
  });
}

module.exports.makeLinkQuestions = makeLinkQuestions;
