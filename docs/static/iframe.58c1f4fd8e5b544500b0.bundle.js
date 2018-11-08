(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iframe"],{

/***/ "./config/storybook/config.js":
/*!************************************!*\
  !*** ./config/storybook/config.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-options */ "./node_modules/@storybook/addon-options/preview.js");
/* harmony import */ var _storybook_addon_options__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @storybook/addon-viewport */ "./node_modules/@storybook/addon-viewport/preview.js");
/* harmony import */ var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__);
Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__["setOptions"])({hierarchySeparator:/\/|\./,hierarchyRootSeparator:/\|/}),Object(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__["configureViewport"])({viewports:_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({},_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__["INITIAL_VIEWPORTS"])});function requireAll(requireContext){return requireContext.keys().map(requireContext)}function loadStories(){requireAll(__webpack_require__("./stories sync recursive \\.tsx?$"))}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Canvas/Canvas.wrapper.tsx":
/*!**************************************************!*\
  !*** ./src/components/Canvas/Canvas.wrapper.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_draggable_1 = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/dist/react-draggable.js");
var CanvasInner_default_1 = __webpack_require__(/*! ./CanvasInner.default */ "./src/components/Canvas/CanvasInner.default.tsx");
var CanvasOuter_default_1 = __webpack_require__(/*! ./CanvasOuter.default */ "./src/components/Canvas/CanvasOuter.default.tsx");
var __1 = __webpack_require__(/*! ../../ */ "./src/index.ts");
var CanvasWrapper = /** @class */ (function (_super) {
    __extends(CanvasWrapper, _super);
    function CanvasWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanvasWrapper.prototype.render = function () {
        var _a = this.props, _b = _a.ComponentInner, ComponentInner = _b === void 0 ? CanvasInner_default_1.CanvasInnerDefault : _b, _c = _a.ComponentOuter, ComponentOuter = _c === void 0 ? CanvasOuter_default_1.CanvasOuterDefault : _c, position = _a.position, onDragCanvas = _a.onDragCanvas, children = _a.children, onCanvasClick = _a.onCanvasClick, onDeleteKey = _a.onDeleteKey, onCanvasDrop = _a.onCanvasDrop;
        return (React.createElement(ComponentOuter, null,
            React.createElement(react_draggable_1.default, { axis: "both", position: position, grid: [1, 1], onDrag: function (e, dragData) { return onDragCanvas(e, dragData); } },
                React.createElement(ComponentInner, { children: children, onClick: onCanvasClick, tabIndex: 0, onKeyDown: function (e) {
                        if (e.keyCode === 46) {
                            onDeleteKey();
                        }
                    }, onDrop: function (e) {
                        var data = JSON.parse(e.dataTransfer.getData(__1.REACT_FLOW_CHART));
                        onCanvasDrop({ data: data, position: {
                                x: 300,
                                y: 300
                            } });
                        // const data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'))
                        // const node = new CustomNodeModel(data.nodeType)
                        // const points = diagramEngine.getRelativeMousePoint(event)
                        // node.x = points.x
                        // node.y = points.y
                        // addNode(node)
                    }, onDragOver: function (e) {
                        e.preventDefault();
                    } }))));
    };
    return CanvasWrapper;
}(React.Component));
exports.CanvasWrapper = CanvasWrapper;


/***/ }),

/***/ "./src/components/Canvas/CanvasInner.default.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Canvas/CanvasInner.default.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.CanvasInnerDefault = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  outline: 1px dashed rgba(0,0,0,0.1);\n  width: 10000px;\n  height: 10000px;\n  cursor: move;\n"], ["\n  position: relative;\n  outline: 1px dashed rgba(0,0,0,0.1);\n  width: 10000px;\n  height: 10000px;\n  cursor: move;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/components/Canvas/CanvasOuter.default.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Canvas/CanvasOuter.default.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.CanvasOuterDefault = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background-size: 20px 20px;\n  background-color: rgba(0,0,0,0.08);\n  background-image: linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0);\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: not-allowed;\n"], ["\n  position: relative;\n  background-size: 20px 20px;\n  background-color: rgba(0,0,0,0.08);\n  background-image: linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0);\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: not-allowed;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/components/Canvas/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Canvas/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./CanvasInner.default */ "./src/components/Canvas/CanvasInner.default.tsx"));
__export(__webpack_require__(/*! ./CanvasOuter.default */ "./src/components/Canvas/CanvasOuter.default.tsx"));
__export(__webpack_require__(/*! ./Canvas.wrapper */ "./src/components/Canvas/Canvas.wrapper.tsx"));


/***/ }),

