monogatari.script({
    coffin_start: [
        {
            Function: {
                Apply: ()=> {
                    characterReveal("a", "Arlo");
                },
                Revert: ()=> {
                    characterReveal("a", "Florist");
                }
            }
        },
       
        {
            Choice : {
                Yes : {
                    Text : 'Take it slow.',
                    Do: 'jump coffin_1_positive',  // determine between good and neutral
                },
                No : {
                    Text : 'Finish this quickly.',      // illusion of free will
                    Do: 'jump coffin_bad_choices',
                },
            },
        },
    ],

    coffin_1_positive: [
       
        {
            Choice : {
                Yes : {
                    Text : 'I think I want to try the Turmeric and Mango actually.',
                    Do: 'jump coffin_2_positive',  // kindness
                },
                No : {
                    Text : 'You\'re right. That  is kinda weird.',      // kys
                    Do: 'jump coffin_bad_choices',
                },
            },
        },        
    ],

    coffin_2_positive: [
        {
            Choice : {
                Yes : {
                    Text : 'I want your speciality.',
                    Do: 'jump coffin_3_positive',  // kindness
                },
                No : {
                    Text : 'Sorry, it is my last paycheck...',      // kys
                    Do: 'jump coffin_bad_choices',
                },
            },
        }
    ],

    coffin_3_positive: [
        {
            Choice : {
                Yes : {
                    Text : 'Yeah, sure. Thank you.',
                    Do: 'jump coffin_best',  // kindness
                },
                No : {
                    Text : 'Nah, I\'m not feeling it.',      // kys
                    Do: 'jump coffin_neutral',
                },
            },
        }
    ],
    coffin_bad_choices: [            // no cake no cg, auto fail
        'jump ending_start',
    ],

    coffin_neutral: [                // get cake, no cg
        {
            Function:{
                Apply: () => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'has_flowers', true);
                },
                Revert :() => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'has_flowers', false);
                }
            }
        },

        'jump ending_start',
    ],

    coffin_best: [                   // the cg
        {
            Function:{
                Apply: () => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'has_flowers', true);
                },
                Revert :() => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'has_flowers', false);
                }
            }
        },
        {
            Function:{
                Apply: () => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('story', 'helped_florist', true);
                },
                Revert :() => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'helped_florist', false);
                }
            }
        },


        'jump ending_start'
    ]
});
