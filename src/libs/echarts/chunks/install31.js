import{_ as e,d as t,e as n,bQ as i,cR as o,b8 as r,m as a,aJ as l,bk as s,D as c,bV as d,J as g,b as p,ap as u,$ as h,g as f,cS as y,h as m,cT as v,a9 as x,k as S,c7 as I,I as _,a0 as C,R as b,cn as w,cU as G,bU as R,ab as D,ae as P,x as M,G as A,bW as O,i as k,bY as L,cV as B,Y as T,bh as W,U as z,u as V,b9 as N}from"./index.js";import{m as F}from"./listComponent.js";var H=function(d){function u(){var e=null!==d&&d.apply(this,arguments)||this;return e.type=u.type,e.layoutMode={type:"box",ignoreSize:!0},e}return e(u,d),u.prototype.init=function(e,t,n){this.mergeDefaultAndTheme(e,n),e.selected=e.selected||{},this._updateSelector(e)},u.prototype.mergeOption=function(e,t){d.prototype.mergeOption.call(this,e,t),this._updateSelector(e)},u.prototype._updateSelector=function(e){var o=e.selector,r=this.ecModel;!0===o&&(o=e.selector=["all","inverse"]),t(o)&&n(o,(function(e,t){g(e)&&(e={type:e}),o[t]=i(e,function(e,t){return"all"===t?{type:"all",title:e.getLocaleModel().get(["legend","selector","all"])}:"inverse"===t?{type:"inverse",title:e.getLocaleModel().get(["legend","selector","inverse"])}:void 0}(r,e.type))}))},u.prototype.optionUpdated=function(){this._updateData(this.ecModel);var e=this._data;if(e[0]&&"single"===this.get("selectedMode")){for(var t=!1,n=0;n<e.length;n++){var i=e[n].get("name");if(this.isSelected(i)){this.select(i),t=!0;break}}!t&&this.select(e[0].get("name"))}},u.prototype._updateData=function(e){var t=[],n=[];e.eachRawSeries((function(i){var r,a=i.name;if(n.push(a),i.legendVisualProvider){var l=i.legendVisualProvider.getAllNames();e.isSeriesFiltered(i)||(n=n.concat(l)),l.length?t=t.concat(l):r=!0}else r=!0;r&&o(i)&&t.push(i.name)})),this._availableNames=n;var i=this.get("data")||t,c=r(),d=a(i,(function(e){return(g(e)||p(e))&&(e={name:e}),c.get(e.name)?null:(c.set(e.name,!0),new l(e,this,this.ecModel))}),this);this._data=s(d,(function(e){return!!e}))},u.prototype.getData=function(){return this._data},u.prototype.select=function(e){var t=this.option.selected;if("single"===this.get("selectedMode")){var i=this._data;n(i,(function(e){t[e.get("name")]=!1}))}t[e]=!0},u.prototype.unSelect=function(e){"single"!==this.get("selectedMode")&&(this.option.selected[e]=!1)},u.prototype.toggleSelected=function(e){var t=this.option.selected;t.hasOwnProperty(e)||(t[e]=!0),this[t[e]?"unSelect":"select"](e)},u.prototype.allSelect=function(){var e=this._data,t=this.option.selected;n(e,(function(e){t[e.get("name",!0)]=!0}))},u.prototype.inverseSelect=function(){var e=this._data,t=this.option.selected;n(e,(function(e){var n=e.get("name",!0);t.hasOwnProperty(n)||(t[n]=!0),t[n]=!t[n]}))},u.prototype.isSelected=function(e){var t=this.option.selected;return!(t.hasOwnProperty(e)&&!t[e])&&c(this._availableNames,e)>=0},u.prototype.getOrient=function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}},u.type="legend.plain",u.dependencies=["series"],u.defaultOption={z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,symbolRotate:"inherit",symbolKeepAspect:!0,inactiveColor:"#ccc",inactiveBorderColor:"#ccc",inactiveBorderWidth:"auto",itemStyle:{color:"inherit",opacity:"inherit",borderColor:"inherit",borderWidth:"auto",borderCap:"inherit",borderJoin:"inherit",borderDashOffset:"inherit",borderMiterLimit:"inherit"},lineStyle:{width:"auto",color:"inherit",inactiveColor:"#ccc",inactiveWidth:2,opacity:"inherit",type:"inherit",cap:"inherit",join:"inherit",dashOffset:"inherit",miterLimit:"inherit"},textStyle:{color:"#333"},selectedMode:!0,selector:!1,selectorLabel:{show:!0,borderRadius:10,padding:[3,5,3,5],fontSize:12,fontFamily:"sans-serif",color:"#666",borderWidth:1,borderColor:"#666"},emphasis:{selectorLabel:{show:!0,color:"#eee",backgroundColor:"#666"}},selectorPosition:"auto",selectorItemGap:7,selectorButtonGap:10,tooltip:{show:!1}},u}(d),E=M,U=n,K=A;function j(e,t,n,i){q(e,t,n,i),n.dispatchAction({type:"legendToggleSelect",name:null!=e?e:t}),Y(e,t,n,i)}function J(e){for(var t,n=e.getZr().storage.getDisplayList(),i=0,o=n.length;i<o&&!(t=n[i].states.emphasis);)i++;return t&&t.hoverLayer}function Y(e,t,n,i){J(n)||n.dispatchAction({type:"highlight",seriesName:e,name:t,excludeSeriesId:i})}function q(e,t,n,i){J(n)||n.dispatchAction({type:"downplay",seriesName:e,name:t,excludeSeriesId:i})}var Q=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.type,e.newlineDisabled=!1,e}return e(n,t),n.prototype.init=function(){this.group.add(this._contentGroup=new K),this.group.add(this._selectorGroup=new K),this._isFirstRender=!0},n.prototype.getContentGroup=function(){return this._contentGroup},n.prototype.getSelectorGroup=function(){return this._selectorGroup},n.prototype.render=function(e,t,n){var i=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),e.get("show",!0)){var o=e.get("align"),r=e.get("orient");o&&"auto"!==o||(o="right"===e.get("left")&&"vertical"===r?"right":"left");var a=e.get("selector",!0),l=e.get("selectorPosition",!0);!a||l&&"auto"!==l||(l="horizontal"===r?"end":"start"),this.renderInner(o,e,t,n,a,r,l);var s=e.getBoxLayoutParams(),c={width:n.getWidth(),height:n.getHeight()},d=e.get("padding"),g=u(s,c,d),p=this.layoutInner(e,o,g,i,a,l),f=u(h({width:p.width,height:p.height},s),c,d);this.group.x=f.x-p.x,this.group.y=f.y-p.y,this.group.markRedraw(),this.group.add(this._backgroundEl=F(p,e))}},n.prototype.resetInner=function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl),this.getSelectorGroup().removeAll()},n.prototype.renderInner=function(e,t,n,i,o,a,l){var s=this.getContentGroup(),c=r(),d=t.get("selectedMode"),g=[];n.eachRawSeries((function(e){!e.get("legendHoverLink")&&g.push(e.id)})),U(t.getData(),(function(o,r){var a=o.get("name");if(!this.newlineDisabled&&(""===a||"\n"===a)){var l=new K;return l.newline=!0,void s.add(l)}var p=n.getSeriesByName(a)[0];if(!c.get(a)){if(p){var u=p.getData(),h=u.getVisual("legendLineStyle")||{},x=u.getVisual("legendIcon"),S=u.getVisual("style"),I=this._createItem(p,a,r,o,t,e,h,S,x,d,i);I.on("click",E(j,a,null,i,g)).on("mouseover",E(Y,p.name,null,i,g)).on("mouseout",E(q,p.name,null,i,g)),n.ssr&&I.eachChild((function(e){var t=f(e);t.seriesIndex=p.seriesIndex,t.dataIndex=r,t.ssrType="legend"})),c.set(a,!0)}else n.eachRawSeries((function(l){if(!c.get(a)&&l.legendVisualProvider){var s=l.legendVisualProvider;if(!s.containName(a))return;var p=s.indexOfName(a),u=s.getItemVisual(p,"style"),h=s.getItemVisual(p,"legendIcon"),x=y(u.fill);x&&0===x[3]&&(x[3]=.2,u=m(m({},u),{fill:v(x,"rgba")}));var S=this._createItem(l,a,r,o,t,e,{},u,h,d,i);S.on("click",E(j,null,a,i,g)).on("mouseover",E(Y,null,a,i,g)).on("mouseout",E(q,null,a,i,g)),n.ssr&&S.eachChild((function(e){var t=f(e);t.seriesIndex=l.seriesIndex,t.dataIndex=r,t.ssrType="legend"})),c.set(a,!0)}}),this);c.get(a)||console.warn(a+" series not exists. Legend data should be same with series name or data name.")}}),this),o&&this._createSelector(o,t,i,a,l)},n.prototype._createSelector=function(e,t,n,i,o){var r=this.getSelectorGroup();U(e,(function(e){var i=e.type,o=new x({style:{x:0,y:0,align:"center",verticalAlign:"middle"},onclick:function(){n.dispatchAction({type:"all"===i?"legendAllSelect":"legendInverseSelect"})}});r.add(o);var a=t.getModel("selectorLabel"),l=t.getModel(["emphasis","selectorLabel"]);S(o,{normal:a,emphasis:l},{defaultText:e.title}),I(o)}))},n.prototype._createItem=function(e,t,n,i,o,r,a,l,s,c,d){var p=e.visualDrawType,u=o.get("itemWidth"),h=o.get("itemHeight"),f=o.isSelected(t),y=i.get("symbolRotate"),m=i.get("symbolKeepAspect"),v=i.get("icon"),S=function(e,t,n,i,o,r,a){function l(e,t){"auto"===e.lineWidth&&(e.lineWidth=t.lineWidth>0?2:0),U(e,(function(n,i){"inherit"===e[i]&&(e[i]=t[i])}))}var s=t.getModel("itemStyle"),c=s.getItemStyle(),d=0===e.lastIndexOf("empty",0)?"fill":"stroke",g=s.getShallow("decal");c.decal=g&&"inherit"!==g?D(g,a):i.decal,"inherit"===c.fill&&(c.fill=i[o]);"inherit"===c.stroke&&(c.stroke=i[d]);"inherit"===c.opacity&&(c.opacity=("fill"===o?i:n).opacity);l(c,i);var p=t.getModel("lineStyle"),u=p.getLineStyle();if(l(u,n),"auto"===c.fill&&(c.fill=i.fill),"auto"===c.stroke&&(c.stroke=i.fill),"auto"===u.stroke&&(u.stroke=i.fill),!r){var h=t.get("inactiveBorderWidth"),f=c[d];c.lineWidth="auto"===h?i.lineWidth>0&&f?2:0:c.lineWidth,c.fill=t.get("inactiveColor"),c.stroke=t.get("inactiveBorderColor"),u.stroke=p.get("inactiveColor"),u.lineWidth=p.get("inactiveWidth")}return{itemStyle:c,lineStyle:u}}(s=v||s||"roundRect",i,a,l,p,f,d),G=new K,R=i.getModel("textStyle");if(!_(e.getLegendIcon)||v&&"inherit"!==v){var M="inherit"===v&&e.getData().getVisual("symbol")?"inherit"===y?e.getData().getVisual("symbolRotate"):y:0;G.add(function(e){var t=e.icon||"roundRect",n=P(t,0,0,e.itemWidth,e.itemHeight,e.itemStyle.fill,e.symbolKeepAspect);n.setStyle(e.itemStyle),n.rotation=(e.iconRotate||0)*Math.PI/180,n.setOrigin([e.itemWidth/2,e.itemHeight/2]),t.indexOf("empty")>-1&&(n.style.stroke=n.style.fill,n.style.fill="#fff",n.style.lineWidth=2);return n}({itemWidth:u,itemHeight:h,icon:s,iconRotate:M,itemStyle:S.itemStyle,lineStyle:S.lineStyle,symbolKeepAspect:m}))}else G.add(e.getLegendIcon({itemWidth:u,itemHeight:h,icon:s,iconRotate:y,itemStyle:S.itemStyle,lineStyle:S.lineStyle,symbolKeepAspect:m}));var A="left"===r?u+5:-5,O=r,k=o.get("formatter"),L=t;g(k)&&k?L=k.replace("{name}",null!=t?t:""):_(k)&&(L=k(t));var B=f?R.getTextColor():i.get("inactiveColor");G.add(new x({style:C(R,{text:L,x:A,y:h/2,fill:B,align:O,verticalAlign:"middle"},{inheritColor:B})}));var T=new b({shape:G.getBoundingRect(),style:{fill:"transparent"}}),W=i.getModel("tooltip");return W.get("show")&&w({el:T,componentModel:o,itemName:t,itemTooltipOption:W.option}),G.add(T),G.eachChild((function(e){e.silent=!0})),T.silent=!c,this.getContentGroup().add(G),I(G),G.__legendDataIndex=n,G},n.prototype.layoutInner=function(e,t,n,i,o,r){var a=this.getContentGroup(),l=this.getSelectorGroup();G(e.get("orient"),a,e.get("itemGap"),n.width,n.height);var s=a.getBoundingRect(),c=[-s.x,-s.y];if(l.markRedraw(),a.markRedraw(),o){G("horizontal",l,e.get("selectorItemGap",!0));var d=l.getBoundingRect(),g=[-d.x,-d.y],p=e.get("selectorButtonGap",!0),u=e.getOrient().index,h=0===u?"width":"height",f=0===u?"height":"width",y=0===u?"y":"x";"end"===r?g[u]+=s[h]+p:c[u]+=d[h]+p,g[1-u]+=s[f]/2-d[f]/2,l.x=g[0],l.y=g[1],a.x=c[0],a.y=c[1];var m={x:0,y:0};return m[h]=s[h]+p+d[h],m[f]=Math.max(s[f],d[f]),m[y]=Math.min(0,d[y]+g[1-u]),m}return a.x=c[0],a.y=c[1],this.group.getBoundingRect()},n.prototype.remove=function(){this.getContentGroup().removeAll(),this._isFirstRender=!0},n.type="legend.plain",n}(R);function Z(e){var t=e.findComponents({mainType:"legend"});t&&t.length&&e.filterSeries((function(e){for(var n=0;n<t.length;n++)if(!t[n].isSelected(e.name))return!1;return!0}))}function $(e,t,i){var o,r={},a="toggleSelected"===e;return i.eachComponent("legend",(function(i){a&&null!=o?i[o?"select":"unSelect"](t.name):"allSelect"===e||"inverseSelect"===e?i[e]():(i[e](t.name),o=i.isSelected(t.name));var l=i.getData();n(l,(function(e){var t=e.get("name");if("\n"!==t&&""!==t){var n=i.isSelected(t);r.hasOwnProperty(t)?r[t]=r[t]&&n:r[t]=n}}))})),"allSelect"===e||"inverseSelect"===e?{selected:r}:{name:t.name,selected:r}}function X(e){e.registerComponentModel(H),e.registerComponentView(Q),e.registerProcessor(e.PRIORITY.PROCESSOR.SERIES_FILTER,Z),e.registerSubTypeDefaulter("legend",(function(){return"plain"})),function(e){e.registerAction("legendToggleSelect","legendselectchanged",M($,"toggleSelected")),e.registerAction("legendAllSelect","legendselectall",M($,"allSelect")),e.registerAction("legendInverseSelect","legendinverseselect",M($,"inverseSelect")),e.registerAction("legendSelect","legendselected",M($,"select")),e.registerAction("legendUnSelect","legendunselected",M($,"unSelect"))}(e)}function ee(e,t,n){var i=[1,1];i[e.getOrient().index]=0,L(t,n,{type:"box",ignoreSize:!!i})}var te=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.type,e}return e(n,t),n.prototype.setScrollDataIndex=function(e){this.option.scrollDataIndex=e},n.prototype.init=function(e,n,i){var o=O(e);t.prototype.init.call(this,e,n,i),ee(this,e,o)},n.prototype.mergeOption=function(e,n){t.prototype.mergeOption.call(this,e,n),ee(this,this.option,e)},n.type="legend.scroll",n.defaultOption=k(H.defaultOption,{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800}),n}(H),ne=A,ie=["width","height"],oe=["x","y"],re=function(i){function o(){var e=null!==i&&i.apply(this,arguments)||this;return e.type=o.type,e.newlineDisabled=!0,e._currentIndex=0,e}return e(o,i),o.prototype.init=function(){i.prototype.init.call(this),this.group.add(this._containerGroup=new ne),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new ne)},o.prototype.resetInner=function(){i.prototype.resetInner.call(this),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},o.prototype.renderInner=function(e,n,o,r,a,l,s){var c=this;i.prototype.renderInner.call(this,e,n,o,r,a,l,s);var d=this._controllerGroup,g=n.get("pageIconSize",!0),p=t(g)?g:[g,g];h("pagePrev",0);var u=n.getModel("pageTextStyle");function h(e,t){var i=e+"DataIndex",o=B(n.get("pageIcons",!0)[n.getOrient().name][t],{onclick:T(c._pageGo,c,i,n,r)},{x:-p[0]/2,y:-p[1]/2,width:p[0],height:p[1]});o.name=e,d.add(o)}d.add(new x({name:"pageText",style:{text:"xx/xx",fill:u.getTextColor(),font:u.getFont(),verticalAlign:"middle",align:"center"},silent:!0})),h("pageNext",1)},o.prototype.layoutInner=function(e,t,n,i,o,r){var a=this.getSelectorGroup(),l=e.getOrient().index,s=ie[l],c=oe[l],d=ie[1-l],g=oe[1-l];o&&G("horizontal",a,e.get("selectorItemGap",!0));var p=e.get("selectorButtonGap",!0),u=a.getBoundingRect(),h=[-u.x,-u.y],f=W(n);o&&(f[s]=n[s]-u[s]-p);var y=this._layoutContentAndController(e,i,f,l,s,d,g,c);if(o){if("end"===r)h[l]+=y[s]+p;else{var m=u[s]+p;h[l]-=m,y[c]-=m}y[s]+=u[s]+p,h[1-l]+=y[g]+y[d]/2-u[d]/2,y[d]=Math.max(y[d],u[d]),y[g]=Math.min(y[g],u[g]+h[1-l]),a.x=h[0],a.y=h[1],a.markRedraw()}return y},o.prototype._layoutContentAndController=function(e,t,n,i,o,r,a,l){var s=this.getContentGroup(),c=this._containerGroup,d=this._controllerGroup;G(e.get("orient"),s,e.get("itemGap"),i?n.width:null,i?null:n.height),G("horizontal",d,e.get("pageButtonItemGap",!0));var g=s.getBoundingRect(),p=d.getBoundingRect(),u=this._showController=g[o]>n[o],h=[-g.x,-g.y];t||(h[i]=s[l]);var f=[0,0],y=[-p.x,-p.y],m=z(e.get("pageButtonGap",!0),e.get("itemGap",!0));u&&("end"===e.get("pageButtonPosition",!0)?y[i]+=n[o]-p[o]:f[i]+=p[o]+m);y[1-i]+=g[r]/2-p[r]/2,s.setPosition(h),c.setPosition(f),d.setPosition(y);var v={x:0,y:0};if(v[o]=u?n[o]:g[o],v[r]=Math.max(g[r],p[r]),v[a]=Math.min(0,p[a]+y[1-i]),c.__rectSize=n[o],u){var x={x:0,y:0};x[o]=Math.max(n[o]-p[o]-m,0),x[r]=v[r],c.setClipPath(new b({shape:x})),c.__rectSize=x[o]}else d.eachChild((function(e){e.attr({invisible:!0,silent:!0})}));var S=this._getPageInfo(e);return null!=S.pageIndex&&V(s,{x:S.contentPosition[0],y:S.contentPosition[1]},u?e:null),this._updatePageInfoView(e,S),v},o.prototype._pageGo=function(e,t,n){var i=this._getPageInfo(t)[e];null!=i&&n.dispatchAction({type:"legendScroll",scrollDataIndex:i,legendId:t.id})},o.prototype._updatePageInfoView=function(e,t){var i=this._controllerGroup;n(["pagePrev","pageNext"],(function(n){var o=null!=t[n+"DataIndex"],r=i.childOfName(n);r&&(r.setStyle("fill",o?e.get("pageIconColor",!0):e.get("pageIconInactiveColor",!0)),r.cursor=o?"pointer":"default")}));var o=i.childOfName("pageText"),r=e.get("pageFormatter"),a=t.pageIndex,l=null!=a?a+1:0,s=t.pageCount;o&&r&&o.setStyle("text",g(r)?r.replace("{current}",null==l?"":l+"").replace("{total}",null==s?"":s+""):r({current:l,total:s}))},o.prototype._getPageInfo=function(e){var t=e.get("scrollDataIndex",!0),n=this.getContentGroup(),i=this._containerGroup.__rectSize,o=e.getOrient().index,r=ie[o],a=oe[o],l=this._findTargetItemIndex(t),s=n.children(),c=s[l],d=s.length,g=d?1:0,p={contentPosition:[n.x,n.y],pageCount:g,pageIndex:g-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!c)return p;var u=v(c);p.contentPosition[o]=-u.s;for(var h=l+1,f=u,y=u,m=null;h<=d;++h)(!(m=v(s[h]))&&y.e>f.s+i||m&&!x(m,f.s))&&(f=y.i>f.i?y:m)&&(null==p.pageNextDataIndex&&(p.pageNextDataIndex=f.i),++p.pageCount),y=m;for(h=l-1,f=u,y=u,m=null;h>=-1;--h)(m=v(s[h]))&&x(y,m.s)||!(f.i<y.i)||(y=f,null==p.pagePrevDataIndex&&(p.pagePrevDataIndex=f.i),++p.pageCount,++p.pageIndex),f=m;return p;function v(e){if(e){var t=e.getBoundingRect(),n=t[a]+e[a];return{s:n,e:n+t[r],i:e.__legendDataIndex}}}function x(e,t){return e.e>=t&&e.s<=t+i}},o.prototype._findTargetItemIndex=function(e){return this._showController?(this.getContentGroup().eachChild((function(i,o){var r=i.__legendDataIndex;null==n&&null!=r&&(n=o),r===e&&(t=o)})),null!=t?t:n):0;var t,n},o.type="legend.scroll",o}(Q);function ae(e){N(X),e.registerComponentModel(te),e.registerComponentView(re),function(e){e.registerAction("legendScroll","legendscroll",(function(e,t){var n=e.scrollDataIndex;null!=n&&t.eachComponent({mainType:"legend",subType:"scroll",query:e},(function(e){e.setScrollDataIndex(n)}))}))}(e)}function le(e){N(X),N(ae)}export{le as install};
