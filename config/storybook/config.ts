import { configure, addDecorator } from '@storybook/react'
// import { resolve } from "path"

// addDecorator(
// 	withOption
// )

function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
	return requireContext.keys().map(requireContext);
}

function loadStories() {
	requireAll(require.context("../../stories", true, /\.tsx?$/));
}

configure(loadStories, module);