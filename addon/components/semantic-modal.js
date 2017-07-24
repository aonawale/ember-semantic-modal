import ModalMixin from '../mixins/modal-mixin';
import UiModal from 'semantic-ui-ember/components/ui-modal';
import layout from '../templates/components/semantic-modal';

export default UiModal.extend(ModalMixin, {
  layout,
  name: 'semantic-modal'
});
