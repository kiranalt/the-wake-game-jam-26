monogatari.script({
    florist_start: [
        'It\'s my second day trying to prepare for my wake.',
        'Honestly, I didn\'t realise what a pain selecting my flowers would be.',
        'The language of flowers isn\'t something I specifically have had to worry about. Sure, there are some Reapers who worry about funerary wreaths.',
        'They might be the ones in charge of making sure that the messages are carried to the dead after death. It\'s important. Impactful.',
        'WAKE values them. It\'s a tough job. Not every message is wrapped in kindness- more often than not the intentions are coated in a venomous poison.',
        'To be dead and find out there isn\'t a single soul that was there for you...',

        '...',

        'I hope that\'s not how it feels when I retire. Bad messages...',
        'I\'ve never cared before. I guess I always just assumed nobody would remember me.',
        'It\'s a huge pain now though... Needing a minimum of two people at my WAKE. And what kind of flowers can I even get?',
        'Is there a flower for being an employee?',
        'I don\'t do anything that could-',
        '... Ugh. I don\'t do anything point blank period.',
        'Well. I suppose it doesn\'t matter.',
        'This is all just a formality.',
        'Something I need to do to retire.',
        'a Are you actually looking to buy those flowers, or just staring?',
        'j Looking to buy. Why?',
        'a Who are they? For a special person? We just about have some of our post valentines stock- all wilted varieties.',
        'a Perfect for any situation. Bound to get their attention, and if you break up...',
        'a Well. They can be representative.',
        'j ...Thanks. I\'m not too interested in those things though.',
        'a Fair enough. You just seemed a little deep in thought. Not sad enough for funeral flowers but-',
        'j They are funeral flowers actually.',
        'a Ah.',
        'a My condolences.',
        'a If I may ask... who for?',
        'j Me.',
        'a Oh... are you okay? I mean, the Underworld has a lot of people who can hel-',
        'j No, no. I\'m retiring.',
        'a Ah I see then. You\'re a Reaper?',
        'a I work here, I can help you pick some out if you don\'t have any in mind yet. My name is Arlo by the way.',
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
        'j Nice to meet you, I\'m Jimmy.',
        'j Honestly... I haven\'t had anything specific in mind.',
        'j I don\'t really care much, as long as I fulfill the requirement to retire.',
        'a Oh I see. You just wanna get outta there huh?',
        'j Well... if thats your observation.',
        'a So, do you think you\'re someone your coworkers will miss?',
        'j ...',
        'a Yikes... did I hit a sour spot? Based on that-',
        {
            Choice : {
                Yes : {
                    Text : 'That was kinda rude.',
                    Do: 'jump florist_1_positive',  // determine between good and neutral
                },
                No : {
                    Text : 'No!',      // illusion of free will
                    Do: 'jump florist_bad_choices',
                },
            },
        },
    ],

    florist_1_positive: [
        'a Oh, was it? My bad.',
        'j Yeah, it was.',
        'j I\'m fine with your recommendation but, your phrasing doesn\'t make me feel too inclined to buy anything now.',
        'a Well. I find that people are kind of like plant\'s. They look different, they grow different, there\'s a lot you can tell by their behaviours.',
        'a I for one, can tell that you have no idea what other people think of you.',
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
