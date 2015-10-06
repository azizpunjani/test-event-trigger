import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'test-event-trigger/tests/helpers/start-app';

module('Acceptance | event triggering', {
  beforeEach: function() {
    this.application = startApp();

    console.log( 'document has focus:', document.hasFocus() );
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});


test('event-triggering focus via ember triggerEvent helper', function(assert) {
  visit('/');

  triggerEvent('.test-input', 'focus');

  andThen(function() {
    assert.ok(find('.test-input').hasClass('focused'));
  });

});

test('event-triggering focus via ember click helper', function(assert) {
  visit('/');

  click('.test-input');

  andThen(function() {
    assert.ok(find('.test-input').hasClass('focused'));
  });

});

test('event-triggering focus via raw jquery element triggering', function(assert) {
  visit('/');

  andThen(function() {
    Ember.run(function() {
      find('.test-input').focus();
    });
  });

  andThen(function() {
    assert.ok(find('.test-input').hasClass('focused'));
  });

});

test('event-triggering click via ember triggerEvent helper', function(assert) {
  visit('/');

  triggerEvent('.test-button', 'click');

  andThen(function() {
    assert.ok(find('.test-button').hasClass('clicked'));
  });

});
