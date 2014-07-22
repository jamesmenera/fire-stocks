import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    searchStockSymbol: function(model){
      return this.transitionToRoute('fundamental', model.get('symbol'));
    }
  }
});
