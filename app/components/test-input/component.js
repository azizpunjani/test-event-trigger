import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    console.log('insertedElement');
    this.$('input').bind('focus', function() {
      console.log('binding fired');
    });

  },

  actions: {

    focus() {
      console.log('action fired');
      this.set('isFocused', true);
    }

  }
});
