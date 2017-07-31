import run from 'ember-runloop';
import get from 'ember-metal/get';
import Mixin from 'ember-metal/mixin';
import { PropTypes } from 'ember-prop-types';

export default Mixin.create({
  propTypes: {
    duration: PropTypes.number,
    onDeny: PropTypes.func,
    onClose: PropTypes.func,
    onApprove: PropTypes.func
  },

  getDefaultProps() {
    return {
      duration: 400,
      onDeny: () => null,
      onClose: () => null,
      onApprove: () => null
    }
  },

  didInsertElement() {
    this._super(...arguments);
    run(() => {
      this.$().modal({
        duration: get(this, 'duration'),
        onDeny: this.onDeny.bind(this),
        onHidden: this.onHidden.bind(this),
        onApprove: this.onApprove.bind(this)
      });
      this.execute('show');
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.element.parentElement.removeChild(this.element);
  },

  onHidden() {
    get(this, 'onClose')();
  }
});