/***/ "./src/components/FlowChart/FlowChart.tsx":
/*!************************************************!*\
  !*** ./src/components/FlowChart/FlowChart.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __1 = __webpack_require__(/*! ../../ */ "./src/index.ts");
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
exports.FlowChart = function (props) {
    var chart = props.chart, _a = props.callbacks, onDragNode = _a.onDragNode, onDragCanvas = _a.onDragCanvas, onCanvasDrop = _a.onCanvasDrop, onLinkStart = _a.onLinkStart, onLinkMove = _a.onLinkMove, onLinkComplete = _a.onLinkComplete, onLinkCancel = _a.onLinkCancel, onPortPositionChange = _a.onPortPositionChange, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, onCanvasClick = _a.onCanvasClick, onDeleteKey = _a.onDeleteKey, onNodeClick = _a.onNodeClick, _b = props.Components, _c = _b === void 0 ? {} : _b, _d = _c.NodeInner, NodeInner = _d === void 0 ? __1.NodeInnerDefault : _d, _e = _c.Ports, Ports = _e === void 0 ? __1.PortsDefault : _e, _f = _c.Port, Port = _f === void 0 ? __1.PortDefault : _f, _g = _c.Node, Node = _g === void 0 ? __1.NodeDefault : _g, _h = _c.Link, Link = _h === void 0 ? __1.LinkDefault : _h;
    var links = chart.links, nodes = chart.nodes, selected = chart.selected;
    var canvasCallbacks = { onDragCanvas: onDragCanvas, onCanvasClick: onCanvasClick, onDeleteKey: onDeleteKey, onCanvasDrop: onCanvasDrop };
    var linkCallbacks = { onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave, onLinkClick: onLinkClick };
    var nodeCallbacks = { onDragNode: onDragNode, onNodeClick: onNodeClick };
    var portCallbacks = { onPortPositionChange: onPortPositionChange, onLinkStart: onLinkStart, onLinkMove: onLinkMove, onLinkComplete: onLinkComplete, onLinkCancel: onLinkCancel };
    return (React.createElement(__1.CanvasWrapper, __assign({ position: chart.offset }, canvasCallbacks),
        lodash_1.map(links, function (link) { return (React.createElement(__1.LinkWrapper, __assign({ chart: chart, key: link.id, link: link, Component: Link }, linkCallbacks))); }),
        lodash_1.map(nodes, function (node) { return (React.createElement(__1.NodeWrapper, __assign({ key: node.id, node: node, selected: selected, Component: Node }, nodeCallbacks),
            React.createElement(NodeInner, { node: node }),
            React.createElement(Ports, null, lodash_1.map(node.ports, function (port) { return (React.createElement(__1.PortWrapper, __assign({ key: port.id, chart: chart, node: node, port: port, Component: Port }, portCallbacks))); })))); })));
};


/***/ }),

/***/ "./src/components/FlowChart/index.ts":
/*!*******************************************!*\
  !*** ./src/components/FlowChart/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./FlowChart */ "./src/components/FlowChart/FlowChart.tsx"));


/***/ }),

/***/ "./src/components/Link/Link.default.tsx":
/*!**********************************************!*\
  !*** ./src/components/Link/Link.default.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.LinkDefault = function (_a) {
    var link = _a.link, startPos = _a.startPos, endPos = _a.endPos, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, isHovered = _a.isHovered, isSelected = _a.isSelected;
    var points = startPos.x + "," + startPos.y + " " + endPos.x + "," + endPos.y;
    return (React.createElement("svg", { style: { overflow: 'visible', position: 'absolute', cursor: 'pointer' } },
        React.createElement("circle", { r: "4", cx: startPos.x, cy: startPos.y, fill: "cornflowerblue" }),
        React.createElement("polyline", { points: points, stroke: "cornflowerblue", strokeWidth: "3", fill: "none" }),
        React.createElement("polyline", { points: points, stroke: "cornflowerblue", strokeWidth: "20", fill: "none", strokeLinecap: "round", strokeOpacity: (isHovered || isSelected) ? 0.1 : 0, onMouseEnter: function () { return onLinkMouseEnter({ linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ linkId: link.id }); }, onClick: function (e) {
                onLinkClick({ linkId: link.id });
                e.stopPropagation();
            } }),
        React.createElement("circle", { r: "4", cx: endPos.x, cy: endPos.y, fill: "cornflowerblue" })));
};


/***/ }),

