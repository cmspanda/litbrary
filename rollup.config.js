import { nodeResolve } from '@rollup/plugin-node-resolve';

// rollup.config.js
export default {
	input: 'main.js',
	output: [{
		file: 'dist/bundle.js',
		format: 'cjs'
	},{
		file: 'site/scripts/bundle.js',
		format: 'cjs'
	}],
    plugins: [nodeResolve()]
};