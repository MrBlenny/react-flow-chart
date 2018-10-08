import webpack from "webpack"
// import BaseConfig from "../webpack.config.base"
import { resolve } from "path"

const StorybookConfig = (base: { [T in keyof webpack.Configuration]-?: webpack.Configuration[T] }): webpack.Configuration => {
	base.context = resolve(__dirname, "..", "..")
	base.mode = "development"
	// base.module.rules.push(...BaseConfig.module.rules)
	base.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('ts-loader')
	})
	base.resolve.extensions!.push(...[".ts", ".tsx"])

	return base
}

export default StorybookConfig