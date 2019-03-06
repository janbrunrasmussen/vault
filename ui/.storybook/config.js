import { configure } from '@storybook/ember';

// automatically import all files ending in *.stories.js
const req = require.context('../app/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);