import Ember from 'ember';
import CreateSeriesMixin from 'stocker/mixins/create-series';

module('CreateSeriesMixin');

// Replace this with your real tests.
test('it works', function() {
  var CreateSeriesObject = Ember.Object.extend(CreateSeriesMixin);
  var subject = CreateSeriesObject.create();
  ok(subject);
});
