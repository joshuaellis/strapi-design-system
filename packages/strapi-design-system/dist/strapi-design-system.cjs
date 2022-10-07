"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("react"),Pe=require("styled-components"),V=require("@strapi/icons"),jn=require("react-dom"),$e=require("react-router-dom"),Pn=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function qn(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const o=Pn(m),te=qn(m),g=Pn(Pe),bi=qn(jn);var r={exports:{}},hr={exports:{}},X={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo;function hi(){if(Fo)return X;Fo=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,b=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,M=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,z=e?Symbol.for("react.scope"):60119;function O(v){if(typeof v=="object"&&v!==null){var Y=v.$$typeof;switch(Y){case t:switch(v=v.type,v){case p:case c:case a:case s:case i:case u:return v;default:switch(v=v&&v.$$typeof,v){case d:case f:case h:case x:case l:return v;default:return Y}}case n:return Y}}}function $(v){return O(v)===c}return X.AsyncMode=p,X.ConcurrentMode=c,X.ContextConsumer=d,X.ContextProvider=l,X.Element=t,X.ForwardRef=f,X.Fragment=a,X.Lazy=h,X.Memo=x,X.Portal=n,X.Profiler=s,X.StrictMode=i,X.Suspense=u,X.isAsyncMode=function(v){return $(v)||O(v)===p},X.isConcurrentMode=$,X.isContextConsumer=function(v){return O(v)===d},X.isContextProvider=function(v){return O(v)===l},X.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===t},X.isForwardRef=function(v){return O(v)===f},X.isFragment=function(v){return O(v)===a},X.isLazy=function(v){return O(v)===h},X.isMemo=function(v){return O(v)===x},X.isPortal=function(v){return O(v)===n},X.isProfiler=function(v){return O(v)===s},X.isStrictMode=function(v){return O(v)===i},X.isSuspense=function(v){return O(v)===u},X.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===a||v===c||v===s||v===i||v===u||v===b||typeof v=="object"&&v!==null&&(v.$$typeof===h||v.$$typeof===x||v.$$typeof===l||v.$$typeof===d||v.$$typeof===f||v.$$typeof===M||v.$$typeof===w||v.$$typeof===z||v.$$typeof===y)},X.typeOf=O,X}var J={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo;function xi(){return Yo||(Yo=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,b=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,M=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,z=e?Symbol.for("react.scope"):60119;function O(A){return typeof A=="string"||typeof A=="function"||A===a||A===c||A===s||A===i||A===u||A===b||typeof A=="object"&&A!==null&&(A.$$typeof===h||A.$$typeof===x||A.$$typeof===l||A.$$typeof===d||A.$$typeof===f||A.$$typeof===M||A.$$typeof===w||A.$$typeof===z||A.$$typeof===y)}function $(A){if(typeof A=="object"&&A!==null){var ze=A.$$typeof;switch(ze){case t:var ge=A.type;switch(ge){case p:case c:case a:case s:case i:case u:return ge;default:var Rt=ge&&ge.$$typeof;switch(Rt){case d:case f:case h:case x:case l:return Rt;default:return ze}}case n:return ze}}}var v=p,Y=c,N=d,I=l,q=t,K=f,U=a,Z=h,_=x,oe=n,F=s,ne=i,ce=u,ue=!1;function T(A){return ue||(ue=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(A)||$(A)===p}function R(A){return $(A)===c}function D(A){return $(A)===d}function P(A){return $(A)===l}function S(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function B(A){return $(A)===f}function j(A){return $(A)===a}function W(A){return $(A)===h}function Q(A){return $(A)===x}function H(A){return $(A)===n}function G(A){return $(A)===s}function le(A){return $(A)===i}function fe(A){return $(A)===u}J.AsyncMode=v,J.ConcurrentMode=Y,J.ContextConsumer=N,J.ContextProvider=I,J.Element=q,J.ForwardRef=K,J.Fragment=U,J.Lazy=Z,J.Memo=_,J.Portal=oe,J.Profiler=F,J.StrictMode=ne,J.Suspense=ce,J.isAsyncMode=T,J.isConcurrentMode=R,J.isContextConsumer=D,J.isContextProvider=P,J.isElement=S,J.isForwardRef=B,J.isFragment=j,J.isLazy=W,J.isMemo=Q,J.isPortal=H,J.isProfiler=G,J.isStrictMode=le,J.isSuspense=fe,J.isValidElementType=O,J.typeOf=$}()),J}var Qo;function Bn(){return Qo||(Qo=1,function(e){process.env.NODE_ENV==="production"?e.exports=hi():e.exports=xi()}(hr)),hr.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var xr,_o;function yi(){if(_o)return xr;_o=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function i(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var l={},d=0;d<10;d++)l["_"+String.fromCharCode(d)]=d;var p=Object.getOwnPropertyNames(l).map(function(f){return l[f]});if(p.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(f){c[f]=f}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return xr=i()?Object.assign:function(s,l){for(var d,p=a(s),c,f=1;f<arguments.length;f++){d=Object(arguments[f]);for(var u in d)t.call(d,u)&&(p[u]=d[u]);if(e){c=e(d);for(var b=0;b<c.length;b++)n.call(d,c[b])&&(p[c[b]]=d[c[b]])}}return p},xr}var yr,Ho;function qr(){if(Ho)return yr;Ho=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return yr=e,yr}var Er,Vo;function Ei(){if(Vo)return Er;Vo=1;var e=function(){};if(process.env.NODE_ENV!=="production"){var t=qr(),n={},a=Function.call.bind(Object.prototype.hasOwnProperty);e=function(s){var l="Warning: "+s;typeof console<"u"&&console.error(l);try{throw new Error(l)}catch{}}}function i(s,l,d,p,c){if(process.env.NODE_ENV!=="production"){for(var f in s)if(a(s,f)){var u;try{if(typeof s[f]!="function"){var b=Error((p||"React class")+": "+d+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[f]+"`.");throw b.name="Invariant Violation",b}u=s[f](l,f,p,d,null,t)}catch(h){u=h}if(u&&!(u instanceof Error)&&e((p||"React class")+": type specification of "+d+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in n)){n[u.message]=!0;var x=c?c():"";e("Failed "+d+" type: "+u.message+(x!=null?x:""))}}}}return i.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(n={})},Er=i,Er}var vr,Go;function vi(){if(Go)return vr;Go=1;var e=Bn(),t=yi(),n=qr(),a=Ei(),i=Function.call.bind(Object.prototype.hasOwnProperty),s=function(){};process.env.NODE_ENV!=="production"&&(s=function(d){var p="Warning: "+d;typeof console<"u"&&console.error(p);try{throw new Error(p)}catch{}});function l(){return null}return vr=function(d,p){var c=typeof Symbol=="function"&&Symbol.iterator,f="@@iterator";function u(T){var R=T&&(c&&T[c]||T[f]);if(typeof R=="function")return R}var b="<<anonymous>>",x={array:w("array"),bool:w("boolean"),func:w("function"),number:w("number"),object:w("object"),string:w("string"),symbol:w("symbol"),any:z(),arrayOf:O,element:$(),elementType:v(),instanceOf:Y,node:K(),objectOf:I,oneOf:N,oneOfType:q,shape:U,exact:Z};function h(T,R){return T===R?T!==0||1/T===1/R:T!==T&&R!==R}function y(T){this.message=T,this.stack=""}y.prototype=Error.prototype;function M(T){if(process.env.NODE_ENV!=="production")var R={},D=0;function P(B,j,W,Q,H,G,le){if(Q=Q||b,G=G||W,le!==n){if(p){var fe=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw fe.name="Invariant Violation",fe}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var A=Q+":"+W;!R[A]&&D<3&&(s("You are manually calling a React.PropTypes validation function for the `"+G+"` prop on `"+Q+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),R[A]=!0,D++)}}return j[W]==null?B?j[W]===null?new y("The "+H+" `"+G+"` is marked as required "+("in `"+Q+"`, but its value is `null`.")):new y("The "+H+" `"+G+"` is marked as required in "+("`"+Q+"`, but its value is `undefined`.")):null:T(j,W,Q,H,G)}var S=P.bind(null,!1);return S.isRequired=P.bind(null,!0),S}function w(T){function R(D,P,S,B,j,W){var Q=D[P],H=F(Q);if(H!==T){var G=ne(Q);return new y("Invalid "+B+" `"+j+"` of type "+("`"+G+"` supplied to `"+S+"`, expected ")+("`"+T+"`."))}return null}return M(R)}function z(){return M(l)}function O(T){function R(D,P,S,B,j){if(typeof T!="function")return new y("Property `"+j+"` of component `"+S+"` has invalid PropType notation inside arrayOf.");var W=D[P];if(!Array.isArray(W)){var Q=F(W);return new y("Invalid "+B+" `"+j+"` of type "+("`"+Q+"` supplied to `"+S+"`, expected an array."))}for(var H=0;H<W.length;H++){var G=T(W,H,S,B,j+"["+H+"]",n);if(G instanceof Error)return G}return null}return M(R)}function $(){function T(R,D,P,S,B){var j=R[D];if(!d(j)){var W=F(j);return new y("Invalid "+S+" `"+B+"` of type "+("`"+W+"` supplied to `"+P+"`, expected a single ReactElement."))}return null}return M(T)}function v(){function T(R,D,P,S,B){var j=R[D];if(!e.isValidElementType(j)){var W=F(j);return new y("Invalid "+S+" `"+B+"` of type "+("`"+W+"` supplied to `"+P+"`, expected a single ReactElement type."))}return null}return M(T)}function Y(T){function R(D,P,S,B,j){if(!(D[P]instanceof T)){var W=T.name||b,Q=ue(D[P]);return new y("Invalid "+B+" `"+j+"` of type "+("`"+Q+"` supplied to `"+S+"`, expected ")+("instance of `"+W+"`."))}return null}return M(R)}function N(T){if(!Array.isArray(T))return process.env.NODE_ENV!=="production"&&(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array.")),l;function R(D,P,S,B,j){for(var W=D[P],Q=0;Q<T.length;Q++)if(h(W,T[Q]))return null;var H=JSON.stringify(T,function(le,fe){var A=ne(fe);return A==="symbol"?String(fe):fe});return new y("Invalid "+B+" `"+j+"` of value `"+String(W)+"` "+("supplied to `"+S+"`, expected one of "+H+"."))}return M(R)}function I(T){function R(D,P,S,B,j){if(typeof T!="function")return new y("Property `"+j+"` of component `"+S+"` has invalid PropType notation inside objectOf.");var W=D[P],Q=F(W);if(Q!=="object")return new y("Invalid "+B+" `"+j+"` of type "+("`"+Q+"` supplied to `"+S+"`, expected an object."));for(var H in W)if(i(W,H)){var G=T(W,H,S,B,j+"."+H,n);if(G instanceof Error)return G}return null}return M(R)}function q(T){if(!Array.isArray(T))return process.env.NODE_ENV!=="production"&&s("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var R=0;R<T.length;R++){var D=T[R];if(typeof D!="function")return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ce(D)+" at index "+R+"."),l}function P(S,B,j,W,Q){for(var H=0;H<T.length;H++){var G=T[H];if(G(S,B,j,W,Q,n)==null)return null}return new y("Invalid "+W+" `"+Q+"` supplied to "+("`"+j+"`."))}return M(P)}function K(){function T(R,D,P,S,B){return _(R[D])?null:new y("Invalid "+S+" `"+B+"` supplied to "+("`"+P+"`, expected a ReactNode."))}return M(T)}function U(T){function R(D,P,S,B,j){var W=D[P],Q=F(W);if(Q!=="object")return new y("Invalid "+B+" `"+j+"` of type `"+Q+"` "+("supplied to `"+S+"`, expected `object`."));for(var H in T){var G=T[H];if(!!G){var le=G(W,H,S,B,j+"."+H,n);if(le)return le}}return null}return M(R)}function Z(T){function R(D,P,S,B,j){var W=D[P],Q=F(W);if(Q!=="object")return new y("Invalid "+B+" `"+j+"` of type `"+Q+"` "+("supplied to `"+S+"`, expected `object`."));var H=t({},D[P],T);for(var G in H){var le=T[G];if(!le)return new y("Invalid "+B+" `"+j+"` key `"+G+"` supplied to `"+S+"`.\nBad object: "+JSON.stringify(D[P],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(T),null,"  "));var fe=le(W,G,S,B,j+"."+G,n);if(fe)return fe}return null}return M(R)}function _(T){switch(typeof T){case"number":case"string":case"undefined":return!0;case"boolean":return!T;case"object":if(Array.isArray(T))return T.every(_);if(T===null||d(T))return!0;var R=u(T);if(R){var D=R.call(T),P;if(R!==T.entries){for(;!(P=D.next()).done;)if(!_(P.value))return!1}else for(;!(P=D.next()).done;){var S=P.value;if(S&&!_(S[1]))return!1}}else return!1;return!0;default:return!1}}function oe(T,R){return T==="symbol"?!0:R?R["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&R instanceof Symbol:!1}function F(T){var R=typeof T;return Array.isArray(T)?"array":T instanceof RegExp?"object":oe(R,T)?"symbol":R}function ne(T){if(typeof T>"u"||T===null)return""+T;var R=F(T);if(R==="object"){if(T instanceof Date)return"date";if(T instanceof RegExp)return"regexp"}return R}function ce(T){var R=ne(T);switch(R){case"array":case"object":return"an "+R;case"boolean":case"date":case"regexp":return"a "+R;default:return R}}function ue(T){return!T.constructor||!T.constructor.name?b:T.constructor.name}return x.checkPropTypes=a,x.resetWarningCache=a.resetWarningCache,x.PropTypes=x,x},vr}var Mr,Ko;function Mi(){if(Ko)return Mr;Ko=1;var e=qr();function t(){}function n(){}return n.resetWarningCache=t,Mr=function(){function a(l,d,p,c,f,u){if(u!==e){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}a.isRequired=a;function i(){return a}var s={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:i,element:a,elementType:a,instanceOf:i,node:a,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return s.PropTypes=s,s},Mr}if(process.env.NODE_ENV!=="production"){var Ti=Bn(),$i=!0;r.exports=vi()(Ti.isElement,$i)}else r.exports=Mi()();const Wn="alpha",Un="beta",Fn="delta",Yn="epsilon",Br="omega",Qn="pi",_n="sigma",wi=[Wn,Un,Fn,Yn,Br,Qn,_n],Ci=({ellipsis:e})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,Ni=({variant:e,theme:t})=>{switch(e){case Wn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case Un:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case Fn:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case Yn:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case Br:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case Qn:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case _n:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},Di=({theme:e,textColor:t})=>e.colors[t||"neutral800"],ki={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:Br},Ii={ellipsis:r.exports.bool,fontSize:r.exports.oneOfType([r.exports.number,r.exports.string]),fontWeight:r.exports.string,lineHeight:r.exports.oneOfType([r.exports.number,r.exports.string]),textColor:r.exports.string,textTransform:r.exports.string,variant:r.exports.oneOf(wi)},Ri={fontSize:!0,fontWeight:!0},C=g.default.span.withConfig({shouldForwardProp:(e,t)=>!Ri[e]&&t(e)})`
  font-weight: ${({theme:e,fontWeight:t})=>e.fontWeights[t]};
  font-size: ${({theme:e,fontSize:t})=>e.fontSizes[t]};
  line-height: ${({theme:e,lineHeight:t})=>e.lineHeights[t]};
  color: ${Di};
  text-transform: ${({textTransform:e})=>e};
  ${Ci}
  ${Ni}
`;C.defaultProps=ki;C.propTypes=Ii;const Hn=m.createContext(),Vn=()=>m.useContext(Hn);let Oi=0;const Ai=()=>++Oi,ie=(e,t)=>m.useRef(t||`${e}-${Ai()}`).current,he=(e,t,n)=>{let a=t;if(!Array.isArray(t)&&typeof t=="object"&&(a=[t==null?void 0:t.desktop,t==null?void 0:t.tablet,t==null?void 0:t.mobile]),a===void 0)return;if(Array.isArray(a)){const[s,l,d]=a;let p=`${e}: ${n.spaces[s]};`;return l!==void 0&&(p+=`${n.mediaQueries.tablet}{
          ${e}: ${n.spaces[l]};
        }`),d!==void 0&&(p+=`${n.mediaQueries.mobile}{
          ${e}: ${n.spaces[d]};
        }`),p}const i=n.spaces[a]||a;return`${e}: ${i};`},Si={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:()=>{}},zi={_hover:r.exports.func,background:r.exports.string,basis:r.exports.oneOfType([r.exports.string,r.exports.string]),borderColor:r.exports.string,children:r.exports.oneOfType([r.exports.node,r.exports.string]),color:r.exports.string,flex:r.exports.oneOfType([r.exports.string,r.exports.string]),grow:r.exports.oneOfType([r.exports.string,r.exports.string]),hasRadius:r.exports.bool,hiddenS:r.exports.bool,hiddenXS:r.exports.bool,padding:r.exports.oneOfType([r.exports.number,r.exports.arrayOf(r.exports.number)]),paddingBottom:r.exports.oneOfType([r.exports.number,r.exports.arrayOf(r.exports.number)]),paddingLeft:r.exports.oneOfType([r.exports.number,r.exports.arrayOf(r.exports.number)]),paddingRight:r.exports.oneOfType([r.exports.number,r.exports.arrayOf(r.exports.number)]),paddingTop:r.exports.oneOfType([r.exports.number,r.exports.arrayOf(r.exports.number)]),shadow:r.exports.string,shrink:r.exports.oneOfType([r.exports.string,r.exports.string])},Li={color:!0},E=g.default.div.withConfig({shouldForwardProp:(e,t)=>!Li[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>t.fontSizes[e]||e};

  // Colors
  background: ${({theme:e,background:t})=>e.colors[t]};
  color: ${({theme:e,color:t})=>e.colors[t]};

  // Spaces
  ${({theme:e,padding:t})=>he("padding",t,e)}
  ${({theme:e,paddingTop:t})=>he("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>he("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>he("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>he("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>he("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>he("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>he("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>he("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:n})=>t?e.borderRadius:n};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>t.colors[e]};
  border: ${({theme:e,borderColor:t,borderStyle:n,borderWidth:a})=>{if(t&&!n&&!a)return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>e.shadows[t]};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>t.spaces[e]||e};
  right: ${({right:e,theme:t})=>t.spaces[e]||e};
  top: ${({top:e,theme:t})=>t.spaces[e]||e};
  bottom: ${({bottom:e,theme:t})=>t.spaces[e]||e};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};
  cursor: ${({cursor:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>t.spaces[e]||e};
  max-width: ${({maxWidth:e,theme:t})=>t.spaces[e]||e};
  min-width: ${({minWidth:e,theme:t})=>t.spaces[e]||e};
  height: ${({height:e,theme:t})=>t.spaces[e]||e};
  max-height: ${({maxHeight:e,theme:t})=>t.spaces[e]||e};
  min-height: ${({minHeight:e,theme:t})=>t.spaces[e]||e};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({lineHeight:e})=>e};

  // Cursor
  cursor: ${({cursor:e})=>e};
`;E.defaultProps=Si;E.propTypes=zi;const ji={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},Pi={alignItems:r.exports.string,basis:r.exports.oneOfType([r.exports.string,r.exports.number]),direction:r.exports.string,gap:r.exports.oneOfType([r.exports.shape({desktop:r.exports.number,mobile:r.exports.number,tablet:r.exports.number}),r.exports.number,r.exports.arrayOf(r.exports.number),r.exports.string]),inline:r.exports.bool,justifyContent:r.exports.string,reverse:r.exports.bool,shrink:r.exports.number,wrap:r.exports.string},qi={direction:!0},k=g.default(E).withConfig({shouldForwardProp:(e,t)=>!qi[e]&&t(e)})`
  align-items: ${({alignItems:e})=>e};
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  flex-direction: ${({direction:e})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>he("gap",e,t)}};
  justify-content: ${({justifyContent:e})=>e};
`;k.defaultProps=ji;k.propTypes=Pi;const Bi=({theme:e,expanded:t,variant:n,disabled:a,error:i})=>i?`1px solid ${e.colors.danger600} !important`:a?`1px solid ${e.colors.neutral150}`:t?`1px solid ${e.colors.primary600}`:n==="primary"?`1px solid ${e.colors.neutral0}`:`1px solid ${e.colors.neutral100}`,Wr=g.default(C)``,Wi=g.default(E)`
  border: ${Bi};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    ${Wr} {
      color: ${({theme:e,expanded:t})=>t?void 0:e.colors.primary700};
    }

    ${C} {
      color: ${({theme:e,expanded:t})=>t?void 0:e.colors.primary600};
    }

    & > ${k} {
      background: ${({theme:e})=>e.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:e})=>e.colors.primary200};
    }
  }
`,Ur=({children:e,expanded:t,id:n,size:a,variant:i,disabled:s,error:l,hasErrorMessage:d,onToggle:p,toggle:c})=>{const f=ie("accordion",n);return o.default.createElement(Hn.Provider,{value:{expanded:t,onToggle:p,toggle:c,id:f,size:a,variant:i,disabled:s}},o.default.createElement(Wi,{"data-strapi-expanded":t,disabled:s,"aria-disabled":s,expanded:t,hasRadius:!0,variant:i,error:l},e),l&&d&&o.default.createElement(E,{paddingTop:1},o.default.createElement(C,{variant:"pi",textColor:"danger600"},l)))};Ur.defaultProps={disabled:!1,error:void 0,expanded:!1,hasErrorMessage:!0,id:void 0,toggle:!1,size:"M",variant:"primary",onToggle:void 0,toggle:void 0};Ur.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool,error:r.exports.string,expanded:r.exports.bool,hasErrorMessage:r.exports.bool,id:r.exports.string,onToggle:r.exports.func,size:r.exports.oneOf(["S","M"]),toggle:r.exports.func,variant:r.exports.oneOf(["primary","secondary"])};const Gn=({children:e,...t})=>{const{expanded:n,id:a}=Vn();if(!n)return null;const i=`accordion-content-${a}`,s=`accordion-label-${a}`,l=`accordion-desc-${a}`;return o.default.createElement(E,{role:"region",id:i,"aria-labelledby":s,"aria-describedby":l,...t},e)};Gn.propTypes={children:r.exports.node.isRequired};const Fr=e=>({theme:t,size:n})=>t.sizes[e][n],qe=(e="&")=>({theme:t,hasError:n})=>`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      ${e}:focus-within {
        border: 1px solid ${n?t.colors.danger600:t.colors.primary600};
        box-shadow: ${n?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
      }
    `,Ke=({theme:e})=>`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`,Ui=Pe.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Fi=g.default.div`
  animation: ${Ui} 2s infinite linear;
  will-change: transform;
`,Yi=g.default(k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }

  ${Ke}
`,Ze=o.default.forwardRef(({children:e,startIcon:t,endIcon:n,onClick:a,disabled:i,loading:s,...l},d)=>{const p=a&&!i?a:void 0,c=i||s;return o.default.createElement(Yi,{ref:d,"aria-disabled":c,onClick:p,as:"button",type:"button",...l},(t||s)&&o.default.createElement(E,{as:"span",paddingRight:2,"aria-hidden":!0},s?o.default.createElement(Fi,null,o.default.createElement(V.Loader,null)):t),o.default.createElement(C,{variant:"pi",textColor:c?"neutral600":"primary600"},e),n&&o.default.createElement(E,{as:"span",paddingLeft:2,"aria-hidden":!0},n))});Ze.displayName="TextButton";Ze.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,loading:!1,onClick:void 0};Ze.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool,endIcon:r.exports.element,loading:r.exports.bool,onClick:r.exports.func,startIcon:r.exports.element};const Kn={size:!0},Qi=g.default(k).withConfig({shouldForwardProp:(e,t)=>!Kn[e]&&t(e)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:e,spacing:t})=>e.spaces[t]};
  }
`,_i=g.default(k).withConfig({shouldForwardProp:(e,t)=>!Kn[e]&&t(e)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:e,spacing:t})=>e.spaces[t]};
  }
`,re=m.forwardRef(({horizontal:e,spacing:t,size:n,...a},i)=>(n&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),e?o.default.createElement(_i,{ref:i,spacing:t||n,...a}):o.default.createElement(Qi,{direction:"column",alignItems:"stretch",ref:i,spacing:t||n,...a})));re.displayName="Stack";re.defaultProps={horizontal:!1,size:void 0,spacing:void 0};re.propTypes={horizontal:r.exports.bool,size:r.exports.number,spacing:r.exports.number};const Hi=g.default(E)`
  path {
    fill: ${({color:e,theme:t})=>t.colors[e]};
  }
  ${({theme:e,colors:t})=>t(e)}
`,ye=o.default.forwardRef((e,t)=>o.default.createElement(Hi,{ref:t,...e}));ye.displayName="Icon";ye.defaultProps={color:"neutral600",colors:()=>{}};ye.propTypes={color:r.exports.string,colors:r.exports.func};const Vi=({expanded:e,disabled:t,variant:n})=>{let a;return e?a="primary100":t?a="neutral150":n==="primary"?a="neutral0":a="neutral100",a},Gi=g.default(Ze)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:e,expanded:t})=>t?e.colors.primary600:e.colors.neutral500};
    }
  }
`,Ki=g.default(k)`
  min-height: ${({theme:e,size:t})=>e.sizes.accordions[t]};
  border-radius: ${({theme:e,expanded:t})=>t?`${e.borderRadius} ${e.borderRadius} 0 0`:e.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }
