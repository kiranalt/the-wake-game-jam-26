monogatari.script({
    baker_start: [
        'Warmth floods my bones as I step onto Charon Drive. I can feel the gravel crunching under my shoes, comfort wafting through the air.',
        'I can feel the life everywhere- people chattering on their lunch breaks, taking in the crisp winter air. Today is a small respite from the rest of the week',
        'It\'s a rare thing to be able to feel the sun so strongly in the beginning of July. Rain and clouds have been tormenting us for weeks.',
        'And the seasoned smell of garlic bread and the sweetness of pastries wasting through the air... it\'s been how long since I went to a bakery?',
        'There\'s not much comfort in the office, not like this.',
        'j I\'m still not quite used to the desolation. Can you ever really be?',

        'b Hello...? Are you just going to stand outside and talk to yourself? There are customers waiting you know!',
        'j I\'m-',
        'b Come onnnn, I need to get in too.',
        'I step to the side. Huh.',
        'b I\'m Quinn! You booked a cake consultation right?',
        {
            Function: {
                Apply: ()=> {
                    characterReveal("b", "Quinn");
                },
                Revert: ()=> {
                    characterReveal("b", "Baker");
                }
            }
        },
        'j I\'m Jimmy. Yeah, how did you know?',
        'b It\s kinda obvious to be honest! I think it\'s a very specific kind of person who comes in asking for a wake cake.',
        'j What\'s that supposed to mean? ',
        'b How often do you really think Reapers need to order funeral cakes...?',
        'What about me is automatically screaming Reaper...',
        'j My break isn\'t that long, can we just move on to selecting the cakes?', 
        'b Right! Of Course!',
        'b So our standard selection of flavours is vanilla, chocolate, red velvet - oh but that\'s a bit controversial for a wake-',
        'Is this what I have to go through just to retire? I don\'t have time for this. Every second I spend here theres another name on the Registry of Deaths.',
        'Another thing to work on. Maybe for a baker, slowness comes easy. You can\'t rush the process of waiting for dough to rise, or for your treats to settle.',
        'But I don\'t get that luxury.',
        'Still. I\'m leaving soon...',
        {
            Choice : {
                Yes : {
                    Text : 'Take it slow.',
                    Do: 'jump baker_1_positive',  // determine between good and neutral
                },
                No : {
                    Text : 'Finish this quickly.',      // illusion of free will
                    Do: 'jump baker_bad_choices',
                },
            },
        },
    ],

    baker_1_positive: [
        'j What\'s your favourite flavour?',
        'b My favourite? Hm. Well I really love unique and spiced food, so maybe Turmeric and Mango?',
        'b I guess it\'s not that out there, but you\'ve got to have some open minded co-workers to have turmeric cake at your wake.',
        {
            Choice : {
                Yes : {
                    Text : 'I think I want to try the Turmeric and Mango actually.',
                    Do: 'jump baker_2_positive',  // kindness
                },
                No : {
                    Text : 'You\'re right. That  is kinda weird.',      // kys
                    Do: 'jump baker_bad_choices',
                },
            },
        },        
    ],

    baker_2_positive: [
        'b Really? That\'s a brave choice. I mean there\'s definetly something special about it though.',
        'b It takes a lot of patience to balance the flavours and get them to taste good together. But it\'s so worth it.',
        'b Not a lot of people try it. And they dont necessarily feel like they\'re missing out.',
        'b And that\'s fine!',
        'I\'m not here to yuck anyone\'s yum. But I wish people weren\'t so worried about waste, and they would come to this bakery for our specialities.',
        '...',
        'That wasn\'t mean\'t to be a sales pitch! Get whatever cake you like!',
        {
            Choice : {
                Yes : {
                    Text : 'I want your speciality.',
                    Do: 'jump baker_3_positive',  // kindness
                },
                No : {
                    Text : 'Sorry, it is my last paycheck...',      // kys
                    Do: 'jump baker_bad_choices',
                },
            },
        }
    ],

    baker_3_positive: [
        'b Great! You need it by...?',
        'j Next Friday if it\'s not too much trouble-',
        'b No! Not at all!',
        'j Great, that sounds good.',
        'b You know... If you\'re interested in more unique flavours, I had a friend give me some teabags.',
        'They\'re from when she was alive, it\'s called Kashmiri Chai. I have an extra pack if you want to try it.',
        {
            Choice : {
                Yes : {
                    Text : 'Yeah, sure. Thank you.',
                    Do: 'jump baker_best',  // kindness
                },
                No : {
                    Text : 'Nah, I\'m not feeling it.',      // kys
                    Do: 'jump baker_neutral',
                },
            },
        }
    ],
    baker_bad_choices: [            // no cake no cg, auto fail
        'j I\'ll just get vanilla. Everyone will eat it, it\'s just cake anyways.',
        'b Sure that\'s-',
        'j I have bigger things to worry about than the pastries. My break is almost over and I\'m wasting my time.',
        'b Oh! Okay-',
        'j Just forget it. This is a hassle.',
        'b O-Okay! Interesting reaction to some pastries. Have a nice day.',
        '...',
        'That was rude. I feel bad. But...',
        'Maybe I\'m not made for this.',
        'jump florist_start',
    ],

    baker_neutral: [                // get cake, no cg
        {
            Function:{
                Apply: () => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'has_cake', true);
                },
                Revert :() => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'has_cake', false);
                }
            }
        },
        'j Thank\'s for getting me to try something new. It\'s my last day anyways, so I may as well. ',
        'b No problem! If you want any more cakes or desserts, pop by again!',
        'j ...',
        'j For sure.',
        'She\'s such a sunny presence. I\'ve already tried so many new things today. I may as well invite them to the wake, in case nobody else shows at least.',
        'j Hey, Quinn? If you have time, would you mind popping by my wake?',
        'j We can try the cake together.',
        'b Sure, I can try!',
        'j Thank you!',
        'j Maybe I\'ll see you there. ',
        'j Bye.',
        'jump florist_start',
    ],

    baker_best: [                   // the cg
        {
            Function:{
                Apply: () => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'has_cake', true);
                },
                Revert :() => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'has_cake', false);
                }
            }
        },
        {
            Function:{
                Apply: () => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('story', 'helped_baker', true);
                },
                Revert :() => {
                    const currentKarma = monogatari.storage('story').karma;
                    updateGameValue('mc', 'helped_baker', false);
                }
            }
        },

        'j Thank\'s for getting me to try something new. It\'s my last day anyways, so I may as well. ',
        'b No problem! If you want any more cakes or desserts, pop by again!',
        'And do tell me about the tea! Or... about any tea!',
        'j ...',
        'j For sure.',
        'She\'s such a sunny presence. I\'ve already tried so many new things today. I may as well invite them to the wake, in case nobody else shows at least.',
        'j Hey, Quinn? If you have time, would you mind popping by my wake?',
        'j We can try the cake together.',
        'j You know, I hope this isn\'t weird, but thank you for getting me to try something new.',
        'j I can tell you care a lot about your bakery.',
        'j I hope it lasts a long time.',
        'b ... Thank you Jim! I\'d say I hope you last a long time at your job, but I don\'t think you want to.',
        'b WAIT- Was that mean?!',
        'b Oh gosh that was not what I meant! I-I\'ll definetly be at your wake! I PROMISE!',
        'b Forget I was so rude...',
        'j ...',
        'j ...',
        'j Hahaha! It\'s okay Quinn! You\'re right!',
        'j I\'ll see you at the wake!',
        'j Sure!. ',
        'j Bye.',
        'jump florist_start'
    ]
});
