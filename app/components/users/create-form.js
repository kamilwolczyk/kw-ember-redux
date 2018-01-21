import {
  computed,
  set,
  get
} from '@ember/object';
import Component from '@ember/component';
import {
  add,
  modifyCurrent
} from '../../actions/users';
import {
  connect
} from 'ember-redux';

const stateToComputed = state => {
  return {};
}

const dispatchToActions = {
  add,
  modifyCurrent
}

const CreateFormComponent = Component.extend({

  fullName: computed("item.firstName", "item.lastName", function () {
    const user = this._getUserFromForm();
    this.actions.modifyCurrent(user);
    return `${user.firstName} ${user.lastName}`;
  }),

  init() {
    this._super(...arguments);
    this._setEmptyUser();
  },

  actions: {
    submitForm() {
      const user = this._getUserFromForm();
      this.actions.add(user);
      this._setEmptyUser();
    }
  },

  _getUserFromForm() {
    const firstName = get(this, "item.firstName");
    const lastName = get(this, "item.lastName");
    
    return {
      firstName: firstName,
      lastName: lastName
    };
  },

  _setEmptyUser() {
    set(this, 'item', {
      firstName: '',
      lastName: ''
    });
  }
});

export default connect(stateToComputed, dispatchToActions)(CreateFormComponent);