`,Yr=({title:e,description:t,as:n,togglePosition:a,action:i,...s})=>{const l=m.useRef(null),{onToggle:d,toggle:p,expanded:c,id:f,size:u,variant:b,disabled:x}=Vn(),h=`accordion-content-${f}`,y=`accordion-label-${f}`,M=`accordion-desc-${f}`,w=u==="M"?6:4,z=u==="M"?w:w-2,O=Vi({expanded:c,disabled:x,variant:b}),v={as:n,fontWeight:u==="S"?"bold":void 0,id:y,textColor:c?"primary600":"neutral700",ellipsis:!0,variant:u==="M"?"delta":void 0},Y=c?"primary600":"neutral600",N=c?"primary200":"neutral200",I=u==="M"?`${32/16}rem`:`${24/16}rem`,q=()=>{x||(p&&!d?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),p()):d())},K=o.default.createElement(k,{justifyContent:"center",borderRadius:"50%",height:I,width:I,transform:c?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,disabled:x,"aria-hidden":!0,as:"span",background:N,cursor:x?"not-allowed":"pointer",onClick:()=>{var U;return(U=l==null?void 0:l.current)==null?void 0:U.click()},shrink:0},o.default.createElement(ye,{as:V.CarretDown,width:u==="M"?`${11/16}rem`:`${8/16}rem`,color:c?"primary600":"neutral600"}));return o.default.createElement(Ki,{paddingBottom:z,paddingLeft:w,paddingRight:w,paddingTop:z,background:O,expanded:c,size:u,justifyContent:"space-between",cursor:x?"not-allowed":""},o.default.createElement(re,{horizontal:!0,spacing:3,flex:1,maxWidth:"100%"},a==="left"&&K,o.default.createElement(Gi,{ref:l,onClick:q,"aria-disabled":x,"aria-expanded":c,"aria-controls":h,"aria-labelledby":y,"data-strapi-accordion-toggle":!0,expanded:c,type:"button",flex:1,minWidth:0,...s},o.default.createElement(o.default.Fragment,null,o.default.createElement(Wr,{...v},e),t&&o.default.createElement(C,{as:"p",id:M,textColor:Y},t))),a==="right"&&o.default.createElement(re,{horizontal:!0,spacing:3},K,i),a==="left"&&i))};Yr.defaultProps={action:void 0,as:"span",description:void 0,variant:"primary",togglePosition:"right"};Yr.propTypes={action:r.exports.node,as:r.exports.string,description:r.exports.string,title:r.exports.string.isRequired,togglePosition:r.exports.oneOf(["right","left"]),variant:r.exports.oneOf(["primary","secondary"])};const L={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"},Ut=({tagName:e,attributeName:t,...n})=>{const a=()=>{const l=document.activeElement;return e?l.tagName.toLowerCase()===e:l.hasAttribute(t)},i=l=>e?l.querySelectorAll(e):l.querySelectorAll(`[${t}]`),s=l=>{switch(l.key){case L.RIGHT:case L.DOWN:{if(a()){l.preventDefault();const d=document.activeElement,p=[...i(l.currentTarget)],c=p.findIndex(u=>u===d),f=c+1<p.length?c+1:0;p[f].focus()}break}case L.LEFT:case L.UP:{if(a()){l.preventDefault();const d=document.activeElement,p=[...i(l.currentTarget)],c=p.findIndex(u=>u===d),f=c-1>-1?c-1:p.length-1;p[f].focus()}break}case L.HOME:{a()&&(l.preventDefault(),i(l.currentTarget).item(0).focus());break}case L.END:{if(a()){l.preventDefault();const d=i(l.currentTarget);d.item(d.length-1).focus()}break}}};return o.default.createElement(E,{onKeyDown:s,...n})};Ut.defaultProps={attributeName:void 0,tagName:void 0};Ut.propTypes={attributeName:r.exports.string,tagName:r.exports.string};const Zi=g.default(E)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
`,Xi=g.default(E)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
    & > * {
      border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({theme:e})=>e.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({theme:e})=>e.colors.primary600};
  }

  ${({theme:e,footer:t})=>`
    &:not(${t}) {
      & > *:last-of-type {
        border-radius: 0 0 ${e.borderRadius} ${e.borderRadius};
      }
    }
  `}
`,Ji=g.default(E)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Qr=({children:e,footer:t,label:n,labelAction:a,error:i})=>{const s=m.Children.toArray(e).map(l=>m.cloneElement(l,{hasErrorMessage:!1}));return o.default.createElement(Ut,{attributeName:"data-strapi-accordion-toggle"},n&&o.default.createElement(k,{paddingBottom:1},o.default.createElement(C,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold"},n),a&&o.default.createElement(Ji,{paddingLeft:1},a)),o.default.createElement(Xi,{footer:t},s),t&&o.default.createElement(Zi,null,t),i&&o.default.createElement(E,{paddingTop:1},o.default.createElement(C,{variant:"pi",textColor:"danger600"},i)))};Qr.defaultProps={footer:null,error:void 0,label:null,labelAction:void 0};Qr.propTypes={children:r.exports.node.isRequired,error:r.exports.string,footer:r.exports.node,label:r.exports.string,labelAction:r.exports.node};const es=({theme:e,variant:t})=>t==="danger"?e.colors.danger100:t==="success"?e.colors.success100:e.colors.primary100,ts=({theme:e,variant:t})=>t==="danger"?e.colors.danger200:t==="success"?e.colors.success200:e.colors.primary200,Ir=({theme:e,variant:t})=>t==="danger"?e.colors.danger700:t==="success"?e.colors.success700:e.colors.primary700,rs=g.default(E)`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`,os=g.default(E)`
  border: 1px solid ${ts};
  background: ${es};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,ns=g.default.button`
  border: none;
  background: transparent;
  font-size: ${12/16}rem;
  svg path {
    fill: ${({theme:e})=>e.colors.neutral700};
  }
  margin-top: ${({theme:e})=>e.spaces[1]};
  ${Ke};
`,as=g.default(E)`
  font-size: ${20/16}rem;
  svg path {
    fill: ${Ir};
  }
`,Zn=({variant:e,...t})=>e==="success"?o.default.createElement(V.CheckCircle,{...t}):e==="danger"?o.default.createElement(V.ExclamationMarkCircle,{...t}):o.default.createElement(V.Information,{...t}),is=g.default(E)`
  // Checked with the designers, validated
  padding-top: 1px;

  & a > span {
    color: ${Ir};

    svg path {
      fill: ${Ir};
    }
  }
`,Ft=({title:e,children:t,variant:n,onClose:a,closeLabel:i,titleAs:s,action:l,...d})=>o.default.createElement(os,{hasRadius:!0,paddingLeft:5,paddingRight:6,paddingTop:5,variant:n,...d},o.default.createElement(k,{alignItems:"flex-start"},o.default.createElement(as,{paddingRight:3,variant:n},o.default.createElement(Zn,{variant:n,"aria-hidden":!0})),o.default.createElement(rs,{role:n==="danger"?"alert":"status"},o.default.createElement(E,{paddingBottom:2,paddingRight:1},o.default.createElement(C,{fontWeight:"bold",textColor:"neutral800",as:s},e)),o.default.createElement(E,{paddingBottom:l?2:5,paddingRight:2},o.default.createElement(C,{as:"p",textColor:"neutral800"},t)),l&&o.default.createElement(is,{paddingBottom:5,variant:n},l)),o.default.createElement(ns,{onClick:a,"aria-label":i},o.default.createElement(V.Cross,{"aria-hidden":!0}))));Ft.defaultProps={action:void 0,variant:"default",titleAs:"p"};Ft.propTypes={action:r.exports.element,children:r.exports.node.isRequired,closeLabel:r.exports.string.isRequired,onClose:r.exports.func.isRequired,title:r.exports.string.isRequired,titleAs:r.exports.string,variant:r.exports.oneOf(["danger","success","default"])};Zn.propTypes={variant:Ft.propTypes.variant};const Ee=26,Rr=64,ss=g.default.img`
  border-radius: 50%;
  object-fit: cover;
  display: block;
  position: relative;
`,ls=g.default.div`
  position: relative;
  width: ${Ee/16}rem;
  height: ${Ee/16}rem;
  z-index: ${({hovering:e})=>e?1:void 0};
`,ds=g.default.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transform: translate(-${(Rr-Ee)/2}px, -100%);
  margin-top: -${({theme:e})=>e.spaces[1]};
`,cs=g.default.div`
  z-index: 1;
  border-radius: 30%;
  position: absolute;
  width: ${Ee/16}rem;
  height: ${Ee/16}rem;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.4;
`,Yt=({src:e,alt:t,preview:n})=>{const[a,i]=m.useState(!1);return o.default.createElement("span",null,n&&a?o.default.createElement(ds,{"aria-hidden":!0,alt:"",width:`${Rr}px`,height:`${Rr}px`,src:n===!0?e:n}):null,o.default.createElement(ls,{hovering:n&&a,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},n&&a?o.default.createElement(cs,null):null,o.default.createElement(ss,{src:e,alt:t,width:`${Ee}px`,height:`${Ee}px`})))},us=g.default(k)`
  span {
    line-height: 0;
  }
`,_r=({children:e})=>o.default.createElement(us,{borderRadius:"50%",width:`${Ee}px`,height:`${Ee}px`,background:"primary600",justifyContent:"center"},o.default.createElement(C,{fontWeight:"bold",textColor:"buttonNeutral0",fontSize:0,textTransform:"uppercase"},e));_r.propTypes={children:r.exports.node.isRequired};Yt.defaultProps={preview:void 0};Yt.propTypes={alt:r.exports.string.isRequired,preview:r.exports.oneOfType([r.exports.string,r.exports.bool]),src:r.exports.string.isRequired};const ps=g.default(k)`
  & > * + * {
    margin-left: -${Ee/2}px;
  }
`,Xe=({active:e,textColor:t,backgroundColor:n,children:a,minWidth:i,...s})=>o.default.createElement(k,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:i,padding:1,background:e?"primary100":n,hasRadius:!0,...s},o.default.createElement(C,{variant:"sigma",textColor:e?"primary600":t},a));Xe.defaultProps={active:!1,backgroundColor:"neutral100",minWidth:5,textColor:"neutral600"};Xe.propTypes={active:r.exports.bool,backgroundColor:r.exports.string,children:r.exports.oneOfType([r.exports.number,r.exports.string]).isRequired,minWidth:r.exports.number,textColor:r.exports.string};const Hr=g.default.button`
  display: flex;
  cursor: pointer;
  padding: ${({theme:e})=>e.spaces[2]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};
  }
  svg {
    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${Ke}
`,Je=o.default.forwardRef(({disabled:e,children:t,...n},a)=>o.default.createElement(Hr,{ref:a,"aria-disabled":e,type:"button",disabled:e,...n},t));Je.displayName="BaseButton";Je.defaultProps={disabled:!1};Je.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool};const Zo=({size:e})=>e==="M"?"18px":"20px",Xn="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=",fs="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==",gs=g.default.input`
  margin: 0;
  height: ${Zo};
  min-width: ${Zo};
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:e})=>e.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:e})=>e.colors.primary600};
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${Xn}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${fs}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.neutral200};
    border: 1px solid ${({theme:e})=>e.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:e})=>e.colors.primary600};
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:e})=>e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:e})=>e.colors.neutral200};
      border: 1px solid ${({theme:e})=>e.colors.neutral300};
      &:after {
        background-color: ${({theme:e})=>e.colors.neutral500};
      }
    }
  }
`,et=({indeterminate:e,size:t,name:n,value:a,onValueChange:i,...s})=>{const l=m.useRef();m.useEffect(()=>{l.current&&e?l.current.indeterminate=e:l.current.indeterminate=!1},[e]);const d=()=>{i(!a)};return o.default.createElement(gs,{size:t,checked:a,onChange:d,type:"checkbox",ref:l,name:n,...s})};et.displayName="BaseCheckbox";et.defaultProps={indeterminate:!1,name:null,onValueChange:()=>{},size:"M",value:!1};et.propTypes={indeterminate:r.exports.bool,name:r.exports.string,onValueChange:r.exports.func,size:r.exports.oneOf(["M","L"]),value:r.exports.bool};const ms=g.default.a`
  cursor: pointer;
`,Qt=o.default.forwardRef(({href:e,rel:t,target:n,disabled:a,isExternal:i,...s},l)=>o.default.createElement(ms,{ref:l,target:i?"_blank":n,rel:i?t:void 0,href:a?"#":e,disabled:a,...s}));Qt.displayName="BaseLink";Qt.defaultProps={disabled:!1,href:void 0,isExternal:!1,rel:"noreferrer noopener",target:"_self"};Qt.propTypes={disabled:r.exports.bool,href:r.exports.string,isExternal:r.exports.bool,rel:r.exports.string,target:r.exports.string};const Jn=m.createContext({onChange:()=>{},name:"",size:"M"}),Xo=({size:e})=>e==="M"?"18px":"20px",Jo=({size:e})=>e==="M"?"10px":"12px",en=()=>"3px",bs=g.default.input`
  margin: 0;
  padding: 0;
  background-color: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 50%;
  height: ${Xo};
  width: ${Xo};
  -webkit-appearance: none;

  &:after {
    border-radius: 50%;
    content: '';
    position: relative;
    z-index: 1;
    display: block;
    height: ${Jo};
    width: ${Jo};
    left: ${en};
    top: ${en};
  }

  &:checked:after {
    background: ${({theme:e})=>e.colors.primary600};
  }

  &:disabled {
    border: 1px solid ${({theme:e})=>e.colors.carbon300};
    background: ${({theme:e})=>e.colors.neutral200};
  }
