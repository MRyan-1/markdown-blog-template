import{X as e,_ as t,c as n,S as r,Y as a,m as i,t as o,C as l,Z as s,$ as u,a0 as c,U as d,a1 as p,a2 as h,a3 as g,a4 as f,a5 as y,e as m,o as v,D as x,a6 as C,P as I,a7 as S,a8 as b,a9 as P,G as w,aa as T,M,ab as z,ac as A,ad as D,J as R}from"./index.js";import{g as E}from"./labelHelper.js";import{c as O}from"./createClipPathFromCoordSys.js";import{a as L,w as _,c as G,i as F,b as k,s as Z,d as W,e as B}from"./customGraphicKeyframeAnimation.js";var H={color:"fill",borderColor:"stroke"},V={symbol:1,symbolSize:1,symbolKeepAspect:1,legendIcon:1,visualMeta:1,liftZ:1,decal:1},j=e(),N=function(e){function r(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=r.type,t}return t(r,e),r.prototype.optionUpdated=function(){this.currentZLevel=this.get("zlevel",!0),this.currentZ=this.get("z",!0)},r.prototype.getInitialData=function(e,t){return n(null,this)},r.prototype.getDataParams=function(t,n,r){var a=e.prototype.getDataParams.call(this,t,n);return r&&(a.info=j(r).info),a},r.type="series.custom",r.dependencies=["grid","polar","geo","singleAxis","calendar"],r.defaultOption={coordinateSystem:"cartesian2d",z:2,legendHoverLink:!0,clip:!1},r}(r);function U(e,t){return t=t||[0,0],i(["x","y"],(function(n,r){var a=this.getAxis(n),i=t[r],o=e[r]/2;return"category"===a.type?a.getBandWidth():Math.abs(a.dataToCoord(i-o)-a.dataToCoord(i+o))}),this)}function K(e,t){return t=t||[0,0],i([0,1],(function(n){var r=t[n],a=e[n]/2,i=[],o=[];return i[n]=r-a,o[n]=r+a,i[1-n]=o[1-n]=t[1-n],Math.abs(this.dataToPoint(i)[n]-this.dataToPoint(o)[n])}),this)}function $(e,t){var n=this.getAxis(),r=t instanceof Array?t[0]:t,a=(e instanceof Array?e[0]:e)/2;return"category"===n.type?n.getBandWidth():Math.abs(n.dataToCoord(r-a)-n.dataToCoord(r+a))}function q(e,t){return t=t||[0,0],i(["Radius","Angle"],(function(n,r){var a=this["get"+n+"Axis"](),i=t[r],o=e[r]/2,l="category"===a.type?a.getBandWidth():Math.abs(a.dataToCoord(i-o)-a.dataToCoord(i+o));return"Angle"===n&&(l=l*Math.PI/180),l}),this)}var J="emphasis",X="normal",Y="blur",Q="select",ee=[X,J,Y,Q],te={normal:["itemStyle"],emphasis:[J,"itemStyle"],blur:[Y,"itemStyle"],select:[Q,"itemStyle"]},ne={normal:["label"],emphasis:[J,"label"],blur:[Y,"label"],select:[Q,"label"]},re=["x","y"],ae="e\0\0",ie={normal:{},emphasis:{},blur:{},select:{}},oe={cartesian2d:function(e){var t=e.master.getRect();return{coordSys:{type:"cartesian2d",x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:function(t){return e.dataToPoint(t)},size:a(U,e)}}},geo:function(e){var t=e.getBoundingRect();return{coordSys:{type:"geo",x:t.x,y:t.y,width:t.width,height:t.height,zoom:e.getZoom()},api:{coord:function(t){return e.dataToPoint(t)},size:a(K,e)}}},single:function(e){var t=e.getRect();return{coordSys:{type:"singleAxis",x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:function(t){return e.dataToPoint(t)},size:a($,e)}}},polar:function(e){var t=e.getRadiusAxis(),n=e.getAngleAxis(),r=t.getExtent();return r[0]>r[1]&&r.reverse(),{coordSys:{type:"polar",cx:e.cx,cy:e.cy,r:r[1],r0:r[0]},api:{coord:function(r){var a=t.dataToRadius(r[0]),i=n.dataToAngle(r[1]),o=e.coordToPoint([a,i]);return o.push(a,i*Math.PI/180),o},size:a(q,e)}}},calendar:function(e){var t=e.getRect(),n=e.getRangeInfo();return{coordSys:{type:"calendar",x:t.x,y:t.y,width:t.width,height:t.height,cellWidth:e.getCellWidth(),cellHeight:e.getCellHeight(),rangeInfo:{start:n.start,end:n.end,weeks:n.weeks,dayCount:n.allDay}},api:{coord:function(t,n){return e.dataToPoint(t,n)}}}}};function le(e){return e instanceof I}function se(e){return e instanceof D}var ue=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=n.type,t}return t(n,e),n.prototype.render=function(e,t,n,r){this._progressiveEls=null;var a=this._data,i=e.getData(),o=this.group,l=ge(e,i,t,n);a||o.removeAll(),i.diff(a).add((function(t){ye(n,null,t,l(t,r),e,o,i)})).remove((function(t){var n=a.getItemGraphicEl(t);n&&L(n,j(n).option,e)})).update((function(t,s){var u=a.getItemGraphicEl(s);ye(n,u,t,l(t,r),e,o,i)})).execute();var s=e.get("clip",!0)?O(e.coordinateSystem,!1,e):null;s?o.setClipPath(s):o.removeClipPath(),this._data=i},n.prototype.incrementalPrepareRender=function(e,t,n){this.group.removeAll(),this._data=null},n.prototype.incrementalRender=function(e,t,n,r,a){var i=t.getData(),o=ge(t,i,n,r),l=this._progressiveEls=[];function s(e){e.isGroup||(e.incremental=!0,e.ensureState("emphasis").hoverLayer=!0)}for(var u=e.start;u<e.end;u++){var c=ye(null,null,u,o(u,a),t,this.group,i);c&&(c.traverse(s),l.push(c))}},n.prototype.eachRendered=function(e){o(this._progressiveEls||this.group,e)},n.prototype.filterForExposedEvent=function(e,t,n,r){var a=t.element;if(null==a||n.name===a)return!0;for(;(n=n.__hostTarget||n.parent)&&n!==this.group;)if(n.name===a)return!0;return!1},n.type="custom",n}(l);function ce(e){var t,n=e.type;if("path"===n){var r=e.shape,a=null!=r.width&&null!=r.height?{x:r.x||0,y:r.y||0,width:r.width,height:r.height}:null,i=Te(r);t=S(i,null,a,r.layout||"center"),j(t).customPathData=i}else if("image"===n)t=new b({}),j(t).customImagePath=e.style.image;else if("text"===n)t=new P({});else if("group"===n)t=new w;else{if("compoundPath"===n)throw new Error('"compoundPath" is not supported yet.');var o=T(n);if(!o){M('graphic type "'+n+'" can not be found.')}t=new o}return j(t).customGraphicType=n,t.name=e.name,t.z2EmphasisLift=1,t.z2SelectLift=1,t}function de(e,t,n,r,a,i,o){Z(t);var l=a&&a.normal.cfg;l&&t.setTextConfig(l),r&&null==r.transition&&(r.transition=re);var s=r&&r.style;if(s){if("text"===t.type){var u=s;g(u,"textFill")&&(u.fill=u.textFill),g(u,"textStroke")&&(u.stroke=u.textStroke)}var c=void 0,d=le(t)?s.decal:null;e&&d&&(d.dirty=!0,c=z(d,e)),s.__decalPattern=c}se(t)&&(s&&(c=s.__decalPattern)&&(s.decal=c));W(t,r,i,{dataIndex:n,isInit:o,clearStyle:!0}),B(t,r.keyframeAnimation,i)}function pe(e,t,n,r,a){var i=t.isGroup?null:t,o=a&&a[e].cfg;if(i){var l=i.ensureState(e);if(!1===r){var s=i.getState(e);s&&(s.style=null)}else l.style=r||null;o&&(l.textConfig=o),A(i)}}function he(e,t,n){var r=n===X,a=r?t:Ce(t,n),i=a?a.z2:null;null!=i&&((r?e:e.ensureState(n)).z2=i||0)}function ge(e,t,n,r){var a=e.get("renderItem"),i=e.coordinateSystem,o={};i&&(s(a,"series.render is required."),s(i.prepareCustoms||oe[i.type],"This coordSys does not support custom series."),o=i.prepareCustoms?i.prepareCustoms(i):oe[i.type](i));for(var l,m,v=u({getWidth:r.getWidth,getHeight:r.getHeight,getZr:r.getZr,getDevicePixelRatio:r.getDevicePixelRatio,value:function(e,n){return null==n&&(n=l),t.getStore().get(t.getDimensionIndex(e||0),n)},style:function(n,r){_("api.style","Please write literal style directly instead."),null==r&&(r=l);var a=t.getItemVisual(r,"style"),i=a&&a.fill,o=a&&a.opacity,s=M(r,X).getItemStyle();null!=i&&(s.fill=i),null!=o&&(s.opacity=o);var u={inheritColor:R(i)?i:"#000"},h=z(r,X),g=c(h,null,u,!1,!0);g.text=h.getShallow("show")?d(e.getFormattedLabel(r,X),E(t,r)):null;var f=p(h,u,!1);return D(n,s),s=G(s,g,f),n&&A(s,n),s.legacy=!0,s},ordinalRawValue:function(e,n){null==n&&(n=l),e=e||0;var r=t.getDimensionInfo(e);if(!r){var a=t.getDimensionIndex(e);return a>=0?t.getStore().get(a,n):void 0}var i=t.get(r.name,n),o=r&&r.ordinalMeta;return o?o.categories[i]:i},styleEmphasis:function(n,r){_("api.styleEmphasis","Please write literal style directly instead."),null==r&&(r=l);var a=M(r,J).getItemStyle(),i=z(r,J),o=c(i,null,null,!0,!0);o.text=i.getShallow("show")?h(e.getFormattedLabel(r,J),e.getFormattedLabel(r,X),E(t,r)):null;var s=p(i,null,!0);return D(n,a),a=G(a,o,s),n&&A(a,n),a.legacy=!0,a},visual:function(e,n){if(null==n&&(n=l),g(H,e)){var r=t.getItemVisual(n,"style");return r?r[H[e]]:null}if(g(V,e))return t.getItemVisual(n,e)},barLayout:function(e){if("cartesian2d"===i.type){var t=i.getBaseAxis();return f(u({axis:t},e))}},currentSeriesIndices:function(){return n.getCurrentSeriesIndices()},font:function(e){return y(e,n)}},o.api||{}),x={context:{},seriesId:e.id,seriesName:e.name,seriesIndex:e.seriesIndex,coordSys:o.coordSys,dataInsideLength:t.count(),encode:fe(e.getData())},C={},I={},S={},b={},P=0;P<ee.length;P++){var w=ee[P];S[w]=e.getModel(te[w]),b[w]=e.getModel(ne[w])}function T(e){return e===l?m||(m=t.getItemModel(e)):t.getItemModel(e)}function M(e,n){return t.hasItemOption?e===l?C[n]||(C[n]=T(e).getModel(te[n])):T(e).getModel(te[n]):S[n]}function z(e,n){return t.hasItemOption?e===l?I[n]||(I[n]=T(e).getModel(ne[n])):T(e).getModel(ne[n]):b[n]}return function(e,n){return l=e,m=null,C={},I={},a&&a(u({dataIndexInside:e,dataIndex:t.getRawIndex(e),actionType:n?n.type:null},x),v)};function A(e,t){for(var n in t)g(t,n)&&(e[n]=t[n])}function D(e,t){e&&(e.textFill&&(t.textFill=e.textFill),e.textPosition&&(t.textPosition=e.textPosition))}}function fe(e){var t={};return m(e.dimensions,(function(n){var r=e.getDimensionInfo(n);if(!r.isExtraCoord){var a=r.coordDim;(t[a]=t[a]||[])[r.coordDimIndex]=e.getDimensionIndex(n)}})),t}function ye(e,t,n,r,a,i,o){if(r){var l=me(e,t,n,r,a,i);return l&&o.setItemGraphicEl(n,l),l&&v(l,r.focus,r.blurScope,r.emphasisDisabled),l}i.remove(t)}function me(e,t,n,r,a,i){s(r,"should not have an null/undefined element setting");var o=-1,l=t;t&&ve(t,r,a)&&(o=x(i.childrenRef(),t),t=null);var u,c,d=!t,p=t;p?p.clearStates():(p=ce(r),l&&(u=l,(c=p).copyTransform(u),se(c)&&se(u)&&(c.setStyle(u.style),c.z=u.z,c.z2=u.z2,c.zlevel=u.zlevel,c.invisible=u.invisible,c.ignore=u.ignore,le(c)&&le(u)&&c.setShape(u.shape)))),!1===r.morph?p.disableMorphing=!0:p.disableMorphing&&(p.disableMorphing=!1),ie.normal.cfg=ie.normal.conOpt=ie.emphasis.cfg=ie.emphasis.conOpt=ie.blur.cfg=ie.blur.conOpt=ie.select.cfg=ie.select.conOpt=null,ie.isLegacy=!1,function(e,t,n,r,a,i){if(e.isGroup)return;xe(n,null,i),xe(n,J,i);var o=i.normal.conOpt,l=i.emphasis.conOpt,s=i.blur.conOpt,u=i.select.conOpt;if(null!=o||null!=l||null!=u||null!=s){var c=e.getTextContent();if(!1===o)c&&e.removeTextContent();else{o=i.normal.conOpt=o||{type:"text"},c?c.clearStates():(c=ce(o),e.setTextContent(c)),de(null,c,t,o,null,r,a);for(var d=o&&o.style,p=0;p<ee.length;p++){var h=ee[p];if(h!==X){var g=i[h].conOpt;pe(h,c,0,Ie(o,g,h),null)}}d?c.dirty():c.markRedraw()}}}(p,n,r,a,d,ie),function(e,t,n,r,a){var i=n.clipPath;if(!1===i)e&&e.getClipPath()&&e.removeClipPath();else if(i){var o=e.getClipPath();o&&ve(o,i,r)&&(o=null),o||(o=ce(i),s(le(o),"Only any type of `path` can be used in `clipPath`, rather than "+o.type+"."),e.setClipPath(o)),de(null,o,t,i,null,r,a)}}(p,n,r,a,d),de(e,p,n,r,ie,a,d),g(r,"info")&&(j(p).info=r.info);for(var h=0;h<ee.length;h++){var f=ee[h];if(f!==X){var y=Ce(r,f);pe(f,p,0,Ie(r,y,f),ie)}}return function(e,t,n){if(!e.isGroup){var r=e,a=n.currentZ,i=n.currentZLevel;r.z=a,r.zlevel=i;var o=t.z2;null!=o&&(r.z2=o||0);for(var l=0;l<ee.length;l++)he(r,t,ee[l])}}(p,r,a),"group"===r.type&&function(e,t,n,r,a){var i=r.children,o=i?i.length:0,l=r.$mergeChildren,u="byName"===l||r.diffChildrenByName,c=!1===l;if(!o&&!u&&!c)return;if(u)return d={api:e,oldChildren:t.children()||[],newChildren:i||[],dataIndex:n,seriesModel:a,group:t},void new C(d.oldChildren,d.newChildren,be,be,d).add(Pe).update(Pe).remove(we).execute();var d;c&&t.removeAll();for(var p=0;p<o;p++){var h=i[p],g=t.childAt(p);h?(null==h.ignore&&(h.ignore=!1),me(e,g,n,h,a,t)):(s(g,"renderItem should not return a group containing elements as null/undefined/{} if they do not exist before."),g.ignore=!0)}for(var f=t.childCount()-1;f>=p;f--){var y=t.childAt(f);Se(t,y,a)}}(e,p,n,r,a),o>=0?i.replaceAt(p,o):i.add(p),p}function ve(e,t,n){var r,a=j(e),i=t.type,o=t.shape,l=t.style;return n.isUniversalTransitionEnabled()||null!=i&&i!==a.customGraphicType||"path"===i&&((r=o)&&(g(r,"pathData")||g(r,"d")))&&Te(o)!==a.customPathData||"image"===i&&g(l,"image")&&l.image!==a.customImagePath}function xe(e,t,n){var r=t?Ce(e,t):e,a=t?Ie(e,r,J):e.style,i=e.type,o=r?r.textConfig:null,l=e.textContent,u=l?t?Ce(l,t):l:null;if(a&&(n.isLegacy||F(a,i,!!o,!!u))){n.isLegacy=!0;var c=k(a,i,!t);!o&&c.textConfig&&(o=c.textConfig),!u&&c.textContent&&(u=c.textContent)}if(!t&&u){var d=u;!d.type&&(d.type="text"),s("text"===d.type,'textContent.type must be "text"')}var p=t?n[t]:n.normal;p.cfg=o,p.conOpt=u}function Ce(e,t){return t?e?e[t]:null:e}function Ie(e,t,n){var r=t&&t.style;return null==r&&n===J&&e&&(r=e.styleEmphasis),r}function Se(e,t,n){t&&L(t,j(e).option,n)}function be(e,t){var n=e&&e.name;return null!=n?n:ae+t}function Pe(e,t){var n=this.context,r=null!=e?n.newChildren[e]:null,a=null!=t?n.oldChildren[t]:null;me(n.api,a,n.dataIndex,r,n.seriesModel,n.group)}function we(e){var t=this.context,n=t.oldChildren[e];n&&L(n,j(n).option,t.seriesModel)}function Te(e){return e&&(e.pathData||e.d)}function Me(e){e.registerChartView(ue),e.registerSeriesModel(N)}export{Me as install};
