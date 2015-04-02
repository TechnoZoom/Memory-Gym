 
UltimateAttention.Game = function (game) {

};

UltimateAttention.Game.prototype = {

	create: function () {
        
		this.animals = ["turtle","tiger","snake","lion","dog","elephant","rabbit","bird","hen","cat","bear","fish","rat"];
        this.animalsshownindex = [];
		this.animalsshown = [];
		this.animalindex = 0;
		this.score = 0;
		this.wrnganscount = 0;
		this.stage.backgroundColor = "#FFFFF0";
		
		this.wrong = this.add.sprite(100, this.world.height - 530, 'wrong');
		this.wrong.scale.setTo(0.8,0.8);
		this.wrong.animations.add('an');
		this.wrong.alpha = 0.0;
		
		this.right = this.add.audio('right');
		this.wro = this.add.audio('wro');
		this.over = this.add.audio('over');
		
		
		if(localStorage.getItem('highscore') === null) {
		   localStorage.setItem('highscore',0);
		   }
		
		this.tick = this.add.sprite(100, this.world.height - 530, 'tick');
		this.tick.scale.setTo(0.8,0.8);
		this.tick.animations.add('an');
		this.tick.alpha = 0.0;
		//this.tick.animations.play('an', 10, true);
		
		/*this.backButton = this.add.button(10, this.world.height - 55, 'back', this.startit, this, 1,0,2);
		this.backButton.scale.setTo(0.4,0.4);*/
		
		this.checkButton = this.add.button(90, this.world.height - 205, 'check', this.checkit, this, 1,0,2);
		this.checkButton.scale.setTo(0.4,0.4);
		this.checkButton.alpha = 0.0;
		
		this.life1 = this.add.sprite(90,22, 'life');
		this.life1.anchor.setTo(0.5,0.5);
		this.life1.scale.setTo(0.09,0.09);
		this.life1.alpha = 1.0;
		
		this.life2 = this.add.sprite(56,22, 'life');
		this.life2.anchor.setTo(0.5,0.5);
		this.life2.scale.setTo(0.09,0.09);
		this.life2.alpha = 1.0;
		
		this.life3 = this.add.sprite(22,22, 'life');
		this.life3.anchor.setTo(0.5,0.5);
		this.life3.scale.setTo(0.09,0.09);
		this.life3.alpha = 1.0;
		
		this.lives = [this.life1, this.life2, this.life3];
		
		this.backButton = this.add.button(120, this.world.height - 85, 'back', this.ret, this, 1,0,2);
        this.backButton.scale.setTo(0.7,0.7);
        this.backButton.anchor.setTo(0,1);
		
		this.retryButton = this.add.button(150, this.world.height - 210, 'retry', this.replay, this, 1,0,2);
        this.retryButton.scale.setTo(0.7,0.7);
        this.retryButton.anchor.setTo(0,1);
		this.retryButton.alpha = 0.0;
		
		this.begin = this.add.button(40, this.world.height - 400, 'begin', this.startit, this, 1,0,2);
		this.begin.scale.setTo(0.5,0.5);
		
        
		this.timecount = 0;
		this.hasbroken = false;
		this.animalcount =  0;
		this.animal = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
		
		this.quetext = this.add.bitmapText(5 ,90,'font3','' ,35);
		this.overnote = this.add.bitmapText(5 ,85,'font4','' ,18);
		this.scoretext = this.add.bitmapText(230 ,46,'font4','Score : 0' ,24);
		this.highscoretext = this.add.bitmapText(5 ,46,'font4','High Score : ' + localStorage.getItem('highscore') ,24);
		//this.quetext.scale.setTo(0.7,0.7);
		 
		
		//this.timerr = this.time.events.loop(Phaser.Timer.SECOND , this.callbackloop, this);
		//this.choosinganimals();
		
		/*this.timerr = this.time.create(true);
        this.timerr.add(Phaser.Timer.SECOND, this.callbackloop, this);*/
		
	},
	
	
	replay: function(pointer) {
		
		
		if(this.retryButton.alpha == 0.0) {
			
		return;	
		}
		
		  this.state.start('Game');
		
	},
	
	ret: function(pointer) {
		
		if(this.backButton.alpha == 0.0) {
			
		return;	
		}
		
		  this.state.start('MainMenu');
		
	},

	startit: function() {
	
	//this.timerr.start();
		
		if(this.begin.alpha == 0.0) {
			
		return;	
		}
		
		this.animalcount = 0;
		
		this.tick.alpha = 0.0;
		this.wrong.alpha = 0.0;
		
		this.tick.animations.stop('an');
		this.tick.animations.stop('an');
		
		
		document.getElementById("inputarea").style.visibility = "hidden";
		this.checkButton.alpha = 0.0;
		this.begin.alpha = 0.0;
		this.backButton.alpha = 0.0;
		
		this.quetext.setText('');

		this.timerr = this.time.events.loop(Phaser.Timer.SECOND , this.callbackloop, this);
},

	
	checkit: function() {
	
	//this.timerr.start();
		
		if(this.checkButton.alpha == 0.0) {
			
		return;	
		}
		
		
		if(document.getElementById("inputarea").value == this.animalcount) {
			
			this.score = this.score + this.lnth;
			this.scoretext.setText('Score : ' + this.score.toString());
			this.wrnganscount = 0 ;
			this.life3.alpha = 1.0;
			this.life2.alpha = 1.0;
			this.life1.alpha = 1.0;
			
			this.tick.alpha = 1.0;
			this.tick.animations.play('an', 10, true);
			
			this.right.play();
			
		}
		
		else {
			
			
			this.wrnganscount++;
			this.lives[this.wrnganscount -1].alpha = 0.0;
			this.wrong.alpha = 1.0;
			this.wrong.animations.play('an', 10, true);
			
			this.wro.play();
			
			
			
		}
		
		if(this.wrnganscount ==3) {
			
			this.checkButton.alpha = 0.0;
	        this.begin.alpha = 0.0;	
		    this.backButton.alpha = 1.0;
		    this.quetext.setText('\n         GAME OVER ');
			this.overnote.setText('\n\n\n\nYou answered incorrectly 3 times consecutively');
			this.retryButton.alpha = 1.0;
			
			this.wrong.alpha = 0.0;
		    this.wrong.animations.stop('an');
			
			if(parseInt(localStorage.getItem('highscore')) < this.score) {
				
				localStorage.setItem('highscore',this.score);
				
				this.highscoretext.setText('High Score : ' + localStorage.getItem('highscore'));
			}
			
			this.over.play();
		}
		
		else {
		this.checkButton.alpha = 0.0;
	    this.begin.alpha = 1.0;	
		this.backButton.alpha = 1.0;
		this.quetext.setText('');
		
		}
		
		document.getElementById("inputarea").style.visibility = "hidden";
},
	
callbackloop: function() {
	
	if(this.timecount == 0) {
		
		this.choosinganimals();
	}
	
	this.timecount++;
	
	if(this.timecount == 3) {
		
		for(var i=0;i< this.animalsshown.length;i++) {
		
		this.animalsshown[i].destroy(true);
	      }
		
	this.timecount = 0;
	//this.timerr.stop();	
		
	document.getElementById("inputarea").style.visibility = "visible";
	this.checkButton.alpha = 1.0;
	this.begin.alpha = 0.0;	
	document.getElementById("inputarea").value = '';	
	this.quetext.setText('How many times did \n' + this.animals[this.animal] + ' appear ?');	
	
	this.game.time.removeAll();	
	}
	
	
},
    
choosinganimals: function() {
	
    //this.animal = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
	this.hasbroken = false;
	this.animalindex = 0;
    
	this.lnth = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
	
	for(var i=0;i<this.lnth;i++) {
		this.animalsshownindex[i] = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
		}
		
		this.animal = this.animalsshownindex[Math.floor(Math.random() * ((this.lnth -1) - 0 + 1)) + 0];
		
		for(var i=0;i<this.lnth;i++) {
		if(this.animalsshownindex[i] == this.animal) {
			this.animalcount++;
		}
		
	}
	
	for(var i=0;i< this.animalsshown.length;i++) {
		
		this.animalsshown[i].destroy(true);
	}
	
	this.showinganimals();
	
},
	
	update: function () {


	},
   
showinganimals: function() {
	
	
	for(var i = 0;i< 7;i++) {
		
		if(this.hasbroken) {
			break;
		}
		
		for(var j =0; j< 4;j++) {
	
	this.animalsshown[this.animalindex] = this.add.sprite(this.world.centerX-120+90*j,this.world.centerY-170+80*i,'spriteset');
	this.animalsshown[this.animalindex].frameName = 'shape' + (this.animalsshownindex[this.animalindex]+1).toString() +'.png';
	this.animalsshown[this.animalindex].anchor.setTo(0.5,0.5);
	this.animalsshown[this.animalindex].scale.setTo(0.6,0.6);		
	this.animalindex++;
	
	if(this.animalindex >= this.lnth)
	{
		this.hasbroken = true;
		break;
	}
			
		}
		
	}
	
}
     
   
};
