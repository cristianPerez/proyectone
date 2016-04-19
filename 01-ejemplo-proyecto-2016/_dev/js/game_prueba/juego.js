var game;

var gameSetup = [
	{
		animacion: false,
		player: 'playerGame1',
		background: 'backgroundGame1',
		obstacle1: 'obstaculoGame11',
		obstacle2: 'obstaculoGame12',
		obstacle3: 'obstaculoGame13',
		particle: 'hit_particleGame1',
		heightPlayer: 231

	},
	{
		animacion: true,
		player: 'playerGame3',
		player2: 'playerGame32',
		player3: 'playerGame33',
		player4: 'playerGame34',
		player5: 'playerGame35',
		player6: 'playerGame36',
		background: 'backgroundGame3',
		obstacle1: 'obstaculoGame31',
		obstacle2: 'obstaculoGame32',
		obstacle3: 'obstaculoGame33',
		particle: 'hit_particleGame3',
		heightPlayer: 386
	}
]

function initGame() {

	game = new Phaser.Game(Setup.GAME_WIDTH, Setup.GAME_HEIGHT, Phaser.AUTO, 'gameDivCont2');

	game.global = {
		gameLevel: 0,
		mute: false,
	    score: 0,
	    index: 1,
	    music: false,
	    power: false
	}

    game.state.add('boot', Game.states.Boot);
    game.state.add('preload', Concentrese.states.Preload);
    game.state.add('play', Concentrese.states.Play);
    game.state.add('gameOver', Concentrese.states.GameOver);

    game.state.start('boot');
}

function init() {
	initGame();
};

window.onload = init;   
