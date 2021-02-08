let gameScene= new Phaser.Scene('Game');
var gameOptions = {
 
    
 
    
    slicePrizes: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12"],
 
    
}
gameScene.preload=function(){
    this.load.image('background', 'assets/background_new.png');
    this.load.image('wheel', 'assets/wheel_mod.png');
    this.load.image('pin', 'assets/pin_mod.png');
};   
gameScene.create=function(){
   
    let bg=this.add.sprite(0,0,'background');
    bg.setPosition(640/2,450/2);
    bg.setScale(2.9,2.9);
    
    this.wheel=this.add.sprite(150,180,'wheel',{align:"center"});
    this.wheel.setScale(1.3,1.3);
     this.physics.add.existing(this.wheel);
    this.pin=this.add.sprite(140,60,'pin');
    this.pin.setScale(0.3,0.3);
    this.text = this.add.text(-0.5,340, "Press to Spin the wheel", {
            font: "bold 30px Arial",
            align: "center",
            color: "black"
        });
    this.text_more = this.add.text(80,390, " ", {
            font: "bold 30px Arial",
            align: "center",
            color: "black"
        });
    
    this.canSpin=true;
};
        gameScene.update=function(){
            if (this.input.activePointer.isDown){
            if(this.canSpin){
                this.text.setText("");
            var rounds = Phaser.Math.Between(2, 4);
               
 
            // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
            var degrees = Phaser.Math.Between(0, 360);
                var prize = 12 - 1 - Math.floor(degrees / (360 / 12)); 
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
                    this.text.setText(gameOptions.slicePrizes[prize]+" is what you got");
                    console.log(gameOptions.slicePrizes[prize]);
                    if(gameOptions.slicePrizes[prize]>=1 && gameOptions.slicePrizes[prize]<=6)
                        {
                            this.text_more.setText("Try again");
                        }
                    else{
                        this.text_more.setText("Good");
                    }
 
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
        
  window.onload = function() {      
        let config={
            type:Phaser.AUTO,
            width:640,
            height:450,
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
       window.focus()
    resize();
    window.addEventListener("resize", resize, false);
  }
  function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = 640 / 450;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}