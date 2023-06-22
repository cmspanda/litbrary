import { nodeResolve } from '@rollup/plugin-node-resolve';

// rollup.config.js
export default {
	input: 'main.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
    plugins: [nodeResolve()]
};