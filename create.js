const fs = require('fs-extra');
var say = require('say');
var createHTML = require('create-html')
var html = createHTML({
  title: 'site',
  body: '<a href="<%= linkOne.url %>"><%= linkOne.title %></a><a href="<%= linkTwo.url %>"><%= linkTwo.title %></a><a href="<%= linkThree.url %>"><%= linkThree.title %></a>',
  css: './style.css'
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

var css = 'body {border: 2px solid red;}'

function createFile() {
  fs.writeFile('links.json', JSON.stringify(linkObject, null, 4), (err)  => {
    if (err) throw err;
    say.speak('fuck yeah', 'Alex', .5);
  });
  fs.writeFile('index.html', html, function (err) {
    if (err) console.log(err)
    say.speak('yesssssssssss', 'Alex', .2);
  })
  fs.writeFile('style.css', css, function (err) {
    if (err) console.log(err)
    say.speak('yesssssssssss', 'Alex', .2);
  })
}


module.exports.createFile = createFile;
