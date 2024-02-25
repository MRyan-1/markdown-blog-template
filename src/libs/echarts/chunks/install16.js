import{_ as t,af as e,ag as a,P as o,g as n,j as i,k as r,a2 as l,p as u,o as s,R as d,C as g,J as c,aV as y,f as h,aJ as f,aK as p,S as v,bk as x,ap as L,e as m,bl as I}from"./index.js";import{c as b}from"./createGraphFromNodeEdge.js";import{V as E}from"./VisualMapping.js";import"./linkSeriesData.js";var w=function(){this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.cpx1=0,this.cpy1=0,this.cpx2=0,this.cpy2=0,this.extent=0},M=function(o){function n(t){return o.call(this,t)||this}return t(n,o),n.prototype.getDefaultShape=function(){return new w},n.prototype.buildPath=function(t,e){var a=e.extent;t.moveTo(e.x1,e.y1),t.bezierCurveTo(e.cpx1,e.cpy1,e.cpx2,e.cpy2,e.x2,e.y2),"vertical"===e.orient?(t.lineTo(e.x2+a,e.y2),t.bezierCurveTo(e.cpx2+a,e.cpy2,e.cpx1+a,e.cpy1,e.x1+a,e.y1)):(t.lineTo(e.x2,e.y2+a),t.bezierCurveTo(e.cpx2,e.cpy2+a,e.cpx1,e.cpy1+a,e.x1,e.y1+a)),t.closePath()},n.prototype.highlight=function(){e(this)},n.prototype.downplay=function(){a(this)},n}(o);function V(t,e,a){switch(t.fill){case"source":t.fill=a.node1.getVisual("color"),t.decal=a.node1.getVisual("style").decal;break;case"target":t.fill=a.node2.getVisual("color"),t.decal=a.node2.getVisual("style").decal;break;case"gradient":var o=a.node1.getVisual("color"),n=a.node2.getVisual("color");c(o)&&c(n)&&(t.fill=new y(0,0,+("horizontal"===e),+("vertical"===e),[{color:o,offset:0},{color:n,offset:1}]))}}var D=function(e){function a(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.type,t._focusAdjacencyDisabled=!1,t}return t(a,e),a.prototype.render=function(t,e,a){var o=this,g=t.getGraph(),c=this.group,y=t.layoutInfo,f=y.width,p=y.height,v=t.getData(),x=t.getData("edge"),L=t.get("orient");this._model=t,c.removeAll(),c.x=y.x,c.y=y.y,g.eachEdge((function(e){var a=new M,o=n(a);o.dataIndex=e.dataIndex,o.seriesIndex=t.seriesIndex,o.dataType="edge";var d,g,y,h,v,m,I,b,E=e.getModel(),w=E.getModel("lineStyle"),D=w.get("curveness"),S=e.node1.getLayout(),T=e.node1.getModel(),j=T.get("localX"),N=T.get("localY"),k=e.node2.getLayout(),G=e.node2.getModel(),A=G.get("localX"),P=G.get("localY"),C=e.getLayout();a.shape.extent=Math.max(1,C.dy),a.shape.orient=L,"vertical"===L?(d=(null!=j?j*f:S.x)+C.sy,g=(null!=N?N*p:S.y)+S.dy,y=(null!=A?A*f:k.x)+C.ty,v=d,m=g*(1-D)+(h=null!=P?P*p:k.y)*D,I=y,b=g*D+h*(1-D)):(d=(null!=j?j*f:S.x)+S.dx,g=(null!=N?N*p:S.y)+C.sy,v=d*(1-D)+(y=null!=A?A*f:k.x)*D,m=g,I=d*D+y*(1-D),b=h=(null!=P?P*p:k.y)+C.ty),a.setShape({x1:d,y1:g,x2:y,y2:h,cpx1:v,cpy1:m,cpx2:I,cpy2:b}),a.useStyle(w.getItemStyle()),V(a.style,L,e);var z=""+E.get("value"),B=i(E,"edgeLabel");r(a,B,{labelFetcher:{getFormattedLabel:function(e,a,o,n,i,r){return t.getFormattedLabel(e,a,"edge",n,l(i,B.normal&&B.normal.get("formatter"),z),r)}},labelDataIndex:e.dataIndex,defaultText:z}),a.setTextConfig({position:"inside"});var F=E.getModel("emphasis");u(a,E,"lineStyle",(function(t){var a=t.getItemStyle();return V(a,L,e),a})),c.add(a),x.setItemGraphicEl(e.dataIndex,a);var _=F.get("focus");s(a,"adjacency"===_?e.getAdjacentDataIndices():"trajectory"===_?e.getTrajectoryDataIndices():_,F.get("blurScope"),F.get("disabled"))})),g.eachNode((function(e){var a=e.getLayout(),o=e.getModel(),l=o.get("localX"),g=o.get("localY"),y=o.getModel("emphasis"),h=new d({shape:{x:null!=l?l*f:a.x,y:null!=g?g*p:a.y,width:a.dx,height:a.dy},style:o.getModel("itemStyle").getItemStyle(),z2:10});r(h,i(o),{labelFetcher:{getFormattedLabel:function(e,a){return t.getFormattedLabel(e,a,"node")}},labelDataIndex:e.dataIndex,defaultText:e.id}),h.disableLabelAnimation=!0,h.setStyle("fill",e.getVisual("color")),h.setStyle("decal",e.getVisual("style").decal),u(h,o),c.add(h),v.setItemGraphicEl(e.dataIndex,h),n(h).dataType="node";var x=y.get("focus");s(h,"adjacency"===x?e.getAdjacentDataIndices():"trajectory"===x?e.getTrajectoryDataIndices():x,y.get("blurScope"),y.get("disabled"))})),v.eachItemGraphicEl((function(e,n){v.getItemModel(n).get("draggable")&&(e.drift=function(e,i){o._focusAdjacencyDisabled=!0,this.shape.x+=e,this.shape.y+=i,this.dirty(),a.dispatchAction({type:"dragNode",seriesId:t.id,dataIndex:v.getRawIndex(n),localX:this.shape.x/f,localY:this.shape.y/p})},e.ondragend=function(){o._focusAdjacencyDisabled=!1},e.draggable=!0,e.cursor="move")})),!this._data&&t.isAnimationEnabled()&&c.setClipPath(function(t,e,a){var o=new d({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return h(o,{shape:{width:t.width+20}},e,a),o}(c.getBoundingRect(),t,(function(){c.removeClipPath()}))),this._data=t.getData()},a.prototype.dispose=function(){},a.type="sankey",a}(g),S=function(e){function a(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.type,t}return t(a,e),a.prototype.getInitialData=function(t,e){var a=t.edges||t.links,o=t.data||t.nodes,n=t.levels;this.levelModels=[];for(var i=this.levelModels,r=0;r<n.length;r++){if(!(null!=n[r].depth&&n[r].depth>=0))throw new Error("levels[i].depth is mandatory and should be natural number");i[n[r].depth]=new f(n[r],this,e)}if(o&&a)return b(o,a,this,!0,(function(t,e){t.wrapMethod("getItemModel",(function(t,e){var a=t.parentModel,o=a.getData().getItemLayout(e);if(o){var n=o.depth,i=a.levelModels[n];i&&(t.parentModel=i)}return t})),e.wrapMethod("getItemModel",(function(t,e){var a=t.parentModel,o=a.getGraph().getEdgeByIndex(e).node1.getLayout();if(o){var n=o.depth,i=a.levelModels[n];i&&(t.parentModel=i)}return t}))})).data},a.prototype.setNodePosition=function(t,e){var a=(this.option.data||this.option.nodes)[t];a.localX=e[0],a.localY=e[1]},a.prototype.getGraph=function(){return this.getData().graph},a.prototype.getEdgeData=function(){return this.getGraph().edgeData},a.prototype.formatTooltip=function(t,e,a){function o(t){return isNaN(t)||null==t}if("edge"===a){var n=this.getDataParams(t,a),i=n.data,r=n.value,l=i.source+" -- "+i.target;return p("nameValue",{name:l,value:r,noValue:o(r)})}var u=this.getGraph().getNodeByIndex(t).getLayout().value,s=this.getDataParams(t,a).data.name;return p("nameValue",{name:null!=s?s+"":null,value:u,noValue:o(u)})},a.prototype.optionUpdated=function(){},a.prototype.getDataParams=function(t,a){var o=e.prototype.getDataParams.call(this,t,a);if(null==o.value&&"node"===a){var n=this.getGraph().getNodeByIndex(t).getLayout().value;o.value=n}return o},a.type="series.sankey",a.defaultOption={z:2,coordinateSystem:"view",left:"5%",top:"5%",right:"20%",bottom:"5%",orient:"horizontal",nodeWidth:20,nodeGap:8,draggable:!0,layoutIterations:32,label:{show:!0,position:"right",fontSize:12},edgeLabel:{show:!1,fontSize:12},levels:[],nodeAlign:"justify",lineStyle:{color:"#314656",opacity:.2,curveness:.5},emphasis:{label:{show:!0},lineStyle:{opacity:.5}},select:{itemStyle:{borderColor:"#212121"}},animationEasing:"linear",animationDuration:1e3},a}(v);function T(t,e){t.eachSeriesByType("sankey",(function(t){var a=t.get("nodeWidth"),o=t.get("nodeGap"),n=function(t,e){return L(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}(t,e);t.layoutInfo=n;var i=n.width,r=n.height,l=t.getGraph(),u=l.nodes,s=l.edges;!function(t){m(t,(function(t){var e=F(t.outEdges,B),a=F(t.inEdges,B),o=t.getValue()||0,n=Math.max(e,a,o);t.setLayout({value:n},!0)}))}(u),function(t,e,a,o,n,i,r,l,u){(function(t,e,a,o,n,i,r){for(var l=[],u=[],s=[],d=[],g=0,c=0;c<e.length;c++)l[c]=1;for(c=0;c<t.length;c++)u[c]=t[c].inEdges.length,0===u[c]&&s.push(t[c]);var y=-1;for(;s.length;){for(var h=0;h<s.length;h++){var f=s[h],p=f.hostGraph.data.getRawDataItem(f.dataIndex),v=null!=p.depth&&p.depth>=0;v&&p.depth>y&&(y=p.depth),f.setLayout({depth:v?p.depth:g},!0),"vertical"===i?f.setLayout({dy:a},!0):f.setLayout({dx:a},!0);for(var x=0;x<f.outEdges.length;x++){var L=f.outEdges[x];l[e.indexOf(L)]=0;var I=L.node2;0==--u[t.indexOf(I)]&&d.indexOf(I)<0&&d.push(I)}}++g,s=d,d=[]}for(c=0;c<l.length;c++)if(1===l[c])throw new Error("Sankey is a DAG, the original data has cycle!");var b=y>g-1?y:g-1;r&&"left"!==r&&function(t,e,a,o){if("right"===e){for(var n=[],i=t,r=0;i.length;){for(var l=0;l<i.length;l++){var u=i[l];u.setLayout({skNodeHeight:r},!0);for(var s=0;s<u.inEdges.length;s++){var d=u.inEdges[s];n.indexOf(d.node1)<0&&n.push(d.node1)}}i=n,n=[],++r}m(t,(function(t){j(t)||t.setLayout({depth:Math.max(0,o-t.getLayout().skNodeHeight)},!0)}))}else"justify"===e&&function(t,e){m(t,(function(t){j(t)||t.outEdges.length||t.setLayout({depth:e},!0)}))}(t,o)}(t,r,0,b);var E="vertical"===i?(n-a)/b:(o-a)/b;!function(t,e,a){m(t,(function(t){var o=t.getLayout().depth*e;"vertical"===a?t.setLayout({y:o},!0):t.setLayout({x:o},!0)}))}(t,E,i)})(t,e,a,n,i,l,u),function(t,e,a,o,n,i,r){var l=function(t,e){var a=[],o="vertical"===e?"y":"x",n=I(t,(function(t){return t.getLayout()[o]}));return n.keys.sort((function(t,e){return t-e})),m(n.keys,(function(t){a.push(n.buckets.get(t))})),a}(t,r);(function(t,e,a,o,n,i){var r=1/0;m(t,(function(t){var e=t.length,l=0;m(t,(function(t){l+=t.getLayout().value}));var u="vertical"===i?(o-(e-1)*n)/l:(a-(e-1)*n)/l;u<r&&(r=u)})),m(t,(function(t){m(t,(function(t,e){var a=t.getLayout().value*r;"vertical"===i?(t.setLayout({x:e},!0),t.setLayout({dx:a},!0)):(t.setLayout({y:e},!0),t.setLayout({dy:a},!0))}))})),m(e,(function(t){var e=+t.getValue()*r;t.setLayout({dy:e},!0)}))})(l,e,a,o,n,r),N(l,n,a,o,r);for(var u=1;i>0;i--)k(l,u*=.99,r),N(l,n,a,o,r),_(l,u,r),N(l,n,a,o,r)}(t,e,i,n,o,r,l),function(t,e){var a="vertical"===e?"x":"y";m(t,(function(t){t.outEdges.sort((function(t,e){return t.node2.getLayout()[a]-e.node2.getLayout()[a]})),t.inEdges.sort((function(t,e){return t.node1.getLayout()[a]-e.node1.getLayout()[a]}))})),m(t,(function(t){var e=0,a=0;m(t.outEdges,(function(t){t.setLayout({sy:e},!0),e+=t.getLayout().dy})),m(t.inEdges,(function(t){t.setLayout({ty:a},!0),a+=t.getLayout().dy}))}))}(t,l)}(u,s,a,o,i,r,0!==x(u,(function(t){return 0===t.getLayout().value})).length?0:t.get("layoutIterations"),t.get("orient"),t.get("nodeAlign"))}))}function j(t){var e=t.hostGraph.data.getRawDataItem(t.dataIndex);return null!=e.depth&&e.depth>=0}function N(t,e,a,o,n){var i="vertical"===n?"x":"y";m(t,(function(t){var r,l,u;t.sort((function(t,e){return t.getLayout()[i]-e.getLayout()[i]}));for(var s=0,d=t.length,g="vertical"===n?"dx":"dy",c=0;c<d;c++)(u=s-(l=t[c]).getLayout()[i])>0&&(r=l.getLayout()[i]+u,"vertical"===n?l.setLayout({x:r},!0):l.setLayout({y:r},!0)),s=l.getLayout()[i]+l.getLayout()[g]+e;if((u=s-e-("vertical"===n?o:a))>0){r=l.getLayout()[i]-u,"vertical"===n?l.setLayout({x:r},!0):l.setLayout({y:r},!0),s=r;for(c=d-2;c>=0;--c)(u=(l=t[c]).getLayout()[i]+l.getLayout()[g]+e-s)>0&&(r=l.getLayout()[i]-u,"vertical"===n?l.setLayout({x:r},!0):l.setLayout({y:r},!0)),s=l.getLayout()[i]}}))}function k(t,e,a){m(t.slice().reverse(),(function(t){m(t,(function(t){if(t.outEdges.length){var o=F(t.outEdges,G,a)/F(t.outEdges,B);if(isNaN(o)){var n=t.outEdges.length;o=n?F(t.outEdges,A,a)/n:0}if("vertical"===a){var i=t.getLayout().x+(o-z(t,a))*e;t.setLayout({x:i},!0)}else{var r=t.getLayout().y+(o-z(t,a))*e;t.setLayout({y:r},!0)}}}))}))}function G(t,e){return z(t.node2,e)*t.getValue()}function A(t,e){return z(t.node2,e)}function P(t,e){return z(t.node1,e)*t.getValue()}function C(t,e){return z(t.node1,e)}function z(t,e){return"vertical"===e?t.getLayout().x+t.getLayout().dx/2:t.getLayout().y+t.getLayout().dy/2}function B(t){return t.getValue()}function F(t,e,a){for(var o=0,n=t.length,i=-1;++i<n;){var r=+e(t[i],a);isNaN(r)||(o+=r)}return o}function _(t,e,a){m(t,(function(t){m(t,(function(t){if(t.inEdges.length){var o=F(t.inEdges,P,a)/F(t.inEdges,B);if(isNaN(o)){var n=t.inEdges.length;o=n?F(t.inEdges,C,a)/n:0}if("vertical"===a){var i=t.getLayout().x+(o-z(t,a))*e;t.setLayout({x:i},!0)}else{var r=t.getLayout().y+(o-z(t,a))*e;t.setLayout({y:r},!0)}}}))}))}function X(t){t.eachSeriesByType("sankey",(function(t){var e=t.getGraph(),a=e.nodes,o=e.edges;if(a.length){var n=1/0,i=-1/0;m(a,(function(t){var e=t.getLayout().value;e<n&&(n=e),e>i&&(i=e)})),m(a,(function(e){var a=new E({type:"color",mappingMethod:"linear",dataExtent:[n,i],visual:t.get("color")}).mapValueToVisual(e.getLayout().value),o=e.getModel().get(["itemStyle","color"]);null!=o?(e.setVisual("color",o),e.setVisual("style",{fill:o})):(e.setVisual("color",a),e.setVisual("style",{fill:a}))}))}o.length&&m(o,(function(t){var e=t.getModel().get("lineStyle");t.setVisual("style",e)}))}))}function Y(t){t.registerChartView(D),t.registerSeriesModel(S),t.registerLayout(T),t.registerVisual(X),t.registerAction({type:"dragNode",event:"dragnode",update:"update"},(function(t,e){e.eachComponent({mainType:"series",subType:"sankey",query:t},(function(e){e.setNodePosition(t.dataIndex,[t.localX,t.localY])}))}))}export{Y as install};