/***/ "./src/components/Link/Link.wrapper.tsx":
/*!**********************************************!*\
  !*** ./src/components/Link/Link.wrapper.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/components/Link/utils/index.ts");
var Link_default_1 = __webpack_require__(/*! ./Link.default */ "./src/components/Link/Link.default.tsx");
exports.LinkWrapper = function (_a) {
    var _b = _a.Component, Component = _b === void 0 ? Link_default_1.LinkDefault : _b, link = _a.link, chart = _a.chart, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick;
    var startPos = utils_1.getLinkPosition(chart, link.from.nodeId, link.from.portId);
    var endPos = link.to.nodeId && link.to.portId
        ? utils_1.getLinkPosition(chart, link.to.nodeId, link.to.portId)
        : link.to.position;
    // Don't render the link yet if there is no end pos
    // This will occur if the link was just created
    if (!endPos) {
        return null;
    }
    return (React.createElement(Component, { link: link, startPos: startPos, endPos: endPos, onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave, onLinkClick: onLinkClick, isSelected: chart.selected.type === 'link' && chart.selected.id === link.id, isHovered: chart.hovered.type === 'link' && chart.hovered.id === link.id }));
};


/***/ }),

/***/ "./src/components/Link/index.ts":
/*!**************************************!*\
  !*** ./src/components/Link/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Link.default */ "./src/components/Link/Link.default.tsx"));
__export(__webpack_require__(/*! ./Link.wrapper */ "./src/components/Link/Link.wrapper.tsx"));
__export(__webpack_require__(/*! ./utils */ "./src/components/Link/utils/index.ts"));


/***/ }),

/***/ "./src/components/Link/utils/getLinkPosition.ts":
/*!******************************************************!*\
  !*** ./src/components/Link/utils/getLinkPosition.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinkPosition = function (chart, nodeId, portId) {
    var node = chart.nodes[nodeId];
    var port = node.ports[portId];
    return {
        x: node.position.x + (port.position ? port.position.x : 0),
        y: node.position.y + (port.position ? port.position.y : 0),
    };
};


/***/ }),

/***/ "./src/components/Link/utils/index.ts":
/*!********************************************!*\
  !*** ./src/components/Link/utils/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./getLinkPosition */ "./src/components/Link/utils/getLinkPosition.ts"));


/***/ }),

/***/ "./src/components/Node/Node.default.tsx":
/*!**********************************************!*\
  !*** ./src/components/Node/Node.default.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.NodeDefault = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  transition: 0.3s ease box-shadow, 0.3s ease margin-top;\n  ", "\n"], ["\n  position: absolute;\n  transition: 0.3s ease box-shadow, 0.3s ease margin-top;\n  ",
    "\n"])), function (props) { return props.isSelected && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "], ["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "]))); });
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/Node/Node.wrapper.tsx":
/*!**********************************************!*\
  !*** ./src/components/Node/Node.wrapper.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_draggable_1 = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/dist/react-draggable.js");
var Node_default_1 = __webpack_require__(/*! ./Node.default */ "./src/components/Node/Node.default.tsx");
exports.NodeWrapper = function (_a) {
    var node = _a.node, onDragNode = _a.onDragNode, children = _a.children, onNodeClick = _a.onNodeClick, selected = _a.selected, _b = _a.Component, Component = _b === void 0 ? Node_default_1.NodeDefault : _b;
    return (React.createElement(react_draggable_1.default, { bounds: "parent", axis: "both", position: node.position, grid: [1, 1], onStart: function (e) {
            // Stop propagation so the canvas does not move
            e.stopPropagation();
        }, onDrag: function (e, dragData) { return onDragNode(e, dragData, node.id); } },
        React.createElement(Component, { children: children, onClick: function (e) {
                onNodeClick({ nodeId: node.id });
                e.stopPropagation();
            }, isSelected: selected.type === 'node' && selected.id === node.id, node: node })));
};


