#!/usr/bin/env node
var create = require('./create');

function createDirectoryStructure() {
  // create index.html
  // create stylesheet
  // create js file
}

function setTitle(title) {
  // the function will set the title of the website
  // and place it in a headline
}

function listLinks(linksList) {
  // this function will take a list of links
  // with keyed names and urls that will be dropped into an unordered list
}

function setBackgroundImage(element, image) {
  //png jpg gif etc.
  // this function will set a bg image on the element
  // if element is undefined image should be set on body tag
}

function toggleDecision(decision) {
  // if decision is equal to static
    // excecute boringCode()
  // else
    // execute wackyCode()
}

function boringCode() {
  // remove BackgroundImage
  // unanimateLinks
}

function wackyCode() {
  // setBackgroundImage
  // animateLinks
}

function animateLinks() {
  // var links = listLinks();
  // add animation + styles to each link
}

function unanimateLinks() {
  // var links = listLinks();
  // remove animation + styles
}

create.createFile();
