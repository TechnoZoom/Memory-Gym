
UltimateAttention.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

UltimateAttention.Preloader.prototype = {

	preload: function () {

		
		this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
		this.bck.anchor.setTo(0.5,0.5);
		this.bck.scale.setTo(0.5,0.5);
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0,0.5);
		this.preloadBar.scale.setTo(0.5,1);
		this.preloadBar.x = this.world.centerX - this.preloadBar.width/2;
		
		
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('title', 'assets/title3.png');
		this.load.image('life', 'assets/loveheart.png');
		this.load.image('insmain', 'assets/instma.png');
		
		this.load.image('insdetail', 'assets/ins.png');
        this.load.image('sweettext', 'assets/sweet.png');
        this.load.image('awesometext', 'assets/awesome.png');
        this.load.image('greattext', 'assets/great.png');
		this.load.image('gameover', 'assets/gameover.png');
		
		
        
		this.load.atlas('spriteset', 'assets/spritesheet2.png', 'assets/spritesheet2.json');
		this.load.spritesheet('play','assets/playorg.png',173,174);
		this.load.spritesheet('check','assets/Untitled-1.png',373,97);
		this.load.spritesheet('back','assets/ret.png',190,94.10);
	    this.load.spritesheet('retry','assets/retry.png',80,136);
		this.load.spritesheet('begin','assets/begin.png',600,172);
		
		this.load.spritesheet('wrong', 'assets/wrong.png', 163, 155,4);
		this.load.spritesheet('tick', 'assets/tick.png', 196, 186,3);

		this.load.spritesheet('insbutton','assets/instructions.png',400,83);
		this.load.bitmapFont('font', 'assets/fnt2_0.png', 'assets/fnt2.fnt');
		this.load.bitmapFont('font2', 'assets/font.png', 'assets/font.fnt');
		this.load.bitmapFont('font3', 'assets/font3.png', 'assets/font3.fnt');
		this.load.bitmapFont('font4', 'assets/font4.png', 'assets/font4.fnt');
		this.load.audio('music', ['assets/music.mp3','assets/music.ogg','assets/music.wav','assets/music.m4a']);
		this.load.audio('blip', ['assets/blip.mp3','assets/blip.ogg','assets/blip.wav','assets/blip.m4a']);
        this.load.audio('right', 'assets/rightsound.mp3');
        this.load.audio('wro', 'assets/datswrong.mp3');
		this.load.audio('over', 'assets/over.mp3');
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
