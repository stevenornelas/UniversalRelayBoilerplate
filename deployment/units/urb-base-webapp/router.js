Object.defineProperty(exports,"__esModule",{value:true});exports.render=exports.routeConfig=exports.historyMiddlewares=undefined;exports.

















createResolver=createResolver;var _queryMiddleware=require('farce/lib/queryMiddleware');var _queryMiddleware2=_interopRequireDefault(_queryMiddleware);var _createRender=require('found/lib/createRender');var _createRender2=_interopRequireDefault(_createRender);var _makeRouteConfig=require('found/lib/makeRouteConfig');var _makeRouteConfig2=_interopRequireDefault(_makeRouteConfig);var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);var _foundRelay=require('found-relay');var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRelay=require('react-relay');var _relayRuntime=require('relay-runtime');var _routesAppFrame=require('../_configuration/urb-base-webapp/routesAppFrame');var _routesAppFrame2=_interopRequireDefault(_routesAppFrame);var _AppFrame=require('./components/AppFrame');var _AppFrame2=_interopRequireDefault(_AppFrame);var _LogoutScreen=require('./components/LogoutScreen');var _LogoutScreen2=_interopRequireDefault(_LogoutScreen);var _NewUserScreen=require('./components/NewUserScreen');var _NewUserScreen2=_interopRequireDefault(_NewUserScreen);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var historyMiddlewares=exports.historyMiddlewares=[_queryMiddleware2.default];function createResolver(fetcher){
var environment=new _relayRuntime.Environment({
network:_relayRuntime.Network.create(function(){return fetcher.fetch.apply(fetcher,arguments);}),
store:new _relayRuntime.Store(new _relayRuntime.RecordSource())});


return new _foundRelay.Resolver(environment);
}

var routeConfig=exports.routeConfig=(0,_makeRouteConfig2.default)(
_react2.default.createElement(_Route2.default,{
path:'/',
Component:_AppFrame2.default,
query:function query(){return require('./__generated__/router_AppFrame_Query.graphql');}},_routesAppFrame2.default,









_react2.default.createElement(_Route2.default,{path:'user'},
_react2.default.createElement(_Route2.default,{path:'new',Component:_NewUserScreen2.default}),
_react2.default.createElement(_Route2.default,{path:'logout',Component:_LogoutScreen2.default}))));




var render=exports.render=(0,_createRender2.default)({});
//# sourceMappingURL=router.js.map