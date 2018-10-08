import webpack from "webpack"
import BaseConfig from "./webpack.config.base"

const StorybookConfig = (base: webpack.Configuration): webpack.Configuration => {
	base.module.rules.push(...BaseConfig.module.rules)
	base.resolve.extensions.push(...BaseConfig.resolve.extensions)

	return base
}

export default StorybookConfig