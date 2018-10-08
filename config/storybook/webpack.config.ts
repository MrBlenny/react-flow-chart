import webpack from "webpack"
import BaseConfig from "../webpack.config.base"
import { resolve } from "path"

const StorybookConfig = (base: { [T in keyof webpack.Configuration]-?: webpack.Configuration[T] }): webpack.Configuration => {
	base.context = resolve(__dirname, "..", "..")
	base.mode = "development"
	base.module.rules.push(...BaseConfig.module!.rules)
	base.resolve.extensions!.push(...BaseConfig.resolve!.extensions!)
	return base
}

export default StorybookConfig