`,mt=o.default.forwardRef(({value:e,disabled:t,...n},a)=>{const{onChange:i,selected:s,name:l,size:d}=m.useContext(Jn),p=s===e;return o.default.createElement(bs,{ref:a,type:"radio",name:l,value:e,tabIndex:p?0:-1,"aria-checked":p,checked:p,disabled:t,size:d,onChange:i,...n})});mt.displayName="Radio";mt.defaultProps={disabled:!1};mt.propTypes={disabled:r.exports.bool,value:r.exports.string.isRequired};const hs=(e,t)=>{const n=e.querySelectorAll(t);n&&n.length>0&&n.item(0).setAttribute("tabindex","0")},Vr=({children:e,labelledBy:t,onChange:n,value:a,size:i,name:s,...l})=>{const d=m.useRef(null);return m.useLayoutEffect(()=>{a||hs(d.current,`[name="${s}"]`)},[a]),o.default.createElement(Jn.Provider,{value:{onChange:n,selected:a,name:s,size:i}},o.default.createElement("div",{ref:d,role:"radiogroup","aria-labelledby":t,...l},e))};Vr.defaultProps={value:"",size:"M"};Vr.propTypes={children:r.exports.node.isRequired,labelledBy:r.exports.string.isRequired,name:r.exports.string.isRequired,onChange:r.exports.func.isRequired,size:r.exports.oneOf(["M","L"]),value:r.exports.string};const se=g.default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,xs=g.default(k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
  :last-of-type ${E} {
    display: none;
  }
  :last-of-type ${C} {
    color: ${({theme:e})=>e.colors.neutral800};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
  }
`,_t=({children:e})=>o.default.createElement(xs,{inline:!0,as:"li"},o.default.createElement(C,{variant:"pi",textColor:"neutral600"},e),o.default.createElement(E,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},o.default.createElement(V.ChevronRight,null)));_t.displayName="Crumb";_t.propTypes={children:r.exports.node.isRequired};const tn=r.exports.shape({type:r.exports.oneOf([_t])}),Gr=({children:e,label:t,...n})=>o.default.createElement(k,{...n},o.default.createElement(se,null,t),o.default.createElement("ol",{"aria-hidden":!0},e));Gr.displayName="Breadcrumbs";Gr.propTypes={children:r.exports.oneOfType([r.exports.arrayOf(tn),tn]).isRequired,label:r.exports.string.isRequired};const ea="success-light",ta="danger-light",Kr="default",bt="tertiary",ht="secondary",ra="danger",oa="success",Zr="ghost",Ht=[ea,ta],Xr=[Kr,bt,ht,ra,oa,Zr,...Ht],na=["S","L"],me=e=>Ht.includes(e)?e.substring(0,e.lastIndexOf("-")):e===bt?"neutral":[Kr,ht].includes(e)||!Xr.includes(e)?"primary":e,zt=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${C} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,aa=({theme:e,variant:t})=>[...Ht,ht].includes(t)?`
      background-color: ${e.colors.neutral0};
    `:t===bt?`
      background-color: ${e.colors.neutral100};
    `:t===Zr?`
      background-color: ${e.colors.neutral100};
    `:t===Kr?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${me(t)}500`]};
    background: ${e.colors[`${me(t)}500`]};
  `,ia=({theme:e,variant:t})=>[...Ht,ht].includes(t)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${me(t)}600`]};
      ${C} {
        color: ${e.colors[`${me(t)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${me(t)}600`]};
        }
      }
    `:t===bt?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${me(t)}600`]};
    background: ${e.colors[`${me(t)}600`]};
  `,sa=({theme:e,variant:t})=>{switch(t){case ta:case ea:case ht:return`
          border: 1px solid ${e.colors[`${me(t)}200`]};
          background: ${e.colors[`${me(t)}100`]};
          ${C} {
            color: ${e.colors[`${me(t)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${me(t)}700`]};
            }
          }
        `;case bt:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${C} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case Zr:return`
        border: 1px solid transparent;
        background: transparent;

        ${C} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case oa:case ra:return`
          border: 1px solid ${e.colors[`${me(t)}600`]};
          background: ${e.colors[`${me(t)}600`]};
          ${C} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},ys=Pe.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Es=g.default.div`
  animation: ${ys} 2s infinite linear;
  will-change: transform;
`,vs=g.default(E)`
  height: 100%;
`,la=g.default(Je)`
  align-items: center;
  padding: ${({theme:e,size:t})=>`${t==="S"?e.spaces[2]:"10px"} ${e.spaces[4]}`};
  background: ${({theme:e})=>e.colors.buttonPrimary600};
  border: 1px solid ${({theme:e})=>e.colors.buttonPrimary600};
  ${E} {
    display: flex;
    align-items: center;
  }
  ${C} {
    color: ${({theme:e})=>e.colors.buttonNeutral0};
  }
  &[aria-disabled='true'] {
    ${zt}
    &:active {
      ${zt}
    }
  }
  &:hover {
    ${aa}
  }
  &:active {
    ${ia}
  }
  ${sa}
  ${({fullWidth:e})=>e&&`
    display: inline-flex;
    justify-content: center;
    width: 100%;
  `}
`,tt=o.default.forwardRef(({variant:e,startIcon:t,endIcon:n,disabled:a,children:i,onClick:s,size:l,loading:d,fullWidth:p,...c},f)=>{const u=a||d,b=x=>{!u&&s&&s(x)};return o.default.createElement(la,{ref:f,"aria-disabled":u,disabled:u,size:l,variant:e,onClick:b,fullWidth:p,...c},(t||d)&&o.default.createElement(vs,{"aria-hidden":!0,paddingRight:2},d?o.default.createElement(Es,null,o.default.createElement(V.Loader,null)):t),l==="S"?o.default.createElement(C,{variant:"pi",fontWeight:"bold"},i):o.default.createElement(C,{fontWeight:"bold"},i),n&&o.default.createElement(E,{"aria-hidden":!0,paddingLeft:2},n))});tt.displayName="Button";tt.defaultProps={disabled:!1,endIcon:void 0,fullWidth:!1,loading:!1,onClick:void 0,size:"S",startIcon:void 0,variant:"default"};tt.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool,endIcon:r.exports.element,fullWidth:r.exports.bool,loading:r.exports.bool,onClick:r.exports.func,size:r.exports.oneOf(na),startIcon:r.exports.element,variant:r.exports.oneOf(Xr)};const da=m.createContext(),ca=()=>m.useContext(da),Jr=({id:e,...t})=>{const n=ie("card",e);return o.default.createElement(da.Provider,{value:{id:n}},o.default.createElement(E,{id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",as:"article","aria-labelledby":`${n}-title`,...t}))};Jr.defaultProps={id:void 0};Jr.propTypes={id:r.exports.string};const ua=g.default(re).attrs({horizontal:!0,spacing:2})`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({position:e,theme:t})=>e==="end"?t.spaces[3]:void 0};
  left: ${({position:e,theme:t})=>e==="start"?t.spaces[3]:void 0};
`,Ms=g.default.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`,Ts={S:88,M:164},$s=g.default.div`
  display: flex;
  justify-content: center;
  height: ${({size:e})=>Ts[e]/16}rem;
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`,eo=({size:e,children:t,...n})=>o.default.createElement($s,{size:e},t?o.default.createElement(k,null,t):o.default.createElement(Ms,{...n,"aria-hidden":!0}));eo.defaultProps={children:void 0,size:"M"};eo.propTypes={children:r.exports.node,size:r.exports.oneOf(["S","M"])};const ws=g.default.div`
  margin-left: auto;
  flex-shrink: 0;
`,Cs=g.default(Xe)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`,Ns=e=>o.default.createElement(ws,null,o.default.createElement(Cs,{...e})),Ds=e=>o.default.createElement(E,{paddingLeft:3,paddingRight:3,paddingTop:2,paddingBottom:2},o.default.createElement(k,{...e,alignItems:"flex-start"})),ks=e=>{const{id:t}=ca();return o.default.createElement(ua,{position:"start"},o.default.createElement(et,{"aria-labelledby":`${t}-title`,...e}))},Is=g.default(E)`
  word-break: break-all;
`,pa=({children:e,...t})=>o.default.createElement(Is,{...t},e);pa.propTypes={children:r.exports.node.isRequired};const Rs=g.default(k)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Os=e=>o.default.createElement(Rs,{justifyContent:"center",...e}),As=g.default(E)`
  position: absolute;
  bottom: ${({theme:e})=>e.spaces[1]};
  right: ${({theme:e})=>e.spaces[1]};
`,fa=({children:e,...t})=>o.default.createElement(As,{padding:1,background:"neutral800",color:"neutral0",as:"time",hasRadius:!0,...t},o.default.createElement(C,{variant:"pi",textColor:"neutral0"},e));fa.propTypes={children:r.exports.node.isRequired};const Ss=e=>{const{id:t}=ca();return o.default.createElement(C,{variant:"pi",id:`${t}-title`,textColor:"neutral800",fontWeight:"bold",as:"div",...e})},zs=e=>o.default.createElement(C,{variant:"pi",...e,textColor:"neutral600",as:"div"}),xt=({children:e})=>{const t=m.useRef(null),[n,a]=m.useState(!1);return m.useLayoutEffect(()=>(t.current=document.createElement("div"),t.current.setAttribute("data-react-portal","true"),document.body.appendChild(t.current),a(!0),()=>{var i;(i=t.current)==null||i.remove()}),[]),!n||!t.current?null:jn.createPortal(e,t.current)},Ls=e=>{const[t,n]=m.useState(!1),a=m.useRef(),i=()=>{a.current&&clearTimeout(a.current)};return m.useEffect(()=>()=>{i()},[]),{visible:t,onFocus:()=>{n(!0)},onBlur:()=>{n(!1)},onMouseEnter:()=>{a.current=setTimeout(()=>{n(!0)},e)},onMouseLeave:()=>{i(),n(!1)}}},Re=8,js=(e,t)=>{const n=(e.width-t.width)/2,a=t.left-n,i=t.top+t.height+Re+window.pageYOffset;return{left:a,top:i}},Ps=(e,t)=>{const n=(e.height-t.height)/2,a=t.left+t.width+Re,i=t.top-n+window.pageYOffset;return{left:a,top:i}},qs=(e,t)=>{const n=(e.height-t.height)/2,a=t.left-e.width-Re,i=t.top-n+window.pageYOffset;return{left:a,top:i}},Bs=(e,t)=>{const n=(e.width-t.width)/2;let a=t.left-n,i=t.top-e.height-Re+window.pageYOffset;const s=window.innerWidth-t.right;return t.left+e.width-s>window.innerWidth?(a=t.left-e.width-Re,i=t.top+window.scrollY-t.height/2):a<0?(a=t.width+t.left+Re,i=t.top+window.scrollY-e.height/2+Re):i<0&&a>0&&(i=t.top+t.height+Re),{left:a,top:i}},Ws=(e,t,n)=>{const a=e.getBoundingClientRect(),i=t.getBoundingClientRect();return n==="bottom"?js(a,i):n==="right"?Ps(a,i):n==="left"?qs(a,i):Bs(a,i)},Us=(e,t)=>{const n=m.useRef(null),a=m.useRef(null);return m.useLayoutEffect(()=>{if(e){const i=n.current,s=a.current,l=Ws(i,s,t);i.style.left=`${l.left}px`,i.style.top=`${l.top}px`}},[e]),{tooltipWrapperRef:n,toggleSourceRef:a}},Fs=g.default(E)`
  position: absolute;
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:e})=>e?"revert":"none"};
`,rt=({children:e,label:t,description:n,delay:a,position:i,id:s,...l})=>{const d=ie("tooltip",s),p=ie("description"),{visible:c,...f}=Ls(a),{tooltipWrapperRef:u,toggleSourceRef:b}=Us(c,i),x=o.default.cloneElement(e,{tabIndex:0,"aria-labelledby":t?d:void 0,"aria-describedby":n?d:void 0,...f});return o.default.createElement(o.default.Fragment,null,o.default.createElement(xt,null,o.default.createElement(Fs,{id:d,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:u,visible:c,...l},c&&o.default.createElement(se,{id:p},n),o.default.createElement(C,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0"},t||n))),o.default.createElement("span",{ref:b},x))};rt.defaultProps={delay:500,id:void 0,position:"top",label:void 0,description:void 0};rt.propTypes={children:r.exports.node.isRequired,delay:r.exports.number,description:r.exports.string,id:r.exports.string,label:r.exports.string,position:r.exports.oneOf(["top","left","bottom","right"])};const Ys=g.default(E)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,Qs=g.default(E)`
  grid-area: slides;
`,rn=g.default.button`
  grid-area: ${({area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,Vt=({actions:e,children:t,label:n,nextLabel:a,onNext:i,onPrevious:s,previousLabel:l,secondaryLabel:d,selectedSlide:p,...c})=>{const f=m.useRef(null),u=m.useRef(null),b=m.Children.toArray(t).map((y,M)=>m.cloneElement(y,{selected:M===p})),x=y=>{switch(y.key){case L.RIGHT:{y.preventDefault(),u.current.focus(),i();break}case L.LEFT:{y.preventDefault(),f.current.focus(),s();break}}},h=b.length>1;return o.default.createElement(E,{...c,onKeyDown:x},o.default.createElement(E,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100"},o.default.createElement(Ys,{as:"section","aria-roledescription":"carousel","aria-label":n,position:"relative"},h&&o.default.createElement(rn,{onClick:s,area:"startAction",ref:f,"aria-label":l,type:"button"},o.default.createElement(ye,{as:V.ChevronLeft,"aria-hidden":!0,width:"6px",height:"10px",color:"neutral600"})),h&&o.default.createElement(rn,{onClick:i,area:"endAction",ref:u,"aria-label":a,type:"button"},o.default.createElement(ye,{as:V.ChevronRight,"aria-hidden":!0,width:"6px",height:"10px",color:"neutral600"})),o.default.createElement(Qs,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%"},b),e),d&&o.default.createElement(E,{paddingTop:2,paddingLeft:4,paddingRight:4},o.default.createElement(rt,{label:d},o.default.createElement(k,{justifyContent:"center"},o.default.createElement(C,{variant:"pi",textColor:"neutral600",ellipsis:!0},d))))))};Vt.defaultProps={actions:void 0,error:void 0,hint:void 0,required:!1,secondaryLabel:void 0};Vt.propTypes={actions:r.exports.node,children:r.exports.node.isRequired,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),label:r.exports.string.isRequired,nextLabel:r.exports.string.isRequired,onNext:r.exports.func.isRequired,onPrevious:r.exports.func.isRequired,previousLabel:r.exports.string.isRequired,required:r.exports.bool,secondaryLabel:r.exports.string,selectedSlide:r.exports.number.isRequired};const to=m.createContext({error:void 0,hint:void 0,name:"",id:""}),Be=()=>m.useContext(to),be=({children:e,name:t,error:n,hint:a,id:i,...s})=>{const l=ie("field",i);return o.default.createElement("div",{...s},o.default.createElement(to.Provider,{value:{name:t,id:l,error:n,hint:a}},e))};be.defaultProps={error:void 0,hint:void 0,id:void 0,name:void 0};be.propTypes={children:r.exports.node.isRequired,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.oneOfType([r.exports.string,r.exports.number]),name:r.exports.string};const _s=g.default(C)`
  line-height: 0;
`,Hs=g.default(k)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,xe=({children:e,required:t,action:n,...a})=>{const{id:i}=Be();return o.default.createElement(C,{variant:"pi",textColor:"neutral800",htmlFor:i,fontWeight:"bold",as:"label",required:t,...a},o.default.createElement(k,{alignItems:"center"},e,t&&o.default.createElement(_s,{textColor:"danger600"},"*"),n&&o.default.createElement(Hs,{marginLeft:1},n)))};xe.defaultProps={required:!1,action:void 0};xe.propTypes={action:r.exports.element,children:r.exports.node.isRequired,required:r.exports.bool};const Te={input:{S:`${32/16}rem`,M:`${40/16}rem`},accordions:{S:`${48/16}rem`,M:`${88/16}rem`}},on={S:6.5,M:10.5},Vs=g.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({size:e})=>`${on[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:t})=>t?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:t})=>t?0:e.spaces[4]};
  padding-top: ${({size:e})=>`${on[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  // TODO: Make sure to use the theme when it's ready
  font-size: ${14/16}rem;
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,ut=g.default(k)`
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${qe()}

  ${({theme:e,disabled:t})=>t?`
    color: ${e.colors.neutral600};
    background: ${e.colors.neutral150};
  
  `:void 0}
`,We=m.forwardRef(({endAction:e,startAction:t,disabled:n,onChange:a,size:i,...s},l)=>{const{id:d,error:p,hint:c,name:f}=Be();let u;p?u=`${d}-error`:c&&(u=`${d}-hint`);const b=Boolean(p),x=h=>{n||a(h)};return o.default.createElement(ut,{size:i,justifyContent:"space-between",hasError:b,disabled:n},t&&o.default.createElement(E,{paddingLeft:3,paddingRight:2},t),o.default.createElement(Vs,{id:d,name:f,ref:l,"aria-describedby":u,"aria-invalid":b,"aria-disabled":n,hasLeftAction:Boolean(t),hasRightAction:Boolean(e),onChange:x,size:i,...s}),e&&o.default.createElement(E,{paddingLeft:2,paddingRight:3},e))});We.displayName="FieldInput";We.defaultProps={disabled:!1,endAction:void 0,size:"M",startAction:void 0,onChange:()=>{}};We.propTypes={disabled:r.exports.bool,endAction:r.exports.element,onChange:r.exports.func,size:r.exports.oneOf(Object.keys(Te.input)),startAction:r.exports.element};const Ne=()=>{const{id:e,hint:t,error:n}=Be();return!t||n?null:o.default.createElement(C,{variant:"pi",as:"p",id:`${e}-hint`,textColor:"neutral600"},t)},De=()=>{const{id:e,error:t}=Be();return t?o.default.createElement(C,{variant:"pi",as:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0},t):null},Gs=g.default.button`
  border: none;
  background: transparent;
  // TODO: Make sure to use the theme when it's ready
  font-size: 1.6rem;
  width: auto;
  padding: 0;
  display: flex;
  align-items: center;
`,ro=({label:e,children:t,...n})=>o.default.createElement(Gs,{"aria-label":e,type:"button",...n},t);ro.propTypes={children:r.exports.node.isRequired,label:r.exports.string.isRequired};const oo=({actions:e,children:t,error:n,hint:a,label:i,labelAction:s,nextLabel:l,onNext:d,onPrevious:p,previousLabel:c,required:f,secondaryLabel:u,selectedSlide:b,id:x,...h})=>{const y=ie("carouselinput",x);return o.default.createElement(be,{hint:a,error:n,id:y},o.default.createElement(re,{spacing:1},i&&o.default.createElement(xe,{required:f,action:s},i),o.default.createElement(Vt,{actions:e,label:i,nextLabel:l,onNext:d,onPrevious:p,previousLabel:c,secondaryLabel:u,selectedSlide:b,id:y,...h},t),o.default.createElement(Ne,null),o.default.createElement(De,null)))};oo.defaultProps={actions:void 0,error:void 0,hint:void 0,id:void 0,required:!1,secondaryLabel:void 0};oo.propTypes={actions:r.exports.node,children:r.exports.node.isRequired,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.string,label:r.exports.string.isRequired,labelAction:r.exports.element,nextLabel:r.exports.string.isRequired,onNext:r.exports.func.isRequired,onPrevious:r.exports.func.isRequired,previousLabel:r.exports.string.isRequired,required:r.exports.bool,secondaryLabel:r.exports.string,selectedSlide:r.exports.number.isRequired};const Ks=e=>o.default.createElement(re,{justifyContent:"center",horizontal:!0,spacing:1,position:"absolute",width:"100%",bottom:1,...e}),Zs=e=>o.default.createElement(E,{as:"img",height:"100%",...e}),Xs=g.default(k)`
  display: ${({selected:e})=>e?"flex":"none"};
`,no=({label:e,children:t,selected:n,...a})=>o.default.createElement(Xs,{selected:n,role:"group","aria-roledescription":"slide","aria-label":e,justifyContent:"center",height:"124px",...a},t);no.defaultProps={selected:!1};no.propTypes={children:r.exports.node.isRequired,label:r.exports.string.isRequired,selected:r.exports.bool};const Js=g.default(C)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  }
`,el=e=>{const{id:t}=Be();return o.default.createElement(et,{id:t,...e})},ao=({children:e,disabled:t,id:n,hint:a,error:i,...s})=>{const l=ie("checkbox",n);let d;return i?d=`${l}-error`:a&&(d=`${l}-hint`),o.default.createElement(be,{id:l,hint:a,error:i},o.default.createElement(re,{spacing:1},o.default.createElement(Js,{as:"label",textColor:"neutral800",disabled:t},o.default.createElement(el,{disabled:t,"aria-describedby":d,...s}),o.default.createElement(E,{paddingLeft:2},e)),o.default.createElement(Ne,null),o.default.createElement(De,null)))};ao.defaultProps={disabled:!1,id:void 0,error:void 0,hint:void 0};ao.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.oneOfType([r.exports.string,r.exports.number])};function nn(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function an(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function Tr(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return an(n.overflowY,t)||an(n.overflowX,t)||function(a){var i=function(s){if(!s.ownerDocument||!s.ownerDocument.defaultView)return null;try{return s.ownerDocument.defaultView.frameElement}catch{return null}}(a);return!!i&&(i.clientHeight<a.scrollHeight||i.clientWidth<a.scrollWidth)}(e)}return!1}function Ot(e,t,n,a,i,s,l,d){return s<e&&l>t||s>e&&l<t?0:s<=e&&d<=n||l>=t&&d>=n?s-e-a:l>t&&d<n||s<e&&d>n?l-t+i:0}function ga(e,t){var n=window,a=t.scrollMode,i=t.block,s=t.inline,l=t.boundary,d=t.skipOverflowHiddenElements,p=typeof l=="function"?l:function(le){return le!==l};if(!nn(e))throw new TypeError("Invalid target");for(var c=document.scrollingElement||document.documentElement,f=[],u=e;nn(u)&&p(u);){if((u=u.parentElement)===c){f.push(u);break}u!=null&&u===document.body&&Tr(u)&&!Tr(document.documentElement)||u!=null&&Tr(u,d)&&f.push(u)}for(var b=n.visualViewport?n.visualViewport.width:innerWidth,x=n.visualViewport?n.visualViewport.height:innerHeight,h=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,M=e.getBoundingClientRect(),w=M.height,z=M.width,O=M.top,$=M.right,v=M.bottom,Y=M.left,N=i==="start"||i==="nearest"?O:i==="end"?v:O+w/2,I=s==="center"?Y+z/2:s==="end"?$:Y,q=[],K=0;K<f.length;K++){var U=f[K],Z=U.getBoundingClientRect(),_=Z.height,oe=Z.width,F=Z.top,ne=Z.right,ce=Z.bottom,ue=Z.left;if(a==="if-needed"&&O>=0&&Y>=0&&v<=x&&$<=b&&O>=F&&v<=ce&&Y>=ue&&$<=ne)return q;var T=getComputedStyle(U),R=parseInt(T.borderLeftWidth,10),D=parseInt(T.borderTopWidth,10),P=parseInt(T.borderRightWidth,10),S=parseInt(T.borderBottomWidth,10),B=0,j=0,W="offsetWidth"in U?U.offsetWidth-U.clientWidth-R-P:0,Q="offsetHeight"in U?U.offsetHeight-U.clientHeight-D-S:0;if(c===U)B=i==="start"?N:i==="end"?N-x:i==="nearest"?Ot(y,y+x,x,D,S,y+N,y+N+w,w):N-x/2,j=s==="start"?I:s==="center"?I-b/2:s==="end"?I-b:Ot(h,h+b,b,R,P,h+I,h+I+z,z),B=Math.max(0,B+y),j=Math.max(0,j+h);else{B=i==="start"?N-F-D:i==="end"?N-ce+S+Q:i==="nearest"?Ot(F,ce,_,D,S+Q,N,N+w,w):N-(F+_/2)+Q/2,j=s==="start"?I-ue-R:s==="center"?I-(ue+oe/2)+W/2:s==="end"?I-ne+P+W:Ot(ue,ne,oe,R,P+W,I,I+z,z);var H=U.scrollLeft,G=U.scrollTop;N+=G-(B=Math.max(0,Math.min(G+B,U.scrollHeight-_+Q))),I+=H-(j=Math.max(0,Math.min(H+j,U.scrollWidth-oe+W)))}q.push({el:U,top:B,left:j})}return q}const de={Close:"Close",CloseSelect:"CloseSelect",First:"First",Last:"Last",Next:"Next",Open:"Open",PageDown:"PageDown",PageUp:"PageUp",Previous:"Previous",Select:"Select",Space:"Space",Type:"Type"};function sn(e=[],t,n=[]){const a=String(t!=null?t:"").toLowerCase();return a?e.filter(i=>i.props.children.toString().toLowerCase().includes(a)&&n.indexOf(i)<0):e}function tl(e,t){if(!t&&e===L.DOWN)return de.Open;if(e===L.DOWN)return de.Next;if(e===L.UP)return de.Previous;if(e===L.HOME)return de.First;if(e===L.END)return de.Last;if(e===L.ESCAPE)return de.Close;if(e===L.ENTER)return de.CloseSelect;if(e===L.BACKSPACE||e===L.CLEAR||e.length===1)return de.Type}function $r(e,t,n){switch(n){case de.First:return 0;case de.Last:return t;case de.Previous:return Math.max(0,e-1);case de.Next:return Math.min(t,e+1);default:return e}}function ma(e){ga(e,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:n,top:a,left:i})=>{n.scrollTop=a,n.scrollLeft=i})}const rl=g.default(k)`
  position: relative;
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  padding-right: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  min-height: ${Fr("input")};

  ${({theme:e,disabled:t})=>t?`
    color: ${e.colors.neutral600};
    background: ${e.colors.neutral150};
  `:void 0}

  ${qe()}
`,io=g.default(E)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,ba=g.default(io)`
  display: flex;
  background: none;
  border: none;
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};

  svg {
    width: ${6/16}rem;
  }
`;function yt(e){return e.split("-")[0]}function so(e){return e.split("-")[1]}function Gt(e){return["top","bottom"].includes(yt(e))?"x":"y"}function ha(e){return e==="y"?"height":"width"}function ln(e,t,n){let{reference:a,floating:i}=e;const s=a.x+a.width/2-i.width/2,l=a.y+a.height/2-i.height/2,d=Gt(t),p=ha(d),c=a[p]/2-i[p]/2,f=yt(t),u=d==="x";let b;switch(f){case"top":b={x:s,y:a.y-i.height};break;case"bottom":b={x:s,y:a.y+a.height};break;case"right":b={x:a.x+a.width,y:l};break;case"left":b={x:a.x-i.width,y:l};break;default:b={x:a.x,y:a.y}}switch(so(t)){case"start":b[d]-=c*(n&&u?-1:1);break;case"end":b[d]+=c*(n&&u?-1:1);break}return b}const ol=async(e,t,n)=>{const{placement:a="bottom",strategy:i="absolute",middleware:s=[],platform:l}=n,d=await(l.isRTL==null?void 0:l.isRTL(t));if(process.env.NODE_ENV!=="production"&&(l==null&&console.error(["Floating UI: `platform` property was not passed to config. If you","want to use Floating UI on the web, install @floating-ui/dom","instead of the /core package. Otherwise, you can create your own","`platform`: https://floating-ui.com/docs/platform"].join(" ")),s.filter(h=>{let{name:y}=h;return y==="autoPlacement"||y==="flip"}).length>1))throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`","middleware detected. This will lead to an infinite loop. Ensure only","one of either has been passed to the `middleware` array."].join(" "));let p=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:f}=ln(p,a,d),u=a,b={},x=0;for(let h=0;h<s.length;h++){const{name:y,fn:M}=s[h],{x:w,y:z,data:O,reset:$}=await M({x:c,y:f,initialPlacement:a,placement:u,strategy:i,middlewareData:b,rects:p,platform:l,elements:{reference:e,floating:t}});if(c=w!=null?w:c,f=z!=null?z:f,b={...b,[y]:{...b[y],...O}},process.env.NODE_ENV!=="production"&&x>50&&console.warn(["Floating UI: The middleware lifecycle appears to be running in an","infinite loop. This is usually caused by a `reset` continually","being returned without a break condition."].join(" ")),$&&x<=50){x++,typeof $=="object"&&($.placement&&(u=$.placement),$.rects&&(p=$.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:i}):$.rects),{x:c,y:f}=ln(p,u,d)),h=-1;continue}}return{x:c,y:f,placement:u,strategy:i,middlewareData:b}};function nl(e){return{top:0,right:0,bottom:0,left:0,...e}}function al(e){return typeof e!="number"?nl(e):{top:e,right:e,bottom:e,left:e}}function Lt(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function xa(e,t){var n;t===void 0&&(t={});const{x:a,y:i,platform:s,rects:l,elements:d,strategy:p}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:x=0}=t,h=al(x),M=d[b?u==="floating"?"reference":"floating":u],w=Lt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(M)))==null||n?M:M.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(d.floating)),boundary:c,rootBoundary:f,strategy:p})),z=Lt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...l.floating,x:a,y:i}:l.reference,offsetParent:await(s.getOffsetParent==null?void 0:s.getOffsetParent(d.floating)),strategy:p}):l[u]);return{top:w.top-z.top+h.top,bottom:z.bottom-w.bottom+h.bottom,left:w.left-z.left+h.left,right:z.right-w.right+h.right}}const il=Math.min,sl=Math.max;function dn(e,t,n){return sl(e,il(t,n))}const ll={left:"right",right:"left",bottom:"top",top:"bottom"};function jt(e){return e.replace(/left|right|bottom|top/g,t=>ll[t])}function dl(e,t,n){n===void 0&&(n=!1);const a=so(e),i=Gt(e),s=ha(i);let l=i==="x"?a===(n?"end":"start")?"right":"left":a==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(l=jt(l)),{main:l,cross:jt(l)}}const cl={start:"end",end:"start"};function cn(e){return e.replace(/start|end/g,t=>cl[t])}function ul(e){const t=jt(e);return[cn(e),t,cn(t)]}const pl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:a,middlewareData:i,rects:s,initialPlacement:l,platform:d,elements:p}=t,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:x=!0,...h}=e,y=yt(a),w=u||(y===l||!x?[jt(l)]:ul(l)),z=[l,...w],O=await xa(t,h),$=[];let v=((n=i.flip)==null?void 0:n.overflows)||[];if(c&&$.push(O[y]),f){const{main:q,cross:K}=dl(a,s,await(d.isRTL==null?void 0:d.isRTL(p.floating)));$.push(O[q],O[K])}if(v=[...v,{placement:a,overflows:$}],!$.every(q=>q<=0)){var Y,N;const q=((Y=(N=i.flip)==null?void 0:N.index)!=null?Y:0)+1,K=z[q];if(K)return{data:{index:q,overflows:v},reset:{placement:K}};let U="bottom";switch(b){case"bestFit":{var I;const Z=(I=v.map(_=>[_,_.overflows.filter(oe=>oe>0).reduce((oe,F)=>oe+F,0)]).sort((_,oe)=>_[1]-oe[1])[0])==null?void 0:I[0].placement;Z&&(U=Z);break}case"initialPlacement":U=l;break}if(a!==U)return{reset:{placement:U}}}return{}}}};async function fl(e,t){const{placement:n,platform:a,elements:i}=e,s=await(a.isRTL==null?void 0:a.isRTL(i.floating)),l=yt(n),d=so(n),p=Gt(n)==="x",c=["left","top"].includes(l)?-1:1,f=s&&p?-1:1,u=typeof t=="function"?t(e):t;let{mainAxis:b,crossAxis:x,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return d&&typeof h=="number"&&(x=d==="end"?h*-1:h),p?{x:x*f,y:b*c}:{x:b*c,y:x*f}}const gl=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:a}=t,i=await fl(t,e);return{x:n+i.x,y:a+i.y,data:i}}}};function ml(e){return e==="x"?"y":"x"}const bl=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:a,placement:i}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:d={fn:M=>{let{x:w,y:z}=M;return{x:w,y:z}}},...p}=e,c={x:n,y:a},f=await xa(t,p),u=Gt(yt(i)),b=ml(u);let x=c[u],h=c[b];if(s){const M=u==="y"?"top":"left",w=u==="y"?"bottom":"right",z=x+f[M],O=x-f[w];x=dn(z,x,O)}if(l){const M=b==="y"?"top":"left",w=b==="y"?"bottom":"right",z=h+f[M],O=h-f[w];h=dn(z,h,O)}const y=d.fn({...t,[u]:x,[b]:h});return{...y,data:{x:y.x-n,y:y.y-a}}}}};function ya(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function ke(e){if(e==null)return window;if(!ya(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function ve(e){return ke(e).getComputedStyle(e)}function we(e){return ya(e)?"":e?(e.nodeName||"").toLowerCase():""}function Ea(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function Me(e){return e instanceof ke(e).HTMLElement}function Oe(e){return e instanceof ke(e).Element}function hl(e){return e instanceof ke(e).Node}function He(e){if(typeof ShadowRoot>"u")return!1;const t=ke(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Kt(e){const{overflow:t,overflowX:n,overflowY:a}=ve(e);return/auto|scroll|overlay|hidden/.test(t+a+n)}function xl(e){return["table","td","th"].includes(we(e))}function va(e){const t=/firefox/i.test(Ea()),n=ve(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&(n.filter?n.filter!=="none":!1)}function Ma(){return!/^((?!chrome|android).)*safari/i.test(Ea())}const un=Math.min,dt=Math.max,Pt=Math.round;function Ce(e,t,n){var a,i,s,l;t===void 0&&(t=!1),n===void 0&&(n=!1);const d=e.getBoundingClientRect();let p=1,c=1;t&&Me(e)&&(p=e.offsetWidth>0&&Pt(d.width)/e.offsetWidth||1,c=e.offsetHeight>0&&Pt(d.height)/e.offsetHeight||1);const f=Oe(e)?ke(e):window,u=!Ma()&&n,b=(d.left+(u&&(a=(i=f.visualViewport)==null?void 0:i.offsetLeft)!=null?a:0))/p,x=(d.top+(u&&(s=(l=f.visualViewport)==null?void 0:l.offsetTop)!=null?s:0))/c,h=d.width/p,y=d.height/c;return{width:h,height:y,top:x,right:b+h,bottom:x+y,left:b,x:b,y:x}}function Se(e){return((hl(e)?e.ownerDocument:e.document)||window.document).documentElement}function Zt(e){return Oe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ta(e){return Ce(Se(e)).left+Zt(e).scrollLeft}function yl(e){const t=Ce(e);return Pt(t.width)!==e.offsetWidth||Pt(t.height)!==e.offsetHeight}function El(e,t,n){const a=Me(t),i=Se(t),s=Ce(e,a&&yl(t),n==="fixed");let l={scrollLeft:0,scrollTop:0};const d={x:0,y:0};if(a||!a&&n!=="fixed")if((we(t)!=="body"||Kt(i))&&(l=Zt(t)),Me(t)){const p=Ce(t,!0);d.x=p.x+t.clientLeft,d.y=p.y+t.clientTop}else i&&(d.x=Ta(i));return{x:s.left+l.scrollLeft-d.x,y:s.top+l.scrollTop-d.y,width:s.width,height:s.height}}function $a(e){return we(e)==="html"?e:e.assignedSlot||e.parentNode||(He(e)?e.host:null)||Se(e)}function pn(e){return!Me(e)||ve(e).position==="fixed"?null:vl(e)}function vl(e){let{offsetParent:t}=e,n=e,a=!1;for(;n&&n!==t;){const{assignedSlot:i}=n;if(i){let s=i.offsetParent;if(ve(i).display==="contents"){const l=i.hasAttribute("style"),d=i.style.display;i.style.display=ve(n).display,s=i.offsetParent,i.style.display=d,l||i.removeAttribute("style")}n=i,t!==s&&(t=s,a=!0)}else if(He(n)&&n.host&&a)break;n=He(n)&&n.host||n.parentNode}return t}function Ml(e){let t=$a(e);for(He(t)&&(t=t.host);Me(t)&&!["html","body"].includes(we(t));){if(va(t))return t;{const n=t.parentNode;t=He(n)?n.host:n}}return null}function Or(e){const t=ke(e);let n=pn(e);for(;n&&xl(n)&&ve(n).position==="static";)n=pn(n);return n&&(we(n)==="html"||we(n)==="body"&&ve(n).position==="static"&&!va(n))?t:n||Ml(e)||t}function fn(e){if(Me(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=Ce(e);return{width:t.width,height:t.height}}function Tl(e){let{rect:t,offsetParent:n,strategy:a}=e;const i=Me(n),s=Se(n);if(n===s)return t;let l={scrollLeft:0,scrollTop:0};const d={x:0,y:0};if((i||!i&&a!=="fixed")&&((we(n)!=="body"||Kt(s))&&(l=Zt(n)),Me(n))){const p=Ce(n,!0);d.x=p.x+n.clientLeft,d.y=p.y+n.clientTop}return{...t,x:t.x-l.scrollLeft+d.x,y:t.y-l.scrollTop+d.y}}function $l(e,t){const n=ke(e),a=Se(e),i=n.visualViewport;let s=a.clientWidth,l=a.clientHeight,d=0,p=0;if(i){s=i.width,l=i.height;const c=Ma();(c||!c&&t==="fixed")&&(d=i.offsetLeft,p=i.offsetTop)}return{width:s,height:l,x:d,y:p}}function wl(e){var t;const n=Se(e),a=Zt(e),i=(t=e.ownerDocument)==null?void 0:t.body,s=dt(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=dt(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let d=-a.scrollLeft+Ta(e);const p=-a.scrollTop;return ve(i||n).direction==="rtl"&&(d+=dt(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:d,y:p}}function wa(e){const t=$a(e);return["html","body","#document"].includes(we(t))?e.ownerDocument.body:Me(t)&&Kt(t)?t:wa(t)}function qt(e,t){var n;t===void 0&&(t=[]);const a=wa(e),i=a===((n=e.ownerDocument)==null?void 0:n.body),s=ke(a),l=i?[s].concat(s.visualViewport||[],Kt(a)?a:[]):a,d=t.concat(l);return i?d:d.concat(qt(l))}function Cl(e,t){const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&He(n)){let a=t;do{if(a&&e===a)return!0;a=a.parentNode||a.host}while(a)}return!1}function Nl(e,t){const n=Ce(e,!1,t==="fixed"),a=n.top+e.clientTop,i=n.left+e.clientLeft;return{top:a,left:i,x:i,y:a,right:i+e.clientWidth,bottom:a+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function gn(e,t,n){return t==="viewport"?Lt($l(e,n)):Oe(t)?Nl(t,n):Lt(wl(Se(e)))}function Dl(e){const t=qt(e),a=["absolute","fixed"].includes(ve(e).position)&&Me(e)?Or(e):e;return Oe(a)?t.filter(i=>Oe(i)&&Cl(i,a)&&we(i)!=="body"):[]}function kl(e){let{element:t,boundary:n,rootBoundary:a,strategy:i}=e;const l=[...n==="clippingAncestors"?Dl(t):[].concat(n),a],d=l[0],p=l.reduce((c,f)=>{const u=gn(t,f,i);return c.top=dt(u.top,c.top),c.right=un(u.right,c.right),c.bottom=un(u.bottom,c.bottom),c.left=dt(u.left,c.left),c},gn(t,d,i));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}}const Il={getClippingRect:kl,convertOffsetParentRelativeRectToViewportRelativeRect:Tl,isElement:Oe,getDimensions:fn,getOffsetParent:Or,getDocumentElement:Se,getElementRects:e=>{let{reference:t,floating:n,strategy:a}=e;return{reference:El(t,Or(n),a),floating:{...fn(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>ve(e).direction==="rtl"};function Rl(e,t,n,a){a===void 0&&(a={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:l=!0,animationFrame:d=!1}=a,p=i&&!d,c=s&&!d,f=p||c?[...Oe(e)?qt(e):[],...qt(t)]:[];f.forEach(y=>{p&&y.addEventListener("scroll",n,{passive:!0}),c&&y.addEventListener("resize",n)});let u=null;if(l){let y=!0;u=new ResizeObserver(()=>{y||n(),y=!1}),Oe(e)&&!d&&u.observe(e),u.observe(t)}let b,x=d?Ce(e):null;d&&h();function h(){const y=Ce(e);x&&(y.x!==x.x||y.y!==x.y||y.width!==x.width||y.height!==x.height)&&n(),x=y,b=requestAnimationFrame(h)}return n(),()=>{var y;f.forEach(M=>{p&&M.removeEventListener("scroll",n),c&&M.removeEventListener("resize",n)}),(y=u)==null||y.disconnect(),u=null,d&&cancelAnimationFrame(b)}}const Ol=(e,t,n)=>ol(e,t,{platform:Il,...n});var Ar=typeof document<"u"?m.useLayoutEffect:m.useEffect;function Bt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,a,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!Bt(e[a],t[a]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[a]))return!1;for(a=n;a--!==0;){const s=i[a];if(!(s==="_owner"&&e.$$typeof)&&!Bt(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function Al(e){const t=te.useRef(e);return Ar(()=>{t.current=e}),t}function Sl(e){let{middleware:t,placement:n="bottom",strategy:a="absolute",whileElementsMounted:i}=e===void 0?{}:e;const[s,l]=te.useState({x:null,y:null,strategy:a,placement:n,middlewareData:{}}),[d,p]=te.useState(t);Bt(d==null?void 0:d.map($=>{let{name:v,options:Y}=$;return{name:v,options:Y}}),t==null?void 0:t.map($=>{let{name:v,options:Y}=$;return{name:v,options:Y}}))||p(t);const c=te.useRef(null),f=te.useRef(null),u=te.useRef(null),b=te.useRef(s),x=Al(i),h=te.useCallback(()=>{!c.current||!f.current||Ol(c.current,f.current,{middleware:d,placement:n,strategy:a}).then($=>{y.current&&!Bt(b.current,$)&&(b.current=$,bi.flushSync(()=>{l($)}))})},[d,n,a]);Ar(()=>{y.current&&h()},[h]);const y=te.useRef(!1);Ar(()=>(y.current=!0,()=>{y.current=!1}),[]);const M=te.useCallback(()=>{if(typeof u.current=="function"&&(u.current(),u.current=null),c.current&&f.current)if(x.current){const $=x.current(c.current,f.current,h);u.current=$}else h()},[h,x]),w=te.useCallback($=>{c.current=$,M()},[M]),z=te.useCallback($=>{f.current=$,M()},[M]),O=te.useMemo(()=>({reference:c,floating:f}),[]);return te.useMemo(()=>({...s,update:h,refs:O,reference:w,floating:z}),[s,h,O,w,z])}const zl=(e,t,{selectorToWatch:n,skipWhen:a=!1})=>{m.useEffect(()=>{if(a)return;const i={root:e.current,rootMargin:"0px"},s=p=>{p.forEach(c=>{c.isIntersecting&&e.current.scrollHeight>e.current.clientHeight&&t(c)})},l=new IntersectionObserver(s,i),d=e.current.querySelector(n);return l.observe(d),()=>{l.disconnect()}},[a,t,n])},lo=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],Ll=g.default(E)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: 4;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,jl=g.default(E)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3*5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral150};
    border-radius: ${({theme:e})=>e.borderRadius};
    margin-right: 10px;
  }
`,co=({source:e,children:t,spacing:n,fullWidth:a,placement:i,onReachEnd:s,intersectionId:l,centered:d,...p})=>{const c=te.useRef(null),[f,u]=te.useState(void 0),{x:b,y:x,reference:h,floating:y,strategy:M}=Sl({strategy:"fixed",placement:d?"bottom":i,middleware:[gl({mainAxis:n}),bl(),pl()],whileElementsMounted:Rl});return te.useLayoutEffect(()=>{h(e.current)},[e]),te.useLayoutEffect(()=>{a&&u(e.current.offsetWidth)},[a]),zl(c,s,{selectorToWatch:`#${l}`,skipWhen:!l||!s}),te.createElement(Ll,{ref:y,style:{left:b,top:x,position:M,width:f||void 0},hasRadius:!0,background:"neutral0",padding:1},te.createElement(jl,{ref:c,...p},t,l&&s&&te.createElement(E,{id:l,width:"100%",height:"1px"})))},Ue=e=>te.createElement(xt,null,te.createElement(co,{...e})),Ca={fullWidth:!1,intersectionId:void 0,onReachEnd:void 0,centered:!1,placement:"bottom-start"},Na={centered:r.exports.bool,children:r.exports.node.isRequired,fullWidth:r.exports.bool,intersectionId:r.exports.string,onReachEnd:r.exports.func,placement:r.exports.oneOf(lo),source:r.exports.shape({current:(typeof Element>"u"?r.exports.any:r.exports.instanceOf(Element)).isRequired}).isRequired,spacing:r.exports.number};co.propTypes=Na;co.defaultProps=Ca;Ue.propTypes=Na;Ue.defaultProps=Ca;const Pl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA2MyA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjU1NjMgMTEuOTgxNkMzOS40ODQgMTAuMzA3MSAzNS44NTc1IDkuMjkwOTcgMzIuMzM1NCA5LjEzNTIxQzI4LjY0NDMgOC45Mjg4OCAyNC44Mjk1IDkuNzIzMTggMjEuMzMzNiAxMS40MTI5QzIwLjkxMjMgMTEuNTkwMSAyMC41Mzc2IDExLjgxMDEgMjAuMTcyMiAxMi4wMjQ5TDIwLjAxMDggMTIuMTE3OUMxOS44Nzc0IDEyLjE5NTEgMTkuNzQ0MSAxMi4yNzI0IDE5LjYwOCAxMi4zNTM2QzE5LjMyNTMgMTIuNTE0NiAxOS4wNDkyIDEyLjY3NDQgMTguNzU0NCAxMi44NzkyQzE4LjU0NjMgMTMuMDMyOSAxOC4zMzk1IDEzLjE3NTkgMTguMTMwMSAxMy4zMjNDMTcuNTY1OCAxMy43MjA4IDE2Ljk4NjggMTQuMTMxNyAxNi40OTgzIDE0LjU5NzlDMTQuODQ3NiAxNS45NTI0IDEzLjU1NzEgMTcuNjA3NSAxMi42MDcxIDE4LjkyMTRDMTAuNDM2NSAyMi4xNTY2IDkuMDg2MjIgMjUuOTU2NyA4LjgwNzAyIDI5LjYxNDNMOC43NzY0IDMwLjE1ODhDOC43MzMyOCAzMC45MTk2IDguNjg0NzYgMzEuNzA1NyA4Ljc1MzUzIDMyLjQ1NTVDOC43NjY0OCAzMi42MDg0IDguNzY2MSAzMi43NjM4IDguNzc1MDYgMzIuOTE0QzguNzg4OTUgMzMuMjI5IDguODAxNTIgMzMuNTM3MyA4Ljg0NiAzMy44NjcyTDkuMDczOTYgMzUuNDIyMUM5LjA5NzU2IDM1LjU3NjQgOS4xMTk4IDM1Ljc0MTMgOS4xNjMzIDM1LjkyNjNMOS42NTkxOSAzNy45MjcyTDEwLjEzOCAzOS4yODIzQzEwLjI3MjkgMzkuNjY3MyAxMC40MTU4IDQwLjA3NTEgMTAuNiA0MC40M0MxMi4wMjkyIDQzLjYzNyAxNC4xNDI1IDQ2LjQ1NzggMTYuNzA2MyA0OC41ODVDMTkuMDUwOCA1MC41Mjk2IDIxLjgyNCA1Mi4wMDIzIDI0Ljc0OTEgNTIuODQ1MkwyNi4yMzcxIDUzLjIzNzZDMjYuMzc4MSA1My4yNjkzIDI2LjQ5MjYgNTMuMjg4OSAyNi42MDMxIDUzLjMwNThMMjYuNzc3NSA1My4zMzExQzI3LjAwNTIgNTMuMzYzNiAyNy4yMTk1IDUzLjM5ODYgMjcuNDQ0NSA1My40MzVDMjcuODU5OCA1My41MDc2IDI4LjI2NzIgNTMuNTc0OCAyOC43MDc5IDUzLjYxODNMMzAuNTY0MSA1My43MjI5QzMwLjk1MTYgNTMuNzI0OSAzMS4zMzUyIDUzLjcwNjggMzEuNzA4MSA1My42ODc0QzMxLjkwMzkgNTMuNjgxIDMyLjA5ODQgNTMuNjY4MSAzMi4zMjg4IDUzLjY2MkMzNC41MjUzIDUzLjQ3NzIgMzYuNTEwNiA1My4wNjM0IDM4LjA1MTYgNTIuNDY1MkMzOC4xNzY5IDUyLjQxNzEgMzguMzAwOCA1Mi4zNzk2IDM4LjQyMzQgNTIuMzM1NUMzOC42NzI3IDUyLjI0OTkgMzguOTI1OSA1Mi4xNjcgMzkuMTQzMiA1Mi4wNTk5TDQwLjg1OTEgNTEuMjYyNkw0Mi41NzAyIDUwLjI2NkM0Mi45MDA5IDUwLjA2ODIgNDMuMDIwNSA0OS42NDE0IDQyLjgyODIgNDkuMjk4NEM0Mi42MzIgNDguOTUyNiA0Mi4yMDM0IDQ4LjgzMDggNDEuODYzNCA0OS4wMTY2TDQwLjE3OTIgNDkuOTIxOEwzOC40OTk1IDUwLjYyMjRDMzguMzE2OSA1MC42OTUzIDM4LjEyMSA1MC43NTM0IDM3LjkyMjQgNTAuODE1NUMzNy43ODM4IDUwLjg0ODkgMzcuNjUxOCA1MC44OTgzIDM3LjUwMTIgNTAuOTQwOEMzNi4wNzExIDUxLjQzNSAzNC4yNDQ1IDUxLjc0MjUgMzIuMjQ0IDUxLjgzNDZDMzIuMDQ0MiA1MS44MzgzIDMxLjg0NzEgNTEuODM3OSAzMS42NTQgNTEuODQwM0MzMS4zMDUxIDUxLjg0MTQgMzAuOTYwMiA1MS44NDUxIDMwLjYzOTIgNTEuODMwNUwyOC45MTc3IDUxLjY3MjVDMjguNTQ3NiA1MS42MTkgMjguMTY5NSA1MS41NDI3IDI3Ljc4NDggNTEuNDY3OEMyNy41NjM5IDUxLjQxNjcgMjcuMzM3NiA1MS4zNzM3IDI3LjEyOTkgNTEuMzM3NEwyNi45NTI5IDUxLjI5ODdDMjYuODcwNCA1MS4yODM0IDI2Ljc3NzIgNTEuMjY2NyAyNi43MzMzIDUxLjI1NDNMMjUuMzQ2NiA1MC44MzIyQzIyLjc2NTEgNDkuOTc4OSAyMC4zMyA0OC41NzI5IDE4LjI5NDIgNDYuNzU1N0MxNi4xMDU2IDQ0Ljc5NTEgMTQuMzMzOSA0Mi4yMzM1IDEzLjE3NDIgMzkuMzU4MkMxMi4wMjc2IDM2LjYwMTMgMTEuNTk4OCAzMy4yNzkyIDExLjk3MTYgMzAuMDA3NkMxMi4zMTQ1IDI3LjAyMTMgMTMuMzk0OCAyNC4xNjM1IDE1LjE4NTggMjEuNTA4M0MxNS4zMDM0IDIxLjMzMzkgMTUuNDIxIDIxLjE1OTYgMTUuNTIxMiAyMS4wMTk2QzE2LjQzMDkgMTkuODY4OCAxNy41NDA4IDE4LjU1ODkgMTguOTQ4MyAxNy40OTZDMTkuMzM2NyAxNy4xNTI1IDE5Ljc4NjIgMTYuODU2IDIwLjI2MTEgMTYuNTQ3OEMyMC40ODc4IDE2LjQwMDkgMjAuNzA3OSAxNi4yNTUzIDIwLjg5MDcgMTYuMTMwNkMyMS4wOTc0IDE2LjAwNDggMjEuMzE4OCAxNS44ODMxIDIxLjUzNDggMTUuNzY5NEMyMS42NzYxIDE1LjY5NzUgMjEuODE2MiAxNS42MTkgMjEuOTM4OCAxNS41NTc2TDIyLjEwMDIgMTUuNDY0NkMyMi40MDAyIDE1LjMwMzcgMjIuNjc0OSAxNS4xNTQ2IDIyLjk5MDggMTUuMDM5TDI0LjExODYgMTQuNTcxNUMyNC4zMzk5IDE0LjQ4NDQgMjQuNTcxOCAxNC40MTU5IDI0Ljc5OTcgMTQuMzQ0N0MyNC45NTMgMTQuMjk4MiAyNS4wOTgyIDE0LjI2MzUgMjUuMjYzNSAxNC4yMDc4QzI1Ljc4NiAxNC4wMTgyIDI2LjMyODMgMTMuOTExMiAyNi45MTA1IDEzLjc5NjVDMjcuMTE3IDEzLjc1NzEgMjcuMzMwMiAxMy43MTYzIDI3LjU2MDggMTMuNjU4NUMyNy43NTUzIDEzLjYxMSAyNy45NzM3IDEzLjU5NjkgMjguMjA4MiAxMy41NzYyQzI4LjM2NCAxMy41NjAzIDI4LjUxNzIgMTMuNTQ4MyAyOC42MzE4IDEzLjUzMzNDMjguNzg3NiAxMy41MTczIDI4LjkzNDIgMTMuNTA2NiAyOS4wOTI3IDEzLjQ4NjdDMjkuMzI4NSAxMy40NTU1IDI5LjU0NTYgMTMuNDM0NyAyOS43NDk0IDEzLjQzMzdDMzAuMDIzNyAxMy40NCAzMC4yOTk0IDEzLjQzNTcgMzAuNTc3NyAxMy40Mjc0QzMxLjA4MTEgMTMuNDIxIDMxLjU1NzkgMTMuNDE5NyAzMi4wMzE4IDEzLjQ5MTRDMzQuOTY2NCAxMy43MzUyIDM3LjcxNDQgMTQuNjA4NSA0MC4yMDUyIDE2LjA4NjhDNDIuMzQ4OSAxNy4zNjU1IDQ0LjI3MTYgMTkuMTUyNSA0NS43NjA3IDIxLjI2NEM0Ny4wMjU1IDIzLjA2MjggNDcuOTc1NiAyNS4wNTI4IDQ4LjQ5MjggMjcuMDM5M0M0OC41NzIgMjcuMzE3NiA0OC42Mjk5IDI3LjU5MzEgNDguNjgzOSAyNy44NjU5QzQ4LjcxNTQgMjguMDQyOCA0OC43NTYzIDI4LjIxNDUgNDguNzg5MiAyOC4zNjM2QzQ4LjgwMzcgMjguNDU0MSA0OC44MjA4IDI4LjU0MDYgNDguODQ0NSAyOC42MjU4QzQ4Ljg3NDkgMjguNzQ0MyA0OC44OTg2IDI4Ljg2NCA0OC45MTE2IDI4Ljk2NTFMNDguOTc5MyAyOS42MDQ3QzQ4Ljk5MjIgMjkuNzc0OCA0OS4wMTMyIDI5LjkzMzEgNDkuMDMwMSAzMC4wODg3QzQ5LjA2NjggMzAuMzI2OCA0OS4wODg5IDMwLjU2MDggNDkuMDk2NCAzMC43NTYxTDQ5LjEwODMgMzEuOTAwMUM0OS4xMzEyIDMyLjMzMDcgNDkuMDg5IDMyLjcxMTYgNDkuMDUyMiAzMy4wNjczQzQ5LjAzODQgMzMuMjU5OCA0OS4wMTI2IDMzLjQ0NDMgNDkuMDEyMyAzMy41ODI0QzQ4Ljk5NjEgMzMuNjkyNiA0OC45OTE4IDMzLjc5MzUgNDguOTgzNiAzMy44OTE3QzQ4Ljk3NTMgMzQuMDA3MiA0OC45NzI0IDM0LjExNDggNDguOTQxNCAzNC4yNTU0TDQ4LjU0NDkgMzYuMzA1OUM0OC4zMTM0IDM3Ljg2MjMgNDkuMzc5MyAzOS4zMzY1IDUwLjk0ODggMzkuNTgyMkM1Mi4wNDE3IDM5Ljc2MDEgNTMuMTUzNiAzOS4yODE5IDUzLjc3MTEgMzguMzY2NEM1NC4wMDYzIDM4LjAxNzYgNTQuMTYwNCAzNy42MjU3IDU0LjIyMjcgMzcuMjA2NEw1NC41MjE3IDM1LjI1NzRDNTQuNTUxNCAzNS4wNzU2IDU0LjU3MiAzNC44MyA1NC41ODQ2IDM0LjU3OTFMNTQuNjAyOCAzNC4yMzM4QzU0LjYwOTggMzQuMDU5OCA1NC42MjIzIDMzLjg3NzkgNTQuNjM0NyAzMy42Nzg4QzU0LjY3MzQgMzMuMTA1MiA1NC43MTYzIDMyLjQ0NzkgNTQuNjYxOSAzMS44MDU4TDU0LjU4NjcgMzAuNDI4OUM1NC41NjIyIDMwLjA5NTIgNTQuNTA5NyAyOS43NiA1NC40NTU5IDI5LjQxODFDNTQuNDMxIDI5LjI1NzIgNTQuNDA0OCAyOS4wODk2IDU0LjM4MjYgMjguOTA3NEw1NC4yNjg3IDI4LjEwNEM1NC4yMzMyIDI3LjkyNDQgNTQuMTgwNCAyNy43MjczIDU0LjEzMjkgMjcuNTM5Nkw1NC4wNjQzIDI3LjI0NTRDNTQuMDE5NSAyNy4wNzEgNTMuOTc3MyAyNi44OTI3IDUzLjkzMzggMjYuNzA3NkM1My44NDU1IDI2LjMzMDkgNTMuNzQ3OSAyNS45NDIyIDUzLjYxMyAyNS41NTcxQzUyLjg0IDIzLjAyOTIgNTEuNTM4MyAyMC41MTk0IDQ5LjgzMzggMTguMjc5OUM0Ny44NTQ0IDE1LjY4MiA0NS4zMzMzIDEzLjUwODcgNDIuNTU2MyAxMS45ODE2WiIgZmlsbD0iIzQ5NDVGRiIvPgo8L3N2Zz4K",ql=Pe.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Bl=g.default.img`
  animation: ${ql} 1s infinite linear;
  will-change: transform;
  ${({small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,Et=m.forwardRef(({children:e,small:t,...n},a)=>o.default.createElement("div",{role:"alert","aria-live":"assertive",ref:a,...n},o.default.createElement(se,null,e),o.default.createElement(Bl,{src:Pl,"aria-hidden":!0,small:t})));Et.displayName="Loader";Et.defaultProps={small:!1};Et.propTypes={children:r.exports.node.isRequired,small:r.exports.bool};const Wl=g.default(k)`
  position: relative;
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  padding-right: ${({theme:e})=>e.spaces[3]};
  padding-left: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${({theme:e,$disabled:t})=>t?`
    color: ${e.colors.neutral600};
    background: ${e.colors.neutral150};
  `:void 0}

  ${qe()}
`,Ul=g.default.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`,Fl=g.default(k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`,Yl=g.default.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40/16}rem;
  border: none;
  flex: 1;
  font-size: ${14/16}rem;
  color: ${({theme:e})=>e.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`,Ql=g.default(E)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({isSelected:e,theme:t})=>e&&`background: ${t.colors.primary100};`}

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,vt=m.forwardRef(({isSelected:e,children:t,...n},a)=>o.default.createElement(Ql,{hasRadius:!0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,role:"option",background:"neutral0",isSelected:e,ref:a,...n},o.default.createElement(C,{textColor:e?"primary600":"neutral800",fontWeight:e?"bold":null},t)));vt.defaultProps={isSelected:!1};vt.propTypes={children:r.exports.oneOfType([r.exports.string,r.exports.number]).isRequired,isSelected:r.exports.bool};vt.displayName="ComboboxOption";const uo=({options:e,activeOptionRef:t})=>(m.useEffect(()=>{t.current&&ma(t.current)},[]),e);uo.defaultProps={activeOptionRef:void 0};uo.propTypes={options:r.exports.array.isRequired};const Mt=({children:e,clearLabel:t,creatable:n,createMessage:a,disabled:i,error:s,hasMoreItems:l,hint:d,label:p,labelAction:c,loading:f,loadingMessage:u,noOptionsMessage:b,onChange:x,onClear:h,onCreateOption:y,onInputChange:M,onLoadMore:w,placeholder:z,required:O,value:$,...v})=>{const Y=()=>{var ee;return(ee=e.find(ae=>{var pe;return((pe=ae.props)==null?void 0:pe.value.toLowerCase())===$.toLowerCase()}).props)==null?void 0:ee.children},[N,I]=m.useState(0),[q,K]=m.useState(null),[U,Z]=m.useState(e),[_,oe]=m.useState(!1),[F,ne]=m.useState(""),ce=m.useRef(),ue=m.useRef(!1),T=m.useRef(),R=m.useRef(),D=m.useRef(),P=m.useRef(!0),S=ie("combobox"),B=`${S}-label`;if(!p&&!v["aria-label"])throw new Error('The Combobox component needs a "label" or an "aria-label" props');m.useEffect(()=>{Z(sn(e,F))},[F,e]),m.useEffect(()=>{_&&ce.current&&ma(ce.current)},[N]),m.useLayoutEffect(()=>{if(P.current){P.current=!1;return}},[$]);const j=_?`${S}-${N}`:"",W=()=>{x(null),ne("")},Q=ee=>{M&&M(ee);const ae=T.current.value;Z(sn(e,ae)),I(0),K(null),F!==ae&&ne(ae),_||ge(!0,!1)},H=ee=>{const{key:ae}=ee,pe=n&&F?U.length:U.length-1,Fe=tl(ae,_);switch($&&!F&&ae===L.BACKSPACE&&W(),Fe){case de.Next:return le(N===pe?0:$r(N,pe,Fe));case de.Previous:return le(N===0?pe:$r(N,pe,Fe));case de.Last:case de.First:return le(N===pe?0:$r(N,pe,Fe));case de.CloseSelect:ee.preventDefault(),ze(N);return;case de.Close:return ee.preventDefault(),ge(!1);case de.Open:return ge(!0);default:return}},G=ee=>{if(ee.preventDefault(),$&&!ue.current&&ne(""),ue.current){ue.current=!1;return}ge(!1,!1)},le=ee=>{I(ee)},fe=ee=>{le(ee),ze(ee)},A=()=>{ue.current=!0},ze=ee=>{const ae=U[ee];if(ne(""),ae)return x(ae.props.value),ge(!1);n&&(y(F),ge(!1))},ge=(ee,ae=!0)=>{oe(ee),ae&&T.current.focus()},Rt=m.Children.toArray(U).map((ee,ae)=>{const pe=N===ae;return m.cloneElement(ee,{id:`${S}-${ae}`,"aria-selected":q===ae,"aria-posinset":ae+1,"aria-setsize":m.Children.toArray(U).length,ref:Fe=>{pe&&(ce.current=Fe)},onClick:()=>fe(ae),onMouseDown:A,isSelected:pe})}),pi=()=>{T.current.focus(),h&&h(),W()},fi=()=>{T.current.focus(),ge(!0)},gi=()=>{const ee=U.findIndex(ae=>{var pe;return((pe=ae.props)==null?void 0:pe.children)===F});return F&&ee===-1},mi=ee=>{ee.preventDefault(),ge(ee,!0)};return o.default.createElement(be,{hint:d,error:s,id:S},o.default.createElement(se,{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text"},$),o.default.createElement(re,{spacing:p||d||s?1:0},p&&o.default.createElement(xe,{action:c,required:O,id:B},p),o.default.createElement(Wl,{ref:R,$disabled:i,hasError:s},o.default.createElement(Fl,{wrap:"wrap"},!F&&$&&o.default.createElement(Ul,{id:`${S}-selected-value`},o.default.createElement(C,null,Y())),o.default.createElement(Yl,{"aria-activedescendant":j,"aria-autocomplete":"list","aria-controls":`${S}-listbox`,"aria-disabled":i,"aria-expanded":_,"aria-haspopup":"listbox","aria-labelledby":p?B:void 0,id:S,onBlur:i?void 0:G,onClick:i?void 0:mi,onInput:i?void 0:Q,onKeyDown:i?void 0:H,placeholder:$?"":z,readOnly:i,ref:T,role:"combobox",autoComplete:"off",autoCorrect:"off",spellCheck:"off",type:"text",value:F})),o.default.createElement(k,null,($||F)&&o.default.createElement(io,{id:`${S}-clear`,"aria-label":t,disabled:i,paddingLeft:3,as:"button",onClick:pi,type:"button"},o.default.createElement(V.Cross,null)),o.default.createElement(ba,{disabled:i,paddingLeft:3,"aria-hidden":!0,as:"button",onClick:fi,tabIndex:-1,type:"button"},o.default.createElement(V.CarretDown,null)))),o.default.createElement(Ne,null),o.default.createElement(De,null)),_&&o.default.createElement(Ue,{id:`${S}-popover`,source:R,spacing:4,fullWidth:!0,intersectionId:`${S}-listbox-popover-intersection`,onReachEnd:l&&!f?w:void 0},o.default.createElement("div",{role:"listbox",ref:D,id:`${S}-listbox`,"aria-labelledby":p?B:void 0},(Boolean(U.length)||n)&&o.default.createElement(o.default.Fragment,null,o.default.createElement(uo,{activeOptionRef:ce,options:Rt}),gi()&&n&&o.default.createElement(vt,{isSelected:N===U.length,ref:ee=>{N===U.length&&(ce.current=ee)},onMouseDown:A,onClick:()=>ze(),taindex:0},a(F))),!Boolean(U.length)&&!n&&!f&&o.default.createElement(E,{paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:ce},o.default.createElement(C,{textColor:"neutral800"},b(F))),f&&o.default.createElement(k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2},o.default.createElement(Et,{small:!0},u)))))},po=e=>o.default.createElement(Mt,{...e,creatable:!0});Mt.defaultProps=po.defaultProps={"aria-label":void 0,clearLabel:"clear",creatable:!1,createMessage:e=>`Create "${e}"`,disabled:!1,error:void 0,hasMoreItems:!1,hint:void 0,label:void 0,loading:!1,loadingMessage:"Loading content...",noOptionsMessage:()=>"No results found",onClear:void 0,onCreateOption:void 0,onInputChange:void 0,onLoadMore:void 0,placeholder:"Select or enter a value",value:void 0};Mt.propTypes={"aria-label":r.exports.string,children:r.exports.oneOfType([r.exports.arrayOf(r.exports.node),r.exports.node]),clearLabel:r.exports.string,creatable:r.exports.bool,createMessage:r.exports.func,disabled:r.exports.bool,error:r.exports.string,hasMoreItems:r.exports.bool,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),label:r.exports.string,labelAction:r.exports.element,loading:r.exports.bool,loadingMessage:r.exports.string,noOptionsMessage:r.exports.func,onChange:r.exports.func.isRequired,onClear:r.exports.func,onCreateOption:r.exports.func,onInputChange:r.exports.func,onLoadMore:r.exports.func,placeholder:r.exports.string,value:r.exports.string};po.propTypes={...Mt.propTypes,onCreateOption:r.exports.func.isRequired};const Ye=(e,t)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(i=>i.hasAttribute("disabled")?!1:t?!0:i.getAttribute("tabindex")!=="-1"),wr=e=>e.filter(t=>t.tagName==="INPUT"?t.type!=="checkbox"&&t.type!=="radio":!1),ot=({onEscape:e,restoreFocus:t,...n})=>{const a=m.useRef(null);m.useEffect(()=>{if(t){const s=document.activeElement;return()=>{s.focus()}}},[t]),m.useEffect(()=>{if(!a.current)return;const s=Ye(a.current);s.length>0?s[0].focus():console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.")},[]);const i=s=>{if(s.key===L.ESCAPE)return e();if(s.key!==L.TAB)return;const l=Ye(a.current);if(l.length>0){const d=l[0],p=l[l.length-1];s.shiftKey?d===document.activeElement&&(s.preventDefault(),p.focus()):p===document.activeElement&&(s.preventDefault(),d.focus())}};return o.default.createElement("div",{ref:a,onKeyDown:i,...n})};ot.defaultProps={restoreFocus:!0};ot.propTypes={onEscape:r.exports.func.isRequired,restoreFocus:r.exports.bool};const _l=(e,t)=>`${e}${Math.floor(t*255).toString(16).padStart(2,0)}`,Hl=e=>{m.useEffect(()=>(e&&document.body.classList.add("lock-body-scroll"),()=>{document.body.classList.remove("lock-body-scroll")}),[e])},Vl=g.default.div`
  position: fixed;
  z-index: 4;
  inset: 0;
  background: ${({theme:e})=>_l(e.colors.neutral800,.2)};
  padding: 0 ${({theme:e})=>e.spaces[8]};
`,Gl=g.default(E)`
  max-width: ${412/16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`,Kl=g.default(k)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Xt=({onClose:e,title:t,as:n,isOpen:a,id:i,...s})=>{const l=ie("dialog",i);if(Hl(a),!a)return null;const d=`${l}-label`;return o.default.createElement(xt,null,o.default.createElement(Vl,null,o.default.createElement(ot,{onEscape:e},o.default.createElement(Gl,{"aria-labelledby":d,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog"},o.default.createElement(Kl,{padding:6,justifyContent:"center"},o.default.createElement(C,{variant:"beta",as:n||"h2",id:d},t)),o.default.createElement(E,{...s})))))};Xt.displayName="Dialog";Xt.defaultProps={as:"h2",id:void 0};Xt.propTypes={as:r.exports.string,id:r.exports.oneOfType([r.exports.string,r.exports.number]),isOpen:r.exports.bool.isRequired,onClose:r.exports.func.isRequired,title:r.exports.string.isRequired};const Zl=g.default(E)`
  svg {
    width: ${({theme:e})=>e.spaces[6]};
    height: ${({theme:e})=>e.spaces[6]};

    path {
      fill: ${({theme:e})=>e.colors.danger600};
    }
  }
`,fo=({children:e,icon:t})=>o.default.createElement(E,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6},t&&o.default.createElement(Zl,{paddingBottom:2},o.default.createElement(k,{justifyContent:"center"},t)),e);fo.displayName="DialogBody";fo.propTypes={children:r.exports.node.isRequired,icon:r.exports.node};const Xl=g.default(E)`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`,Jt=({startAction:e,endAction:t})=>o.default.createElement(Xl,{padding:4},o.default.createElement(re,{horizontal:!0,spacing:2},e,t));Jt.displayName="DialogFooter";Jt.defaultProps={endAction:void 0,startAction:void 0};Jt.propTypes={endAction:r.exports.node,startAction:r.exports.node};const Tt=o.default.forwardRef(({size:e,startAction:t,endAction:n,name:a,hint:i,error:s,label:l,labelAction:d,id:p,required:c,...f},u)=>{const b=ie("textinput",p),x=m.useRef(null);if(!l&&!f["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return m.useImperativeHandle(u,()=>({inputWrapperRef:x})),o.default.createElement("div",{ref:x},o.default.createElement(be,{name:a,hint:i,error:s,id:b},o.default.createElement(re,{spacing:1},l&&o.default.createElement(xe,{required:c,action:d},l),o.default.createElement(We,{size:e,ref:u,startAction:t,endAction:n,...f}),o.default.createElement(Ne,null),o.default.createElement(De,null))))});Tt.displayName="TextInput";Tt.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,startAction:void 0,size:"M",endAction:void 0,required:!1};Tt.propTypes={"aria-label":r.exports.string,endAction:r.exports.element,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.string,label:r.exports.string,labelAction:r.exports.element,name:r.exports.string.isRequired,required:r.exports.bool,size:r.exports.oneOf(Object.keys(Te.input)),startAction:r.exports.element};const Jl=g.default(Ue)`
  max-height: ${3*6}rem;
  overflow: hidden;
`,ed=g.default.button`
  border: none;
  background: transparent;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  & svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,td=g.default.div`
  ${({bold:e,theme:t})=>e?`& ${ut} {
  border: 1px solid ${t.colors.primary600};
}`:void 0}
`,rd=g.default(E)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,Da=({theme:e})=>`
    text-align: left;
    width: 100%;
    color: ${e.colors.neutral800};
    border-radius: ${e.borderRadius};
    &:focus {
        background-color: ${e.colors.primary100};
    }
    &:not([aria-disabled]):hover {
        background-color: ${e.colors.primary100};
    }
`,od=g.default.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${Da}
`,nd=g.default($e.NavLink)`
  text-decoration: none;
  ${Da}
`,ad=g.default.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`,id=g.default(tt)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[3]}`};
`,pt=({children:e,onClick:t,to:n,isFocused:a,...i})=>{const s=m.useRef();m.useEffect(()=>{a&&s.current&&s.current.focus()},[a]);const l={tabIndex:a?0:-1,ref:s,role:"menuitem",...i},d=p=>{(p.key===L.SPACE||p.key===L.ENTER)&&t()};return n?o.default.createElement(nd,{to:n,...l},o.default.createElement(E,{padding:2},o.default.createElement(C,null,e))):o.default.createElement(od,{onKeyDown:d,onMouseDown:t,type:"button",...l},o.default.createElement(E,{padding:2},o.default.createElement(C,null,e)))};pt.defaultProps={onClick:()=>{},isFocused:!1,to:void 0};pt.propTypes={as:r.exports.elementType,children:r.exports.node.isRequired,isFocused:r.exports.bool,onClick:r.exports.func,to:r.exports.string};const Le=({label:e,children:t,id:n,as:a,onOpen:i=()=>{},onClose:s=()=>{},size:l,popoverPlacement:d,...p})=>{const c=m.useRef(),f=ie("simplemenu",n),u=m.useRef(!1),[b,x]=m.useState(!1),[h,y]=m.useState(0),M=m.Children.toArray(t),z=a||(l==="S"?id:tt);m.useEffect(()=>{if(["string","number"].includes(typeof e)){const I=M.findIndex(q=>q.props.children===e);I!==-1&&y(I)}},[e]),m.useEffect(()=>{u!=null&&u.current?b&&typeof i=="function"?i():typeof s=="function"&&s():u.current=!0},[u,b]),m.useEffect(()=>{o.default.isValidElement(e)&&h==-1&&c.current.focus()},[e,h]);const O=I=>{b&&(I.key===L.ESCAPE&&(I.stopPropagation(),x(!1),c.current.focus()),I.key===L.DOWN&&y(q=>q===M.length-1?0:q+1),I.key===L.UP&&y(q=>q===0?M.length-1:q-1))},$=I=>{(I.key===L.ENTER||I.key===L.SPACE)&&x(q=>!q)},v=I=>{I.preventDefault(),I.currentTarget.contains(I.relatedTarget)||x(!1)},Y=I=>{I.preventDefault(),x(q=>!q)},N=M.map((I,q)=>o.default.createElement(k,{as:"li",key:q,justifyContent:"center",role:"menuitem"},m.cloneElement(I,{onClick:()=>{I.props.onClick(),x(!1),c.current.focus()},isFocused:h===q})));return o.default.createElement("div",{onKeyDown:O},o.default.createElement(z,{label:o.default.isValidElement(e)?null:e,"aria-haspopup":!0,"aria-expanded":b,"aria-controls":f,onKeyDown:$,onMouseDown:Y,ref:c,type:"button",variant:"ghost",endIcon:o.default.createElement(ad,null,o.default.createElement(V.CarretDown,{"aria-hidden":!0})),...p},e),b&&o.default.createElement(Ue,{onBlur:v,placement:d,source:c,spacing:4},o.default.createElement(E,{role:"menu",as:"ul",padding:1,id:f},N)))};Le.defaultProps={as:void 0};Le.displayName="SimpleMenu";Le.defaultProps={popoverPlacement:"bottom-start",size:"M"};Le.propTypes={as:r.exports.any,children:r.exports.oneOfType([r.exports.arrayOf(r.exports.node),r.exports.node]).isRequired,id:r.exports.string,label:r.exports.oneOfType([r.exports.string,r.exports.number,r.exports.element]).isRequired,onClose:r.exports.func,onOpen:r.exports.func,popoverPlacement:r.exports.oneOf(lo),size:r.exports.oneOf(["S","M"])};const ka=m.createContext({rowIndex:0,colIndex:0,setTableValues:()=>{throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),sd=()=>m.useContext(ka),ld=e=>{const t=e.querySelector('[tabindex="0"]');t&&t.focus()},$t=({colCount:e,rowCount:t,jumpStep:n,initialCol:a,initialRow:i,...s})=>{const l=m.useRef(null),d=m.useRef(!1),[p,c]=m.useState(i),[f,u]=m.useState(a),b=m.useCallback(({colIndex:h,rowIndex:y})=>{u(h),c(y)},[]);m.useEffect(()=>{d.current&&ld(l.current),d.current||(d.current=!0)},[f,p]);const x=h=>{switch(h.key){case L.RIGHT:{h.preventDefault(),u(y=>y<e-1?y+1:y);break}case L.LEFT:{h.preventDefault(),u(y=>y>0?y-1:y);break}case L.UP:{h.preventDefault(),c(y=>y>0?y-1:y);break}case L.DOWN:{h.preventDefault(),c(y=>y<t-1?y+1:y);break}case L.HOME:{h.preventDefault(),h.ctrlKey&&c(0),u(0);break}case L.END:{h.preventDefault(),h.ctrlKey&&c(t-1),u(e-1);break}case L.PAGE_DOWN:{h.preventDefault(),c(y=>y+n<t?y+n:t-1);break}case L.PAGE_UP:{h.preventDefault(),c(y=>y-n>0?y-n:0);break}}};return o.default.createElement(ka.Provider,{value:{rowIndex:p,colIndex:f,setTableValues:b}},o.default.createElement("table",{ref:l,"aria-rowcount":t,"aria-colcount":e,onKeyDown:x,...s}))};$t.defaultProps={jumpStep:3,initialCol:0,initialRow:0};$t.propTypes={colCount:r.exports.number.isRequired,initialCol:r.exports.number,initialRow:r.exports.number,jumpStep:r.exports.number,rowCount:r.exports.number.isRequired};const wt=e=>o.default.createElement(nt,{...e,as:"th"}),nt=({coords:e,as:t,...n})=>{const a=m.useRef(null),{rowIndex:i,colIndex:s,setTableValues:l}=sd(),[d,p]=m.useState(!1),c=u=>{const b=Ye(a.current,!0);if(!(b.length===0||b.length===1&&wr(b).length===0)){if(b.length>1&&!Boolean(b.find(x=>x.tagName!=="BUTTON"))){u.preventDefault();const x=b.findIndex(h=>h===document.activeElement);if(u.key===L.RIGHT){const h=b[x+1];h&&(u.stopPropagation(),h.focus())}else if(u.key===L.LEFT){const h=b[x-1];h&&(u.stopPropagation(),h.focus())}return}u.key===L.ENTER&&!d?p(!0):(u.key===L.ESCAPE||u.key===L.ENTER)&&d?(p(!1),a.current.focus()):d&&u.stopPropagation()}},f=i===e.row-1&&s===e.col-1;return m.useLayoutEffect(()=>{const u=Ye(a.current,!0);u.length===0||u.length===1&&wr(u).length!==0||u.length>1&&Boolean(u.find(b=>b.tagName!=="BUTTON"))?(a.current.setAttribute("tabIndex",!d&&f?0:-1),u.forEach((b,x)=>{b.setAttribute("tabIndex",d?0:-1),d&&x===0&&b.focus()})):u.forEach(b=>{b.setAttribute("tabIndex",f?0:-1)})},[d,f]),m.useLayoutEffect(()=>{const u=Ye(a.current,!0),b=()=>{u.length>=1&&(wr(u).length!==0||!Boolean(u.find(x=>x.tagName!=="BUTTON")))&&p(!0),l({rowIndex:e.row-1,colIndex:e.col-1})};return u.forEach(x=>{x.addEventListener("focus",b)}),()=>{Ye(a.current,!0).forEach(h=>{h.removeEventListener("focus",b)})}},[]),o.default.createElement(E,{as:t||"td",ref:a,onKeyDown:c,...n})};wt.defaultProps={coords:{}};wt.propTypes={["aria-colindex"]:r.exports.number.isRequired,children:r.exports.node,coords:r.exports.shape({col:r.exports.number,row:r.exports.number})};nt.defaultProps={coords:{}};nt.propTypes={["aria-colindex"]:r.exports.number.isRequired,as:r.exports.oneOf(["td","th"]),children:r.exports.node,coords:r.exports.shape({col:r.exports.number,row:r.exports.number})};const er=({children:e,...t})=>{const n=m.Children.toArray(e).map(a=>m.cloneElement(a,{"aria-rowindex":1}));return o.default.createElement("thead",{...t},n)};er.propTypes={children:r.exports.node.isRequired};const tr=({children:e,...t})=>{const n=m.Children.toArray(e).map((a,i)=>m.cloneElement(a,{"aria-rowindex":i+2}));return o.default.createElement("tbody",{...t},n)};tr.propTypes={children:r.exports.node.isRequired};const ft=({children:e,...t})=>{const n=m.Children.toArray(e).map((a,i)=>m.cloneElement(a,{"aria-colindex":i+1,coords:{col:i+1,row:t["aria-rowindex"]}}));return o.default.createElement(E,{as:"tr",...t},n)};ft.propTypes={["aria-rowindex"]:r.exports.number.isRequired,children:r.exports.node.isRequired};const dd=g.default(wt)`
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,cd=g.default(k)`
  height: ${24/16}rem;
  width: ${32/16}rem;
`,Ie=({children:e,...t})=>o.default.createElement(dd,{...t},o.default.createElement(cd,{justifyContent:"center"},o.default.createElement(C,{variant:"pi",fontWeight:"bold",color:"neutral800","aria-hidden":!0},e.substr(0,2)),o.default.createElement(se,null,o.default.createElement("span",null,e))));Ie.propTypes={children:r.exports.string.isRequired};const ud=g.default.button`
  border: none;
  background: ${({theme:e,isSelected:t})=>t?e.colors.primary100:e.colors.neutral0};
  height: ${32/16}rem;
  text-align: center;
  width: ${32/16}rem;
  border-radius: ${({theme:e})=>e.borderRadius};

  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:hover > ${C} {
    color: ${({theme:e})=>e.colors.primary600};
  }
`,go=({children:e,outsideMonth:t,onSelectDay:n,isSelected:a,...i})=>{const s=a?"primary600":t?"neutral600":"neutral900";return o.default.createElement(nt,{...i},o.default.createElement(ud,{tabIndex:-1,onClick:n,isSelected:a,type:"button"},o.default.createElement(C,{variant:"pi",textColor:s,fontWeight:a?"bold":null},e)))};go.defaultProps={isSelected:!1,outsideMonth:!1};go.propTypes={children:r.exports.node.isRequired,isSelected:r.exports.bool,onSelectDay:r.exports.func.isRequired,outsideMonth:r.exports.bool};const pd=()=>{const e=new Intl.DateTimeFormat(void 0,{weekday:"long"}).format,t=new Date(1970,0,1),n=new Date(1970,0,2),a=new Date(1970,0,3),i=new Date(1970,0,4),s=new Date(1970,0,5),l=new Date(1970,0,6),d=new Date(1970,0,7);return{sun:e(i),mon:e(s),tue:e(l),wed:e(d),thu:e(t),fri:e(n),sat:e(a)}},fd=()=>{const e=new Intl.DateTimeFormat(void 0,{month:"long"}).format;return Array(12).fill(null).map((t,n)=>e(new Date(1970,n,1)))},gd=(e,t)=>!e||!t?!1:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),md=7*6,bd=(e,t)=>{const n=new Date(e.getFullYear(),e.getMonth(),1),a=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),i=new Date(e.getFullYear(),e.getMonth(),0).getDate(),s=n.getDay(),l=a+s,d=[];let p=0,c=0,f=0,u;for(let b=0;b<md;b++)b>6&&b%7===0&&f++,d[f]||(d[f]=[]),b<s?u={date:new Date(e.getFullYear(),e.getMonth()-1,i-s+b+1),outsideMonth:!0}:b<l?u={date:new Date(e.getFullYear(),e.getMonth(),b-s+1)}:u={date:new Date(e.getFullYear(),e.getMonth()+1,b-s-a+1),outsideMonth:!0},gd(t,u.date)&&(p=f+1,c=d[f].length,u.isSelected=!0),d[f].push(u);return[d,p,c]},hd=200,xd=15,yd=(e,t)=>{var l,d;const n=new Date().getFullYear(),a=(l=e==null?void 0:e.getFullYear())!=null?l:parseInt(n,10)-hd,i=(d=t==null?void 0:t.getFullYear())!=null?d:parseInt(n,10)+xd,s=[];for(let p=a;p<=i;p++)s.push(p);return s},Sr=(e,t)=>new Intl.DateTimeFormat(t).format(e),mo=({selectedDate:e,initialDate:t,popoverSource:n,onChange:a,label:i,minDate:s,maxDate:l,onEscape:d})=>{const[p,c]=m.useState(t),[f,u,b]=bd(p,e),{sun:x,mon:h,tue:y,wed:M,thu:w,fri:z,sat:O}=pd(),$=fd(),v=yd(s,l);m.useEffect(()=>{e&&c(e)},[e]);const Y=I=>{const q=new Date(p);q.setMonth($.indexOf(I)),c(q)},N=I=>{const q=new Date(p);q.setFullYear(I),c(q)};return o.default.createElement(Jl,{source:n,role:"dialog","aria-modal":"true","aria-label":i,spacing:4},o.default.createElement(ot,{onEscape:d},o.default.createElement(E,{padding:4},o.default.createElement(E,{paddingBottom:4,paddingLeft:2,paddingRight:2},o.default.createElement(k,null,o.default.createElement(Le,{label:$[p.getMonth()]},$.map(I=>o.default.createElement(pt,{key:I,onClick:()=>Y(I)},I))),o.default.createElement(E,{paddingLeft:2},o.default.createElement(Le,{label:p.getFullYear()},v.map(I=>o.default.createElement(pt,{key:I,onClick:()=>N(I)},I)))))),o.default.createElement($t,{colCount:7,rowCount:f.length+1,initialCol:b,initialRow:u,role:"grid"},o.default.createElement(er,null,o.default.createElement(ft,null,o.default.createElement(Ie,null,x),o.default.createElement(Ie,null,h),o.default.createElement(Ie,null,y),o.default.createElement(Ie,null,M),o.default.createElement(Ie,null,w),o.default.createElement(Ie,null,z),o.default.createElement(Ie,null,O))),o.default.createElement(tr,null,f.map((I,q)=>o.default.createElement(ft,{key:`week-${q}`},I.map(({date:K,outsideMonth:U,isSelected:Z})=>o.default.createElement(go,{key:`${K.getFullYear()}-${K.getMonth()+1}-${K.getDate()}`,outsideMonth:U,onSelectDay:()=>a(K),isSelected:Z},o.default.createElement("span",{"aria-hidden":!0},K.getDate()),o.default.createElement(se,null,o.default.createElement("span",null,Sr(K))))))))))))};mo.defaultProps={selectedDate:void 0,initialDate:new Date};mo.propTypes={initialDate:r.exports.instanceOf(Date),label:r.exports.string.isRequired,maxDate:r.exports.instanceOf(Date),minDate:r.exports.instanceOf(Date),onChange:r.exports.func.isRequired,onEscape:r.exports.func.isRequired,popoverSource:r.exports.shape({current:(typeof Element>"u"?r.exports.any:r.exports.instanceOf(Element)).isRequired}).isRequired,selectedDate:r.exports.instanceOf(Date)};const mn="en-EN",zr=()=>typeof navigator>"u"?mn:navigator.language?navigator.language:navigator.userLanguage?navigator.userLanguage:mn,bo=({ariaLabel:e,initialDate:t,selectedDate:n,onChange:a,label:i,locale:s,selectedDateLabel:l,onClear:d,clearLabel:p,disabled:c,id:f,...u})=>{const b=ie("datepicker",f),[x,h]=m.useState(!1),y=m.useRef(null),M=m.useRef(null),w=s||zr(),z=n?Sr(n,w):"",O=()=>{c||h(N=>!N)},$=()=>{c||(d(),M.current.focus())},v=N=>{a(N),h(!1)},Y=()=>{h(!1)};return o.default.createElement(td,{bold:x},o.default.createElement(Tt,{ref:y,onClick:O,onChange:()=>{},value:z,startAction:o.default.createElement(ed,{ref:M,onClick:O,"aria-label":n?l(Sr(n,w)):i,type:"button","aria-disabled":c},o.default.createElement(V.CalendarIcon,{"aria-hidden":!0})),endAction:d&&z?o.default.createElement(rd,{as:"button",onClick:$,"aria-label":p,"aria-disabled":c},o.default.createElement(V.Cross,null)):void 0,"aria-autocomplete":"none",label:i,"aria-label":e,disabled:c,id:b,...u}),y.current&&y.current.inputWrapperRef&&x&&o.default.createElement(mo,{selectedDate:n,initialDate:t,onChange:v,onEscape:Y,popoverSource:y.current.inputWrapperRef,label:i||e}))};bo.defaultProps={ariaLabel:void 0,clearLabel:void 0,disabled:!1,id:void 0,label:void 0,initialDate:new Date,onClear:void 0,placeholder:void 0,selectedDate:void 0,size:"M"};bo.propTypes={ariaLabel:r.exports.string,clearLabel:r.exports.string,disabled:r.exports.bool,id:r.exports.string,initialDate:r.exports.instanceOf(Date),label:r.exports.string,locale:r.exports.string,maxDate:r.exports.instanceOf(Date),minDate:r.exports.instanceOf(Date),onChange:r.exports.func.isRequired,onClear:r.exports.func,placeholder:r.exports.string,selectedDate:r.exports.instanceOf(Date),selectedDateLabel:r.exports.func.isRequired,size:r.exports.oneOf(Object.keys(Te.input))};const Ed=g.default(E)`
  height: 1px;
  border: none;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,at=({unsetMargin:e,...t})=>o.default.createElement(Ed,{...t,as:"hr",unsetMargin:e});at.defaultProps={background:"neutral150",unsetMargin:!0};at.propTypes={background:r.exports.string,unsetMargin:r.exports.bool};const vd=g.default(E)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Md=g.default(E)`
  svg {
    height: ${88/16}rem;
  }
`,ho=({icon:e,content:t,action:n,hasRadius:a,shadow:i})=>o.default.createElement(vd,{padding:11,background:"neutral0",hasRadius:a,shadow:i},o.default.createElement(Md,{paddingBottom:6,"aria-hidden":!0},e),o.default.createElement(E,{paddingBottom:4},o.default.createElement(C,{variant:"delta",as:"p",textColor:"neutral600"},t)),n);ho.defaultProps={action:void 0,hasRadius:!0,shadow:"tableShadow"};ho.propTypes={action:r.exports.node,content:r.exports.string.isRequired,hasRadius:r.exports.bool,icon:r.exports.node.isRequired,shadow:r.exports.string};const Ia=m.createContext({gap:0,gridCols:12}),Td=()=>m.useContext(Ia),$d=g.default(E)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:t})=>he("gap",t,e)}
`,it=({gap:e,gridCols:t,...n})=>o.default.createElement(Ia.Provider,{value:{gap:e,gridCols:t}},o.default.createElement($d,{gap:e,gridCols:t,...n}));it.defaultProps={gap:0,gridCols:12};it.propTypes={gap:r.exports.oneOfType([r.exports.number,r.exports.arrayOf(r.exports.number)]),gridCols:r.exports.number};const wd=g.default.div`
  grid-column: span ${({col:e})=>e};
  max-width: 100%;

  ${({theme:e})=>e.mediaQueries.tablet} {
    grid-column: span ${({s:e})=>e};
  }

  ${({theme:e})=>e.mediaQueries.mobile} {
    grid-column: span ${({xs:e})=>e};
  }
`,gt=({col:e,xs:t,s:n,...a})=>{const{gap:i,gridCols:s}=Td();return o.default.createElement(wd,{gap:i,gridCols:s,col:e,xs:t,s:n},o.default.createElement(E,{...a}))};gt.defaultProps={col:void 0,s:void 0,xs:void 0};gt.propTypes={col:r.exports.number,s:r.exports.number,xs:r.exports.number};const Lr=g.default(Je)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${32/16}rem;
  width: ${32/16}rem;

  svg {
    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral400};
      }
    }
  }
  &[aria-disabled='true'] {
    background-color: ${({theme:e})=>e.colors.neutral150};
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
  ${({noBorder:e})=>e?"border: none;":void 0}
`,Cd=g.default(k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Lr} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,st=o.default.forwardRef(({label:e,noBorder:t,icon:n,disabled:a,onClick:i,...s},l)=>{const d=p=>{!a&&i&&i(p)};return e?o.default.createElement(rt,{label:e},o.default.createElement(Lr,{...s,ref:l,noBorder:t,onClick:d,"aria-disabled":a},n)):o.default.createElement(Lr,{...s,ref:l,noBorder:t,onClick:d,"aria-disabled":a},n)});st.displayName="IconButton";st.defaultProps={label:void 0,noBorder:!1,disabled:!1,onClick:void 0};st.propTypes={disabled:r.exports.bool,icon:r.exports.element.isRequired,label:r.exports.string,noBorder:r.exports.bool,onClick:r.exports.func};const Nd=g.default(E)`
  display: grid;
  grid-template-columns: ${({hasSideNav:e})=>e?"auto 1fr":"1fr"};
`,Dd=g.default(E)`
  overflow-x: hidden;
`,xo=({sideNav:e,children:t})=>o.default.createElement(Nd,{hasSideNav:Boolean(e)},e,o.default.createElement(Dd,{paddingBottom:10},t));xo.defaultProps={sideNav:void 0};xo.propTypes={children:r.exports.node.isRequired,sideNav:r.exports.node};const Ra=g.default(k)`
  & > * + * {
    margin-left: ${({theme:e})=>e.spaces[2]};
  }

  margin-left: ${({pullRight:e})=>e?"auto":void 0};
`,kd=g.default(Ra)`
  flex-shrink: 0;
`,yo=({startActions:e,endActions:t})=>e||t?o.default.createElement(E,{paddingLeft:10,paddingRight:10},o.default.createElement(E,{paddingBottom:4},o.default.createElement(k,{justifyContent:"space-between",alignItems:"flex-start"},e&&o.default.createElement(Ra,{wrap:"wrap"},e),t&&o.default.createElement(kd,{pullRight:!0},t)))):null;yo.defaultProps={endActions:void 0,startActions:void 0};yo.propTypes={endActions:r.exports.node,startActions:r.exports.node};const Oa=({children:e})=>o.default.createElement(E,{paddingLeft:10,paddingRight:10},e);Oa.propTypes={children:r.exports.node.isRequired};const Id=e=>{const t=m.useRef(null),[n,a]=m.useState(!0),i=([s])=>{a(s.isIntersecting)};return m.useEffect(()=>{const s=t.current,l=new IntersectionObserver(i,e);return s&&l.observe(t.current),()=>{s&&l.disconnect()}},[t,e]),[t,n]},Rd=(e,t)=>{m.useLayoutEffect(()=>{const n=new ResizeObserver(t);return Array.isArray(e)?e.map(a=>{a.current&&n.observe(a.current)}):e.current&&n.observe(e.current),()=>{n.disconnect()}},[])},Od=()=>{const e=m.useRef(null),[t,n]=m.useState(null),[a,i]=Id({root:null,rootMargin:"0px",threshold:0});return Rd(a,()=>{a.current&&n(a.current.getBoundingClientRect())}),m.useEffect(()=>{e.current&&n(e.current.getBoundingClientRect())},[e]),{containerRef:a,isVisible:i,baseHeaderLayoutRef:e,headerSize:t}},rr=e=>{const{containerRef:t,isVisible:n,baseHeaderLayoutRef:a,headerSize:i}=Od();return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:{height:i==null?void 0:i.height},ref:t},n&&o.default.createElement(Ve,{ref:a,...e})),!n&&o.default.createElement(Ve,{...e,sticky:!0,width:i==null?void 0:i.width}))};rr.displayName="HeaderLayout";const Ad=g.default(E)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${e=>e.width}px;
  z-index: 4;
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
`,Ve=o.default.forwardRef(({navigationAction:e,primaryAction:t,secondaryAction:n,subtitle:a,title:i,sticky:s,width:l,...d},p)=>{const c=typeof a=="string";return s?o.default.createElement(Ad,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:l,"data-strapi-header-sticky":!0},o.default.createElement(k,{justifyContent:"space-between"},o.default.createElement(k,null,e&&o.default.createElement(E,{paddingRight:3},e),o.default.createElement(E,null,o.default.createElement(C,{variant:"beta",as:"h1",...d},i),c?o.default.createElement(C,{variant:"pi",textColor:"neutral600"},a):a),n?o.default.createElement(E,{paddingLeft:4},n):null),o.default.createElement(k,null,t?o.default.createElement(E,{paddingLeft:2},t):void 0))):o.default.createElement(E,{ref:p,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:e?6:8,background:"neutral100","data-strapi-header":!0},e?o.default.createElement(E,{paddingBottom:2},e):null,o.default.createElement(k,{justifyContent:"space-between"},o.default.createElement(k,null,o.default.createElement(C,{as:"h1",variant:"alpha",...d},i),n?o.default.createElement(E,{paddingLeft:4},n):null),t),c?o.default.createElement(C,{variant:"epsilon",textColor:"neutral600",as:"p"},a):a)});Ve.displayName="BaseHeaderLayout";Ve.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0};Ve.propTypes={navigationAction:r.exports.node,primaryAction:r.exports.node,secondaryAction:r.exports.node,sticky:r.exports.bool,subtitle:r.exports.oneOfType([r.exports.string,r.exports.node]),title:r.exports.string.isRequired,width:r.exports.number};rr.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0};rr.propTypes={navigationAction:r.exports.node,primaryAction:r.exports.node,secondaryAction:r.exports.node,subtitle:r.exports.oneOfType([r.exports.string,r.exports.node]),title:r.exports.string.isRequired};const Aa=({startCol:e,endCol:t})=>o.default.createElement(it,{gap:4},o.default.createElement(gt,{col:9,s:12},o.default.createElement(E,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e)),o.default.createElement(gt,{col:3,s:12},o.default.createElement(E,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},t)));Aa.propTypes={endCol:r.exports.node.isRequired,startCol:r.exports.node.isRequired};const Sa=g.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:e})=>e.spaces[4]};
`;Sa.propTypes={children:r.exports.node.isRequired};const Sd=g.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:e})=>e?"none":void 0};
  color: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${C} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${Ke};
