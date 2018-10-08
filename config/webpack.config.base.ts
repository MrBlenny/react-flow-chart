import webpack from "webpack"
import { resolve } from "path"

const BaseConfig: webpack.Configuration = {
	devtool: "inline-source-map",

	entry: [
		resolve(__dirname, "..", "src", "index.tsx")
	],

	module: {
		rules: [{
			oneOf: [{
				test: /\.(ts|tsx)$/,
				include: resolve(__dirname, "..", "src"),
				use: [{
					loader: require.resolve('ts-loader'),
					options: {
						configFile: resolve("..", "tsconfig.json")
					}
				}
					// require.resolve('babel-loader'),
				]
			}]
		}]
	},

	resolve: {
		extensions: [".ts", ".tsx"]
	}
}

export default BaseConfig