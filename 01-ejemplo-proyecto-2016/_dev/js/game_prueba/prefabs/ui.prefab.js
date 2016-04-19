var Prefabs = Prefabs || {};

Prefabs.UI = (function(window, Phaser, Prefabs, $, Setup) {

    'use strict';
    var p;

    function UI(_game, _player) {
        this.game = game;
        this.player = _player;
    }

    p = UI.prototype = Object.create(Phaser.Group.prototype);
    p.constructor = UI;

    p.create = function() {
        this.distanceCounter = 0;
        this.logoNol = game.add.image(416, 700, 'logo_nol');
        // this.bkgPuntos = game.add.image(376, 15, 'bkg_puntos');
        // this.distanceTraveled = this.game.add.text(435, 33, this.distanceCounter + 'm', {
        //     fontSize: 24,
        //     fill: '#ffffff'
        // });
        // this.emptyHearts = this.game.add.tileSprite(30, 30, 96, 27, 'empty_heart');
        // this.hearts = this.game.add.tileSprite(30, 30, 96, 27, 'full_heart');
        // this.defeat = this.game.add.image(this.game.world.centerX + 20, this.game.world.centerY - 100, 'defeat');
        // this.defeat.alpha = 0;
        // this.defeat.anchor.setTo(0.5, 0.5);
    };

    p.update = function(_player) {

        this.distanceCounter += this.player.speed / 200;
        // this.distanceTraveled.text = Math.ceil(this.distanceCounter) + 'm';
        // this.hearts.width = this.player.lives * 32;
        // this.emptyHearts.width = game.global.lives * 32;
        
    }

    return UI;
})(window, Phaser, Prefabs, jQuery, Setup);
