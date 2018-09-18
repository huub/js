path = require('path')
module.exports = {
	mode: 'development',
	context: __dirname ,

    output: {
		path: __dirname ,
        filename:  "./dist/bundle.js",
        library: 'AppLib'
   },
   devServer: {
	    contentBase: path.join(__dirname),
	    compress: true,
	    port: 9000
   },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module: {
		rules: [
			{
				test:  /ts$/,
					loaders: ["awesome-typescript-loader", "source-map-loader"]
			}
		]
    },
     resolve: {
	    modules: [
	      "node_modules",
	      path.resolve(__dirname, "")
	    ],
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    }
};
