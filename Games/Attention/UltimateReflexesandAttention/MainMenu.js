
UltimateAttention.MainMenu = function (game) {

	
	this.playButton = null;

};

UltimateAttention.MainMenu.prototype = {

	create: function () {

	
        this.stage.backgroundColor = "#FFFFFF";
		score = 0;
		clicks = 0;
		
		document.getElementById("inputarea").style.visibility = "hidden";

		this.titleimage = this.add.sprite(this.world.centerX,170, 'title');
		this.titleimage.anchor.setTo(0.5,0.5);
		this.titleimage.scale.setTo(0.5,0.5);

		this.playButton = this.add.button(this.world.centerX, this.world.height - 150, 'play', this.startGame, this, 1,0,2);
		this.playButton.scale.setTo(0.5,0.5);
		this.playButton.anchor.setTo(0.5,0.5);

		this.insbutton = this.add.button(this.world.centerX, this.world.height - 30, 'insbutton', this.dispinst, this, 1,0,2);
        this.insbutton.scale.setTo(0.5,0.5);
        this.insbutton.anchor.setTo(0.5,1);

		this.frameNo = 1;
		
	},

	
	
	update: function () {

		

	},
	
	
	dispinst: function (pointer) {

		this.music.stop();

		this.state.start('Instructions');
		
		
		
		

	},

	startGame: function (pointer) {

		

		this.state.start('Game');

	}

};

UltimateAttention.Instructions = function (game) {


};

UltimateAttention.Instructions.prototype = {

	create: function () {

		this.music = this.add.audio('music',1,true);
		if(playmusic==true){
			this.music.play('',0,1,true);
		}
		
		
		this.insmain = this.add.sprite(this.world.centerX,40, 'insmain');
		this.insmain.anchor.setTo(0.5,0.5);
		this.insmain.scale.setTo(0.5,0.5);
		
		this.insdetail = this.add.sprite(this.world.centerX,260, 'insdetail');
		this.insdetail.anchor.setTo(0.5,0.5);
		this.insdetail.scale.setTo(0.43,0.43);

		

		this.backButton = this.add.button(120, this.world.height - 115, 'back', this.startGame, this, 1,0,2);
        this.backButton.scale.setTo(0.7,0.7);
        this.backButton.anchor.setTo(0,1);

      
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

    }
}

