var Arrastrar = Arrastrar || {};
Arrastrar.states = Arrastrar.states || {};

Arrastrar.states.GameOver = (function(window, Phaser, Prefabs) {
    'use strict';
    var p;

    function GameOver() {};

    p = GameOver.prototype;

    p.preload = function(){};
    p.create = function(){
    	$('#gameDiv').hide();
        $('.mainWrapper').fadeIn();
    	ref.lbEndGame.open();
    };
    p.update = function(){};

    return GameOver;
})(window, Phaser, Prefabs);