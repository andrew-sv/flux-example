var grunt = require('grunt');

grunt.loadNpmTasks('grunt-browserify');

grunt.initConfig({
	'browserify': {
		watch: {
			files: {
				'src/js/app_bundle.js': ['src/js/app.jsx']
			},
			options: {
				transform: [['babelify', {'presets': ['es2015', 'react']}]],
				browserifyOptions: {
					debug: true
				},
				watch: true,
				keepAlive: true
			}
		}
	}
});

grunt.registerTask('default', ['browserify:watch']);