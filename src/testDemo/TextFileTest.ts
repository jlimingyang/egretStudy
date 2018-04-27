class TextFileTest extends egret.TextField {
    public constructor() {
        super();
        this.createText();
    }

    private createText(): void {
        this.text = "我是测试的文字";
        this.x = 20;
        this.y = 20;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, touchHandler, this);

        function touchHandler(): void {
            this.textColor = 0xff0000;
         }
    }

   
}