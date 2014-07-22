import DS from 'ember-data';

export default DS.Model.extend({
  symbol: DS.attr(),
  ask: DS.attr(),
  averageDailyVolume: DS.attr(),
  bid: DS.attr(),
  askRealtime: DS.attr(),
  bidRealtime: DS.attr(),
  bookValue: DS.attr(),
  changePercentChange: DS.attr(),
  change: DS.attr(),
  commission: DS.attr(),
  currency: DS.attr(),
  changeRealtime: DS.attr(),
  afterHoursChangeRealtime: DS.attr(),
  dividendShare: DS.attr(),
  lastTradeDate: DS.attr(),
  tradeDate: DS.attr(),
  earningsShare: DS.attr(),
  errorIndicationreturnedforsymbolchangedinvalid: DS.attr(),
  epsEstimateCurrentYear: DS.attr(),
  epsEstimateNextYear: DS.attr(),
  epsEstimateNextQuarter: DS.attr(),
  daysLow: DS.attr(),
  daysHigh: DS.attr(),
  yearLow: DS.attr(),
  yearHigh: DS.attr(),
  holdingsGainPercent: DS.attr(),
  annualizedGain: DS.attr(),
  holdingsGain: DS.attr(),
  holdingsGainPercentRealtime: DS.attr(),
  holdingsGainRealtime: DS.attr(),
  moreInfo: DS.attr(),
  orderBookRealtime: DS.attr(),
  marketCapitalization: DS.attr(),
  marketCapRealtime: DS.attr(),
  ebitda: DS.attr(),
  changeFromYearLow: DS.attr(),
  percentChangeFromYearLow: DS.attr(),
  lastTradeRealtimeWithTime: DS.attr(),
  changePercentRealtime: DS.attr(),
  changeFromYearHigh: DS.attr(),
  percentChangeFromYearHigh: DS.attr(),
  lastTradeWithTime: DS.attr(),
  lastTradePriceOnly: DS.attr(),
  highLimit: DS.attr(),
  lowLimit: DS.attr(),
  daysRange: DS.attr(),
  daysRangeRealtime: DS.attr(),
  fiftydayMovingAverage: DS.attr(),
  twoHundreddayMovingAverage: DS.attr(),
  changeFromTwoHundreddayMovingAverage: DS.attr(),
  percentChangeFromTwoHundreddayMovingAverage: DS.attr(),
  changeFromFiftydayMovingAverage: DS.attr(),
  percentChangeFromFiftydayMovingAverage: DS.attr(),
  name: DS.attr(),
  notes: DS.attr(),
  open: DS.attr(),
  previousClose: DS.attr(),
  pricePaid: DS.attr(),
  changeinPercent: DS.attr(),
  priceSales: DS.attr(),
  priceBook: DS.attr(),
  exDividendDate: DS.attr(),
  peRatio: DS.attr(),
  dividendPayDate: DS.attr(),
  peRatioRealtime: DS.attr(),
  pegRatio: DS.attr(),
  priceEPSEstimateCurrentYear: DS.attr(),
  priceEPSEstimateNextYear: DS.attr(),
  sharesOwned: DS.attr(),
  shortRatio: DS.attr(),
  lastTradeTime: DS.attr(),
  tickerTrend: DS.attr(),
  oneyrTargetPrice: DS.attr(),
  volume: DS.attr(),
  holdingsValue: DS.attr(),
  holdingsValueRealtime: DS.attr(),
  yearRange: DS.attr(),
  daysValueChange: DS.attr(),
  daysValueChangeRealtime: DS.attr(),
  stockExchange: DS.attr(),
  dividendYield: DS.attr(),
  percentChange: DS.attr(),
  
  changeIsPositive: function(){
    var change = this.get('change');
    
    if (change && change[0] === '-'){
      return false;
    } else {
      return true;
    }
  }.property('change'),
  
  percentChangeIsPositive: function(){
    var percentChange = this.get('percentChange');
    
    if (percentChange && percentChange[0] === '-'){
      return false;
    } else {
      return true;
    }
  }.property('percentChange')
});
