import{_ as t,t as e,av as i,aw as o,ax as n,o as r,a6 as s,de as a,B as c,cP as l,ay as u,f as d,F as p,df as h,a5 as x,q as f,aD as g,aB as y,c6 as m,dg as v,ag as A,dh as C,aC as _,N as L,e as M,aJ as S,j as b,aG as T,d as w,aL as G,R as I,C as P}from"./core.js";import{a as E}from"./axisModelCreator.js";import{i as k,f as D,l as B,A as z}from"./cartesianAxisHelper.js";import{a as H}from"./axisAlignTicks.js";import{A as O}from"./AxisBuilder.js";import{r as R,a as j}from"./axisSplitHelper.js";var V=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return t(i,e),i.type="grid",i.dependencies=["xAxis","yAxis"],i.layoutMode="box",i.defaultOption={show:!1,z:0,left:"10%",top:60,right:"10%",bottom:70,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"},i}(e),F=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return t(o,e),o.prototype.getCoordSysModel=function(){return this.getReferringComponents("grid",i).models[0]},o.type="cartesian2dAxis",o}(e);o(F,n);var W=function(){function t(t){this.type="cartesian",this._dimList=[],this._axes={},this.name=t||""}return t.prototype.getAxis=function(t){return this._axes[t]},t.prototype.getAxes=function(){return r(this._dimList,(function(t){return this._axes[t]}),this)},t.prototype.getAxesByScale=function(t){return t=t.toLowerCase(),s(this.getAxes(),(function(e){return e.scale.type===t}))},t.prototype.addAxis=function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},t}(),Z=["x","y"];function N(t){return"interval"===t.type||"time"===t.type}var q=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="cartesian2d",t.dimensions=Z,t}return t(i,e),i.prototype.calcAffineTransform=function(){this._transform=this._invTransform=null;var t=this.getAxis("x").scale,e=this.getAxis("y").scale;if(N(t)&&N(e)){var i=t.getExtent(),o=e.getExtent(),n=this.dataToPoint([i[0],o[0]]),r=this.dataToPoint([i[1],o[1]]),s=i[1]-i[0],c=o[1]-o[0];if(s&&c){var l=(r[0]-n[0])/s,u=(r[1]-n[1])/c,d=n[0]-i[0]*l,p=n[1]-o[0]*u,h=this._transform=[l,0,0,u,d,p];this._invTransform=a([],h)}}},i.prototype.getBaseAxis=function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},i.prototype.containPoint=function(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]))},i.prototype.containData=function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},i.prototype.containZone=function(t,e){var i=this.dataToPoint(t),o=this.dataToPoint(e),n=this.getArea(),r=new c(i[0],i[1],o[0]-i[0],o[1]-i[1]);return n.intersect(r)},i.prototype.dataToPoint=function(t,e,i){i=i||[];var o=t[0],n=t[1];if(this._transform&&null!=o&&isFinite(o)&&null!=n&&isFinite(n))return l(i,t,this._transform);var r=this.getAxis("x"),s=this.getAxis("y");return i[0]=r.toGlobalCoord(r.dataToCoord(o,e)),i[1]=s.toGlobalCoord(s.dataToCoord(n,e)),i},i.prototype.clampData=function(t,e){var i=this.getAxis("x").scale,o=this.getAxis("y").scale,n=i.getExtent(),r=o.getExtent(),s=i.parse(t[0]),a=o.parse(t[1]);return(e=e||[])[0]=Math.min(Math.max(Math.min(n[0],n[1]),s),Math.max(n[0],n[1])),e[1]=Math.min(Math.max(Math.min(r[0],r[1]),a),Math.max(r[0],r[1])),e},i.prototype.pointToData=function(t,e){var i=[];if(this._invTransform)return l(i,t,this._invTransform);var o=this.getAxis("x"),n=this.getAxis("y");return i[0]=o.coordToData(o.toLocalCoord(t[0]),e),i[1]=n.coordToData(n.toLocalCoord(t[1]),e),i},i.prototype.getOtherAxis=function(t){return this.getAxis("x"===t.dim?"y":"x")},i.prototype.getArea=function(){var t=this.getAxis("x").getGlobalExtent(),e=this.getAxis("y").getGlobalExtent(),i=Math.min(t[0],t[1]),o=Math.min(e[0],e[1]),n=Math.max(t[0],t[1])-i,r=Math.max(e[0],e[1])-o;return new c(i,o,n,r)},i}(W),J=function(e){function i(t,i,o,n,r){var s=e.call(this,t,i,o)||this;return s.index=0,s.type=n||"value",s.position=r||"bottom",s}return t(i,e),i.prototype.isHorizontal=function(){var t=this.position;return"top"===t||"bottom"===t},i.prototype.getGlobalExtent=function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},i.prototype.pointToData=function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},i.prototype.setCategorySortInfo=function(t){if("category"!==this.type)return!1;this.model.option.categorySortInfo=t,this.scale.setSortInfo(t)},i}(u);function K(t,e){return t.getCoordSysModel()===e}function Q(t,e,i,o){i.getAxesOnZeroOf=function(){return n?[n]:[]};var n,r=t[e],s=i.model,a=s.get(["axisLine","onZero"]),c=s.get(["axisLine","onZeroAxisIndex"]);if(a){if(null!=c)U(r[c])&&(n=r[c]);else for(var l in r)if(r.hasOwnProperty(l)&&U(r[l])&&!o[u(r[l])]){n=r[l];break}n&&(o[u(n)]=!0)}function u(t){return t.dim+"_"+t.index}}function U(t){return t&&"category"!==t.type&&"time"!==t.type&&v(t)}var X=function(){function t(t,e,i){this.type="grid",this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this.axisPointerEnabled=!0,this.dimensions=Z,this._initCartesian(t,e,i),this.model=t}return t.prototype.getRect=function(){return this._rect},t.prototype.update=function(t,e){var i=this._axesMap;function o(t){var e,i=A(t),o=i.length;if(o){for(var n=[],r=o-1;r>=0;r--){var s=t[+i[r]],a=s.model,c=s.scale;C(c)&&a.get("alignTicks")&&null==a.get("interval")?n.push(s):(_(c,a),C(c)&&(e=s))}n.length&&(e||(e=n.pop(),_(e.scale,e.model)),d(n,(function(t){H(t.scale,t.model,e.scale)})))}}this._updateScale(t,this.model),o(i.x),o(i.y);var n={};d(i.x,(function(t){Q(i,"y",t,n)})),d(i.y,(function(t){Q(i,"x",t,n)})),this.resize(this.model,e)},t.prototype.resize=function(t,e,i){var o=t.getBoxLayoutParams(),n=!i&&t.get("containLabel"),r=p(o,{width:e.getWidth(),height:e.getHeight()});this._rect=r;var s=this._axesList;function a(){d(s,(function(t){var e=t.isHorizontal(),i=e?[0,r.width]:[0,r.height],o=t.inverse?1:0;t.setExtent(i[o],i[1-o]),function(t,e){var i=t.getExtent(),o=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return o-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return o-t+e}}(t,e?r.x:r.y)}))}a(),n&&(d(s,(function(t){if(!t.model.get(["axisLabel","inside"])){var e=h(t);if(e){var i=t.isHorizontal()?"height":"width",o=t.model.get(["axisLabel","margin"]);r[i]-=e[i]+o,"top"===t.position?r.y+=e.height+o:"left"===t.position&&(r.x+=e.width+o)}}})),a()),d(this._coordsList,(function(t){t.calcAffineTransform()}))},t.prototype.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i)return i[e||0]},t.prototype.getAxes=function(){return this._axesList.slice()},t.prototype.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i]}x(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var o=0,n=this._coordsList;o<n.length;o++)if(n[o].getAxis("x").index===t||n[o].getAxis("y").index===e)return n[o]},t.prototype.getCartesians=function(){return this._coordsList.slice()},t.prototype.convertToPixel=function(t,e,i){var o=this._findConvertTarget(e);return o.cartesian?o.cartesian.dataToPoint(i):o.axis?o.axis.toGlobalCoord(o.axis.dataToCoord(i)):null},t.prototype.convertFromPixel=function(t,e,i){var o=this._findConvertTarget(e);return o.cartesian?o.cartesian.pointToData(i):o.axis?o.axis.coordToData(o.axis.toLocalCoord(i)):null},t.prototype._findConvertTarget=function(t){var e,o,n=t.seriesModel,r=t.xAxisModel||n&&n.getReferringComponents("xAxis",i).models[0],s=t.yAxisModel||n&&n.getReferringComponents("yAxis",i).models[0],a=t.gridModel,c=this._coordsList;if(n)e=n.coordinateSystem,f(c,e)<0&&(e=null);else if(r&&s)e=this.getCartesian(r.componentIndex,s.componentIndex);else if(r)o=this.getAxis("x",r.componentIndex);else if(s)o=this.getAxis("y",s.componentIndex);else if(a){a.coordinateSystem===this&&(e=this._coordsList[0])}return{cartesian:e,axis:o}},t.prototype.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},t.prototype._initCartesian=function(t,e,i){var o=this,n=this,r={left:!1,right:!1,top:!1,bottom:!1},s={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",c("x"),this),e.eachComponent("yAxis",c("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);function c(e){return function(i,o){if(K(i,t)){var c=i.get("position");"x"===e?"top"!==c&&"bottom"!==c&&(c=r.bottom?"top":"bottom"):"left"!==c&&"right"!==c&&(c=r.left?"right":"left"),r[c]=!0;var l=new J(e,g(i),[0,0],i.get("type"),c),u="category"===l.type;l.onBand=u&&i.get("boundaryGap"),l.inverse=i.get("inverse"),i.axis=l,l.model=i,l.grid=n,l.index=o,n._axesList.push(l),s[e][o]=l,a[e]++}}}this._axesMap=s,d(s.x,(function(e,i){d(s.y,(function(n,r){var s="x"+i+"y"+r,a=new q(s);a.master=o,a.model=t,o._coordsMap[s]=a,o._coordsList.push(a),a.addAxis(e),a.addAxis(n)}))}))},t.prototype._updateScale=function(t,e){function i(t,e){d(y(t,e.dim),(function(i){e.scale.unionExtentFromData(t,i)}))}d(this._axesList,(function(t){if(t.scale.setExtent(1/0,-1/0),"category"===t.type){var e=t.model.get("categorySortInfo");t.scale.setSortInfo(e)}})),t.eachSeries((function(t){if(k(t)){var o=D(t),n=o.xAxisModel,r=o.yAxisModel;if(!K(n,e)||!K(r,e))return;var s=this.getCartesian(n.componentIndex,r.componentIndex),a=t.getData(),c=s.getAxis("x"),l=s.getAxis("y");i(a,c),i(a,l)}}),this)},t.prototype.getTooltipAxes=function(t){var e=[],i=[];return d(this.getCartesians(),(function(o){var n=null!=t&&"auto"!==t?o.getAxis(t):o.getBaseAxis(),r=o.getOtherAxis(n);f(e,n)<0&&e.push(n),f(i,r)<0&&i.push(r)})),{baseAxes:e,otherAxes:i}},t.create=function(e,i){var o=[];return e.eachComponent("grid",(function(n,r){var s=new t(n,e,i);s.name="grid_"+r,s.resize(n,i,!0),n.coordinateSystem=s,o.push(s)})),e.eachSeries((function(t){if(k(t)){var e=D(t),i=e.xAxisModel,o=e.yAxisModel,n=i.getCoordSysModel();if(!n)throw new Error('Grid "'+m(i.get("gridIndex"),i.get("gridId"),0)+'" not found');if(i.getCoordSysModel()!==o.getCoordSysModel())throw new Error("xAxis and yAxis must use the same grid");var r=n.coordinateSystem;t.coordinateSystem=r.getCartesian(i.componentIndex,o.componentIndex)}})),o},t.dimensions=Z,t}(),Y=["axisLine","axisTickLabel","axisName"],$=["splitArea","splitLine","minorSplitLine"],tt=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=i.type,t.axisPointerClass="CartesianAxisPointer",t}return t(i,e),i.prototype.render=function(t,i,o,n){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new L,this.group.add(this._axisGroup),t.get("show")){var s=t.getCoordSysModel(),a=B(s,t),c=new O(t,M({handleAutoShown:function(e){for(var i=s.coordinateSystem.getCartesians(),o=0;o<i.length;o++)if(C(i[o].getOtherAxis(t.axis).scale))return!0;return!1}},a));d(Y,c.add,c),this._axisGroup.add(c.getGroup()),d($,(function(e){t.get([e,"show"])&&et[e](this,this._axisGroup,t,s)}),this),n&&"changeAxisOrder"===n.type&&n.isInitSort||S(r,this._axisGroup,t),e.prototype.render.call(this,t,i,o,n)}},i.prototype.remove=function(){R(this)},i.type="cartesianAxis",i}(z),et={splitLine:function(t,e,i,o){var n=i.axis;if(!n.scale.isBlank()){var r=i.getModel("splitLine"),s=r.getModel("lineStyle"),a=s.get("color");a=b(a)?a:[a];for(var c=o.coordinateSystem.getRect(),l=n.isHorizontal(),u=0,d=n.getTicksCoords({tickModel:r}),p=[],h=[],x=s.getLineStyle(),f=0;f<d.length;f++){var g=n.toGlobalCoord(d[f].coord);l?(p[0]=g,p[1]=c.y,h[0]=g,h[1]=c.y+c.height):(p[0]=c.x,p[1]=g,h[0]=c.x+c.width,h[1]=g);var y=u++%a.length,m=d[f].tickValue,v=new T({anid:null!=m?"line_"+d[f].tickValue:null,autoBatch:!0,shape:{x1:p[0],y1:p[1],x2:h[0],y2:h[1]},style:w({stroke:a[y]},x),silent:!0});G(v.shape,x.lineWidth),e.add(v)}}},minorSplitLine:function(t,e,i,o){var n=i.axis,r=i.getModel("minorSplitLine").getModel("lineStyle"),s=o.coordinateSystem.getRect(),a=n.isHorizontal(),c=n.getMinorTicksCoords();if(c.length)for(var l=[],u=[],d=r.getLineStyle(),p=0;p<c.length;p++)for(var h=0;h<c[p].length;h++){var x=n.toGlobalCoord(c[p][h].coord);a?(l[0]=x,l[1]=s.y,u[0]=x,u[1]=s.y+s.height):(l[0]=s.x,l[1]=x,u[0]=s.x+s.width,u[1]=x);var f=new T({anid:"minor_line_"+c[p][h].tickValue,autoBatch:!0,shape:{x1:l[0],y1:l[1],x2:u[0],y2:u[1]},style:d,silent:!0});G(f.shape,d.lineWidth),e.add(f)}},splitArea:function(t,e,i,o){j(t,e,i,o)}},it=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=i.type,t}return t(i,e),i.type="xAxis",i}(tt),ot=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=it.type,t}return t(i,e),i.type="yAxis",i}(tt),nt=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="grid",t}return t(i,e),i.prototype.render=function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new I({shape:t.coordinateSystem.getRect(),style:w({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))},i.type="grid",i}(P),rt={offset:0};function st(t){t.registerComponentView(nt),t.registerComponentModel(V),t.registerCoordinateSystem("cartesian2d",X),E(t,"x",F,rt),E(t,"y",F,rt),t.registerComponentView(it),t.registerComponentView(ot),t.registerPreprocessor((function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}))}export{st as i};
