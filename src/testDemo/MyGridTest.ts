class MyGridTest extends egret.Shape{
    public constructor(){
        super();
        this.drawGrid();
    }

    private drawGrid():void{
        this.graphics.beginFill( 0x0000ff );
        this.graphics.drawRect( 0, 0, 50,50 );
        this.graphics.endFill();

        this.graphics.beginFill( 0x0000ff );
        this.graphics.drawRect( 50, 50, 50, 50);
        this.graphics.endFill();

        this.graphics.beginFill( 0xff0000 );
        this.graphics.drawRect( 50, 0, 50,50 );
        this.graphics.endFill();

        this.graphics.beginFill( 0xff0000 );
        this.graphics.drawRect( 0, 50, 50,50 );
        this.graphics.endFill(); 

        this.graphics.beginFill( 0xff0000 );
        this.graphics.drawEllipse(200,200,100,100);
        this.graphics.endFill();


    }
}