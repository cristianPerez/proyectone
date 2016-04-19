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
        this.ui = new Prefabs.UI(this.game);
        this.ui.create();
        this.t = Setup.timeLimit;
        this.clock();
        // this.togglePause();
    };


    p.update = function() {
        this.movingObjects.update();
    };

    p.endTime = function() {
        this.game.state.start('thisGameOver');
        this.t = Setup.timeLimit;
    }

    return Play;
})(window, Phaser, Prefabs);