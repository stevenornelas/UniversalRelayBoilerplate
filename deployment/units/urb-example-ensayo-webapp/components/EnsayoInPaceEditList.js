Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _List=require('material-ui/List');var _List2=_interopRequireDefault(_List);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _EnsayoInPlaceItem=require('./EnsayoInPlaceItem');var _EnsayoInPlaceItem2=_interopRequireDefault(_EnsayoInPlaceItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

EnsayoInPaceEditList=function(_React$Component){_inherits(EnsayoInPaceEditList,_React$Component);function EnsayoInPaceEditList(){_classCallCheck(this,EnsayoInPaceEditList);return _possibleConstructorReturn(this,(EnsayoInPaceEditList.__proto__||Object.getPrototypeOf(EnsayoInPaceEditList)).apply(this,arguments));}_createClass(EnsayoInPaceEditList,[{key:'render',value:function render()





{var
Viewer=this.props.Viewer;var
Ensayos=Viewer.Ensayos;

return(
_react2.default.createElement('div',null,
_react2.default.createElement(_List2.default,null,
Ensayos.edges.map(function(_ref){var node=_ref.node;return(
_react2.default.createElement(_EnsayoInPlaceItem2.default,{key:node.id,Viewer:Viewer,Ensayo:node}));}))));




}}]);return EnsayoInPaceEditList;}(_react2.default.Component);EnsayoInPaceEditList.propTypes={Viewer:_propTypes2.default.object.isRequired,relay:_propTypes2.default.object.isRequired};exports.default=


(0,_reactRelay.createFragmentContainer)(
EnsayoInPaceEditList,{Viewer:function Viewer(){return require('./__generated__/EnsayoInPaceEditList_Viewer.graphql');}});
//# sourceMappingURL=EnsayoInPaceEditList.js.map