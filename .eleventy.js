// module.exports = {
// 		dir: {
// 			input: "src",
// 			includes: "templates",
// 			output: "dist"
// 		}
// }

module.exports = function(config) {
	config.addPassthroughCopy( {"src/site/_sass/style.css": "style.css"});

	return {
		dir: {
			input: "src/site",
			includes: "_templates",
			layouts: "_templates/layouts",
			output: "dist"
		}
	}
}