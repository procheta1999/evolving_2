let gameScene= new Phaser.Scene('Game');
gameScene.preload=function(){
    this.load.image('background', 'assets/background_new.png');
    this.load.image('wheel', 'assets/wheel23.png');
    this.load.image('chocolate', 'assets/chocolate.png');
    this.load.image('toys', 'assets/toys.png');
    this.load.image('books', 'assets/books.png');
    this.load.image('money', 'assets/money.png');
    this.load.image('burger', 'assets/burger.png');
    this.load.image('pizza', 'assets/pizza.png');
    this.load.image('candy', 'assets/candy.png');
    this.load.image('car', 'assets/car.png');
};   
gameScene.create=function(){
   
    let bg=this.add.sprite(0,0,'background');
    bg.setPosition(640/2,360/2);
    bg.setScale(2.9,2.9);
    this.wheel=this.add.sprite(250,180,'wheel');
     this.physics.add.existing(this.wheel);;
    let chocolate=this.add.sprite(100,180,'chocolate');
    chocolate.setScale(0.3,0.3);
    let toys=this.add.sprite(250,30,'toys');
    toys.setScale(0.5,0.5);
    let books=this.add.sprite(420,180,'books');
    books.setScale(0.3,0.3);
    let money=this.add.sprite(250,320,'money');
    money.setScale(0.3,0.3);
    let burger=this.add.sprite(110,70,'burger');
    burger.setScale(0.3,0.3);
    let pizza=this.add.sprite(400,70,'pizza');
    pizza.setScale(0.35,0.5);
//    this.cursors = this.input.mousePointer;
    let candy=this.add.sprite(120,280,'candy');
    candy.setScale(0.3,0.3);
    let car=this.add.sprite(410,280,'car');
    car.setScale(0.4,0.4);
//    this.pointer = this.input.activePointer;
//    this.press=this.input.touch.startListeners();
};
        gameScene.update=function(){
            if (this.input.activePointer.isDown) {
    this.wheel.rotation += 1;
}
           
//            if (this.press.onTouchStart)
//    {
//        this.wheel.rotation += 3;
//    }

        };
        
        
        let config={
            type:Phaser.AUTO,
            width:640,
            height:360,
            scene: gameScene,
            physics:{
                default: 'arcade',
                arcade:{
                    gravity:{y: 0},
                    debug:false
                }
            }
        }
        let game=new Phaser.Game(config);