import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(format) {
  var today = moment();
  
  if (format){
    today = today.format(format);
  }
  
  return today;
});
