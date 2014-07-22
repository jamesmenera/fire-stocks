import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var symbol = window.location.href.split('/')[4];
    
    if (symbol) {
      return this.store.createRecord('search', { symbol: symbol });
    } else {
      return this.store.createRecord('search');
    }
  },
  setupController: function(controller, model) {
    return controller.set('model', model);
  }
});