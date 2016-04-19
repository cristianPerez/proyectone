var Arrastrar = Arrastrar || {};
Arrastrar.states = Arrastrar.states || {};

Arrastrar.states.GameOverSalir = (function(window, Phaser, Prefabs) {
    'use strict';
    var p;

    function GameOverSalir() {};

    p = GameOverSalir.prototype;

    p.preload = function(){};
    p.create = function(){
    	$('#gameDiv').hide();
        $('.mainWrapper').fadeIn();
        // console.log("saliste del juego");
        ref.lbEndGame.open();
    };
    p.update = function(){};

    return GameOverSalir;
})(window, Phaser, Prefabs);