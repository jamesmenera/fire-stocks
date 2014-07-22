import Ember from 'ember';
import TimeRangeMixin from 'stocker/mixins/time-range';

export default Ember.Mixin.create(TimeRangeMixin, {
  seriesData: function(){
    this._super();
    
    var series = this.get('model.content'),
        formattedData = [];
    
    if (series) {
      series.forEach(function(data){
        var quote = [],
            marketCloseTime = ' 23:59',
            date = data.get('id') + marketCloseTime;
            
        
        quote.push( moment( date ).format('X') * 1000 );
        quote.push( parseFloat( data.get('adjClose') ));
        
        formattedData.push(quote);
      });
      
    }
    
    return formattedData.reverse();
  }.property('model.content')
});