/***/ }),

/***/ "./src/components/Node/index.ts":
/*!**************************************!*\
  !*** ./src/components/Node/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Node.default */ "./src/components/Node/Node.default.tsx"));
__export(__webpack_require__(/*! ./Node.wrapper */ "./src/components/Node/Node.wrapper.tsx"));
__export(__webpack_require__(/*! ./Node.default */ "./src/components/Node/Node.default.tsx"));


/***/ }),

/***/ "./src/components/NodeInner/NodeInner.default.tsx":
/*!********************************************************!*\
  !*** ./src/components/NodeInner/NodeInner.default.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: white;\n  border-radius: 4px;\n  width: 300px;\n  padding: 40px 30px;\n"], ["\n  background: white;\n  border-radius: 4px;\n  width: 300px;\n  padding: 40px 30px;\n"])));
exports.NodeInnerDefault = function (_a) {
    var node = _a.node;
    return (React.createElement(Outer, null,
        React.createElement("div", null,
            "Type: ",
            node.type)));
};
var templateObject_1;


/***/ }),

/***/ "./src/components/NodeInner/index.ts":
/*!*******************************************!*\
  !*** ./src/components/NodeInner/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./NodeInner.default */ "./src/components/NodeInner/NodeInner.default.tsx"));


/***/ }),