`,Cr=g.default(E)`
  display: flex;
`,or=({href:e,to:t,children:n,disabled:a,startIcon:i,endIcon:s,...l})=>{const d=e?"_blank":void 0,p=e?"noreferrer noopener":void 0;return o.default.createElement(Sd,{as:t&&!a?$e.NavLink:"a",target:d,rel:p,to:a?void 0:t,href:a?"#":e,disabled:a,...l},i&&o.default.createElement(Cr,{as:"span","aria-hidden":!0,paddingRight:2},i),o.default.createElement(C,null,n),s&&!e&&o.default.createElement(Cr,{as:"span","aria-hidden":!0,paddingLeft:2},s),e&&o.default.createElement(Cr,{as:"span","aria-hidden":!0,paddingLeft:2},o.default.createElement(V.ExternalLink,null)))};or.displayName="Link";or.defaultProps={href:void 0,to:void 0,disabled:!1};or.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool,endIcon:r.exports.element,href:e=>{if(!e.disabled&&!e.to&&!e.href)return new Error("href must be defined")},startIcon:r.exports.element,to:e=>{if(!e.disabled&&!e.href&&!e.to)return new Error("to must be defined")}};const zd=g.default(Hr)`
  padding: ${({theme:e,size:t})=>`${t==="S"?e.spaces[2]:"10px"} ${e.spaces[4]}`};
  background: ${({theme:e})=>e.colors.buttonPrimary600};
  border: 1px solid ${({theme:e})=>e.colors.buttonPrimary600};
  border-radius: ${({theme:e})=>e.borderRadius};
  ${E} {
    display: flex;
    align-items: center;
  }
  ${C} {
    color: ${({theme:e})=>e.colors.buttonNeutral0};
  }
  &[aria-disabled='true'] {
    ${zt}
    &:active {
      ${zt}
    }
  }
  &:hover {
    ${aa}
  }
  &:active {
    ${ia}
  }
  ${sa}
  /**
    Link specific properties
  */
  display: inline-flex;
  text-decoration: none;
  pointer-events: ${({disabled:e})=>e?"none":void 0};
