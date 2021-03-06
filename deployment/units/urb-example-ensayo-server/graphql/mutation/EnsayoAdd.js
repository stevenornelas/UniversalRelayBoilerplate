Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _EnsayosConnection=require('../type/EnsayosConnection');var _EnsayosConnection2=_interopRequireDefault(_EnsayosConnection);
var _ViewerType=require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'EnsayoAdd',

inputFields:{
Ensayo_Title:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Ensayo_Description:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Ensayo_Content:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},


outputFields:{
EnsayosEdge:{
type:_EnsayosConnection2.default.edgeType,
resolve:function resolve(_ref,_ref2,context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var objectManager=_ref3.rootValue;var an_Object,arr;return regeneratorRuntime.async(function resolve$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
objectManager.getOneObject('Ensayo',{id:local_id}));case 2:an_Object=_context.sent;_context.next=5;return regeneratorRuntime.awrap(

objectManager.getObjectList('Ensayo',{
Ensayo_User_id:objectManager.getViewerUserId()}));case 5:arr=_context.sent;return _context.abrupt('return',


{
cursor:objectManager.cursorForObjectInConnection('Ensayo',arr,an_Object),
node:an_Object});case 7:case'end':return _context.stop();}}},null,_this);}},




Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref4){var objectManager=_ref4.rootValue;return(
objectManager.getOneObject('User',{id:objectManager.getViewerUserId()}));}}},



mutateAndGetPayload:function mutateAndGetPayload(_ref5,

context,_ref6){var Ensayo_Title=_ref5.Ensayo_Title,Ensayo_Description=_ref5.Ensayo_Description,Ensayo_Content=_ref5.Ensayo_Content;var
objectManager=_ref6.rootValue;var local_id;return regeneratorRuntime.async(function mutateAndGetPayload$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(

objectManager.add('Ensayo',{
Ensayo_User_id:objectManager.getViewerUserId(),
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content}));case 2:local_id=_context2.sent;return _context2.abrupt('return',

{local_id:local_id});case 4:case'end':return _context2.stop();}}},null,_this);}});
//# sourceMappingURL=EnsayoAdd.js.map