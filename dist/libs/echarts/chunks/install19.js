import{_ as e,a6 as t,Y as a,G as i,u as n,s as r,k as s,j as o,p as u,o as l,C as h,R as d,f as g,bl as p,bt as m,bk as y,b8 as c,bj as f,V as v,aM as x,d as b,aK as D,S as w,E as L,m as S}from"./index.js";import{a as I}from"./poly.js";import{L as A}from"./LegendVisualProvider.js";import{d as P}from"./dataFilter.js";var C=function(h){function p(){var e=null!==h&&h.apply(this,arguments)||this;return e.type=p.type,e._layers=[],e}return e(p,h),p.prototype.render=function(e,h,p){var m=e.getData(),y=this,c=this.group,f=e.getLayerSeries(),v=m.getLayout("layoutInfo"),x=v.rect,b=v.boundaryGap;function D(e){return e.name}c.x=0,c.y=x.y+b[0];var w=new t(this._layersSeries||[],f,D,D),L=[];function S(t,a,h){var p=y._layers;if("remove"!==t){for(var v,x,b=[],D=[],w=f[a].indices,S=0;S<w.length;S++){var A=m.getItemLayout(w[S]),P=A.x,C=A.y0,R=A.y;b.push(P,C),D.push(P,C+R),v=m.getItemVisual(w[S],"style")}var V=m.getItemLayout(w[0]),k=e.getModel("label").get("margin"),M=e.getModel("emphasis");if("add"===t){var T=L[a]=new i;x=new I({shape:{points:b,stackedOnPoints:D,smooth:.4,stackedOnSmooth:.4,smoothConstraint:!1},z2:0}),T.add(x),c.add(T),e.isAnimationEnabled()&&x.setClipPath(function(e,t,a){var i=new d({shape:{x:e.x-10,y:e.y-10,width:0,height:e.height+20}});return g(i,{shape:{x:e.x-50,width:e.width+100,height:e.height+20}},t,a),i}(x.getBoundingRect(),e,(function(){x.removeClipPath()})))}else{T=p[h];x=T.childAt(0),c.add(T),L[a]=T,n(x,{shape:{points:b,stackedOnPoints:D}},e),r(x)}s(x,o(e),{labelDataIndex:w[S-1],defaultText:m.getName(w[S-1]),inheritColor:v.fill},{normal:{verticalAlign:"middle"}}),x.setTextConfig({position:null,local:!0});var _=x.getTextContent();_&&(_.x=V.x-k,_.y=V.y0+V.y/2),x.useStyle(v),m.setItemGraphicEl(a,x),u(x,e),l(x,M.get("focus"),M.get("blurScope"),M.get("disabled"))}else c.remove(p[a])}w.add(a(S,this,"add")).update(a(S,this,"update")).remove(a(S,this,"remove")).execute(),this._layersSeries=f,this._layers=L},p.type="themeRiver",p}(h),R=function(t){function i(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=i.type,e}return e(i,t),i.prototype.init=function(e){t.prototype.init.apply(this,arguments),this.legendVisualProvider=new A(a(this.getData,this),a(this.getRawData,this))},i.prototype.fixData=function(e){var t=e.length,a={},i=p(e,(function(e){return a.hasOwnProperty(e[0]+"")||(a[e[0]+""]=-1),e[2]})),n=[];i.buckets.each((function(e,t){n.push({name:t,dataList:e})}));for(var r=n.length,s=0;s<r;++s){for(var o=n[s].name,u=0;u<n[s].dataList.length;++u){var l=n[s].dataList[u][0]+"";a[l]=s}for(var l in a)a.hasOwnProperty(l)&&a[l]!==s&&(a[l]=s,e[t]=[l,0,o],t++)}return e},i.prototype.getInitialData=function(e,t){for(var a=this.getReferringComponents("singleAxis",m).models[0].get("type"),i=y(e.data,(function(e){return void 0!==e[2]})),n=this.fixData(i||[]),r=[],s=this.nameMap=c(),o=0,u=0;u<n.length;++u)r.push(n[u][2]),s.get(n[u][2])||(s.set(n[u][2],o),o++);var l=f(n,{coordDimensions:["single"],dimensionsDefine:[{name:"time",type:v(a)},{name:"value",type:"float"},{name:"name",type:"ordinal"}],encodeDefine:{single:0,value:1,itemName:2}}).dimensions,h=new x(l,this);return h.initData(n),h},i.prototype.getLayerSeries=function(){for(var e=this.getData(),t=e.count(),a=[],i=0;i<t;++i)a[i]=i;var n=e.mapDimension("single"),r=p(a,(function(t){return e.get("name",t)})),s=[];return r.buckets.each((function(t,a){t.sort((function(t,a){return e.get(n,t)-e.get(n,a)})),s.push({name:a,indices:t})})),s},i.prototype.getAxisTooltipData=function(e,t,a){b(e)||(e=e?[e]:[]);for(var i,n=this.getData(),r=this.getLayerSeries(),s=[],o=r.length,u=0;u<o;++u){for(var l=Number.MAX_VALUE,h=-1,d=r[u].indices.length,g=0;g<d;++g){var p=n.get(e[0],r[u].indices[g]),m=Math.abs(p-t);m<=l&&(i=p,l=m,h=r[u].indices[g])}s.push(h)}return{dataIndices:s,nestestValue:i}},i.prototype.formatTooltip=function(e,t,a){var i=this.getData(),n=i.getName(e),r=i.get(i.mapDimension("value"),e);return D("nameValue",{name:n,value:r})},i.type="series.themeRiver",i.dependencies=["singleAxis"],i.defaultOption={z:2,colorBy:"data",coordinateSystem:"singleAxis",boundaryGap:["10%","10%"],singleAxisIndex:0,animationEasing:"linear",label:{margin:4,show:!0,position:"left",fontSize:11},emphasis:{label:{show:!0}}},i}(w);function V(e,t){e.eachSeriesByType("themeRiver",(function(e){var t=e.getData(),a=e.coordinateSystem,i={},n=a.getRect();i.rect=n;var r=e.get("boundaryGap"),s=a.getAxis();(i.boundaryGap=r,"horizontal"===s.orient)?(r[0]=L(r[0],n.height),r[1]=L(r[1],n.height),k(t,e,n.height-r[0]-r[1])):(r[0]=L(r[0],n.width),r[1]=L(r[1],n.width),k(t,e,n.width-r[0]-r[1]));t.setLayout("layoutInfo",i)}))}function k(e,t,a){if(e.count())for(var i,n=t.coordinateSystem,r=t.getLayerSeries(),s=e.mapDimension("single"),o=e.mapDimension("value"),u=S(r,(function(t){return S(t.indices,(function(t){var a=n.dataToPoint(e.get(s,t));return a[1]=e.get(o,t),a}))})),l=function(e){for(var t=e.length,a=e[0].length,i=[],n=[],r=0,s=0;s<a;++s){for(var o=0,u=0;u<t;++u)o+=e[u][s][1];o>r&&(r=o),i.push(o)}for(var l=0;l<a;++l)n[l]=(r-i[l])/2;r=0;for(var h=0;h<a;++h){var d=i[h]+n[h];d>r&&(r=d)}return{y0:n,max:r}}(u),h=l.y0,d=a/l.max,g=r.length,p=r[0].indices.length,m=0;m<p;++m){i=h[m]*d,e.setItemLayout(r[0].indices[m],{layerIndex:0,x:u[0][m][0],y0:i,y:u[0][m][1]*d});for(var y=1;y<g;++y)i+=u[y-1][m][1]*d,e.setItemLayout(r[y].indices[m],{layerIndex:y,x:u[y][m][0],y0:i,y:u[y][m][1]*d})}}function M(e){e.registerChartView(C),e.registerSeriesModel(R),e.registerLayout(V),e.registerProcessor(P("themeRiver"))}export{M as install};
