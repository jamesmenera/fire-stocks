import Ember from 'ember';

export default Ember.Mixin.create({
  epochDate: function(){
    return moment( new Date().getTime() );
  },
    
  endDate: function(){
    return this.get('epochDate')().format('YYYY-MM-DD');
  }.property('epochDate'),
  
  startDate: function(self, diff){
    var epochDate = this.get('epochDate')(),
        timeDiff = diff || { amount: 1, unit: 'year' };
    
    return epochDate.subtract( timeDiff.amount, timeDiff.unit ).format('YYYY-MM-DD');
  }.property('epochDate'),
  
  diff: function(){
    var startDate = moment(this.get('startDate')),
        endDate = moment(this.get('endDate')),
        timeDiff = Math.abs( startDate.diff(endDate, 'days') ) + ' days'.dasherize();
        
    return timeDiff;
  }.property('startDate', 'endDate')
});
