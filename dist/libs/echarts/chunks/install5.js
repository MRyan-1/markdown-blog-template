import{_ as t,S as e,H as n,I as o,t as r,C as i}from"./core.js";var a=function(r){function i(){var t=null!==r&&r.apply(this,arguments)||this;return t.type="dataset",t}return t(i,r),i.prototype.init=function(t,o,i){r.prototype.init.call(this,t,o,i),this._sourceManager=new e(this),n(this)},i.prototype.mergeOption=function(t,e){r.prototype.mergeOption.call(this,t,e),n(this)},i.prototype.optionUpdated=function(){this._sourceManager.dirty()},i.prototype.getSourceManager=function(){return this._sourceManager},i.type="dataset",i.defaultOption={seriesLayoutBy:o},i}(r),s=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="dataset",t}return t(n,e),n.type="dataset",n}(i);function p(t){t.registerComponentModel(a),t.registerComponentView(s)}export{a as DatasetModel,p as install};
