import get from 'ember-metal/get';
import Mixin from 'ember-metal/mixin';

export default Mixin.create({
  didInsertElement() {
    this._super(...arguments);
    this.$().modal({ onHidden: this.onHidden.bind(this) });
    this.execute('show');
  },

  onHidden() {
    get(this, 'onClose')();
  },

  onClose: () => null
});