/***/ "./src/components/Port/Port.default.tsx":
/*!**********************************************!*\
  !*** ./src/components/Port/Port.default.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var PortDefaultOuter = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover > div {\n    background: cornflowerblue;\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover > div {\n    background: cornflowerblue;\n  }\n"])));
var PortDefaultInner = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background:  ", ";\n  cursor: pointer;\n"], ["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background:  ", ";\n  cursor: pointer;\n"])), function (props) { return props.active ? 'cornflowerblue' : 'grey'; });
exports.PortDefault = function (_a) {
    var isLinkSelected = _a.isLinkSelected, isLinkHovered = _a.isLinkHovered;
    return (React.createElement(PortDefaultOuter, null,
        React.createElement(PortDefaultInner, { active: isLinkSelected || isLinkHovered })));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/Port/Port.wrapper.tsx":
/*!**********************************************!*\
  !*** ./src/components/Port/Port.wrapper.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
var Port_default_1 = __webpack_require__(/*! ./Port.default */ "./src/components/Port/Port.default.tsx");
var PortWrapper = /** @class */ (function (_super) {
    __extends(PortWrapper, _super);
    function PortWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getNodRef = function (el) {
            if (el) {
                var _a = _this.props, node = _a.node, port = _a.port, onPortPositionChange = _a.onPortPositionChange;
                _this.nodeRef = el;
                var nodesEl = (el.parentElement && el.parentElement.offsetLeft !== undefined && el.parentElement.offsetTop !== undefined)
                    ? el.parentElement
                    : { offsetLeft: 0, offsetTop: 0 };
                var position = {
                    x: el.offsetLeft + nodesEl.offsetLeft + el.offsetWidth / 2,
                    y: el.offsetTop + nodesEl.offsetTop + el.offsetHeight / 2,
                };
                onPortPositionChange(node, port, position);
            }
        };
        _this.onMouseDown = function (startEvent) {
            var _a = _this.props, node = _a.node, port = _a.port, onLinkStart = _a.onLinkStart, onLinkCancel = _a.onLinkCancel, onLinkComplete = _a.onLinkComplete, onLinkMove = _a.onLinkMove;
            var linkId = uuid_1.v4();
            var fromNodeId = node.id;
            var fromPortId = port.id;
            // Create the move handler
            // This will update the position as the mouse moves
            var mouseMoveHandler = function (e) {
                onLinkMove({
                    linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId,
                    toPosition: {
                        x: e.clientX,
                        y: e.clientY,
                    }
                });
            };
            // Create and bind the mouse up handler
            // This is used to check if the link is complete or cancelled
            var mouseUpHandler = function (e) {
                // We traverse up the event path until we find an element with 'data-port-id' and data-node-id'
                // e.toElement cannot be used because it may be a child element of the port
                var portEl = e.path.find(function (el) {
                    var toPortId = el.getAttribute && el.getAttribute('data-port-id');
                    var toNodeId = el.getAttribute && el.getAttribute('data-node-id');
                    return !!(toPortId && toNodeId);
                });
                // If both node-id and port-id are defined as data attributes, we are mouse-upping
                // on another port. Run the success handler
                if (portEl) {
                    var toPortId = portEl.getAttribute('data-port-id');
                    var toNodeId = portEl.getAttribute('data-node-id');
                    onLinkComplete({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId, toNodeId: toNodeId, toPortId: toPortId });
                }
                else {
                    onLinkCancel({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId });
                }
                // Remove the listeners if the link is complete or canceled
                window.removeEventListener('mouseup', mouseUpHandler, false);
                window.removeEventListener('mousemove', mouseMoveHandler, false);
            };
            // Add listeners
            window.addEventListener('mouseup', mouseUpHandler, false);
            window.addEventListener('mousemove', mouseMoveHandler, false);
            // Notify state of link start
            onLinkStart({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId });
            // Prevent default and stop propagation to prevent text selection
            startEvent.preventDefault();
            startEvent.stopPropagation();
        };
        return _this;
    }
    PortWrapper.prototype.render = function () {
        var _a = this.props, chart = _a.chart, style = _a.style, port = _a.port, node = _a.node, _b = _a.Component, Component = _b === void 0 ? Port_default_1.PortDefault : _b;
        var selectedLink = chart.selected.type === 'link' && chart.selected.id && chart.links[chart.selected.id];
        var hoveredLink = chart.selected.type === 'link' && chart.selected.id && chart.links[chart.selected.id];
        return (React.createElement("div", { "data-port-id": port.id, "data-node-id": node.id, onMouseDown: this.onMouseDown, ref: this.getNodRef, style: style },
            React.createElement(Component, { port: port, isSelected: chart.selected.type === 'port' && chart.selected.id === port.id, isHovered: chart.hovered.type === 'port' && chart.hovered.id === port.id, isLinkSelected: selectedLink
                    ? ((selectedLink.from.portId === port.id && selectedLink.from.nodeId === node.id) ||
                        (selectedLink.to.portId === port.id && selectedLink.to.nodeId === node.id))
                    : false, isLinkHovered: hoveredLink
                    ? ((hoveredLink.from.portId === port.id && hoveredLink.from.nodeId === node.id) ||
                        (hoveredLink.to.portId === port.id && hoveredLink.to.nodeId === node.id))
                    : false })));
    };
    return PortWrapper;
}(React.Component));
exports.PortWrapper = PortWrapper;


/***/ }),

/***/ "./src/components/Port/index.ts":
/*!**************************************!*\
  !*** ./src/components/Port/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Port.default */ "./src/components/Port/Port.default.tsx"));
__export(__webpack_require__(/*! ./Port.wrapper */ "./src/components/Port/Port.wrapper.tsx"));


/***/ }),

/***/ "./src/components/Ports/Ports.default.tsx":
/*!************************************************!*\
  !*** ./src/components/Ports/Ports.default.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var __1 = __webpack_require__(/*! ../../ */ "./src/index.ts");
exports.PortsDefault = function (_a) {
    var children = _a.children;
    return (React.createElement("div", null,
        React.createElement(__1.PortsGroupDefault, { side: "top" }, lodash_1.filter(children, ['props.port.type', 'input'])),
        React.createElement(__1.PortsGroupDefault, { side: "bottom" }, lodash_1.filter(children, ['props.port.type', 'output']))));
};


/***/ }),

/***/ "./src/components/Ports/index.ts":
/*!***************************************!*\
  !*** ./src/components/Ports/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Ports.default */ "./src/components/Ports/Ports.default.tsx"));


/***/ }),

