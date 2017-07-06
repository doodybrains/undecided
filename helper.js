
var messaging = {
  errorMessage: function() {
    console.log('              ');
    console.log('************************************');
    console.log('8===D ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('---------------');
    console.log('                                                                                             ');
    console.log('You have to enter a valid number.');
    console.log('For example if you want your page to have 5 links it should look like this: undecided 5');
    console.log('                                                                                             ');
    console.log('---------------------------');
    console.log('8===D ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('************************************');
    console.log('              ');
  },
  successMessage: function() {
    console.log('              ');
    console.log('************************************');
    console.log('                                          ');
    console.log('Fill out the names and urls for each of your links below.');
    console.log('                                          ');
    console.log('Each url must be prepended by http://, its easiest to copy and paste it directly from your browser.');
    console.log('                                          ');
    console.log('Each name and url should be separated by a comma. For example: worst website ever, http://facebook.com');
    console.log('                                             ');
    console.log('************************************');
    console.log('              ');
  }
}


module.exports = messaging;
