var Game = Game || {};
Game.states = Game.states || {};

Game.states.Boot = (function(window, Phaser) {
    'use strict'; 
    
    var p; 

    function Boot() {};

    p = Boot.prototype;

    p.preload = function(){
        this.game.load.image('progressBar', 'img/ui/progress_bar.png');
    };

    p.onResize = function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        // this.scale.maxHeight = $('#gameDivCont').height(); 
        // this.scale.maxWidth = $('#gameDivCont').width(); 
        this.scale.maxHeight = window.innerHeight; 
        this.scale.maxWidth = window.innerWidth; 


    };

    p.create = function(){
        this.onResize(); 
        this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
        this.game.state.start('preload'); 
        window.addEventListener('resize', this.onResize.bind(this));
    };

    p.update = function(){};

    return Boot;
})(window, Phaser);