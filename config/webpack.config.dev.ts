import webpack from "webpack"
import BaseConfig from "./webpack.config.base"

const DevelopmentConfig: webpack.Configuration = {
	...BaseConfig,

}

export default DevelopmentConfig