/* global monogatari */

// Persistent Storage Variable
monogatari.storage ({
	player: {
		name: ''

	},
	story: {				// update with ... or i'll kill your family
		karma: 1, 				// determines whether you get a good, bad, or neutral ending
		helped_baker: false,	// baker good ending. if false, all helped variables must be false
		helped_florist: false,	// if false, coffin must be false
		helped_coffin: false
	}
});