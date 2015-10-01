import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    click() {
      this.set('isClicked', true);
    }

  }
});
