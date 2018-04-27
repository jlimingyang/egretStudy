// TypeScript file
class HelloTime extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){
        var spr:egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0,0,100,100);
        spr.graphics.endFill();
        this.addChild(spr);
        }
}