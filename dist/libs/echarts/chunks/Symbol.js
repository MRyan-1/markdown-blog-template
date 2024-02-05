import{_ as t,U as e,aZ as s,a_ as l,ab as a,bP as i,bO as o,bT as r,aV as n,aj as c,e as h,ao as y,bV as m,ai as u,ds as p,aU as d,N as b}from"./core.js";import{g as f}from"./labelHelper.js";var g=function(b){function g(t,e,s,l){var a=b.call(this)||this;return a.updateData(t,e,s,l),a}return t(g,b),g.prototype._createSymbol=function(t,s,l,a,i){this.removeAll();var o=e(t,-1,-1,2,2,null,i);o.attr({z2:100,culling:!0,scaleX:a[0]/2,scaleY:a[1]/2}),o.drift=S,this._symbolType=t,this.add(o)},g.prototype.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(null,t)},g.prototype.getSymbolType=function(){return this._symbolType},g.prototype.getSymbolPath=function(){return this.childAt(0)},g.prototype.highlight=function(){s(this.childAt(0))},g.prototype.downplay=function(){l(this.childAt(0))},g.prototype.setZ=function(t,e){var s=this.childAt(0);s.zlevel=t,s.z=e},g.prototype.setDraggable=function(t,e){var s=this.childAt(0);s.draggable=t,s.cursor=!e&&t?"move":s.cursor},g.prototype.updateData=function(t,e,s,l){this.silent=!1;var r=t.getItemVisual(e,"symbol")||"circle",n=t.hostModel,c=g.getSymbolSize(t,e),h=r!==this._symbolType,y=l&&l.disableAnimation;if(h){var m=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(r,t,e,c,m)}else{(p=this.childAt(0)).silent=!1;var u={scaleX:c[0]/2,scaleY:c[1]/2};y?p.attr(u):a(p,u,n,e),i(p)}if(this._updateCommon(t,e,c,s,l),h){var p=this.childAt(0);if(!y){u={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:p.style.opacity}};p.scaleX=p.scaleY=0,p.style.opacity=0,o(p,u,n,e)}}y&&this.childAt(0).stopAnimation("leave")},g.prototype._updateCommon=function(t,e,s,l,a){var i,o,u,p,d,b,g,S,v,I=this.childAt(0),_=t.hostModel;if(l&&(i=l.emphasisItemStyle,o=l.blurItemStyle,u=l.selectItemStyle,p=l.focus,d=l.blurScope,g=l.labelStatesModels,S=l.hoverScale,v=l.cursorStyle,b=l.emphasisDisabled),!l||t.hasItemOption){var z=l&&l.itemModel?l.itemModel:t.getItemModel(e),A=z.getModel("emphasis");i=A.getModel("itemStyle").getItemStyle(),u=z.getModel(["select","itemStyle"]).getItemStyle(),o=z.getModel(["blur","itemStyle"]).getItemStyle(),p=A.get("focus"),d=A.get("blurScope"),b=A.get("disabled"),g=r(z),S=A.getShallow("scale"),v=z.getShallow("cursor")}var x=t.getItemVisual(e,"symbolRotate");I.attr("rotation",(x||0)*Math.PI/180||0);var M=n(t.getItemVisual(e,"symbolOffset"),s);M&&(I.x=M[0],I.y=M[1]),v&&I.attr("cursor",v);var Y=t.getItemVisual(e,"style"),X=Y.fill;if(I instanceof c){var T=I.style;I.useStyle(h({image:T.image,x:T.x,y:T.y,width:T.width,height:T.height},Y))}else I.__isEmptyBrush?I.useStyle(h({},Y)):I.useStyle(Y),I.style.decal=null,I.setColor(X,a&&a.symbolInnerColor),I.style.strokeNoScale=!0;var V=t.getItemVisual(e,"liftZ"),C=this._z2;null!=V?null==C&&(this._z2=I.z2,I.z2+=V):null!=C&&(I.z2=C,this._z2=null);var O=a&&a.useNameLabel;y(I,g,{labelFetcher:_,labelDataIndex:e,defaultText:function(e){return O?t.getName(e):f(t,e)},inheritColor:X,defaultOpacity:Y.opacity}),this._sizeX=s[0]/2,this._sizeY=s[1]/2;var w=I.ensureState("emphasis");w.style=i,I.ensureState("select").style=u,I.ensureState("blur").style=o;var D=null==S||!0===S?Math.max(1.1,3/this._sizeY):isFinite(S)&&S>0?+S:1;w.scaleX=this._sizeX*D,w.scaleY=this._sizeY*D,this.setSymbolScale(1),m(this,p,d,b)},g.prototype.setSymbolScale=function(t){this.scaleX=this.scaleY=t},g.prototype.fadeOut=function(t,e,s){var l=this.childAt(0),a=u(this).dataIndex,i=s&&s.animation;if(this.silent=l.silent=!0,s&&s.fadeLabel){var o=l.getTextContent();o&&p(o,{style:{opacity:0}},e,{dataIndex:a,removeOpt:i,cb:function(){l.removeTextContent()}})}else l.removeTextContent();p(l,{style:{opacity:0},scaleX:0,scaleY:0},e,{dataIndex:a,cb:t,removeOpt:i})},g.getSymbolSize=function(t,e){return d(t.getItemVisual(e,"symbolSize"))},g}(b);function S(t,e){this.parent.drift(t,e)}export{g as S};
