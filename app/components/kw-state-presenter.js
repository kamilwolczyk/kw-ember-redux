import Component from '@ember/component';
import {
  connect
} from 'ember-redux';

const stateToComputed = state => {
  return {
    state: state
  };
}

const dispatchToActions = dispatch => {
  return {};
}

const StatePresenterComponent = Component.extend({});

export default connect(stateToComputed, dispatchToActions)(StatePresenterComponent);