/***/ "./src/components/PortsGroup/PortsGroup.default.tsx":
/*!**********************************************************!*\
  !*** ./src/components/PortsGroup/PortsGroup.default.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.PortsGroupDefault = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n\n  ", "\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n\n  ",
    "\n"])), function (props) {
    if (props.side === 'top') {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: 100%;\n        left: 0;\n        top: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px;\n        }\n      "], ["\n        width: 100%;\n        left: 0;\n        top: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px;\n        }\n      "])));
    }
    else if (props.side === 'bottom') {
        return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: 100%;\n        left: 0;\n        bottom: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px;\n        }\n      "], ["\n        width: 100%;\n        left: 0;\n        bottom: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px;\n        }\n      "])));
    }
    else if (props.side === 'left') {
        return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        height: 100%;\n        top: 0;\n        left: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0;\n        }\n      "], ["\n        height: 100%;\n        top: 0;\n        left: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0;\n        }\n      "])));
    }
    else {
        return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        height: 100%;\n        top: 0;\n        right: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0;\n        }\n      "], ["\n        height: 100%;\n        top: 0;\n        right: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0;\n        }\n      "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/PortsGroup/index.ts":
/*!********************************************!*\
  !*** ./src/components/PortsGroup/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./PortsGroup.default */ "./src/components/PortsGroup/PortsGroup.default.tsx"));


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Canvas */ "./src/components/Canvas/index.tsx"));
__export(__webpack_require__(/*! ./Node */ "./src/components/Node/index.ts"));
__export(__webpack_require__(/*! ./NodeInner */ "./src/components/NodeInner/index.ts"));
__export(__webpack_require__(/*! ./Port */ "./src/components/Port/index.ts"));
__export(__webpack_require__(/*! ./Ports */ "./src/components/Ports/index.ts"));
__export(__webpack_require__(/*! ./PortsGroup */ "./src/components/PortsGroup/index.ts"));
__export(__webpack_require__(/*! ./Link */ "./src/components/Link/index.ts"));
__export(__webpack_require__(/*! ./FlowChart */ "./src/components/FlowChart/index.ts"));


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.REACT_FLOW_CHART = 'react-flow-chart';


/***/ }),

/***/ "./src/container/FlowChartWithState.tsx":
/*!**********************************************!*\
  !*** ./src/container/FlowChartWithState.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __1 = __webpack_require__(/*! ../ */ "./src/index.ts");
var actions = __webpack_require__(/*! ./actions */ "./src/container/actions.ts");
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * Flow Chart With State
 */
var FlowChartWithState = /** @class */ (function (_super) {
    __extends(FlowChartWithState, _super);
    function FlowChartWithState(props) {
        var _this = _super.call(this, props) || this;
        _this.state = props.initialValue;
        return _this;
    }
    FlowChartWithState.prototype.render = function () {
        var _this = this;
        var stateActions = lodash_1.mapValues(actions, function (func) { return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.setState(func.apply(void 0, args));
        }; });
        return (React.createElement(__1.FlowChart, { chart: this.state, callbacks: stateActions }));
    };
    return FlowChartWithState;
}(React.Component));
exports.FlowChartWithState = FlowChartWithState;


/***/ }),

/***/ "./src/container/actions.ts":
/*!**********************************!*\
  !*** ./src/container/actions.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/**
 * This file contains actions for updating state after each of the required callbacks
 */