`,nr=o.default.forwardRef(({variant:e,startIcon:t,endIcon:n,disabled:a,children:i,size:s,href:l,to:d,...p},c)=>{const f=l?"_blank":void 0,u=l?"noreferrer noopener":void 0;return o.default.createElement(zd,{ref:c,"aria-disabled":a,size:s,variant:e,target:f,rel:u,to:a?void 0:d,href:a?"#":l,...p,as:d&&!a?$e.NavLink:"a"},t&&o.default.createElement(E,{"aria-hidden":!0,paddingRight:2},t),s==="S"?o.default.createElement(C,{variant:"pi",fontWeight:"bold"},i):o.default.createElement(C,{fontWeight:"bold"},i),n&&o.default.createElement(E,{"aria-hidden":!0,paddingLeft:2},n))});nr.displayName="LinkButton";nr.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,size:"S",variant:"default",onClick:void 0,href:void 0,to:void 0};nr.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool,endIcon:r.exports.element,href:e=>{if(!e.disabled&&!e.to&&!e.href)return new Error("href must be defined")},onClick:r.exports.func,size:r.exports.oneOf(na),startIcon:r.exports.element,to:e=>{if(!e.disabled&&!e.href&&!e.to)return new Error("to must be defined")},variant:r.exports.oneOf(Xr)};const Qe={Log:"live-region-log",Status:"live-region-status",Alert:"live-region-alert"},bn=e=>{const t=document.querySelector(`#${Qe.Log}`);t&&(t.innerText=e)},hn=e=>{const t=document.querySelector(`#${Qe.Status}`);t&&(t.innerText=e)},xn=e=>{const t=document.querySelector(`#${Qe.Alert}`);t&&(t.innerText=e)},Ld=()=>(m.useEffect(()=>()=>{bn(""),xn(""),hn("")},[]),{notifyLog:bn,notifyAlert:xn,notifyStatus:hn}),jd=g.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,Eo=({labelledBy:e,...t})=>{const n=e||"main-content-title";return o.default.createElement(jd,{"aria-labelledby":n,id:"main-content",tabIndex:-1,...t})};Eo.defaultProps={labelledBy:void 0};Eo.propTypes={labelledBy:r.exports.string};const Pd=g.default(E)`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`,za=({children:e})=>o.default.createElement(Pd,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},e);za.propTypes={children:r.exports.node.isRequired};const La=m.createContext(),Ct=()=>m.useContext(La),qd=g.default(it)`
  width: ${({condensed:e})=>e?"max-content":`${224/16}rem`};
  background: ${({theme:e})=>e.colors.neutral0};
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 2;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,vo=({condensed:e,...t})=>o.default.createElement(La.Provider,{value:e},o.default.createElement(qd,{as:"nav",condensed:e,...t}));vo.defaultProps={condensed:!1};vo.propTypes={condensed:r.exports.bool};const yn=g.default.div`
  svg,
  img {
    border-radius: ${({theme:e})=>e.borderRadius};
    object-fit: contain;
    height: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
  }
`,Bd=g.default($e.NavLink)`
  text-decoration: unset;
  color: inherit;
`,Mo=({workplace:e,title:t,icon:n,to:a})=>Ct()?o.default.createElement(E,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},o.default.createElement(yn,{condensed:!0},o.default.createElement($e.NavLink,{to:a},n,o.default.createElement(se,null,o.default.createElement("span",null,t),o.default.createElement("span",null,e))))):o.default.createElement(E,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},o.default.createElement(k,null,o.default.createElement(yn,{as:$e.NavLink,to:a,"aria-hidden":!0,tabIndex:-1},n),o.default.createElement(E,{paddingLeft:2},o.default.createElement(C,{fontWeight:"bold",textColor:"neutral800",as:"span"},o.default.createElement(Bd,{to:a},t,o.default.createElement(se,{as:"span"},e))),o.default.createElement(C,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0},e))));Mo.defaultProps={to:"/"};Mo.propTypes={icon:r.exports.node.isRequired,title:r.exports.string.isRequired,to:r.exports.string,workplace:r.exports.string.isRequired};const En=g.default(E)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,vn=g.default($e.NavLink)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${C} {
    color: ${({theme:e})=>e.colors.neutral600};
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};

    ${C} {
      color: ${({theme:e})=>e.colors.neutral700};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &.active {
    background: ${({theme:e})=>e.colors.primary100};

    svg path {
      fill: ${({theme:e})=>e.colors.primary600};
    }

    ${C} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: 500;
    }
  }
