import { configure } from '@storybook/svelte';
import '../src/index.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
