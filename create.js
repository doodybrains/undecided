'use strict';
var fs = require('fs');
var say = require('say');
var inquirer = require('inquirer');
var path = require('path');
var unirest = require('unirest');
var shortid = require('shortid');
var messaging = require('./helper.js');

function createUndecidedSite() {
  var objects = [];
  var numberOfLinks = process.argv[2];
  var linkAmount = numberOfLinks;
  for (var x = 0; x < linkAmount; x++) {
    objects[x] = {type: 'input', name: `${x}`, message: `Type the name and then the url of link ${x}:`};
  }

  if (linkAmount > 0) {
    makeLinks(objects);
  } else {
    say.speak('fuck!', 'Alex', .8);
    messaging.errorMessage();
  }
}

function makeLinks(objects) {

  messaging.successMessage();
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

function createCss(style, links) {
  var chosenStyle = 'boring';
  if (style.which === 'i want my website to be boring.') {
    say.speak('this website is gonna be boring.', 'Alex', .5);
  } else {
    chosenStyle = 'lit';
    say.speak('this website is gonna be fire!', 'Alex', 1);
  }

  makeHtml(links, chosenStyle);
}

function makeHtml(links, chosenStyle) {
  var linkHash = links;
  var anchornames = [];

  for (var name in linkHash) {
    if (linkHash.hasOwnProperty(name)) {
      var value = linkHash[name];
      anchornames.push(value);
    }
  }

  var html = makeAnchors(anchornames);
  makeHtmlPage(html, chosenStyle);
}

function makeAnchors(links) {
  var anchors=[];
  links.forEach(function(element) {
     anchors.push(`${element}`);
  });

  return anchors.concat(' ');
}

function makeHtmlPage(html, chosenStyle) {
  var links = "";

  html.forEach(function(element) {
    var str = element;
    var link = str.trim().split(/\s*,\s*/)[0];
    var url = str.trim().split(/\s*,\s*/)[1];
    links = links + `<a target="_blank" href="${url}">${link}</a>`;
  });

  deployWebsite(links, chosenStyle);
}

function deployWebsite(htmllinks, chosenStyle) {
  var short = shortid.generate();
  var id = parseInt(short);

  unirest.post('https://desolate-scrubland-97851.herokuapp.com/links')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send({ "id": id, "links": htmllinks})
  .end(function (response) {
    sendFiles(response.body, chosenStyle);
  });
}

function sendFiles(response, chosenStyle) {
  unirest.post('https://desolate-scrubland-97851.herokuapp.com/send')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send({"response": response, "tag": shortid.generate(), "style": chosenStyle})
  .end(function (response) {
    console.log('');
    console.log('**** yah0000000000 ****');
    console.log('');
    console.log(response.body);
    console.log('');
  });
}

module.exports.createUndecidedSite = createUndecidedSite;
