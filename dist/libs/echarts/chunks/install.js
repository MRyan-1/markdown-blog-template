import{c as e,m as a,a as t,i,g as r,e as s,d as l,b as n,f as o,h as g}from"./core.js";var u={label:{enabled:!0},decal:{show:!1}},c=g(),d={};function f(g,f){var p=g.getModel("aria");if(p.get("enabled")){var v=e(u);a(v.label,g.getLocaleModel().get("aria"),!1),a(p.option,v,!1),function(){if(p.getModel("decal").get("show")){var e=t();g.eachSeries((function(a){if(!a.isColorBySeries()){var t=e.get(a.type);t||(t={},e.set(a.type,t)),c(a).scope=t}})),g.eachRawSeries((function(e){if(!g.isSeriesFiltered(e))if(i(e.enableAriaDecal))e.enableAriaDecal();else{var a=e.getData();if(e.isColorBySeries()){var t=r(e.ecModel,e.name,d,g.getSeriesCount()),l=a.getVisual("decal");a.setVisual("decal",p(l,t))}else{var n=e.getRawData(),o={},u=c(e).scope;a.each((function(e){var t=a.getRawIndex(e);o[t]=e}));var f=n.count();n.each((function(t){var i=o[t],s=n.getName(t)||t+"",l=r(e.ecModel,s,u,f),g=a.getItemVisual(i,"decal");a.setItemVisual(i,"decal",p(g,l))}))}}function p(e,a){var t=e?s(s({},a),e):a;return t.dirty=!0,t}}))}}(),function(){var e=g.getLocaleModel().get("aria"),a=p.getModel("label");if(a.option=l(a.option,e),!a.get("enabled"))return;var t=f.getZr().dom;if(a.get("description"))return void t.setAttribute("aria-label",a.get("description"));var i,r=g.getSeriesCount(),s=a.get(["data","maxCount"])||10,n=a.get(["series","maxCount"])||10,o=Math.min(r,n);if(r<1)return;var u=function(){var e=g.get("title");e&&e.length&&(e=e[0]);return e&&e.text}();i=u?m(a.get(["general","withTitle"]),{title:u}):a.get(["general","withoutTitle"]);var c=[];i+=m(r>1?a.get(["series","multiple","prefix"]):a.get(["series","single","prefix"]),{seriesCount:r}),g.eachSeries((function(e,t){if(t<o){var i=void 0,l=e.get("name")?"withName":"withoutName";i=m(i=r>1?a.get(["series","multiple",l]):a.get(["series","single",l]),{seriesId:e.seriesIndex,seriesName:e.get("name"),seriesType:(w=e.subType,g.getLocaleModel().get(["series","typeNames"])[w]||"自定义图")});var n=e.getData();if(n.count()>s)i+=m(a.get(["data","partialData"]),{displayCnt:s});else i+=a.get(["data","allData"]);for(var u=a.get(["data","separator","middle"]),d=a.get(["data","separator","end"]),f=[],p=0;p<n.count();p++)if(p<s){var v=n.getName(p),h=n.getValues(p),b=a.get(["data",v?"withName":"withoutName"]);f.push(m(b,{name:v,value:h.join(u)}))}i+=f.join(u)+d,c.push(i)}var w}));var d=a.getModel(["series","multiple","separator"]),v=d.get("middle"),h=d.get("end");i+=c.join(v)+h,t.setAttribute("aria-label",i)}()}function m(e,a){if(!n(e))return e;var t=e;return o(a,(function(e,a){t=t.replace(new RegExp("\\{\\s*"+a+"\\s*\\}","g"),e)})),t}}function p(e){if(e&&e.aria){var a=e.aria;null!=a.show&&(a.enabled=a.show),a.label=a.label||{},o(["description","general","series","data"],(function(e){null!=a[e]&&(a.label[e]=a[e])}))}}function v(e){e.registerPreprocessor(p),e.registerVisual(e.PRIORITY.VISUAL.ARIA,f)}export{v as install};
