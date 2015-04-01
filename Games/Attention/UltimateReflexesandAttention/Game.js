 
UltimateAttention.Game = function (game) {

};

UltimateAttention.Game.prototype = {

	create: function () {
        
		this.animals = ["turtle","tiger","snake","lion","dog","elephant","rabbit","bird","hen","cat","bear","fish","rat"];
        this.animalsshownindex = [];
		this.animalsshown = [];
		this.animalindex = 0;
		this.score = 0;
		this.stage.backgroundColor = "#FFFFF0";
		/*this.backButton = this.add.button(10, this.world.height - 55, 'back', this.startit, this, 1,0,2);
		this.backButton.scale.setTo(0.4,0.4);*/
		
		this.checkButton = this.add.button(90, this.world.height - 220, 'check', this.checkit, this, 1,0,2);
		this.checkButton.scale.setTo(0.4,0.4);
		this.checkButton.alpha = 0.0;
		
		this.backButton = this.add.button(120, this.world.height - 85, 'back', this.ret, this, 1,0,2);
        this.backButton.scale.setTo(0.7,0.7);
        this.backButton.anchor.setTo(0,1);
		
		this.begin = this.add.button(40, this.world.height - 380, 'begin', this.startit, this, 1,0,2);
		this.begin.scale.setTo(0.5,0.5);
		
        
		this.timecount = 0;
		this.hasbroken = false;
		this.animalcount =  0;
		this.animal = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
		
		this.quetext = this.add.bitmapText(5 ,70,'font3','' ,35);
		this.scoretext = this.add.bitmapText(200 ,25,'font4','Score : O' ,35);
		//this.quetext.scale.setTo(0.7,0.7);
		 
		
		//this.timerr = this.time.events.loop(Phaser.Timer.SECOND , this.callbackloop, this);
		//this.choosinganimals();
		
		/*this.timerr = this.time.create(true);
        this.timerr.add(Phaser.Timer.SECOND, this.callbackloop, this);*/
		
	},
	
	
	ret: function(pointer) {
		
		  this.state.start('MainMenu');
		
	},

	startit: function() {
	
	//this.timerr.start();
		
		this.animalcount = 0;
		
		document.getElementById("inputarea").style.visibility = "hidden";
		this.checkButton.alpha = 0.0;
		this.begin.alpha = 0.0;
		this.backButton.alpha = 0.0;
		
		this.quetext.setText('');

		this.timerr = this.time.events.loop(Phaser.Timer.SECOND , this.callbackloop, this);
},

	
	checkit: function() {
	
	//this.timerr.start();
		
		if(document.getElementById("inputarea").value == this.animalcount) {
			
			this.score = this.score + this.lnth;
			this.scoretext.setText('Score : ' + this.score.toString());
		}
		
		this.checkButton.alpha = 0.0;
	    this.begin.alpha = 1.0;	
		this.backButton.alpha = 1.0;
		this.quetext.setText('');
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
	
	this.animalsshown[this.animalindex] = this.add.sprite(this.world.centerX-120+90*j,this.world.centerY-190+80*i,'spriteset');
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
