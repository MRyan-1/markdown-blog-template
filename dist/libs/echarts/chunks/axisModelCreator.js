import{f as t,m as e,_ as a,di as o,v as i,x as r,dj as n}from"./core.js";import{a as s}from"./axisDefault.js";var p={value:1,category:1,time:1,log:1};function u(u,l,y,c){t(p,(function(t,p){var g=e(e({},s[p],!0),c,!0),d=function(t){function s(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=l+"Axis."+p,e}return a(s,t),s.prototype.mergeDefaultAndTheme=function(t,a){var n=o(this),s=n?i(t):{},u=a.getTheme();e(t,u.get(p+"Axis")),e(t,this.getDefaultOption()),t.type=f(t),n&&r(t,s,n)},s.prototype.optionUpdated=function(){"category"===this.option.type&&(this.__ordinalMeta=n.createByAxisModel(this))},s.prototype.getCategories=function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},s.prototype.getOrdinalMeta=function(){return this.__ordinalMeta},s.type=l+"Axis."+p,s.defaultOption=g,s}(y);u.registerComponentModel(d)})),u.registerSubTypeDefaulter(l+"Axis",f)}function f(t){return t.type||(t.data?"category":"value")}export{u as a};
