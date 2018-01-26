import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { connect } from 'ember-redux';
import { add, subtract } from 'kw-redux/state/features/counter';

const stateToComputed = state => {
  return {
    counterValue: state.counter.value
  };
}

const dispatchToActions = {
    add,
    subtract
}

const CounterComponent = Component.extend({
  invalidCustomValue: computed("customValue", function(){
    const customValue = get(this, "customValue");
    return customValue === "" || isNaN(customValue);
  }),

  actions:{
    addCustom(){
      const customValue = get(this, "customValue");
      this.actions.add(parseInt(customValue, 10));
      set(this, "customValue", "");
    }
  }
});

export default connect(stateToComputed, dispatchToActions)(CounterComponent);
