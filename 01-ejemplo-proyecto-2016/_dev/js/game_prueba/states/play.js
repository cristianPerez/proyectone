var Concentrese = Concentrese || {};
Concentrese.states = Concentrese.states || {};

Concentrese.states.Play = (function(window, Phaser, Prefabs) {
    'use strict';
    var p;

    function Play() {
        this.background;
        this.player;
        this.obstacles;
        this.level = 2;
        this.time;
        this.t = Setup.timeLimit;
        this.numGame = 1;
    };

    p = Play.prototype;

    p.preload = function(){

    };

    p.clock = function() {

        $('#gameTime').text(this.t);

        if(this.t > 0) {
            this.t -= 1;
            this.game.time.events.add(Phaser.Timer.SECOND, this.clock, this);
        } else {
            this.endTime();
        }
    }

    p.create = function(){
        game.global.lives = 3;
        this.level = 2;
        this.game.world.setBounds(-20, -20, this.game.width + 20, game.height + 20);
        this.background = new Prefabs.Background(this.game);
        this.background.create();
        this.player = new Prefabs.Player(this.game, Setup.SPEED_PLAYER);
        this.player.create();
        this.obstacles = new Prefabs.Obstacles(this.game, this.player);
        this.obstacles.create();
        this.ui = new Prefabs.UI(this.game, this.player);
        this.ui.create();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.clock();
    };

    p.update = function(){
        
        this.player.update();
        this.game.physics.arcade.overlap(this.player.sprite, this.obstacles.group, this.player.onHit, null, this.player);
        this.ui.update();
        this.checkPulse();

    };

    p.checkPulse = function() {
        if (this.player.isDead) {
            this.defeat();
        }
    };

    p.defeat = function() {
        this.hasLost = true;
        this.player.sprite.kill();
        this.player.canMove = false;
        this.player.speed = 0;
        this.game.global.score = Math.ceil(this.ui.distanceCounter);
        this.game.state.start('gameOver');
    };

     p.endTime = function() {

        console.log("terminó el juego "+ game.global.gameLevel);
        

        // if(game.global.gameLevel == 4) {
        //     game.global.gameLevel = 0;
        // } else {
            game.global.gameLevel += 1;
            this.game.state.start('play2');
        // }
        // switch (game.global.gameLevel) {

        //     case 0: this.game.state.start('play2');
        //             game.global.gameLevel += 1;
        //             break;
        //     case 1: this.game.state.start('play');
        //             game.global.gameLevel += 1;
        //             break;
        //     case 2: this.game.state.start('play2');
        //             game.global.gameLevel = 0;
        //             break;
        // }


        // console.log('lose2');
        // game.global.youLose = false;
        // this.game.state.start('preload');
        this.t = Setup.timeLimit;
        
        // currentLevel = 1;
        // game.state.start('gameOver');
        // ref.LbPerdiste.open();
        // $('#gameDiv').css('opacity', '0');
        // $('#sectionGame').hide();
        // $('.mainWrapper').fadeIn();
        // $('body').css('background-color', '#712C19');
        // guardarLaPartida();
        
    }

    return Play;
})(window, Phaser, Prefabs);