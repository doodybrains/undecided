var createFile = require('create-file');

function createDirectoryStructure() {
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

  createFile('data/index.json', JSON.stringify(linkObject), function (err) {
    console.log(err);
  })
}
