import { configure } from '@storybook/svelte';
import '../src/index.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

configure(req, module);
