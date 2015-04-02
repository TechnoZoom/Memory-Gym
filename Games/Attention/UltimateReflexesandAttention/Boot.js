var UltimateAttention = {};
var score = 0;
var clicks = 0;
var playmusic = true;
UltimateAttention.Boot = function (game) {

};

UltimateAttention.Boot.prototype = {

    preload: function () {

        this.load.image('preloaderBackground', 'assets/preloadbck.png');
        this.load.image('preloaderBar', 'assets/preloadbar.png');
		document.getElementById("inputarea").style.visibility = "hidden";

    },

    create: function () {

        if (this.game.device.desktop)
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.pageAlignHorizontally = true;
        }
        else
        {
           
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 150;
            this.scale.minHeight = 250;
            this.scale.maxWidth = 650;
            this.scale.maxHeight = 1000;
            this.scale.forceLandscape = false;
            this.scale.pageAlignHorizontally = true;
        }

        this.scale.setScreenSize(true);
		
        this.state.start('Preloader');

    }

};
