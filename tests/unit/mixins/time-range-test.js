import Ember from 'ember';
import TimeRangeMixin from 'stocker/mixins/time-range';

module('TimeRangeMixin');

// Replace this with your real tests.
test('it works', function() {
  var TimeRangeObject = Ember.Object.extend(TimeRangeMixin);
  var subject = TimeRangeObject.create();
  ok(subject);
});
