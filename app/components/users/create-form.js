import {
  computed,
  get,
  set
} from '@ember/object';
import Component from '@ember/component';
import {
  add,
  modifyCurrent,
  fetchUsers
} from '../../state/users/actions';
import {
  connect
} from 'ember-redux';
import {
  currentUserValidator
} from '../../state/users/validators';

const stateToComputed = state => {
  return {
    user: {
      firstName: state.users.current.firstName,
      lastName: state.users.current.lastName,
    },
    invalidData: !currentUserValidator(state)
  };
}

const dispatchToActions = {
  add,
  modifyCurrent,
  fetchUsers
}

const CreateFormComponent = Component.extend({
  message: false,

  fullName: computed("user.firstName", "user.lastName", function () {
    return `${get(this, "user.firstName")} ${get(this, "user.lastName")}`;
  }),

  actions: {
    submitForm(user) {
      this._showMessage();
      this.actions.add(user);
    },

    fetchUsers() {
      this.actions.fetchUsers();
    },

    onChange(propName, {target}) {
      this.actions.modifyCurrent({
        firstName: get(this, "user.firstName"),
        lastName: get(this, "user.lastName"),
        [propName]: target.value
      });
    }
  },

  _showMessage() {
    set(this, "message", `User ${get(this,"fullName")} will be added to the list`);
    setTimeout(() => {
      set(this, "message", null);
    }, 2000);
  }
});

export default connect(stateToComputed, dispatchToActions)(CreateFormComponent);
