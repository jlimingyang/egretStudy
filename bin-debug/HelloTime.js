var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var HelloTime = (function (_super) {
    __extends(HelloTime, _super);
    function HelloTime() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HelloTime.prototype.onAddToStage = function (event) {
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 100, 100);
        spr.graphics.endFill();
        this.addChild(spr);
    };
    return HelloTime;
}(egret.DisplayObjectContainer));
__reflect(HelloTime.prototype, "HelloTime");
