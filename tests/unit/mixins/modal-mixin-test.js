import Ember from 'ember';
import ModalMixinMixin from 'ember-semantic-modal/mixins/modal-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | modal mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ModalMixinObject = Ember.Object.extend(ModalMixinMixin);
  let subject = ModalMixinObject.create();
  assert.ok(subject);
});
