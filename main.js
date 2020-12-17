let gameScene= new Phaser.Scene('Game');
gameScene.preload=function(){
    this.load.image('background', 'assets/background_new.png');
    this.load.image('wheel', 'assets/wheel_mod.png');
    this.load.image('pin', 'assets/pin_mod.png');
};   
gameScene.create=function(){
   
    let bg=this.add.sprite(0,0,'background');
    bg.setPosition(640/2,360/2);
    bg.setScale(2.9,2.9);
    
    this.wheel=this.add.sprite(250,180,'wheel');
    this.wheel.setScale(1,1);
     this.physics.add.existing(this.wheel);
    this.pin=this.add.sprite(260,80,'pin');
    this.pin.setScale(0.3,0.3);
    
    this.canSpin=true;
};
        gameScene.update=function(){
            if (this.input.activePointer.isDown){
            if(this.canSpin){
            var rounds = Phaser.Math.Between(2, 4);
                
 
            // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
            var degrees = Phaser.Math.Between(0, 360);
                this.canSpin = false;
                
                this.tweens.add({
 
                // adding the wheel to tween targets
                targets: [this.wheel],
 
                // angle destination
                angle: 360 * rounds + degrees,
 
                // tween duration
                duration: 3000,
 
                // tween easing
                ease: "Cubic.easeOut",
 
                // callback scope
                callbackScope: this,
 
                // function to be executed once the tween has been completed
                onComplete: function(tween){
 
                    // displaying prize text
//                    this.prizeText.setText(gameOptions.slicePrizes[prize]);
 
                    // player can spin again
                    this.canSpin = true;
                }
            });
//            if (this.input.activePointer.isDown) {
//                
//    this.wheel.rotation += 1;
//}
            }
           
//            if (this.press.onTouchStart)
//    {
//        this.wheel.rotation += 3;
//    }
            }
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