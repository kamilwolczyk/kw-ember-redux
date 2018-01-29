import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kw-state-presenter', 'Integration | Component | kw state presenter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kw-state-presenter}}`);

  assert.equal(this.$().text().trim().replace("Current state", "")[1], "{");
});