exports.onDragNode = function (event, data, id) { return function (chart) {
    var nodechart = chart.nodes[id];
    if (nodechart) {
        nodechart.position = {
            x: data.x,
            y: data.y
        };
    }
    return chart;
}; };
exports.onDragCanvas = function (event, data) { return function (chart) {
    chart.offset.x = data.x;
    chart.offset.y = data.y;
    return chart;
}; };
exports.onLinkStart = function (_a) {
    var linkId = _a.linkId, fromNodeId = _a.fromNodeId, fromPortId = _a.fromPortId;
    return function (chart) {
        chart.links[linkId] = {
            id: linkId,
            from: {
                nodeId: fromNodeId,
                portId: fromPortId
            },
            to: {}
        };
        return chart;
    };
};
exports.onLinkMove = function (_a) {
    var linkId = _a.linkId, toPosition = _a.toPosition;
    return function (chart) {
        chart.links[linkId].to.position = toPosition;
        return chart;
    };
};
exports.onLinkComplete = function (_a) {
    var linkId = _a.linkId, fromNodeId = _a.fromNodeId, toNodeId = _a.toNodeId, toPortId = _a.toPortId;
    return function (chart) {
        if (fromNodeId !== toPortId) {
            chart.links[linkId].to = {
                nodeId: toNodeId,
                portId: toPortId
            };
        }
        return chart;
    };
};
exports.onLinkCancel = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        delete chart.links[linkId];
        return chart;
    };
};
exports.onLinkMouseEnter = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        // Set the link to hover
        var link = chart.links[linkId];
        // Set the connected ports to hover
        if (link.to.nodeId && link.to.portId) {
            chart.hovered = {
                type: 'link',
                id: linkId
            };
        }
        return chart;
    };
};
exports.onLinkMouseLeave = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        var link = chart.links[linkId];
        // Set the connected ports to hover
        if (link.to.nodeId && link.to.portId) {
            chart.hovered = {};
        }
        return chart;
    };
};
exports.onLinkClick = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        chart.selected = {
            type: 'link',
            id: linkId
        };
        return chart;
    };
};
exports.onCanvasClick = function () { return function (chart) {
    chart.selected = {};
    return chart;
}; };
exports.onDeleteKey = function () { return function (chart) {
    if (chart.selected.type === 'node' && chart.selected.id) {
        var node_1 = chart.nodes[chart.selected.id];
        // Delete the connected links
        lodash_1.forEach(chart.links, function (link) {
            if (link.from.nodeId === node_1.id || link.to.nodeId === node_1.id) {
                delete chart.links[link.id];
            }
        });
        // Delete the node
        delete chart.nodes[chart.selected.id];
    }
    else if (chart.selected.type === 'link' && chart.selected.id) {
        delete chart.links[chart.selected.id];
    }
    return chart;
}; };
exports.onNodeClick = function (_a) {
    var nodeId = _a.nodeId;
    return function (chart) {
        chart.selected = {
            type: 'node',
            id: nodeId
        };
        return chart;
    };
};
exports.onPortPositionChange = function (nodeToUpdate, port, position) { return function (chart) {
    chart.nodes[nodeToUpdate.id].ports[port.id].position = {
        x: position.x,
        y: position.y
    };
    return chart;
}; };
exports.onCanvasDrop = function (_a) {
    var data = _a.data, position = _a.position;
    return function (chart) {
        var id = uuid_1.v4();
        chart.nodes[id] = {
            id: id,
            type: data.type,
            position: position,
            ports: {}
        };
        return chart;
    };
};


/***/ }),

/***/ "./src/container/index.ts":
/*!********************************!*\
  !*** ./src/container/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./FlowChartWithState */ "./src/container/FlowChartWithState.tsx"));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components */ "./src/components/index.ts"));
__export(__webpack_require__(/*! ./container */ "./src/container/index.ts"));
__export(__webpack_require__(/*! ./constants */ "./src/constants.ts"));


/***/ }),

/***/ "./stories sync recursive \\.tsx?$":
/*!******************************!*\
  !*** ./stories sync \.tsx?$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./WithSidebar.tsx": "./stories/WithSidebar.tsx",
	"./WithState.story.tsx": "./stories/WithState.story.tsx",
	"./components/Content.tsx": "./stories/components/Content.tsx",
	"./components/Page.tsx": "./stories/components/Page.tsx",
	"./components/Sidebar.tsx": "./stories/components/Sidebar.tsx",
	"./components/SidebarItem.tsx": "./stories/components/SidebarItem.tsx",
	"./components/index.ts": "./stories/components/index.ts",
	"./exampleChartState.ts": "./stories/exampleChartState.ts",
	"./index.tsx": "./stories/index.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./stories sync recursive \\.tsx?$";

/***/ }),

