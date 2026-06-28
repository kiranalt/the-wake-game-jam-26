/* global monogatari */
//import intro from './scenes/intro';

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'j': {
		name: 'Jimmy',
		color: '#a9a162'
	},
	// These names will be updated in the story progression
	'm': {
		name: 'Coffin Maker',
		colour: '#7b76cd'
	},
	'a': {
		name: 'Florist',
		colour: '#76b24c'
	},
	'm': {
		name: 'Baker',
		colour: '#eb930f'
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #5600ac with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'Oh who is you?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'j Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'j Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'j Thats awesome!',
		'j Then you are ready to go ahead and create an amazing Game!',
		'j I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'j You can do it now.',

		{
			'Text': 'Let\'s go!',
			'Do': 'jump intro'
		},

		'show message Help',

		'j Go ahead and create an amazing Game!',
		'j I can’t wait to see what story you’ll tell!',
		
		'end'
	]
});