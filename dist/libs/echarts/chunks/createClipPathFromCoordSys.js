import{R as e,bO as a,ck as n,aI as t,i as r}from"./core.js";function s(n,t,s,i,h){var l=n.getArea(),g=l.x,c=l.y,o=l.width,p=l.height,d=s.get(["lineStyle","width"])||2;g-=d/2,c-=d/2,o+=d,p+=d,g=Math.floor(g),o=Math.round(o);var u=new e({shape:{x:g,y:c,width:o,height:p}});if(t){var A=n.getBaseAxis(),w=A.isHorizontal(),x=A.inverse;w?(x&&(u.shape.x+=o),u.shape.width=0):(x||(u.shape.y+=p),u.shape.height=0);var y=r(h)?function(e){h(e,u)}:null;a(u,{shape:{width:o,height:p,x:g,y:c}},s,null,i,y)}return u}function i(e,r,s){var i=e.getArea(),h=n(i.r0,1),l=n(i.r,1),g=new t({shape:{cx:n(e.cx,1),cy:n(e.cy,1),r0:h,r:l,startAngle:i.startAngle,endAngle:i.endAngle,clockwise:i.clockwise}});r&&("angle"===e.getBaseAxis().dim?g.shape.endAngle=i.startAngle:g.shape.r=h,a(g,{shape:{endAngle:i.endAngle,r:l}},s));return g}function h(e,a,n,t,r){return e?"polar"===e.type?i(e,a,n):"cartesian2d"===e.type?s(e,a,n,t,r):null:null}export{s as a,i as b,h as c};
