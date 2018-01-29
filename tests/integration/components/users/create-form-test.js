import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('users/create-form', 'Integration | Component | users/create form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users/create-form}}{{users/user-list}}`);

  this.$('button.btn.btn-primary:contains("Fetch remote users")').click();

  return wait().then(() => {
    assert.equal(this.$("tr:nth-child(1) > td:nth-child(2)").text().trim(), 'Leanne');
  });

});