/***/ "./stories/WithSidebar.tsx":
/*!*********************************!*\
  !*** ./stories/WithSidebar.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var react_1 = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
var exampleChartState_1 = __webpack_require__(/*! ./exampleChartState */ "./stories/exampleChartState.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
react_1.storiesOf("With Sidebar", module)
    .add("default", function () {
    return (React.createElement(components_1.Page, null,
        React.createElement(components_1.Content, null,
            React.createElement(src_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple })),
        React.createElement(components_1.Sidebar, null,
            React.createElement(components_1.SidebarItem, { type: "example-1" }),
            React.createElement(components_1.SidebarItem, { type: "example-2" }))));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./stories/WithState.story.tsx":
/*!*************************************!*\
  !*** ./stories/WithState.story.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var react_1 = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
var exampleChartState_1 = __webpack_require__(/*! ./exampleChartState */ "./stories/exampleChartState.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
react_1.storiesOf("With State", module)
    .add("default", function () {
    return (React.createElement(components_1.Page, null,
        React.createElement(src_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple })));
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./stories/components/Content.tsx":
/*!****************************************!*\
  !*** ./stories/components/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.Content = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"])));
var templateObject_1;


/***/ }),

/***/ "./stories/components/Page.tsx":
/*!*************************************!*\
  !*** ./stories/components/Page.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"], ["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"])));
var PageContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 100vh;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 100vh;\n"])));
exports.Page = function (_a) {
    var children = _a.children;
    return (React.createElement(PageContent, null,
        children,
        React.createElement(GlobalStyle, null)));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./stories/components/Sidebar.tsx":
/*!****************************************!*\
  !*** ./stories/components/Sidebar.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.Sidebar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"], ["\n  width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"])));
var templateObject_1;


/***/ }),

/***/ "./stories/components/SidebarItem.tsx":
/*!********************************************!*\
  !*** ./stories/components/SidebarItem.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var src_1 = __webpack_require__(/*! ../../src */ "./src/index.ts");
var Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n"], ["\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n"])));
exports.SidebarItem = function (_a) {
    var type = _a.type;
    return (React.createElement(Outer, { draggable: true, onDragStart: function (event) {
            event.dataTransfer.setData(src_1.REACT_FLOW_CHART, JSON.stringify({ type: type }));
        } }, type));
};
var templateObject_1;


/***/ }),

/***/ "./stories/components/index.ts":
/*!*************************************!*\
  !*** ./stories/components/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Content */ "./stories/components/Content.tsx"));
__export(__webpack_require__(/*! ./Page */ "./stories/components/Page.tsx"));
__export(__webpack_require__(/*! ./Sidebar */ "./stories/components/Sidebar.tsx"));
__export(__webpack_require__(/*! ./SidebarItem */ "./stories/components/SidebarItem.tsx"));


/***/ }),

/***/ "./stories/exampleChartState.ts":
/*!**************************************!*\
  !*** ./stories/exampleChartState.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.chartSimple = {
    offset: {
        x: 0,
        y: 0
    },
    nodes: {
        'node1': {
            id: 'node1',
            type: 'output-only',
            position: {
                x: 200,
                y: 100
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'output'
                },
                port2: {
                    id: 'port2',
                    type: 'output'
                }
            }
        },
        'node2': {
            id: 'node2',
            type: 'input-output',
            position: {
                x: 200,
                y: 300
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'input'
                },
                port2: {
                    id: 'port2',
                    type: 'output'
                }
            }
        }
    },
    links: {
        link1: {
            id: 'link1',
            from: {
                nodeId: 'node1',
                portId: 'port2',
            },
            to: {
                nodeId: 'node2',
                portId: 'port1',
            }
        },
    },
    selected: {},
    hovered: {},
};


/***/ }),

/***/ "./stories/index.tsx":
/*!***************************!*\
  !*** ./stories/index.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@storybook/core/dist/server/config/polyfills.js ./node_modules/@storybook/core/dist/server/config/globals.js ./config/storybook/config.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/c/Users/david/Documents/Repositories/github/react-draggable-flow-chart/node_modules/@storybook/core/dist/server/config/polyfills.js */"./node_modules/@storybook/core/dist/server/config/polyfills.js");
__webpack_require__(/*! /mnt/c/Users/david/Documents/Repositories/github/react-draggable-flow-chart/node_modules/@storybook/core/dist/server/config/globals.js */"./node_modules/@storybook/core/dist/server/config/globals.js");
module.exports = __webpack_require__(/*! /mnt/c/Users/david/Documents/Repositories/github/react-draggable-flow-chart/config/storybook/config.js */"./config/storybook/config.js");


/***/ })

},[[0,"runtime~iframe","vendors~iframe"]]]);
//# sourceMappingURL=iframe.58c1f4fd8e5b544500b0.bundle.js.map