class LocalChangeTest extends egret.Sprite{

	public constructor() {
		super();
		this.createSprite();
	}

	private createSprite():void{

		var offsetX : number;
		var offsetY : number;
		var curObj : egret.Shape;

		this.x = 400;
		this.y = 400;

		var circle:egret.Shape = new egret.Shape();
		circle.graphics.beginFill(0x800080);
		circle.graphics.drawCircle(0,0,30);
		circle.graphics.endFill();
		circle.x = 50;
		circle.y = 50;
		this.addChild(circle);
		
		circle.touchEnabled = true;
		circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,onTouchStart,this);
		circle.addEventListener(egret.TouchEvent.TOUCH_END,onTouchStop,this);

		function onTouchStart(event : egret.TouchEvent):void{
			//记录当前的对象
			curObj =  event.currentTarget;

			offsetX = event.stageX - curObj.x;
			offsetY = event.stageY - curObj.y;
			//手指移动
			this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
		}

		function onMove(event:egret.TouchEvent):void{
			curObj.x = event.stageX - offsetX;
			curObj.y = event.$stageY - offsetY;
		}

		function onTouchStop(event:egret.TouchEvent) : void{
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
		}

	}
}