import{J as t,I as n}from"./index.js";var e={average:function(t){for(var n=0,e=0,a=0;a<t.length;a++)isNaN(t[a])||(n+=t[a],e++);return 0===e?NaN:n/e},sum:function(t){for(var n=0,e=0;e<t.length;e++)n+=t[e]||0;return n},max:function(t){for(var n=-1/0,e=0;e<t.length;e++)t[e]>n&&(n=t[e]);return isFinite(n)?n:NaN},min:function(t){for(var n=1/0,e=0;e<t.length;e++)t[e]<n&&(n=t[e]);return isFinite(n)?n:NaN},minmax:function(t){for(var n=-1/0,e=-1/0,a=0;a<t.length;a++){var i=t[a],r=Math.abs(i);r>n&&(n=r,e=i)}return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},a=function(t){return Math.round(t.length/2)};function i(i){return{seriesType:i,reset:function(i,r,o){var s=i.getData(),u=i.get("sampling"),f=i.coordinateSystem,m=s.count();if(m>10&&"cartesian2d"===f.type&&u){var g=f.getBaseAxis(),c=f.getOtherAxis(g),v=g.getExtent(),l=o.getDevicePixelRatio(),h=Math.abs(v[1]-v[0])*(l||1),d=Math.round(m/h);if(isFinite(d)&&d>1){"lttb"===u&&i.setData(s.lttbDownSample(s.mapDimension(c.dim),1/d));var N=void 0;t(u)?N=e[u]:n(u)&&(N=u),N&&i.setData(s.downSample(s.mapDimension(c.dim),1/d,N,a))}}}}}export{i as d};
