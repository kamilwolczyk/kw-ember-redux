import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kw-counter', 'Integration | Component | kw counter', {
  integration: true
});

test('it renders proper number', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kw-counter}}`);

  assert.equal(this.$('h2').text().trim(), 'Counter [2]');

  this.$('button.btn.btn-primary').click();

  assert.equal(this.$('h2').text().trim(), 'Counter [3]');

  this.$('button.btn.btn-primary').click();

  assert.equal(this.$('h2').text().trim(), 'Counter [4]');
});
