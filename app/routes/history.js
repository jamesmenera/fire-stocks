import Ember from 'ember';
import TimeRangeMixin from 'stocker/mixins/time-range';

export default Ember.Route.extend(TimeRangeMixin, {
  model: function(params) {
    var symbol = this.modelFor('application').get('symbol') ? this.modelFor('application').get('symbol') : window.location.href.split('/')[4];
    
    return this.store.find('history', { symbol: symbol, startDate: this.get('startDate'), endDate: this.get('endDate') }).then(function(model){
      return model;
    });
  },
  setupController: function(controller, model) {
    return controller.set('model', model);
  }
});
