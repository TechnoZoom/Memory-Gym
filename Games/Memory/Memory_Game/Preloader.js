
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		
		this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
		this.bck.anchor.setTo(0.5,0.5);
		this.bck.scale.setTo(0.5,0.5);
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0,0.5);
		this.preloadBar.scale.setTo(0.5,1);
		this.preloadBar.x = this.world.centerX - this.preloadBar.width/2;
		
		
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('title', 'assets/title.png');
        this.load.image('sweettext', 'assets/sweet.png');
        this.load.image('awesometext', 'assets/awesome.png');
        this.load.image('greattext', 'assets/great.png');
        
		this.load.atlas('spriteset', 'assets/spritesheet2.png', 'assets/spritesheet2.json');
		this.load.spritesheet('play','assets/pl_2.png',104,95);
		this.load.spritesheet('back','assets/ret.png',190,94.10);
		this.load.spritesheet('musicbutton','assets/prog.png',400,128);
		this.load.bitmapFont('font', 'assets/fnt2_0.png', 'assets/fnt2.fnt');
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