`,Mn=g.default(k)`
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
`,Tn=g.default(Xe)`
  ${({condensed:e})=>e&&`
	  position: absolute;
    transform: translate(35%, -50%);
    top: 0;
    right: 0;
  `}

  ${C} {
    //find a solution to remove !important
    color: ${({theme:e})=>e.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({theme:e})=>e.spaces[6]};
  height: ${({theme:e})=>e.spaces[5]};
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  border-radius: ${({theme:e})=>e.spaces[10]};
  background: ${({theme:e})=>e.colors.primary600};
`,ar=({children:e,icon:t,badgeContent:n,badgeAriaLabel:a,...i})=>Ct()?o.default.createElement(rt,{position:"right",label:e},o.default.createElement(vn,{...i},o.default.createElement(Mn,{as:"span"},o.default.createElement(En,{"aria-hidden":!0,paddingRight:0,as:"span"},t),n&&o.default.createElement(Tn,{condensed:!0,"aria-label":a},n)))):o.default.createElement(vn,{...i},o.default.createElement(Mn,{as:"span",justifyContent:"space-between"},o.default.createElement(k,null,o.default.createElement(En,{"aria-hidden":!0,paddingRight:3,as:"span"},t),o.default.createElement(C,null,e)),n&&o.default.createElement(Tn,{justifyContent:"center","aria-label":a},n)));ar.displayName="NavLink";ar.defaultProps={badgeContent:void 0,badgeAriaLabel:void 0};ar.propTypes={badgeAriaLabel:r.exports.string,badgeContent:r.exports.oneOfType([r.exports.string,r.exports.number]),children:r.exports.node.isRequired,icon:r.exports.node.isRequired};const ja=({label:e,children:t,...n})=>Ct()?o.default.createElement(re,{spacing:2},o.default.createElement(E,{paddingTop:1,paddingBottom:1,background:"neutral0",hasRadius:!0,as:"span"},o.default.createElement(at,null),o.default.createElement(se,null,o.default.createElement("span",null,e))),o.default.createElement(re,{as:"ul",spacing:2,...n},m.Children.map(t,(i,s)=>o.default.createElement("li",{key:s},i)))):o.default.createElement(re,{spacing:2},o.default.createElement(E,{paddingTop:1,paddingBottom:1,background:"neutral0",paddingRight:3,paddingLeft:3,hasRadius:!0,as:"span"},o.default.createElement(C,{variant:"sigma",textColor:"neutral600"},e)),o.default.createElement(re,{as:"ul",spacing:2,...n},m.Children.map(t,(i,s)=>o.default.createElement("li",{key:s},i))));ja.propTypes={children:r.exports.node.isRequired,label:r.exports.string.isRequired};const Pa=({children:e,...t})=>o.default.createElement(E,{paddingLeft:3,paddingRight:2,paddingTop:3},o.default.createElement(re,{as:"ul",spacing:4,...t},m.Children.map(e,(n,a)=>o.default.createElement("li",{key:a},n))));Pa.propTypes={children:r.exports.node.isRequired};const Wd=g.default(E)`
  text-decoration: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,ir=o.default.forwardRef(({src:e,children:t,initials:n,...a},i)=>{const s=Ct();return o.default.createElement(Wd,{paddingTop:3,paddingBottom:3,paddingLeft:5,paddingRight:5,...a},o.default.createElement(k,{as:"button",justifyContent:s?"center":void 0,ref:i},e?o.default.createElement(Yt,{src:e,alt:"","aria-hidden":!0}):o.default.createElement(_r,null,n),s?o.default.createElement(se,null,o.default.createElement("span",null,t)):o.default.createElement(E,{width:`${130/16}rem`,paddingLeft:2,as:"span"},o.default.createElement(C,{ellipsis:!0,textColor:"neutral600"},t))))});ir.displayName="NavUser";ir.defaultProps={src:void 0,initials:void 0};ir.propTypes={children:r.exports.node.isRequired,initials:r.exports.node,src:r.exports.string};const Ud=g.default.button`
  background: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${(9+4)/16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({theme:e,condensed:t})=>t?0:e.spaces[5]};
  transform: ${({condensed:e})=>e?"translateX(50%)":void 0};
  z-index: 2;
  width: ${18/16}rem;
  height: ${25/16}rem;

  svg {
    width: ${6/16}rem;
    height: ${9/16}rem;
  }
`,qa=({children:e,...t})=>{const n=Ct();return o.default.createElement(Ud,{as:"button",condensed:n,...t},o.default.createElement(ye,{as:n?V.ChevronRight:V.ChevronLeft,"aria-hidden":!0,color:"neutral600"}),o.default.createElement(se,null,e))};qa.propTypes={children:r.exports.string.isRequired};const Ba=m.createContext(),Fd=()=>m.useContext(Ba),Yd=g.default.div`
  position: fixed;
  z-index: 4;
  inset: 0;
  background: ${({theme:e})=>`${e.colors.neutral800}1F`};
  padding: 0 ${({theme:e})=>e.spaces[8]};
  display: flex;
  align-items: center;
  justify-content: center;
`,Qd=g.default(E)`
  width: ${830/16}rem;
`,Wa=({onClose:e,labelledBy:t,...n})=>(m.useEffect(()=>{const a=document.body;return a.classList.add("lock-body-scroll"),()=>{a.classList.remove("lock-body-scroll")}},[]),o.default.createElement(xt,null,o.default.createElement(Ba.Provider,{value:e},o.default.createElement(Yd,{onClick:e},o.default.createElement(ot,{onEscape:e},o.default.createElement(Qd,{"aria-labelledby":t,onClick:a=>a.stopPropagation(),background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog","aria-modal":!0,...n}))))));Wa.propTypes={labelledBy:r.exports.string.isRequired,onClose:r.exports.func.isRequired};const _d=g.default(E)`
  border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,To=({children:e,closeLabel:t})=>{const n=Fd();return o.default.createElement(_d,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100"},o.default.createElement(k,{justifyContent:"space-between"},e,o.default.createElement(st,{onClick:n,"aria-label":t,icon:o.default.createElement(V.Cross,null)})))};To.defaultProps={closeLabel:"Close the modal"};To.propTypes={children:r.exports.node.isRequired,closeLabel:r.exports.string};const Hd=g.default(E)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,$n=g.default(k)`
  & > * + * {
    margin-left: ${({theme:e})=>e.spaces[2]};
  }
`,$o=({startActions:e,endActions:t})=>o.default.createElement(Hd,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100"},o.default.createElement(k,{justifyContent:"space-between"},o.default.createElement($n,null,e),o.default.createElement($n,null,t)));$o.defaultProps={endActions:void 0,startActions:void 0};$o.propTypes={endActions:r.exports.node,startActions:r.exports.node};const Vd=g.default(E)`
  overflow: auto;
  max-height: 60vh;
`,Gd=e=>o.default.createElement(Vd,{padding:7,...e});let Nr=new Map,jr=!1;try{jr=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let Wt=!1;try{Wt=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const Ua={degree:{narrow:{default:"\xB0","ja-JP":" \u5EA6","zh-TW":"\u5EA6","sl-SI":" \xB0"}}};class Kd{format(t){let n="";if(!jr&&this.options.signDisplay!=null?n=Xd(this.numberFormatter,this.options.signDisplay,t):n=this.numberFormatter.format(t),this.options.style==="unit"&&!Wt){var a;let{unit:i,unitDisplay:s="short",locale:l}=this.resolvedOptions(),d=(a=Ua[i])===null||a===void 0?void 0:a[s];n+=d[l]||d.default}return n}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,n){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(t,n);if(n<t)throw new RangeError("End date must be >= start date");return`${this.format(t)} \u2013 ${this.format(n)}`}formatRangeToParts(t,n){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(t,n);if(n<t)throw new RangeError("End date must be >= start date");let a=this.numberFormatter.formatToParts(t),i=this.numberFormatter.formatToParts(n);return[...a.map(s=>({...s,source:"startRange"})),{type:"literal",value:" \u2013 ",source:"shared"},...i.map(s=>({...s,source:"endRange"}))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return!jr&&this.options.signDisplay!=null&&(t={...t,signDisplay:this.options.signDisplay}),!Wt&&this.options.style==="unit"&&(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}constructor(t,n={}){this.numberFormatter=Zd(t,n),this.options=n}}function Zd(e,t={}){let{numberingSystem:n}=t;if(n&&e.indexOf("-u-nu-")===-1&&(e=`${e}-u-nu-${n}`),t.style==="unit"&&!Wt){var a;let{unit:l,unitDisplay:d="short"}=t;if(!l)throw new Error('unit option must be provided with style: "unit"');if(!(!((a=Ua[l])===null||a===void 0)&&a[d]))throw new Error(`Unsupported unit ${l} with unitDisplay = ${d}`);t={...t,style:"decimal"}}let i=e+(t?Object.entries(t).sort((l,d)=>l[0]<d[0]?-1:1).join():"");if(Nr.has(i))return Nr.get(i);let s=new Intl.NumberFormat(e,t);return Nr.set(i,s),s}function Xd(e,t,n){if(t==="auto")return e.format(n);if(t==="never")return e.format(Math.abs(n));{let a=!1;if(t==="always"?a=n>0||Object.is(n,0):t==="exceptZero"&&(Object.is(n,-0)||Object.is(n,0)?n=Math.abs(n):a=n>0),a){let i=e.format(-n),s=e.format(n),l=i.replace(s,"").replace(/\u200e|\u061C/,"");return[...l].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),i.replace(s,"!!!").replace(l,"+").replace("!!!",s)}else return e.format(n)}}const Jd=new RegExp("^.*\\(.*\\).*$"),ec=["latn","arab","hanidec"];class tc{parse(t){return Dr(this.locale,this.options,t).parse(t)}isValidPartialNumber(t,n,a){return Dr(this.locale,this.options,t).isValidPartialNumber(t,n,a)}getNumberingSystem(t){return Dr(this.locale,this.options,t).options.numberingSystem}constructor(t,n={}){this.locale=t,this.options=n}}const wn=new Map;function Dr(e,t,n){let a=Cn(e,t);if(!e.includes("-nu-")&&!a.isValidPartialNumber(n)){for(let i of ec)if(i!==a.options.numberingSystem){let s=Cn(e+(e.includes("-u-")?"-nu-":"-u-nu-")+i,t);if(s.isValidPartialNumber(n))return s}}return a}function Cn(e,t){let n=e+(t?Object.entries(t).sort((i,s)=>i[0]<s[0]?-1:1).join():""),a=wn.get(n);return a||(a=new rc(e,t),wn.set(n,a)),a}class rc{parse(t){let n=this.sanitize(t);n=At(n,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let a=n?+n:NaN;if(isNaN(a))return NaN;if(this.options.currencySign==="accounting"&&Jd.test(t)&&(a=-1*a),this.options.style==="percent"){a/=100;var i;a=+a.toFixed(((i=this.options.maximumFractionDigits)!==null&&i!==void 0?i:0)+2)}return a}sanitize(t){return t=t.replace(this.symbols.literals,""),t=t.replace("-",this.symbols.minusSign),this.options.numberingSystem==="arab"&&(t=t.replace(",",this.symbols.decimal),t=t.replace(String.fromCharCode(1548),this.symbols.decimal),t=At(t,".",this.symbols.group)),this.options.locale==="fr-FR"&&(t=At(t,".",String.fromCharCode(8239))),t}isValidPartialNumber(t,n=-1/0,a=1/0){return t=this.sanitize(t),t.startsWith(this.symbols.minusSign)&&n<0?t=t.slice(this.symbols.minusSign.length):this.symbols.plusSign&&t.startsWith(this.symbols.plusSign)&&a>0&&(t=t.slice(this.symbols.plusSign.length)),t.startsWith(this.symbols.group)?!1:(t=At(t,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,""),t.length===0)}constructor(t,n={}){this.formatter=new Intl.NumberFormat(t,n),this.options=this.formatter.resolvedOptions(),this.symbols=oc(this.formatter,this.options,n)}}const Nn=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function oc(e,t,n){var a,i,s,l;let d=e.formatToParts(-10000.111),p=e.formatToParts(10000.111),c=e.formatToParts(1);var f;let u=(f=(a=d.find(N=>N.type==="minusSign"))===null||a===void 0?void 0:a.value)!==null&&f!==void 0?f:"-",b=(i=p.find(N=>N.type==="plusSign"))===null||i===void 0?void 0:i.value;!b&&((n==null?void 0:n.signDisplay)==="exceptZero"||(n==null?void 0:n.signDisplay)==="always")&&(b="+");let x=(s=d.find(N=>N.type==="decimal"))===null||s===void 0?void 0:s.value,h=(l=d.find(N=>N.type==="group"))===null||l===void 0?void 0:l.value,y=d.filter(N=>!Nn.has(N.type)).map(N=>Dn(N.value)),M=c.filter(N=>!Nn.has(N.type)).map(N=>Dn(N.value)),w=[...new Set([...M,...y])].sort((N,I)=>I.length-N.length),z=w.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${w.join("|")}|[\\p{White_Space}]`,"gu"),O=[...new Intl.NumberFormat(t.locale,{useGrouping:!1}).format(9876543210)].reverse(),$=new Map(O.map((N,I)=>[N,I])),v=new RegExp(`[${O.join("")}]`,"g");return{minusSign:u,plusSign:b,decimal:x,group:h,literals:z,numeral:v,index:N=>String($.get(N))}}function At(e,t,n){return e.replaceAll?e.replaceAll(t,n):e.split(t).join(n)}function Dn(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}const kn=g.default.button`
  display: flex;
  height: 1rem;
  align-items: ${({reverse:e})=>e?"flex-end":"flex-start"};
  transform: translateY(${({reverse:e})=>e?"-2px":"2px"});
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  svg {
    display: block;
    height: ${4/16}rem;
    transform: ${({reverse:e})=>e?"rotateX(180deg)":void 0};
  }
`,In="",sr=o.default.forwardRef(({size:e,startAction:t,name:n,hint:a,error:i,label:s,labelAction:l,locale:d,id:p,onValueChange:c,value:f,step:u,required:b,disabled:x,...h},y)=>{const[M,w]=m.useState(f==null?In:String(f)),z=ie("numberinput",p),O=d||zr(),$=m.useRef(new tc(O)),v=m.useRef(new Kd(zr(),{maximumFractionDigits:20})),Y=Z=>{const _=Z.target.value;if($.current.isValidPartialNumber(_)){const oe=_===""?void 0:$.current.parse(_);oe===void 0||isNaN(oe)?c(void 0):c(oe),w(Z.target.value)}},N=Z=>{if(M===void 0){c(u),w(String(u));return}if(isNaN(M)){const _=$.current.parse(M),F=(isNaN(_)?0:_)+u,ne=v.current.format(F);c(F),w(Z?String(F):ne);return}c(f+u),w(String(f+u))},I=Z=>{if(M===void 0){c(-u),w(String(-u));return}if(isNaN(M)){const _=$.current.parse(M),F=(isNaN(_)?0:_)-u,ne=v.current.format(F);c(F),w(Z?String(F):ne);return}c(f-u),w(String(f-u))},q=Z=>{if(!x)switch(Z.key){case L.DOWN:{Z.preventDefault(),I(!0);break}case L.UP:{Z.preventDefault(),N(!0);break}}},K=()=>{w(M!=null?M:In)},U=()=>{w(f===void 0?void 0:v.current.format(f))};return o.default.createElement(be,{name:n,hint:a,error:i,id:z},o.default.createElement(re,{spacing:1},s&&o.default.createElement(xe,{required:b,action:l},s),o.default.createElement(We,{ref:y,startAction:t,disabled:x,type:"text",inputmode:"decimal",onChange:Y,onKeyDown:q,onBlur:U,onFocus:K,value:M!=null?M:"",size:e,endAction:o.default.createElement(o.default.Fragment,null,o.default.createElement(kn,{disabled:x,"aria-hidden":!0,reverse:!0,onClick:()=>{N()},tabIndex:-1,type:"button","data-testid":"ArrowUp"},o.default.createElement(ye,{as:V.CarretDown,color:"neutral500"})),o.default.createElement(kn,{disabled:x,"aria-hidden":!0,onClick:()=>{I()},tabIndex:-1,type:"button","data-testid":"ArrowDown"},o.default.createElement(ye,{as:V.CarretDown,color:"neutral500"}))),...h}),o.default.createElement(Ne,null),o.default.createElement(De,null)))});sr.displayName="NumberInput";sr.defaultProps={"aria-label":void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:void 0,labelAction:void 0,required:!1,size:"M",startAction:void 0,step:1,value:void 0};sr.propTypes={"aria-label":r.exports.string,disabled:r.exports.bool,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.string,label:r.exports.string,labelAction:r.exports.element,locale:r.exports.string,name:r.exports.string.isRequired,onValueChange:r.exports.func.isRequired,required:r.exports.bool,size:r.exports.oneOf(Object.keys(Te.input)),startAction:r.exports.element,step:r.exports.number,value:r.exports.number};const Fa=m.createContext({activePage:1,pageCount:1}),wo=()=>m.useContext(Fa),nc=g.default.nav``,ac=g.default(k)`
  & > * + * {
    margin-left: ${({theme:e})=>e.spaces[1]};
  }
`,Co=({children:e,label:t,activePage:n,pageCount:a})=>o.default.createElement(Fa.Provider,{value:{activePage:n,pageCount:a}},o.default.createElement(nc,{"aria-label":t},o.default.createElement(ac,{as:"ul"},m.Children.map(e,(i,s)=>o.default.createElement("li",{key:s},i)))));Co.defaultProps={label:"pagination"};Co.propTypes={activePage:r.exports.number.isRequired,children:r.exports.node.isRequired,label:r.exports.string,pageCount:r.exports.number.isRequired};const Ya=g.default(C)`
  line-height: revert;
`,ic={active:!0},No=g.default($e.NavLink).withConfig({shouldForwardProp:(e,t)=>!ic[e]&&t(e)})`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${Ke}
`,sc=g.default(No)`
  color: ${({theme:e,active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,Qa=g.default(No)`
  font-size: 0.7rem;
  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,lc=g.default(No)`
  color: ${({theme:e})=>e.colors.neutral800};
`,Do=({children:e,to:t,...n})=>{const{activePage:a}=wo(),i=a===1;return o.default.createElement(Qa,{to:i?"#":t,"aria-disabled":i,tabIndex:i?-1:void 0,...n},o.default.createElement(se,null,e),o.default.createElement(V.ChevronLeft,{"aria-hidden":!0}))};Do.displayName="PreviousLink";const ko=({children:e,to:t,...n})=>{const{activePage:a,pageCount:i}=wo(),s=a===i;return o.default.createElement(Qa,{to:s?"#":t,"aria-disabled":s,tabIndex:s?-1:void 0,...n},o.default.createElement(se,null,e),o.default.createElement(V.ChevronRight,{"aria-hidden":!0}))};ko.displayName="NextLink";const Io=({number:e,children:t,...n})=>{const{activePage:a}=wo(),i=a===e;return o.default.createElement(sc,{...n,active:i},o.default.createElement(se,null,t),o.default.createElement(Ya,{"aria-hidden":!0,variant:"pi",fontWeight:i?"bold":null},e))};Io.displayName="PageLink";const _a=({children:e,...t})=>o.default.createElement(lc,{...t,as:"div"},o.default.createElement(se,null,e),o.default.createElement(Ya,{"aria-hidden":!0,variant:"pi"},"\u2026"));Io.propTypes={children:r.exports.node.isRequired,number:r.exports.number.isRequired};const Ha={children:r.exports.node.isRequired,to:r.exports.string.isRequired};ko.propTypes=Ha;Do.propTypes=Ha;_a.propTypes={children:r.exports.node.isRequired};const Va=g.default.div`
  background: ${({theme:e})=>e.colors.neutral600};
  border-radius: ${({theme:e})=>e.borderRadius};
  position: relative;

  width: 78px;
  height: ${({theme:e})=>e.spaces[1]};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: ${({theme:e})=>e.borderRadius};
    width: ${({value:e})=>`${e}%`};
    background: ${({theme:e})=>e.colors.neutral150};
  }
`,dc=g.default(Va)`
  width: 102px;
  height: ${({theme:e})=>e.spaces[2]};
`,Ro=({min:e,max:t,value:n,children:a,size:i,...s})=>{const l={role:"progressbar","aria-valuenow":n,"aria-valuemin":e,"aria-valuemax":t};return i==="M"?o.default.createElement(dc,{...l,value:n,"aria-label":a,...s}):o.default.createElement(Va,{...l,value:n,"aria-label":a,...s})};Ro.defaultProps={min:0,max:100,value:0,size:"M"};Ro.propTypes={children:r.exports.node.isRequired,max:r.exports.number,min:r.exports.number,size:r.exports.oneOf(["S","M"]),value:r.exports.number};const cc=g.default(C)`
  display: flex;
  align-items: center;
`,Ga=({children:e,...t})=>o.default.createElement(cc,{as:"label",textColor:"neutral800"},o.default.createElement(mt,{...t}),o.default.createElement(E,{paddingLeft:2},e));Ga.propTypes={children:r.exports.node.isRequired,value:r.exports.any.isRequired};const uc=g.default(k)`
  font-size: 0.5rem;
  svg path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,Ka=g.default(k)`
  font-size: 0.8rem;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,pc=g.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${Ka} {
      svg path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${ut} {
    border: 1px solid transparent;
  }

  ${qe(ut)}
`,Nt=m.forwardRef(({name:e,size:t,children:n,value:a,onClear:i,clearLabel:s,...l},d)=>{const p=m.useRef(null),c=a.length>0,f=b=>{i(b),p.current.focus()},u=d||p;return o.default.createElement(pc,null,o.default.createElement(be,{name:e},o.default.createElement(se,null,o.default.createElement(xe,null,n)),o.default.createElement(We,{ref:u,value:a,startAction:o.default.createElement(Ka,null,o.default.createElement(V.Search,{"aria-hidden":!0})),size:t,endAction:c?o.default.createElement(ro,{label:s,onClick:f},o.default.createElement(uc,null,o.default.createElement(V.Cross,null))):void 0,...l})))});Nt.displayName="Searchbar";Nt.defaultProps={value:"",size:"M"};Nt.propTypes={children:r.exports.node.isRequired,clearLabel:r.exports.string.isRequired,name:r.exports.string.isRequired,onClear:r.exports.func.isRequired,size:r.exports.oneOf(Object.keys(Te.input)),value:r.exports.string};const Za=e=>o.default.createElement("form",{...e,role:"search"}),je={Keyboard:"down:keyboard",Mouse:"down:mouse"},Ge={Keyboard:"up:keyboard",Mouse:"up:mouse"},fc=g.default.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background: transparent;
  border: none;

  // The focus state is moved to the parent thanks to :focus-within
  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,lr=m.forwardRef(({labelledBy:e,expanded:t,onTrigger:n,disabled:a,...i},s)=>{const l=d=>{if(!a)switch(d.key){case L.DOWN:case L.SPACE:case L.ENTER:{d.preventDefault(),n(je.Keyboard);break}case L.UP:{d.preventDefault(),n(Ge.Keyboard);break}}};return o.default.createElement(fc,{ref:s,"aria-labelledby":e,"aria-haspopup":"listbox","aria-expanded":t,onKeyDown:l,"aria-disabled":a,type:"button",...i})});lr.displayName="SelectButton";lr.defaultProps={expanded:!1,disabled:!1};lr.propTypes={disabled:r.exports.bool,expanded:r.exports.bool,labelledBy:r.exports.string.isRequired,onTrigger:r.exports.func.isRequired};const lt=(e,t)=>{e.setAttribute("aria-activedescendant",t.getAttribute("id")),e.querySelectorAll('[role="option"]').forEach(i=>i.classList.remove("is-focused")),t.classList.add("is-focused"),ga(t,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:i,top:s,left:l})=>{i.scrollTop=s,i.scrollLeft=l})},kr=e=>{const t=e.getAttribute("aria-activedescendant");return e.querySelector(`#${t}`)},gc=e=>{const t=m.useRef(null);return m.useEffect(()=>{t.current.focus()},[]),m.useEffect(()=>{if(!t.current)return;const n=t.current.querySelector('[aria-selected="true"]'),a=t.current.querySelectorAll('[role="option"]');let i;n?i=n:e===Ge.Keyboard?i=a[a.length-1]:e===je.Keyboard&&(i=a[0]),i&&(e===Ge.Keyboard||e===je.Keyboard)&&lt(t.current,i)},[]),t},dr=({labelledBy:e,onSelectItem:t,children:n,multi:a,onEscape:i,expanded:s})=>{const l=gc(s),d=p=>{switch(p.key){case L.ESCAPE:{p.stopPropagation(),i();break}case L.DOWN:{p.preventDefault();const c=kr(l.current);if(!c)return;const f=c.nextSibling;if(f)lt(l.current,f);else{const b=l.current.querySelectorAll('[role="option"]')[0];lt(l.current,b)}break}case L.UP:{p.preventDefault();const c=kr(l.current);if(!c)return;const f=c.previousSibling;if(f)lt(l.current,f);else{const u=l.current.querySelectorAll('[role="option"]'),b=u[u.length-1];lt(l.current,b)}break}case L.SPACE:case L.ENTER:{p.preventDefault();const c=kr(l.current);c.getAttribute("data-opt-group")?t(c.getAttribute("data-opt-group-children").split(","),c.getAttribute("data-opt-group")):t(c.getAttribute("data-strapi-value")),a||i();break}}};return o.default.createElement(re,{as:"ul",spacing:1,role:"listbox","aria-labelledby":e,tabIndex:-1,ref:l,onKeyDown:d,onBlur:i,"aria-multiselectable":a},n)};dr.defaultProps={labelledBy:void 0,multi:!1};dr.propTypes={children:r.exports.node.isRequired,expanded:r.exports.oneOf([Ge.Keyboard,Ge.Mouse,je.Keyboard,je.Mouse]).isRequired,labelledBy:r.exports.string,multi:r.exports.bool,onEscape:r.exports.func.isRequired,onSelectItem:r.exports.func.isRequired};const mc=e=>{const t=m.useRef(null),n=m.useRef(null),a=m.useRef();return e&&(a.current=e),m.useEffect(()=>{!n.current||e||(a.current===je.Keyboard||a.current===Ge.Keyboard)&&t.current.focus()},[e]),m.useEffect(()=>{n.current=!0},[]),t},Rn=e=>e.replace(":","-"),bc=g.default(E)`
  svg {
    height: ${8/16}rem;
    width: ${8/16}rem;
  }

  svg path {
    fill: ${({theme:e,...t})=>t["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }
`,hc=g.default(C)`
  border-right: 1px solid ${({theme:e,disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  color: inherit;
  padding-right: ${({theme:e})=>e.spaces[2]};
`,Dt=({children:e,icon:t,disabled:n,onClick:a,...i})=>{const s=l=>{n||a(l)};return o.default.createElement(bc,{as:"button",background:n?"neutral200":"primary100",color:n?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:s,"aria-disabled":n,borderWidth:"1px",borderStyle:"solid",borderColor:n?"neutral300":"primary200",hasRadius:!0,height:`${32/16}rem`,...i},o.default.createElement(k,null,o.default.createElement(hc,{disabled:n,variant:"pi",fontWeight:"bold",as:"span"},e),o.default.createElement(E,{paddingLeft:2},o.default.createElement(k,null,t))))};Dt.displayName="Tag";Dt.defaultProps={disabled:!1,onClick:void 0};Dt.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool,icon:r.exports.element.isRequired,onClick:r.exports.func};const xc=g.default.div`
  margin-bottom: ${({theme:e})=>e.spaces[1]};
`,yc=g.default(Dt)`
  position: relative;
  z-index: 1;
  margin-left: ${({theme:e})=>e.spaces[1]};
  margin-top: ${({theme:e})=>e.spaces[1]};
`,Oo=({tags:e,onRemoveTag:t,disabled:n})=>o.default.createElement(xc,null,o.default.createElement(k,{wrap:"wrap"},e.map(a=>o.default.createElement(yc,{icon:o.default.createElement(V.Cross,null),disabled:n,onClick:()=>t(a.value),tabIndex:-1,key:`tag-${a.value}`},a.label))));Oo.defaultProps={disabled:!1,tags:[]};Oo.propTypes={disabled:r.exports.bool,onRemoveTag:r.exports.func.isRequired,tags:r.exports.arrayOf(r.exports.shape({label:r.exports.string,value:r.exports.oneOfType([r.exports.string,r.exports.number])}))};const Ec=g.default(k)`
  width: 100%;
`,kt=({label:e,labelAction:t,id:n,children:a,customizeContent:i,placeholder:s,onChange:l,value:d,hint:p,error:c,disabled:f,clearLabel:u,onClear:b,onReachEnd:x,multi:h,required:y,size:M,startIcon:w,withTags:z,...O})=>{const $=ie("select",n),[v,Y]=m.useState(void 0),N=mc(v),I=m.useRef(null),q=`${$}-label`,K=`${$}-content`,U=c?`${$}-error`:p?`${$}-hint`:void 0;if(z&&!h)throw new Error('The "withTags" props can only be used when the "multi" prop is present');const Z=()=>{Y(void 0)},_=()=>{f||(b(),N.current.focus())},oe=D=>{D.preventDefault(),!f&&(D.nativeEvent.which===3||D.nativeEvent.button===2||Y(je.Mouse))},F=(D,P=!0)=>{h?l(d.includes(D)?d.filter(S=>S!==D):[...d,D]):(l(D),P&&Y(void 0))},ne=D=>{l(d.includes(D[0])?d.filter(function(P){return this.indexOf(P)<0},D):[...d,...D])};let ce,ue=[];const T=(D,P)=>{const S=`${$}-option-${D.props.value}`,B=h?d.includes(D.props.value):D.props.value===d;return B&&(z?ue.push({label:D.props.children,value:D.props.value}):ce=D.props.children),m.cloneElement(D,{id:Rn(S),onClick:()=>F(D.props.value),selected:B,multi:h,isChild:P})},R=m.Children.toArray(a).map(D=>{if(D.type.displayName==="OptGroup"){const P=`${$}-option-${D.props.label}`,S=D.props.children.every(j=>d.includes(j.props.value)),B=!S&&D.props.children.some(j=>d.includes(j.props.value));return m.cloneElement(D,{id:Rn(P),onClick:()=>ne(D.props.children.map(j=>j.props.value)),selected:S,indeterminate:B,multi:h,children:m.Children.toArray(D.props.children).map(j=>T(j,!0)),value:D.props.label})}else return T(D)});return o.default.createElement(be,{hint:p,error:c,id:$},o.default.createElement(re,{spacing:e||p||c?1:0},e&&o.default.createElement(xe,{required:y,as:"span",id:q,action:t},e),o.default.createElement(rl,{size:M,hasError:Boolean(c),disabled:f,ref:I},o.default.createElement(lr,{ref:N,labelledBy:`${q} ${K}`,"aria-describedby":U,expanded:Boolean(v),onTrigger:Y,id:$,hasError:Boolean(c),disabled:f,onMouseDown:oe,...O}),o.default.createElement(Ec,{justifyContent:"space-between"},o.default.createElement(k,null,w&&o.default.createElement(E,{paddingLeft:3,"aria-hidden":!0},w),z&&o.default.createElement(Oo,{tags:ue,onRemoveTag:F,disabled:f}),o.default.createElement(E,{paddingLeft:4,paddingRight:4},z?o.default.createElement(o.default.Fragment,null,!d||d.length===0?o.default.createElement(C,{ellipsis:!0,id:K,textColor:"neutral600"},s):null,o.default.createElement(se,{as:"span",id:K},i?i(d):ce||s,d.join(", "))):o.default.createElement(C,{ellipsis:!0,id:K,textColor:d?"neutral800":"neutral600"},i?i(d):ce||s,h&&o.default.createElement(se,{as:"span"},d.join(", "))))),o.default.createElement(k,null,(h&&d&&d.length||!h&&d)&&b&&o.default.createElement(io,{as:"button",type:"button",onClick:_,"aria-label":u,"aria-disabled":f},o.default.createElement(V.Cross,null)),o.default.createElement(ba,{paddingLeft:3,"aria-hidden":!0,as:"button",type:"button",onMouseDown:oe,tabIndex:-1,disabled:f},o.default.createElement(V.CarretDown,null))))),o.default.createElement(Ne,null),o.default.createElement(De,null)),v&&o.default.createElement(Ue,{source:I,spacing:4,fullWidth:!0,intersectionId:`select-list-intersection-${$}`,onReachEnd:x},o.default.createElement(dr,{selectId:$,labelledBy:e?q:void 0,onEscape:Z,expanded:v,onSelectItem:(D,P)=>P?ne(D):F(D,!1),multi:h},R)))};kt.defaultProps={"aria-label":void 0,children:[],clearLabel:"Clear",customizeContent:void 0,disabled:!1,id:void 0,label:void 0,labelAction:void 0,multi:!1,onChange:()=>{},onClear:void 0,onReachEnd:void 0,value:void 0,hint:void 0,error:void 0,placeholder:"Select...",required:!1,size:"M",startIcon:void 0,withTags:!1};kt.propTypes={"aria-label":r.exports.string,children:r.exports.oneOfType([r.exports.arrayOf(r.exports.node),r.exports.node]),clearLabel:r.exports.string,customizeContent:r.exports.func,disabled:r.exports.bool,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.oneOfType([r.exports.string,r.exports.number]),label:r.exports.string,labelAction:r.exports.element,multi:r.exports.bool,onChange:r.exports.func,onClear:r.exports.func,onReachEnd:r.exports.func,placeholder:r.exports.string,required:r.exports.bool,size:r.exports.oneOf(Object.keys(Te.input)),startIcon:r.exports.element,value:r.exports.oneOfType([r.exports.arrayOf(r.exports.oneOfType([r.exports.string,r.exports.number])),r.exports.string,r.exports.number]),withTags:r.exports.bool};const vc=g.default.div`
  border: 1px solid
    ${({theme:e,selected:t,indeterminate:n})=>t||n?e.colors.primary600:e.colors.neutral300};
  border-radius: ${({theme:e})=>e.borderRadius};
  height: 18px;
  width: 18px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: ${({theme:e,selected:t,indeterminate:n})=>t||n?e.colors.primary600:e.colors.neutral0};

  ${({theme:e,indeterminate:t})=>t&&`&::after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

  `}

  ${({selected:e})=>e&&`  
    &::after {
      content: '';
      background: url(${Xn}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`,Mc=g.default(E)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Ae=({selected:e,indeterminate:t,children:n,value:a,multi:i,isChild:s,startIcon:l,...d})=>{const p=m.useRef(null);return o.default.createElement(Mc,{as:"li",hasRadius:!0,paddingLeft:s?7:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:p,role:"option","aria-selected":e,background:"neutral0","data-strapi-value":a,...d},o.default.createElement(k,null,l&&o.default.createElement(E,{paddingRight:2,"aria-hidden":!0},l),i&&o.default.createElement(E,{paddingRight:2,"aria-hidden":!0},o.default.createElement(vc,{selected:e,indeterminate:t})),o.default.createElement(C,{textColor:e?"primary600":"neutral800",fontWeight:e?"bold":null},n)))};Ae.defaultProps={isChild:!1,multi:!1,selected:!1,startIcon:void 0,indeterminate:!1};Ae.propTypes={children:r.exports.oneOfType([r.exports.string,r.exports.number]).isRequired,indeterminate:r.exports.bool,isChild:r.exports.bool,multi:r.exports.bool,selected:r.exports.bool,startIcon:r.exports.node,value:r.exports.oneOfType([r.exports.string,r.exports.number]).isRequired};Ae.displayName="Option";const cr=({children:e,label:t,...n})=>{const a=e.map(i=>i.props.value);return o.default.createElement(o.default.Fragment,null,o.default.createElement(Ae,{"data-opt-group":!0,"data-opt-group-children":a,"aria-label":`${t}, ${e.length} items`,...n},t),e)};cr.propTypes={children:r.exports.arrayOf(r.exports.node).isRequired,label:r.exports.string.isRequired};cr.displayName="OptGroup";const Xa=({options:e,...t})=>o.default.createElement(kt,{multi:!0,...t},e.map(({label:n,value:a,children:i})=>i?o.default.createElement(cr,{key:n,label:n},i==null?void 0:i.map(s=>o.default.createElement(Ae,{key:s.value,value:s.value},s.label))):o.default.createElement(Ae,{key:a,value:a},n)));Xa.propTypes={options:r.exports.arrayOf(r.exports.object).isRequired};const Tc=g.default.div`
  margin-right: ${({theme:e})=>e.spaces[3]};
  width: ${6/16}rem;
  height: ${6/16}rem;
  border-radius: 50%;
  background: ${({theme:e,backgroundColor:t})=>e.colors[t]};
`,$c=g.default(E)`
  ${C} {
    color: ${({theme:e,textColor:t})=>e.colors[t]};
  }
`,Ao=({variant:e,children:t,...n})=>{const a=`${e}100`,i=`${e}200`,s=`${e}600`,l=`${e}600`;return o.default.createElement($c,{borderColor:i,textColor:l,background:a,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,...n},o.default.createElement(k,null,o.default.createElement(Tc,{backgroundColor:s}),t))};Ao.defaultProps={variant:"primary"};Ao.propTypes={children:r.exports.node.isRequired,variant:r.exports.oneOf(["alternative","danger","neutral","primary","secondary","success","warning"])};const Ja=`${232/16}rem`,wc=g.default(it)`
  width: ${Ja};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,ei=({ariaLabel:e,...t})=>o.default.createElement(wc,{"aria-label":e,as:"nav",...t});ei.propTypes={ariaLabel:r.exports.string.isRequired};const Cc=e=>{const t=m.useRef();return m.useEffect(()=>{t.current=e}),t.current},On=g.default(at)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,So=({as:e,label:t,searchLabel:n,searchable:a,onChange:i,value:s,onClear:l,onSubmit:d,id:p})=>{const[c,f]=m.useState(!1),u=Cc(c),b=ie("subnav-searchbar-clear",p),x=m.useRef(),h=m.useRef();m.useEffect(()=>{c&&x.current&&x.current.focus(),u&&!c&&h.current&&h.current.focus()},[c]);const y=()=>{f(O=>!O)},M=O=>{l(O),x.current.focus()},w=O=>{var $;(($=O.relatedTarget)==null?void 0:$.id)!==b&&f(!1)},z=O=>{O.key===L.ESCAPE&&f(!1)};return c?o.default.createElement(E,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},o.default.createElement(Za,null,o.default.createElement(Nt,{name:"searchbar",value:s,onChange:i,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:z,ref:x,onBlur:w,onClear:M,onSubmit:d,clearLabel:"Clear",size:"S"},n)),o.default.createElement(E,{paddingLeft:2,paddingTop:4},o.default.createElement(On,null))):o.default.createElement(E,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},o.default.createElement(k,{justifyContent:"space-between",alignItems:"flex-start"},o.default.createElement(C,{variant:"beta",as:e},t),a&&o.default.createElement(st,{ref:h,onClick:y,label:n,icon:o.default.createElement(V.Search,null)})),o.default.createElement(E,{paddingTop:4},o.default.createElement(On,null)))};So.defaultProps={as:"h2",searchable:!1,onChange:()=>{},onClear:()=>{},onSubmit:()=>{},value:"",searchLabel:"",id:void 0};So.propTypes={as:r.exports.string,id:r.exports.string,label:r.exports.string.isRequired,onChange:r.exports.func,onClear:r.exports.func,onSubmit:r.exports.func,searchLabel:r.exports.string,searchable:r.exports.bool,value:r.exports.string};const Nc=g.default(E)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${C} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,An=g.default(V.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  }
`,Dc=g.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,ur=({children:e,icon:t,withBullet:n,isSubSectionChild:a,...i})=>o.default.createElement(Nc,{as:$e.NavLink,icon:t,background:"neutral100",paddingLeft:a?9:7,paddingBottom:2,paddingTop:2,...i},o.default.createElement(k,null,t?o.default.createElement(Dc,null,t):o.default.createElement(An,null),o.default.createElement(E,{paddingLeft:2},o.default.createElement(C,{as:"span"},e))),n&&o.default.createElement(E,{as:k,paddingRight:4},o.default.createElement(An,{$active:!0})));ur.displayName="SubNavLink";ur.defaultProps={icon:null,isSubSectionChild:!1,withBullet:!1};ur.propTypes={children:r.exports.node,icon:r.exports.element,isSubSectionChild:r.exports.bool,link:r.exports.element,withBullet:r.exports.bool};const kc=g.default(E)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,Ic=g.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,Rc=g.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,zo=({label:e,children:t,id:n})=>{const[a,i]=m.useState(!0),s=ie("subnav-list",n),l=()=>{i(d=>!d)};return o.default.createElement(E,null,o.default.createElement(kc,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4},o.default.createElement(k,{justifyContent:"space-between"},o.default.createElement(Ic,{onClick:l,"aria-expanded":a,"aria-controls":s},o.default.createElement(Rc,{rotated:a},o.default.createElement(V.CarretDown,{"aria-hidden":!0})),o.default.createElement(E,{paddingLeft:2},o.default.createElement(C,{as:"span",fontWeight:"semiBold",textColor:"neutral800"},e))))),a&&o.default.createElement("ul",{id:s},m.Children.map(t,(d,p)=>o.default.createElement("li",{key:p},d))))};zo.defaultProps={id:void 0};zo.propTypes={children:r.exports.node,id:r.exports.string,label:r.exports.string.isRequired};const Sn=g.default(k)`
  border: none;
  padding: 0;
  background: transparent;
`,Oc=g.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Lo=({collapsable:e,label:t,onClick:n,ariaExpanded:a,ariaControls:i})=>e?o.default.createElement(Sn,{as:"button",onClick:n,"aria-expanded":a,"aria-controls":i,textAlign:"left"},o.default.createElement(E,{paddingRight:1},o.default.createElement(C,{variant:"sigma",textColor:"neutral600"},t)),e&&o.default.createElement(Oc,{rotated:a},o.default.createElement(V.CarretDown,{"aria-hidden":!0}))):o.default.createElement(Sn,null,o.default.createElement(E,{paddingRight:1},o.default.createElement(C,{variant:"sigma",textColor:"neutral600"},t)));Lo.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick:()=>{}};Lo.propTypes={ariaControls:r.exports.string,ariaExpanded:r.exports.bool,collapsable:r.exports.bool,label:r.exports.string.isRequired,onClick:r.exports.func};const Ac=g.default(E)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,jo=({collapsable:e,label:t,badgeLabel:n,children:a,id:i})=>{const[s,l]=m.useState(!0),d=ie("subnav-list",i),p=()=>{l(c=>!c)};return o.default.createElement(re,{spacing:1},o.default.createElement(Ac,{paddingLeft:6,paddingTop:1,paddingBottom:1,paddingRight:4},o.default.createElement(E,{position:"relative",paddingRight:n?6:0},o.default.createElement(Lo,{onClick:p,ariaExpanded:s,ariaControls:d,collapsable:e,label:t}),n&&o.default.createElement(Xe,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},n))),(!e||s)&&o.default.createElement("ol",{id:d},m.Children.map(a,(c,f)=>o.default.createElement("li",{key:f},c))))};jo.defaultProps={badgeLabel:null,collapsable:!1,id:void 0};jo.propTypes={badgeLabel:r.exports.string,children:r.exports.node,collapsable:r.exports.bool,id:r.exports.string,label:r.exports.string.isRequired};const ti=({children:e,...t})=>o.default.createElement(E,{paddingTop:2,paddingBottom:4},o.default.createElement(re,{as:"ol",spacing:2,...t},m.Children.map(e,(n,a)=>o.default.createElement("li",{key:a},n))));ti.propTypes={children:r.exports.node.isRequired};const Pr=g.default.div`
  background: ${({theme:e})=>e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:e})=>e?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:e})=>e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:e})=>e.spaces[1]};
    top: ${({theme:e})=>e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,Sc=g.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${Pr} {
    background: ${({theme:e})=>e.colors.success500};
  }

  &[aria-checked='true'] ${Pr}:before {
    transform: translateX(1rem);
  }
`,pr=o.default.forwardRef(({label:e,onChange:t,onLabel:n,offLabel:a,selected:i,visibleLabels:s,...l},d)=>o.default.createElement(Sc,{ref:d,role:"switch","aria-checked":i,"aria-label":e,onClick:t,visibleLabels:s,type:"button",...l},o.default.createElement(k,null,o.default.createElement(Pr,null,o.default.createElement("span",null,n),o.default.createElement("span",null,a)),s&&o.default.createElement(E,{as:"span","aria-hidden":!0,paddingLeft:2,color:i?"success600":"danger600"},i?n:a))));pr.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1};pr.propTypes={label:r.exports.string.isRequired,offLabel:r.exports.string,onChange:r.exports.func.isRequired,onLabel:r.exports.string,selected:r.exports.bool.isRequired,visibleLabels:r.exports.bool};pr.displayName="Switch";const ri=m.createContext(),oi=()=>m.useContext(ri),zc=(e,t)=>{const n=m.useRef(null),a=m.useRef(null);return m.useEffect(()=>{if(!!n.current){if(a.current){const i=n.current.querySelector('[tabindex="0"]');i&&(i.focus(),t(e))}a.current||(a.current=!0)}},[e]),n},Lc=g.default(E)`
  border-bottom: 2px solid
    ${({theme:e,selected:t,hasError:n})=>t?n?e.colors.danger600:e.colors.primary600:"transparent"};
`,_e=g.default(E)`
  border-bottom: 1px solid ${({theme:e,selected:t})=>t?e.colors.neutral0:e.colors.neutral150};
`,St=g.default.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${_e} {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral150};
  }

  ${_e} {
    border-right: ${({theme:e,showRightBorder:t})=>t?`1px solid ${e.colors.neutral150}`:"none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,jc=g.default(k)`
  & > * {
    flex: 1;
  }

  & ${St}:first-of-type ${_e} {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 0`};
  }

  & ${St}:last-of-type ${_e} {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} 0 0`};
  }

  & ${St}[aria-selected="true"] ${_e} {
    border-radius: ${({theme:e})=>`${e.borderRadius} ${e.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`,Pc=g.default.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,ni=({children:e,...t})=>{const{id:n,selectedTabIndex:a,selectTabIndex:i,label:s,variant:l,onTabChange:d}=oi(),p=zc(a,d),c=m.Children.toArray(e).map((u,b)=>m.cloneElement(u,{id:`${n}-${b}`,index:b,selectedTabIndex:a,onTabClick:()=>i(b),variant:l})),f=u=>{if(!c.every(x=>x.props.disabled))switch(u.key){case L.RIGHT:{const x=a+1,h=M=>c[M].props.disabled?M===c.length-1?h(0):h(M+1):M,y=h(x>=c.length?0:x);i(y);break}case L.LEFT:{const x=a-1,h=M=>c[M].props.disabled?h(M===0?c.length-1:M-1):M,y=h(x<0?c.length-1:x);i(y);break}case L.HOME:{const x=c.findIndex(h=>!h.props.disabled);i(x);break}case L.END:{const h=c.map((y,M)=>({isDisabled:y.props.disabled,index:M})).reverse().find(({isDisabled:y})=>!y);h&&i(h.index);break}}};return l==="simple"?o.default.createElement("div",{ref:p,role:"tablist","aria-label":s,onKeyDown:f,...t},c):o.default.createElement(jc,{ref:p,role:"tablist",alignItems:"flex-end","aria-label":s,onKeyDown:f,...t},c)};ni.propTypes={children:r.exports.node.isRequired};const Po=({disabled:e,id:t,children:n,variant:a,hasError:i,index:s,selectedTabIndex:l,onTabClick:d,...p})=>{const c=`${t}-tab`,f=`${t}-tabpanel`,u=s===l,b=()=>{e||d()};if(a==="simple"){let h;return i?h="danger600":u?h="primary600":h="neutral600",o.default.createElement(Pc,{id:c,role:"tab","aria-controls":u?f:void 0,tabIndex:u?0:-1,"aria-selected":u,type:"button",onClick:b,"aria-disabled":e,...p},o.default.createElement(Lc,{padding:4,selected:u,hasError:i},o.default.createElement(C,{variant:"sigma",textColor:h},n)))}i&&console.warn('The "hasError" prop is only available for the "simple" variant.');const x=l-1===s;return o.default.createElement(St,{id:c,role:"tab",type:"button","aria-controls":u?f:void 0,tabIndex:u?0:-1,"aria-selected":u,onClick:b,"aria-disabled":e,showRightBorder:x,...p},o.default.createElement(_e,{padding:u?4:3,background:u?"neutral0":"neutral100",selected:u},o.default.createElement(C,{fontWeight:"bold",textColor:u?"primary700":"neutral600"},n)))};Po.defaultProps={disabled:!1,hasError:!1,id:void 0,index:void 0,onTabClick:void 0,selectedTabIndex:void 0,variant:void 0};Po.propTypes={children:r.exports.node.isRequired,disabled:r.exports.bool,hasError:r.exports.bool,id:r.exports.string,index:r.exports.number,onTabClick:r.exports.func,selectedTabIndex:r.exports.number,variant:r.exports.oneOf(["simple"])};const ai=({children:e,...t})=>{const{id:n,selectedTabIndex:a}=oi(),i=m.Children.toArray(e).map((s,l)=>m.cloneElement(s,{id:`${n}-${l}`})).filter((s,l)=>l===a);return o.default.createElement("div",{...t},i)};ai.propTypes={children:r.exports.node.isRequired};const qo=({id:e,...t})=>{const n=`${e}-tab`,a=`${e}-tabpanel`;return o.default.createElement("div",{id:a,role:"tabpanel",tabIndex:0,"aria-labelledby":n,...t})};qo.defaultProps={id:void 0};qo.propTypes={id:r.exports.string};const fr=m.forwardRef(({id:e,initialSelectedTabIndex:t,label:n,onTabChange:a,variant:i,...s},l)=>{const d=ie("tabgroup",e),p=m.Children.toArray(s.children).find(b=>b.type.displayName==="Tabs");let c=t||0;p&&t===void 0&&(c=p.props.children.findIndex(b=>!b.props.disabled));const[f,u]=m.useState(c===-1?0:c);return m.useImperativeHandle(l,()=>({_handlers:{setSelectedTabIndex:u}})),o.default.createElement(ri.Provider,{value:{id:d,selectedTabIndex:f,selectTabIndex:u,label:n,variant:i,onTabChange:a}},o.default.createElement("div",{...s}))});fr.displayName="TabGroup";fr.defaultProps={id:void 0,initialSelectedTabIndex:void 0,onTabChange:()=>{},variant:void 0};fr.propTypes={children:r.exports.node.isRequired,id:r.exports.string,initialSelectedTabIndex:r.exports.number,label:r.exports.string.isRequired,onTabChange:r.exports.func,variant:r.exports.oneOf(["simple"])};const qc=g.default(E)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Bc=g.default($t)`
  width: 100%;
  white-space: nowrap;
`,Wc=g.default(E)`
  position: relative;

  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,Uc=g.default(E)`
  overflow-x: auto;
`,Bo=({colCount:e,rowCount:t,footer:n,...a})=>{const i=m.useRef(null),[s,l]=m.useState(),d=p=>{const c=p.target.scrollWidth-p.target.clientWidth;if(p.target.scrollLeft===0)return l("right");if(p.target.scrollLeft===c)return l("left");if(p.target.scrollLeft>0)return l("both")};return m.useEffect(()=>{i.current.scrollWidth>i.current.clientWidth&&l("right")},[]),o.default.createElement(qc,{shadow:"tableShadow",hasRadius:!0,background:"neutral0"},o.default.createElement(Wc,{overflowing:s},o.default.createElement(Uc,{ref:i,onScroll:d,paddingLeft:6,paddingRight:6},o.default.createElement(Bc,{colCount:e,rowCount:t,...a}))),n)};Bo.defaultProps={footer:void 0};Bo.propTypes={colCount:r.exports.number.isRequired,footer:r.exports.node,rowCount:r.exports.number.isRequired};const Fc=g.default(tr)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,Yc=e=>o.default.createElement(Fc,{...e}),Qc=g.default(er)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,_c=e=>o.default.createElement(Qc,{...e}),Hc=g.default(ft)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:e})=>e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:e})=>e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,Vc=e=>o.default.createElement(Hc,{...e}),ii=g.default(nt)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:e})=>e.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,Gc=g.default.span`
  svg {
    height: ${4/16}rem;
  }
`,Wo=({children:e,action:t,...n})=>o.default.createElement(ii,{as:wt,...n},o.default.createElement(k,null,e,o.default.createElement(Gc,null,t)));Wo.defaultProps={action:void 0};Wo.propTypes={action:r.exports.node,children:r.exports.node.isRequired};const Kc=e=>o.default.createElement(ii,{...e}),Zc=g.default(E)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Xc=g.default(E)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,si=({children:e,icon:t,...n})=>o.default.createElement("div",null,o.default.createElement(at,null),o.default.createElement(Xc,{as:"button",background:"primary100",padding:5,...n},o.default.createElement(k,null,o.default.createElement(Zc,{"aria-hidden":!0,background:"primary200"},t),o.default.createElement(E,{paddingLeft:3},o.default.createElement(C,{variant:"pi",fontWeight:"bold",textColor:"primary600"},e)))));si.propTypes={children:r.exports.string.isRequired,icon:r.exports.node.isRequired};const Jc=g.default.div`
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};

  padding-left: ${({theme:e,hasLeftAction:t})=>t?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:t})=>t?0:e.spaces[4]};
  padding-top: ${({theme:e})=>`${e.spaces[3]}`};
  padding-bottom: ${({theme:e})=>`${e.spaces[3]}`};

  background: ${({theme:e,disabled:t})=>t?e.colors.neutral150:e.colors.neutral0};
  ${qe()}
`,eu=g.default.textarea`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: ${14/16}rem;
  border: none;
  color: ${({theme:e,disabled:t})=>t?e.colors.neutral600:e.colors.neutral800};
  resize: none;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,gr=m.forwardRef(({disabled:e,...t},n)=>{const{id:a,error:i,hint:s,name:l}=Be();let d;i?d=`${a}-error`:s&&(d=`${a}-hint`);const p=Boolean(i);return o.default.createElement(Jc,{hasError:p,disabled:e},o.default.createElement(eu,{id:a,name:l,ref:n,"aria-describedby":d,"aria-invalid":p,disabled:e,hasError:p,...t}))});gr.displayName="TextareaInput";gr.defaultProps={disabled:!1};gr.propTypes={disabled:r.exports.bool};const tu=g.default.div`
  & textarea {
    // TODO: remove when we'll have fonts in the theme
    height: ${80/16}rem;
    line-height: ${20/16}rem;
  }

  & textarea::placeholder {
    font-weight: 400;
    font-size: ${14/16}rem;
    line-height: 1.43;
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }
`,mr=o.default.forwardRef(({name:e,hint:t,error:n,label:a,children:i,labelAction:s,id:l,required:d,...p},c)=>{const f=ie("textarea",l);return o.default.createElement(tu,null,o.default.createElement(be,{name:e,hint:t,error:n,id:f},o.default.createElement(re,{spacing:1},a&&o.default.createElement(k,null,o.default.createElement(xe,{required:d,action:s},a)),o.default.createElement(gr,{ref:c,as:"textarea",value:i,...p}),o.default.createElement(Ne,null),o.default.createElement(De,null))))});mr.displayName="Textarea";mr.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,children:"",required:!1};mr.propTypes={"aria-label":r.exports.string,children:r.exports.string,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.string,label:r.exports.string,labelAction:r.exports.element,name:r.exports.string.isRequired,required:r.exports.bool};const ru=()=>o.default.createElement(se,null,o.default.createElement("p",{role:"log","aria-live":"polite",id:Qe.Log,"aria-relevant":"all"}),o.default.createElement("p",{role:"status","aria-live":"polite",id:Qe.Status,"aria-relevant":"all"}),o.default.createElement("p",{role:"alert","aria-live":"assertive",id:Qe.Alert,"aria-relevant":"all"})),ou=Pe.createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* My styles */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  body,html{
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font-size: 100%;
    cursor: pointer;
    font: inherit;
  }

  textarea,input {
    font: inherit;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`,li=({children:e,theme:t})=>te.createElement(Pe.ThemeProvider,{theme:t},te.createElement(ou,null),e,te.createElement(ru,null));li.propTypes={children:r.exports.node.isRequired,theme:r.exports.object.isRequired};const nu=()=>Pe.useTheme(),au=g.default.div`
  display: flex;
  align-items: center;
  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Uo=({disabled:e,error:t,hint:n,id:a,onClear:i,onChange:s,value:l,clearLabel:d,label:p,step:c,size:f,...u})=>{const b=ie("timepicker",a),x=24,h=[];let y=0;for(let w=0;w<x;w++)for(y=0;y<60;)h.push(`${w<10?"0"+w:w}:${y<10?"0"+y:y}`),y+=c;const M=()=>{const w=l.split(":")[0],z=l.split(":")[1],O=h.reduce((v,Y)=>{const N=Y.split(":")[0];return Math.abs(N-w)<Math.abs(v-w)?N:v},h[0].split(":")[0]),$=h.reduce((v,Y)=>{const N=Y.split(":")[1];return Math.abs(N-z)<Math.abs(v-z)?N:v},h[0].split(":")[1]);return`${O}:${$}`};return o.default.createElement(kt,{id:b,label:p,placeholder:"--:--",hint:n,onClear:i,clearLabel:d,error:t,value:l?M():null,size:f,onChange:s,disabled:e,startIcon:o.default.createElement(au,null,o.default.createElement(V.Clock,null)),...u},h.map(w=>o.default.createElement(Ae,{value:w,key:w},w)))};Uo.defaultProps={disabled:!1,error:void 0,hint:void 0,id:void 0,label:void 0,onClear:void 0,size:"M",step:15,value:void 0};Uo.propTypes={clearLabel:r.exports.string.isRequired,disabled:r.exports.bool,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.oneOfType([r.exports.string,r.exports.number]),label:r.exports.string,onChange:r.exports.func.isRequired,onClear:r.exports.func,size:r.exports.oneOf(Object.keys(Te.input)),step:r.exports.number,value:r.exports.oneOfType([r.exports.arrayOf(r.exports.oneOfType([r.exports.string,r.exports.number])),r.exports.string,r.exports.number])};const iu=g.default.label`
  position: relative;
  display: inline-block;
`,su=g.default(E)`
  height: ${Fr("input")};
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;

  ${qe()}
`,zn=g.default(k).attrs({hasRadius:!0})`
  background-color: ${({theme:e,checked:t,disabled:n})=>t?n?e.colors.neutral200:e.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:e,checked:t,disabled:n})=>t&&t!==null?n?e.colors.neutral300:e.colors.neutral200:n?e.colors.neutral150:e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
`,lu=g.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,It=o.default.forwardRef(({size:e,onLabel:t,offLabel:n,children:a,checked:i,disabled:s,onChange:l,...d},p)=>{const c="neutral600";let f=!i&&i!==null?"danger700":c,u=i?"primary600":c;const b=x=>{s||l(x)};return o.default.createElement(iu,null,o.default.createElement(se,null,a),o.default.createElement(su,{hasRadius:!0,size:e,disabled:s,padding:1,display:"inline-flex",background:s?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},o.default.createElement(zn,{paddingLeft:7,paddingRight:7,"aria-hidden":!0,checked:i===null?!1:!i,disabled:s},o.default.createElement(C,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:s?"neutral700":f},n)),o.default.createElement(zn,{paddingLeft:7,paddingRight:7,"aria-hidden":!0,checked:i===null?!1:i,disabled:s},o.default.createElement(C,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:s?"neutral700":u},t)),o.default.createElement(lu,{type:"checkbox","aria-disabled":s,onChange:x=>b(x),ref:p,...d,checked:!(i===null||!i)})))});It.displayName="ToggleCheckbox";It.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"};It.propTypes={checked:r.exports.bool,children:r.exports.string.isRequired,disabled:r.exports.bool,offLabel:r.exports.string.isRequired,onChange:r.exports.func,onLabel:r.exports.string.isRequired,size:r.exports.oneOf(Object.keys(Te.input))};const du=g.default(be)`
  width: fit-content;
`,cu=g.default(Ze)`
  align-self: flex-end;
  margin-left: auto;
`,br=({disabled:e,size:t,error:n,hint:a,label:i,name:s,labelAction:l,required:d,id:p,onClear:c,clearLabel:f,checked:u,...b})=>{const x=ie("toggleinput",p);return o.default.createElement(du,{name:s,hint:a,error:n,id:x},o.default.createElement(re,{spacing:1},o.default.createElement(k,null,o.default.createElement(xe,{required:d,action:l},i),f&&c&&u!==null&&!e&&o.default.createElement(cu,{onClick:c},f)),o.default.createElement(It,{id:x,size:t,name:s,checked:u,disabled:e,...b},i),o.default.createElement(Ne,null),o.default.createElement(De,null)))};br.displayName="ToggleInput";br.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"};br.propTypes={checked:r.exports.bool,clearLabel:r.exports.string,disabled:r.exports.bool,error:r.exports.string,hint:r.exports.oneOfType([r.exports.string,r.exports.node,r.exports.arrayOf(r.exports.node)]),id:r.exports.string,label:r.exports.string,labelAction:r.exports.node,name:r.exports.string,onClear:r.exports.func,required:r.exports.bool,size:r.exports.oneOf(Object.keys(Te.input))};const uu={color:{alternative100:"#f6ecfc",alternative200:"#e0c1f4",alternative500:"#ac73e6",alternative600:"#9736e8",alternative700:"#8312d1",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#fcecea",danger200:"#f5c0b8",danger500:"#ee5e52",danger600:"#d02b20",danger700:"#b72b1a",neutral0:"#ffffff",neutral100:"#f6f6f9",neutral1000:"#181826",neutral150:"#eaeaef",neutral200:"#dcdce4",neutral300:"#c0c0cf",neutral400:"#a5a5ba",neutral500:"#8e8ea9",neutral600:"#666687",neutral700:"#4a4a6a",neutral800:"#32324d",neutral900:"#212134",primary100:"#f0f0ff",primary200:"#d9d8ff",primary500:"#7b79ff",primary600:"#4945ff",primary700:"#271fe0",secondary100:"#eaf5ff",secondary200:"#b8e1ff",secondary500:"#66b7f1",secondary600:"#0c75af",secondary700:"#006096",success100:"#eafbe7",success200:"#c6f0c2",success500:"#5cb176",success600:"#328048",success700:"#2f6846",warning100:"#fdf4dc",warning200:"#fae7b9",warning500:"#f29d41",warning600:"#d9822f",warning700:"#be5d01"}},pu={shadow:{filterShadow:"0px 1px 4px rgba(33, 33, 52, 0.1)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"0px 2px 15px rgba(33, 33, 52, 0.1)",tableShadow:"0px 1px 4px rgba(33, 33, 52, 0.1)"}},di={sizes:Te,zIndices:[5,10,15,20],spaces:["0px","4px","8px","12px","16px","20px","24px","32px","40px","48px","56px","64px"],borderRadius:"4px",mediaQueries:{tablet:`@media (max-width: ${1100/16}rem)`,mobile:`@media (max-width: ${550/16}rem)`},fontSizes:[`${11/16}rem`,`${12/16}rem`,`${14/16}rem`,"1rem",`${18/16}rem`,`${32/16}rem`],lineHeights:[1.14,1.22,1.25,1.33,1.43,1.45,1.5],fontWeights:{regular:400,semiBold:500,bold:600}},ci={colors:uu.color,shadows:pu.shadow,...di},fu={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},gu={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}},mu={colors:fu.color,shadows:gu.shadow,...di},Ln=e=>`
${e}

The following is an example:


import { lightTheme, extendTheme } from '@strapi/design-system/themes';

const myCustomTheme = extendTheme(lightTheme, {
    ${Object.keys(ci).map(t=>`${t}: /* put the overrides for the ${t} key */,`).join(`
`)}
})
`,ct=e=>e&&typeof e=="object"&&!Array.isArray(e),ui=(e,t)=>{const n={...e};return ct(e)&&ct(t)&&Object.keys(t).forEach(a=>{ct(t[a])&&e.hasOwnProperty(a)?n[a]=ui(e[a],t[a]):n[a]=t[a]}),n},bu=(e,t)=>{if(!ct(e)){const n=Ln("The first argument should be an object and corresponds to the theme you want to extend.");throw new Error(n)}if(!ct(t)){const n=Ln("The second argument should be an object and corresponds to the keys of the theme you want to override.");throw new Error(n)}return ui(e,t)};exports.Accordion=Ur;exports.AccordionContent=Gn;exports.AccordionGroup=Qr;exports.AccordionToggle=Yr;exports.AccordionTypography=Wr;exports.ActionLayout=yo;exports.Alert=Ft;exports.Avatar=Yt;exports.AvatarGroup=ps;exports.Badge=Xe;exports.BaseButton=Je;exports.BaseButtonWrapper=Hr;exports.BaseCheckbox=et;exports.BaseHeaderLayout=Ve;exports.BaseLink=Qt;exports.BaseRadio=mt;exports.Box=E;exports.Breadcrumbs=Gr;exports.Button=tt;exports.ButtonWrapper=la;exports.Card=Jr;exports.CardAction=ua;exports.CardAsset=eo;exports.CardBadge=Ns;exports.CardBody=Ds;exports.CardCheckbox=ks;exports.CardContent=pa;exports.CardHeader=Os;exports.CardSubtitle=zs;exports.CardTimer=fa;exports.CardTitle=Ss;exports.Carousel=Vt;exports.CarouselActions=Ks;exports.CarouselImage=Zs;exports.CarouselInput=oo;exports.CarouselSlide=no;exports.Checkbox=ao;exports.Combobox=Mt;exports.ComboboxOption=vt;exports.ContentLayout=Oa;exports.CreatableCombobox=po;exports.Crumb=_t;exports.DatePicker=bo;exports.Dialog=Xt;exports.DialogBody=fo;exports.DialogFooter=Jt;exports.Divider=at;exports.Dots=_a;exports.EmptyStateLayout=ho;exports.Field=be;exports.FieldAction=ro;exports.FieldContext=to;exports.FieldError=De;exports.FieldHint=Ne;exports.FieldInput=We;exports.FieldLabel=xe;exports.Flex=k;exports.FocusTrap=ot;exports.Grid=it;exports.GridItem=gt;exports.GridLayout=Sa;exports.HeaderLayout=rr;exports.Icon=ye;exports.IconButton=st;exports.IconButtonGroup=Cd;exports.Initials=_r;exports.InputWrapper=ut;exports.KeyboardNavigable=Ut;exports.Layout=xo;exports.Link=or;exports.LinkButton=nr;exports.Loader=Et;exports.Main=Eo;exports.MainNav=vo;exports.MenuItem=pt;exports.ModalBody=Gd;exports.ModalFooter=$o;exports.ModalHeader=To;exports.ModalLayout=Wa;exports.MultiSelectNested=Xa;exports.NavBrand=Mo;exports.NavCondense=qa;exports.NavLink=ar;exports.NavSection=ja;exports.NavSections=Pa;exports.NavUser=ir;exports.NextLink=ko;exports.NumberInput=sr;exports.OptGroup=cr;exports.Option=Ae;exports.POPOVER_PLACEMENTS=lo;exports.PageLink=Io;exports.Pagination=Co;exports.Popover=Ue;exports.Portal=xt;exports.PreviousLink=Do;exports.ProgressBar=Ro;exports.Radio=Ga;exports.RadioGroup=Vr;exports.RawTable=$t;exports.RawTbody=tr;exports.RawTd=nt;exports.RawTh=wt;exports.RawThead=er;exports.RawTr=ft;exports.SearchForm=Za;exports.Searchbar=Nt;exports.Select=kt;exports.SelectList=dr;exports.SimpleMenu=Le;exports.SkipToContent=za;exports.Stack=re;exports.Status=Ao;exports.SubNav=ei;exports.SubNavHeader=So;exports.SubNavLink=ur;exports.SubNavLinkSection=zo;exports.SubNavSection=jo;exports.SubNavSections=ti;exports.Switch=pr;exports.TFooter=si;exports.Tab=Po;exports.TabGroup=fr;exports.TabPanel=qo;exports.TabPanels=ai;exports.Table=Bo;exports.Tabs=ni;exports.Tag=Dt;exports.Tbody=Yc;exports.Td=Kc;exports.TextButton=Ze;exports.TextInput=Tt;exports.Textarea=mr;exports.Th=Wo;exports.Thead=_c;exports.ThemeProvider=li;exports.TimePicker=Uo;exports.ToggleCheckbox=It;exports.ToggleInput=br;exports.Tooltip=rt;exports.Tr=Vc;exports.TwoColsLayout=Aa;exports.Typography=C;exports.VisuallyHidden=se;exports.buttonFocusStyle=Ke;exports.darkTheme=mu;exports.extendTheme=bu;exports.getThemeSize=Fr;exports.inputFocusStyle=qe;exports.lightTheme=ci;exports.subNavWidth=Ja;exports.useField=Be;exports.useNotifyAT=Ld;exports.useTheme=nu;
