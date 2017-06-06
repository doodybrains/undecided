const fs = require('fs-extra')
var linkObject = {
  "linkOne": {
   "title": "",
   "url": ""
 },
 "linkTwo": {
  "title": "",
  "url": ""
 }
};

function createFile() {
  fs.writeFile('links.json', JSON.stringify(linkObject), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

module.exports.createFile = createFile;
