  import Component from '@ember/component';
  import { connect } from 'ember-redux';
  
  const stateToComputed = state => {
    return {
      users: state.users.users
    };
  }
  
  const dispatchToActions = { }
  
  const UsersListComponentComponent = Component.extend({ });
  
  export default connect(stateToComputed, dispatchToActions)(UsersListComponentComponent);
  