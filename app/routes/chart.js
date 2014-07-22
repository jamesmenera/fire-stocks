import Ember from 'ember';
/*

var timeRange = Ember.Object.extend();

timeRange.create({
  epochDate: function(){
    return moment( new Date().getTime() );
  },
    
  endDate: function(){
    return this.get('epochDate')().format('YYYY-MM-DD');
  }.property('epochDate'),
  
  startDate: function(){
    var epochDate = this.get('epochDate')(),
    timeRange = this.get('timeRange');
    
    return epochDate.subtract( timeRange.amount, timeRange.unit ).format('YYYY-MM-DD');
  }.property('epochDate', 'timeRange')

});

*/

export default Ember.Route.extend({
  /*
model: function(params) {
    return this.store.find('history', { symbol: 'goog', startDate: timeRange.get('startDate'), endDate: timeRange.get('endDate') });
  },
  setupController: function(controller, model) {
    return controller.set('model', model);
  }
*/
});

