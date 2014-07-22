import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value, noText) {
  if (value) {
    return value; 
  } else if (noText){
    return noText;
  } else {
    return 'None';
  }
});
