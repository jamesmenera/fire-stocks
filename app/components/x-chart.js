import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'div',
  classNames: ['highcharts'],
  
  initializeChart: function(){
    //this._super();
    
    var elementId = ['#', this.get('elementId')].join(''),
        chartConfigs =  this.get('controller').get('chartConfigs'),
        applicationModel = this.get('parentView.controller.content');
        
    //debugger;
        
    Ember.$(elementId).highcharts('StockChart', {
      chart:{
        height: "500",
        style: {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 100
        }
      },
      rangeSelector: {
        enabled: true,
        allButtonsEnabled: false,
        selected : 0,
        inputEnabled: false,
        buttons: [{
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'month',
          count: 3,
          text: '3m'
        }, {
        	type: 'month',
        	count: 6,
        	text: '6m'
        }, {
        	type: 'ytd',
        	text: 'YTD'
        }, {
          type: 'all',
          text: 'All'
        }],
        //buttonSpacing: '0',
        buttonTheme: {
          fill: 'none',
          stroke: 'none',
          'stroke-width': 0,
          //r: 8,
          style: {
            color: '#fff',
            fontWeight: '300',
            fontSize: '14px',
            //padding: '5px 8px'
          },
          states: {
            hover: {
              
            }
          },
          select: {
            fill: '#fff',
            style: {
              color: 'white'
            }
          }
        }
      },
      
      title: {
        text: '' //this.get('title')
      },
      
      xAxis: {
        labels: {
          align: "center",
          style: {
            fontSize: '12px'
          },
          formatter: function(){
            return moment(this.value).format('MMM D, YY');
          }
        }  
      },
      
      yAxis: {
        labels: {
          style: {
            fontSize: '14px',
            fontWeight: '300'
          }
        }
      },
      
      tooltip: {
        headerFormat: '<span style="font-size: 14px; padding-bottom: 10px; display: block;">{point.key}</span><br/><br/>',
        style: {
          fontSize: '14px',
          fontFamily: '"Lato", sans-serif',
          padding: '20px',
          borderRadius: '10px'
        }
      },
      
      series: [{
        name: this.get('symbol'),
        data: this.get('data')
      }]
    });
  }.on('didInsertElement'),
  
  updateChart: function(){
    this.initializeChart();
    
    var elementId = ['#', this.get('elementId')].join(''),
        chart = Ember.$(elementId).highcharts(),
        data = this.get('data'),
        symbol = this.get('');
        
    chart.series[0].setData(data, true);
  }.observes('data').on('didInsertElement')

});
