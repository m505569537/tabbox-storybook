import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import { configureActions } from '@storybook/addon-actions'
import '../src/index.css';

// automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);
const req = requireContext('../src', true, /\.stories\.js$/);

function loadStories () {
    req.keys().forEach(filename => req(filename));
}
// 限制action
configureActions({
    depth: 100,
    limit: 20
})

configure(loadStories, module);
