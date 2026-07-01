/* global monogatari */

// Persistent Storage Variable
monogatari.storage ({
	mc: {
		name: 'Jimmy',
		unlock_good: true,
		has_flowers: false,
		has_coffin: false,
		has_cake: false,

	},
	story: {					// update with ... or i'll kill your family
		helped_baker: false,	// baker good ending. if false, all helped variables must be false
		helped_florist: false,	// if false, coffin must be false
		helped_coffin: false,

		good_ending: false, 
		bad_ending: false,
		neutral_ending: false,

		coffin_wake: false,
		florist_wake: false,
		baker_wake: false
	}
});