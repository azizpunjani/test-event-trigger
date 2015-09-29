import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    focus() {
      this.set('isFocused', true);
    },

    blur() {
      this.set('isFocused', false);
    }

  }
});
