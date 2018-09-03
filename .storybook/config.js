import { configure } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';

const req = require.context("../src/component", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configureActions({
  depth: 100
})
configure(loadStories, module);

