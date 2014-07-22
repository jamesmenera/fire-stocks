import DS from 'ember-data';

export default DS.Model.extend({
  instance: DS.attr(),
  title: DS.attr(),
  timeRange: DS.attr(),
  symbol: DS.attr(),
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
