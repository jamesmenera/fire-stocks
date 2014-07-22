import Ember from 'ember';

export default Ember.View.extend({
  //For some reason this crashes the ember inspector  
  updateBodyClass: function(){
    this._super();
    
    var currentRouteName = this.get('controller.currentRouteName');
      $('body').attr('class', currentRouteName);
  }.observes('controller.currentRouteName').on('didInsertElement')

});
