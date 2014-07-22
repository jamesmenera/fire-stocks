import Ember from 'ember';

var Router = Ember.Router.extend({
  location: StockerENV.locationType
});

Router.map(function() {
  this.route('application', { path: '/search' });
  this.resource('fundamental', { path: '/company/:company_symbol' }, function(){
    this.resource('history', {  path: '/past/:history_range' });
  });
});

export default Router;
