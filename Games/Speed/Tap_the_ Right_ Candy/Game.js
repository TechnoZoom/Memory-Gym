 
CandyMemoryRush.Game = function (game) {

};

CandyMemoryRush.Game.prototype = {

	create: function () {
        
        this.toggle = true;
        this.level = 4;
        this.leveclicks = 0;
		
		this.points = 0;

        this.shapes = [];
		
		if(localStorage.getItem("highscore") === null) {
			localStorage.setItem("highscore",0);
		}
		
		this.compl = ["sweettext","greattext","awesometext" ];
		this.compindex = 0;
		
		this.candies = [];
		this.candyindex = 0;
		
		this.cover = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
		//this.candy = this.cover +1 ;
		
		this.candy = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		
		this.deque_candy = new this.Deque_candy();
		//this.deque_cover = new this.Deque_cover();
		
		//this.deque_cover.pushback(this.cover);
		this.deque_candy.pushback(this.cover);
		this.deque_candy.pushback(this.candy);
		
        this.solution = [];
        this.shapeindex = 0;
        this.matched = 0;

        this.shape1 = null;
        this.shape2 = null;

        this.placeBoxes();

        this.totaltime = 0;
        this.totalclicks = 0;
        
        this.textpadding = 0.5;


        this.music = this.add.audio('music',1,true);
        if(playmusic==true){
            this.music.play('',0,1,true);
        }

        this.blipsound = this.add.audio('blip');
        this.sweetsound = this.add.audio('sweet');
        this.awesomesound = this.add.audio('awesome');
        this.greatsound = this.add.audio('great');
		
		

        this.timetext = this.add.bitmapText(this.world.centerX -5 ,10,'font','S C O R E :   0',30);
		this.timetext.scale.setTo(0.6,0.6);
		
		 this.highscore2 = this.add.bitmapText(5 ,30,'font','H I G H  S C O R E :   ' +localStorage.getItem("highscore") ,30);
		this.highscore2.scale.setTo(0.6,0.6);
        
        this.complement = this.add.sprite(this.world.centerX +75 ,30, 'sweettext');
		this.complement.anchor.setTo(0.5,0.5);
		this.complement.scale.setTo(this.textpadding,this.textpadding);
        this.complement.alpha = 0.0
		
		this.gameover = this.add.sprite(this.world.centerX -100 ,this.world.centerY + 50, 'gameover');
		this.gameover.anchor.setTo(0.5,0.5);
		this.gameover.scale.setTo(this.textpadding,this.textpadding);
        this.gameover.alpha = 0.0
        
        this.timetext.x = this.world.centerX - (this.timetext.textWidth/2 +80);
        this.time.events.loop(Phaser.Timer.SECOND/1.4, this.updateScore, this);

        this.backButton = this.add.button(10, this.world.height - 15, 'back', this.startGame, this, 1,0,2);
        this.backButton.scale.setTo(0.4,0.4);
        this.backButton.anchor.setTo(0,1);
		
        this.retryButton2 = this.add.button(150, this.world.height - 15, 'retry', this.restartGame, this, 1,0,2);
        this.retryButton2.scale.setTo(0.4,0.4);
        this.retryButton2.anchor.setTo(0,1);		

        /*this.progbutton = this.add.button(this.world.width-10, this.world.height - 5, 'progbutton', this.changemusic, this, 1,0,2);
        this.progbutton.scale.setTo(0.4,0.4);
        this.progbutton.anchor.setTo(1,1);*/
	},

    changemusic : function(){
        if(playmusic==true){
            this.music.stop();
            playmusic = false;
        }
        else{
            this.music.play();
            playmusic = true;
        }
    },

    startGame: function (pointer) {

        this.music.stop();

        this.state.start('MainMenu');

    },
	
	restartGame: function (pointer) {

        this.music.stop();

        this.state.start('Game');

    },
	
	              Deque_candy :function() {
                  this.stac=new Array();
                  this.popback=function(){
                  return this.stac.pop();
                          }
                  this.pushback=function(item){
                  this.stac.push(item);
                        }
                 this.popfront=function(){
                 return this.stac.shift();
                          }
                  this.pushfront=function(item){
                  this.stac.unshift(item);
 }
} ,
	
	/*Deque_cover :function() {
                  this.stac=new Array();
                  this.popback=function(){
                  return this.stac.pop();
                          }
                  this.pushback=function(item){
                  this.stac.push(item);
                        }
                 this.popfront=function(){
                 return this.stac.shift();
                          }
                  this.pushfront=function(item){
                  this.stac.unshift(item);
 }
} ,*/
	

    updateScore : function(){
       this.totaltime++;
       // this.timetext.setText(this.totaltime.toString());
		
		/*while(this.deque_cover.stac.indexOf(this.cover) == -1)
		{
		this.cover = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
		}
		
		while(this.deque_candy.stac.indexOf(this.candy) == -1)
		{
		this.candy = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}*/
		
		if(this.totaltime != 1) {
			//this.deque_cover.pushback(this.cover);
		
			this.deque_candy.pushback(this.cover);
			this.deque_candy.pushback(this.candy);
		
			
			if(this.deque_candy.stac.length/2 >=6)
				
			{
				 this.complement.alpha = 0.0
				 this.gameover = this.add.sprite(this.world.centerX -30 ,this.world.centerY -30 , 'gameover');
		         this.gameover.anchor.setTo(0.5,0.5);
		         this.gameover.scale.setTo(0.5,0.5);  
				
				if(parseInt(localStorage.getItem("highscore")) < this.points)
				{
					localStorage.setItem("highscore",this.points);
					this.highscore2.setText('H I G H  S C O R E :   '+ localStorage.getItem("highscore"));
				}
				
				this.blipsound.play();
			
			for(var i=0;i<this.candies.length;i++){
			this.candies[i].no = i+1;
			 this.candies[i].inputEnabled = false;
				
			
       
				
			}
			
		}
		
		}
			
		this.shapes[this.cover].frameName = 'shape' + this.candy + '.png';
		
		this.cover = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
		//this.candy = this.cover +1 ;
		
		this.candy = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		
        //this.timetext.x = this.world.centerX - this.timetext.textWidth/2;
    },

    nextLevel : function(){
        this.leveclicks = 0;
        this.time.events.add(Phaser.Timer.SECOND, function(){
            this.str = (this.level+1)+'x2';
            if(this.level==6){
                score = this.totaltime;
                clicks = this.totalclicks;
                this.music.stop();
                this.state.start('Instructions');
            }
            this.toggle = true;

            this.shapeindex = 0;

            for(var i=0;i<this.shapes.length;i++){
                this.shapes[i].destroy();
            }

            this.shape1 = null;
            this.shape2 = null;

            this.placeBoxes(this.str);

            this.level +=1;
        }, this);
        
    },

	update: function () {


	},
	
	
	clickcandy : function(a)
	{
		if(a.no == this.deque_candy.stac[1]) {
			
			this.points++;
            this.timetext.setText('S C O R E :   '+ this.points.toString());
			this.shapes[this.deque_candy.popfront()].frameName = 'covershape.png';
			this.deque_candy.popfront();
			
			if(this.points%4 == 1)
			{
			
				this.complement.alpha = 0.0 ;
				
			if(this.compindex ==0)
			{
		       this.sweetsound.play(); 
			}
			
			else if(this.compindex ==1)
			{
				this.greatsound.play();
			}
			
			else if(this.compindex == 2)
			{
				this.awesomesound.play();
			}
                            this.complement = this.add.sprite(this.world.centerX +40 ,30, this.compl[this.compindex]);
                            this.complement.anchor.setTo(0.5,0.5);
		                   this.complement.scale.setTo(this.textpadding,this.textpadding);	
				
				
			this.compindex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
			}
		}
		
		else {
			
			 this.complement.alpha = 0.0
			
			this.gameover = this.add.sprite(this.world.centerX -30 ,this.world.centerY -30 , 'gameover');
		         this.gameover.anchor.setTo(0.5,0.5);
		         this.gameover.scale.setTo(0.5,0.5);  
			
			if(parseInt(localStorage.getItem("highscore")) < this.points)
				{
					localStorage.setItem("highscore",this.points);
					this.highscore2.setText('H I G H  S C O R E :   '+ localStorage.getItem("highscore"));
				}
			
			
			
			this.blipsound.play();
			
			for(var i=0;i<this.candies.length;i++){
			this.candies[i].no = i+1;
			this.candies[i].inputEnabled = false
			
			
       
			
		}
		}
	},

    openShape : function(a){
        // console.log(a.no);
        this.blipsound.play();
        this.levelclicks++;
        this.complement.alpha = 0.0 ;
        //this.sweetsound.play();
        this.totalclicks++;
        var win = false;
        var out_tween = this.add.tween(a).to({alpha:0}, 100, Phaser.Easing.Sinusoidal.Out, true);
        var in_tween = function(){
            a.frameName = 'shape'+this.solution[a.no]+'.png';
            this.add.tween(a).to({alpha:1}, 10, Phaser.Easing.Sinusoidal.In, true);
            if(this.toggle){
                this.shape1 = a;
                this.toggle = false;
                this.shape1.inputEnabled = false;
            }
            else{
                this.shape2 = a;
                // if(this.shape1==this.shape2){
                //     this.shape1.frameName = 'covershape.png';
                //     this.shape1.inputEnabled = true;
                // }
                // else{
                    if(this.shape1.frameName!=this.shape2.frameName){
                        var temp_tween1 = this.add.tween(this.shape1).to({alpha:0}, 100, Phaser.Easing.Sinusoidal.Out, true);
                        var temp_tween2 = this.add.tween(this.shape2).to({alpha:0}, 100, Phaser.Easing.Sinusoidal.Out, true);
                        temp_tween2.onComplete.add(function(){
                            
                            this.shape1.frameName = 'covershape.png';
                            this.shape2.frameName = 'covershape.png';
                            
                            this.add.tween(this.shape1).to({alpha:1}, 100, Phaser.Easing.Sinusoidal.Out, true);
                            this.add.tween(this.shape2).to({alpha:1}, 100, Phaser.Easing.Sinusoidal.Out, true);
                            this.shape1.inputEnabled = true;
                        },this);
                    }
                    else{
                        win = true;
                        this.matched++;
                        
                        if(this.matched % 3 == 1) {
                         this.sweetsound.play(); 
                         this.complement = this.add.sprite(this.world.centerX +75 ,30, 'sweettext');
                         this.complement.anchor.setTo(0.5,0.5);
                        this.complement.scale.setTo(this.textpadding,this.textpadding);    
                        }
                        
                        else if(this.matched % 3 == 2) {
                            this.greatsound.play(); 
                            this.complement = this.add.sprite(this.world.centerX +75 ,30, 'greattext');
                            this.complement.anchor.setTo(0.5,0.5);
		                   this.complement.scale.setTo(this.textpadding,this.textpadding);
                        }
                        
                        else{
                            this.awesomesound.play();
                            this.complement = this.add.sprite(this.world.centerX +75 ,30, 'awesometext');
                            this.complement.anchor.setTo(0.5,0.5);
		                   this.complement.scale.setTo(this.textpadding,this.textpadding);
                        }
                            
                        this.complement.alpha = 1.0 ;
                        this.shape1.inputEnabled = false;
                        this.shape2.inputEnabled = false;
                        this.solution[this.shape1.no] = -1;
                        this.solution[this.shape2.no] = -1;
                        for(var i=0;i<this.solution.length;i++){
                            if(this.solution[i]!=-1){
                                win = false;
                                break;
                            }
                        }
                        if(win==true){
                            this.nextLevel();
                        }
                    }
                // }
                this.toggle = true;
            }

        }
        out_tween.onComplete.add(in_tween,this);
        
    },

    placeBoxes : function(){
        this.shapes.length = 0;
        this.shapeindex = 0;
        this.solution.length = 0;

      
            for(var i=0;i<2;i++){
                                for(var j=0;j<3;j++){
                                    this.shapes[this.shapeindex] = this.add.sprite(this.world.centerX-120+90*j,this.world.centerY-190+80*i,'spriteset');
                                    this.shapes[this.shapeindex].frameName = 'covershape.png';
                                    this.shapes[this.shapeindex].anchor.setTo(0.5,0.5);
									this.shapes[this.shapeindex].scale.setTo(0.7,0.7);
                                    this.shapeindex++;
                                }
                            }
				
				
				           for(var i=0;i<2;i++){
                                for(var j=0;j<3;j++){
                                    this.candies[this.candyindex] = this.add.sprite(this.world.centerX-120+90*j,this.world.centerY - (-70)+80*i,'spriteset');
                                    this.candies[this.candyindex].frameName = 'shape' + (this.candyindex+1) + '.png';
								
                                    this.candies[this.candyindex].anchor.setTo(0.5,0.5);
									this.candies[this.candyindex].scale.setTo(0.7,0.7);
                                    this.candyindex++;
                                }
                            }
				
				
				
          
		for(var i=0;i<this.candies.length;i++){
			this.candies[i].no = i+1;
			 this.candies[i].inputEnabled = true;
            this.candies[i].events.onInputDown.add(this.clickcandy, this);
			
		}
		
		
		for(var i=0;i<this.candies.length;i++){
            this.solution[i] = i+1;
        }
		
    }
};
