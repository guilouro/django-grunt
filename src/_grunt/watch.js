// Hint: newer:taskName - configure Grunt tasks to run with newer files only.
module.exports = {
	scripts: {
		files: [
			'<%= path.src %>scss/**/*.scss'
		],
		tasks: ['compass'],
		options: {
			nospawn: true,
			debounceDelay: 250,
			livereload: true,
		},
	}
};