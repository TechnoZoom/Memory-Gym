
CandyMemoryRush.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

CandyMemoryRush.Preloader.prototype = {

	preload: function () {

		
		this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
		this.bck.anchor.setTo(0.5,0.5);
		this.bck.scale.setTo(0.5,0.5);
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0,0.5);
		this.preloadBar.scale.setTo(0.5,1);
		this.preloadBar.x = this.world.centerX - this.preloadBar.width/2;
		
		
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('title', 'assets/title2.png');
		this.load.image('insmain', 'assets/instma.png');
		
		this.load.image('insdetail', 'assets/insdetail2.png');
        this.load.image('sweettext', 'assets/sweet.png');
        this.load.image('awesometext', 'assets/awesome.png');
        this.load.image('greattext', 'assets/great.png');
		this.load.image('gameover', 'assets/gameover.png');
		
		
        
		this.load.atlas('spriteset', 'assets/spritesheet2.png', 'assets/spritesheet2.json');
		this.load.spritesheet('play','assets/playcand.png',210,133);
		this.load.spritesheet('back','assets/ret.png',190,94.10);
	    this.load.spritesheet('retry','assets/retry.png',80,136);

		this.load.spritesheet('insbutton','assets/instructions.png',400,83);
		this.load.bitmapFont('font', 'assets/fnt2_0.png', 'assets/fnt2.fnt');
		this.load.bitmapFont('font2', 'assets/font.png', 'assets/font.fnt');
		this.load.audio('music', ['assets/music.mp3','assets/music.ogg','assets/music.wav','assets/music.m4a']);
		this.load.audio('blip', ['assets/blip.mp3','assets/blip.ogg','assets/blip.wav','assets/blip.m4a']);
        this.load.audio('sweet', 'assets/sweet.mp3');
        this.load.audio('great', 'assets/great.mp3');
        this.load.audio('awesome', 'assets/awesome.mp3');


	},

	create: function () {

		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		
		
		if (this.cache.isSoundDecoded('music') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
