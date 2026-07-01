monogatari.script({
    florist_start: [
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
                    Do: 'jump florist_1_positive',  // determine between good and neutral
                },
                No : {
                    Text : 'Finish this quickly.',      // illusion of free will
                    Do: 'jump florist_bad_choices',
                },
            },
        },
    ],

    florist_1_positive: [
       
        {
            Choice : {
                Yes : {
                    Text : 'I think I want to try the Turmeric and Mango actually.',
                    Do: 'jump florist_2_positive',  // kindness
                },
                No : {
                    Text : 'You\'re right. That  is kinda weird.',      // kys
                    Do: 'jump florist_bad_choices',
                },
            },
        },        
    ],

    florist_2_positive: [
        {
            Choice : {
                Yes : {
                    Text : 'I want your speciality.',
                    Do: 'jump florist_3_positive',  // kindness
                },
                No : {
                    Text : 'Sorry, it is my last paycheck...',      // kys
                    Do: 'jump florist_bad_choices',
                },
            },
        }
    ],

    florist_3_positive: [
        {
            Choice : {
                Yes : {
                    Text : 'Yeah, sure. Thank you.',
                    Do: 'jump florist_best',  // kindness
                },
                No : {
                    Text : 'Nah, I\'m not feeling it.',      // kys
                    Do: 'jump florist_neutral',
                },
            },
        }
    ],
    florist_bad_choices: [            // no cake no cg, auto fail
        'jump coffin_start',
    ],

    florist_neutral: [                // get cake, no cg
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

        'jump coffin_start',
    ],

    florist_best: [                   // the cg
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


        'jump coffin_start'
    ]
});
