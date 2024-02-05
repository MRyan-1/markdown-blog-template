import{_ as e,bX as t,cj as i,f as r,A as n,aG as a,ck as o,Z as l,z as s,bO as g,O as d,cl as h,ab as c,aj as p,e as u,bW as f,bV as y,U as m,N as v,bU as w,cm as x,bS as M,b as S,i as A,aI as b,al as I,bL as C}from"./core.js";import{S as _}from"./sausage.js";import{c as k}from"./createSeriesDataSimply.js";var P=function(){this.angle=0,this.width=10,this.r=10,this.x=0,this.y=0},E=function(t){function i(e){var i=t.call(this,e)||this;return i.type="pointer",i}return e(i,t),i.prototype.getDefaultShape=function(){return new P},i.prototype.buildPath=function(e,t){var i=Math.cos,r=Math.sin,n=t.r,a=t.width,o=t.angle,l=t.x-i(o)*a*(a>=n/3?1:2),s=t.y-r(o)*a*(a>=n/3?1:2);o=t.angle-Math.PI/2,e.moveTo(l,s),e.lineTo(t.x+i(o)*a,t.y+r(o)*a),e.lineTo(t.x+i(t.angle)*n,t.y+r(t.angle)*n),e.lineTo(t.x-i(o)*a,t.y-r(o)*a),e.lineTo(l,s)},i}(t);function L(e,t){var i=null==e?"":e+"";return t&&(S(t)?i=t.replace("{value}",i):A(t)&&(i=t(e))),i}var N=function(t){function M(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=M.type,e}return e(M,t),M.prototype.render=function(e,t,i){this.group.removeAll();var r=e.get(["axisLine","lineStyle","color"]),a=function(e,t){var i=e.get("center"),r=t.getWidth(),a=t.getHeight(),o=Math.min(r,a);return{cx:n(i[0],t.getWidth()),cy:n(i[1],t.getHeight()),r:n(e.get("radius"),o/2)}}(e,i);this._renderMain(e,t,i,r,a),this._data=e.getData()},M.prototype.dispose=function(){},M.prototype._renderMain=function(e,t,n,a,o){var l=this.group,s=e.get("clockwise"),g=-e.get("startAngle")/180*Math.PI,d=-e.get("endAngle")/180*Math.PI,h=e.getModel("axisLine"),c=h.get("roundCap")?_:b,p=h.get("show"),u=h.getModel("lineStyle"),f=u.get("width"),y=[g,d];i(y,!s);for(var m=(d=y[1])-(g=y[0]),v=g,w=[],x=0;p&&x<a.length;x++){var M=new c({shape:{startAngle:v,endAngle:d=g+m*Math.min(Math.max(a[x][0],0),1),cx:o.cx,cy:o.cy,clockwise:s,r0:o.r-f,r:o.r},silent:!0});M.setStyle({fill:a[x][1]}),M.setStyle(u.getLineStyle(["color","width"])),w.push(M),v=d}w.reverse(),r(w,(function(e){return l.add(e)}));var S=function(e){if(e<=0)return a[0][1];var t;for(t=0;t<a.length;t++)if(a[t][0]>=e&&(0===t?0:a[t-1][0])<e)return a[t][1];return a[t-1][1]};this._renderTicks(e,t,n,S,o,g,d,s,f),this._renderTitleAndDetail(e,t,n,S,o),this._renderAnchor(e,o),this._renderPointer(e,t,n,S,o,g,d,s,f)},M.prototype._renderTicks=function(e,t,i,r,g,d,h,c,p){for(var u,f,y=this.group,m=g.cx,v=g.cy,w=g.r,x=+e.get("min"),M=+e.get("max"),S=e.getModel("splitLine"),A=e.getModel("axisTick"),b=e.getModel("axisLabel"),C=e.get("splitNumber"),_=A.get("splitNumber"),k=n(S.get("length"),w),P=n(A.get("length"),w),E=d,N=(h-d)/C,z=N/_,T=S.getModel("lineStyle").getLineStyle(),D=A.getModel("lineStyle").getLineStyle(),V=S.get("distance"),W=0;W<=C;W++){if(u=Math.cos(E),f=Math.sin(E),S.get("show")){var j=new a({shape:{x1:u*(w-(G=V?V+p:p))+m,y1:f*(w-G)+v,x2:u*(w-k-G)+m,y2:f*(w-k-G)+v},style:T,silent:!0});"auto"===T.stroke&&j.setStyle({stroke:r(W/C)}),y.add(j)}if(b.get("show")){var G=b.get("distance")+V,H=L(o(W/C*(M-x)+x),b.get("formatter")),O=r(W/C),B=u*(w-k-G)+m,F=f*(w-k-G)+v,U=b.get("rotate"),X=0;"radial"===U?(X=-E+2*Math.PI)>Math.PI/2&&(X+=Math.PI):"tangential"===U?X=-E-Math.PI/2:I(U)&&(X=U*Math.PI/180),0===X?y.add(new l({style:s(b,{text:H,x:B,y:F,verticalAlign:f<-.8?"top":f>.8?"bottom":"middle",align:u<-.4?"left":u>.4?"right":"center"},{inheritColor:O}),silent:!0})):y.add(new l({style:s(b,{text:H,x:B,y:F,verticalAlign:"middle",align:"center"},{inheritColor:O}),silent:!0,originX:B,originY:F,rotation:X}))}if(A.get("show")&&W!==C){G=(G=A.get("distance"))?G+p:p;for(var Y=0;Y<=_;Y++){u=Math.cos(E),f=Math.sin(E);var Z=new a({shape:{x1:u*(w-G)+m,y1:f*(w-G)+v,x2:u*(w-P-G)+m,y2:f*(w-P-G)+v},silent:!0,style:D});"auto"===D.stroke&&Z.setStyle({stroke:r((W+Y/_)/C)}),y.add(Z),E+=z}E-=z}else E+=N}},M.prototype._renderPointer=function(e,t,i,r,a,o,l,s,v){var w=this.group,x=this._data,M=this._progressEls,S=[],A=e.get(["pointer","show"]),I=e.getModel("progress"),C=I.get("show"),k=e.getData(),P=k.mapDimension("value"),L=+e.get("min"),N=+e.get("max"),z=[L,N],T=[o,l];function D(t,i){var r,o=k.getItemModel(t).getModel("pointer"),l=n(o.get("width"),a.r),s=n(o.get("length"),a.r),g=e.get(["pointer","icon"]),d=o.get("offsetCenter"),h=n(d[0],a.r),c=n(d[1],a.r),p=o.get("keepAspect");return(r=g?m(g,h-l/2,c-s,l,s,null,p):new E({shape:{angle:-Math.PI/2,width:l,r:s,x:h,y:c}})).rotation=-(i+Math.PI/2),r.x=a.cx,r.y=a.cy,r}function V(e,t){var i=I.get("roundCap")?_:b,r=I.get("overlap"),n=r?I.get("width"):v/k.count(),l=r?a.r-n:a.r-(e+1)*n,g=r?a.r:a.r-e*n,d=new i({shape:{startAngle:o,endAngle:t,cx:a.cx,cy:a.cy,clockwise:s,r0:l,r:g}});return r&&(d.z2=N-k.get(P,e)%N),d}(C||A)&&(k.diff(x).add((function(t){var i=k.get(P,t);if(A){var r=D(t,o);g(r,{rotation:-((isNaN(+i)?T[0]:d(i,z,T,!0))+Math.PI/2)},e),w.add(r),k.setItemGraphicEl(t,r)}if(C){var n=V(t,o),a=I.get("clip");g(n,{shape:{endAngle:d(i,z,T,a)}},e),w.add(n),h(e.seriesIndex,k.dataType,t,n),S[t]=n}})).update((function(t,i){var r=k.get(P,t);if(A){var n=x.getItemGraphicEl(i),a=n?n.rotation:o,l=D(t,a);l.rotation=a,c(l,{rotation:-((isNaN(+r)?T[0]:d(r,z,T,!0))+Math.PI/2)},e),w.add(l),k.setItemGraphicEl(t,l)}if(C){var s=M[i],g=V(t,s?s.shape.endAngle:o),p=I.get("clip");c(g,{shape:{endAngle:d(r,z,T,p)}},e),w.add(g),h(e.seriesIndex,k.dataType,t,g),S[t]=g}})).execute(),k.each((function(e){var t=k.getItemModel(e),i=t.getModel("emphasis"),n=i.get("focus"),a=i.get("blurScope"),o=i.get("disabled");if(A){var l=k.getItemGraphicEl(e),s=k.getItemVisual(e,"style"),g=s.fill;if(l instanceof p){var h=l.style;l.useStyle(u({image:h.image,x:h.x,y:h.y,width:h.width,height:h.height},s))}else l.useStyle(s),"pointer"!==l.type&&l.setColor(g);l.setStyle(t.getModel(["pointer","itemStyle"]).getItemStyle()),"auto"===l.style.fill&&l.setStyle("fill",r(d(k.get(P,e),z,[0,1],!0))),l.z2EmphasisLift=0,f(l,t),y(l,n,a,o)}if(C){var c=S[e];c.useStyle(k.getItemVisual(e,"style")),c.setStyle(t.getModel(["progress","itemStyle"]).getItemStyle()),c.z2EmphasisLift=0,f(c,t),y(c,n,a,o)}})),this._progressEls=S)},M.prototype._renderAnchor=function(e,t){var i=e.getModel("anchor");if(i.get("show")){var r=i.get("size"),a=i.get("icon"),o=i.get("offsetCenter"),l=i.get("keepAspect"),s=m(a,t.cx-r/2+n(o[0],t.r),t.cy-r/2+n(o[1],t.r),r,r,null,l);s.z2=i.get("showAbove")?1:0,s.setStyle(i.getModel("itemStyle").getItemStyle()),this.group.add(s)}},M.prototype._renderTitleAndDetail=function(e,t,i,r,a){var o=this,g=e.getData(),h=g.mapDimension("value"),c=+e.get("min"),p=+e.get("max"),u=new v,f=[],y=[],m=e.isAnimationEnabled(),M=e.get(["pointer","showAbove"]);g.diff(this._data).add((function(e){f[e]=new l({silent:!0}),y[e]=new l({silent:!0})})).update((function(e,t){f[e]=o._titleEls[t],y[e]=o._detailEls[t]})).execute(),g.each((function(t){var i=g.getItemModel(t),o=g.get(h,t),l=new v,S=r(d(o,[c,p],[0,1],!0)),A=i.getModel("title");if(A.get("show")){var b=A.get("offsetCenter"),I=a.cx+n(b[0],a.r),C=a.cy+n(b[1],a.r);(D=f[t]).attr({z2:M?0:2,style:s(A,{x:I,y:C,text:g.getName(t),align:"center",verticalAlign:"middle"},{inheritColor:S})}),l.add(D)}var _=i.getModel("detail");if(_.get("show")){var k=_.get("offsetCenter"),P=a.cx+n(k[0],a.r),E=a.cy+n(k[1],a.r),N=n(_.get("width"),a.r),z=n(_.get("height"),a.r),T=e.get(["progress","show"])?g.getItemVisual(t,"style").fill:S,D=y[t],V=_.get("formatter");D.attr({z2:M?0:2,style:s(_,{x:P,y:E,text:L(o,V),width:isNaN(N)?null:N,height:isNaN(z)?null:z,align:"center",verticalAlign:"middle"},{inheritColor:T})}),w(D,{normal:_},o,(function(e){return L(e,V)})),m&&x(D,t,g,e,{getFormattedLabel:function(e,t,i,r,n,a){return L(a?a.interpolatedValue:o,V)}}),l.add(D)}u.add(l)})),this.group.add(u),this._titleEls=f,this._detailEls=y},M.type="gauge",M}(M),z=function(t){function i(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=i.type,e.visualStyleAccessPath="itemStyle",e}return e(i,t),i.prototype.getInitialData=function(e,t){return k(this,["value"])},i.type="series.gauge",i.defaultOption={z:2,colorBy:"data",center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,roundCap:!1,lineStyle:{color:[[1,"#E6EBF8"]],width:10}},progress:{show:!1,overlap:!0,width:10,roundCap:!1,clip:!0},splitLine:{show:!0,length:10,distance:10,lineStyle:{color:"#63677A",width:3,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:6,distance:10,lineStyle:{color:"#63677A",width:1,type:"solid"}},axisLabel:{show:!0,distance:15,color:"#464646",fontSize:12,rotate:0},pointer:{icon:null,offsetCenter:[0,0],show:!0,showAbove:!0,length:"60%",width:6,keepAspect:!1},anchor:{show:!1,showAbove:!1,size:6,icon:"circle",offsetCenter:[0,0],keepAspect:!1,itemStyle:{color:"#fff",borderWidth:0,borderColor:"#5470c6"}},title:{show:!0,offsetCenter:[0,"20%"],color:"#464646",fontSize:16,valueAnimation:!1},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"#464646",fontSize:30,fontWeight:"bold",lineHeight:30,valueAnimation:!1}},i}(C);function T(e){e.registerChartView(N),e.registerSeriesModel(z)}export{T as install};
