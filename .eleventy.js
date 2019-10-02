// module.exports = {
// 		dir: {
// 			input: "src",
// 			includes: "templates",
// 			output: "dist"
// 		}
// }

module.exports = function(config) {
	return {
		dir: {
			input: "src",
			includes: "_templates",
			layouts: "_templates/layouts",
			output: "dist"
		}
	}
}