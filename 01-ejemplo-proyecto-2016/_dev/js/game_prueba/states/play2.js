var Arrastrar = Arrastrar || {};
Arrastrar.states = Arrastrar.states || {};


Arrastrar.states.Play = (function(window, Phaser, Prefabs) {
    'use strict';
    var p;
    

    function Play() {
        this.level = 2;
        this.time;
        this.t = Setup.timeLimit;
        this.numGame = 1;
    };

    p = Play.prototype;

    p.clock = function() {

        $('#gameTime').text(this.t);
        if(this.t > 0) {
            this.t -= 1;
            this.game.time.events.add(Phaser.Timer.SECOND, this.clock, this);
        } else {
            // this.numGame += 1;
            // console.log(this.numGame);
            this.endTime();
        }
    };

    p.create = function() {

        this.movingObjects = new Prefabs.MovingObjects(this.game);
        this.movingObjects.create();
        this.clock();
    };


    p.update = function() {
        this.movingObjects.update();
    };

    p.endTime = function() {

        console.log("terminó el juego "+ game.global.gameLevel);
            
        this.game.state.start('play');

        if(game.global.gameLevel == 3) {
            game.global.gameLevel = 0;
            // guardarLaPartida();
            this.game.state.start('gameOver2');
        }

        game.global.gameLevel += 1;
        this.t = Setup.timeLimit;
        
    }

    return Play;
})(window, Phaser, Prefabs);