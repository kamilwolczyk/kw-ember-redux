import Component from '@ember/component';
import {
  connect
} from 'ember-redux';

const stateToComputed = state => {
  return {
    state: state
  };
}

const dispatchToActions = () => ({})

const StatePresenterComponent = Component.extend({});

export default connect(stateToComputed, dispatchToActions)(StatePresenterComponent);
