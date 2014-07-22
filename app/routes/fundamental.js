import Ember from 'ember';
import TimeRangeMixin from 'stocker/mixins/time-range';

export default Ember.Route.extend(TimeRangeMixin, {
  model: function(params) {
    return this.store.find('fundamental', params.company_symbol).then(function(model){
      return model;
    });
  },
  setupController: function(controller, model){
    controller.set('company.symbol', model.get('id') );
    controller.set('company.name', model.get('name') );
    return controller.set('model', model);
  },
  afterModel: function(){
    return this.transitionTo('history', this.get('diff').dasherize() );
  }
  
});
