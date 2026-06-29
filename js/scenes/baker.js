monogatari.script({
    'baker_start': [
        'Warmth floods my bones as I step onto Charon Drive. I can feel the gravel crunching under my shoes, comfort wafting through the air.',
        'I can feel the life everywhere- people chattering on their lunch breaks, taking in the crisp winter air. Today is a small respite from the rest of the week',
        'It\'s a rare thing to be able to feel the sun so strongly in the beginning of July. Rain and clouds have been tormenting us for weeks.',
        'j I\'m still not quite used to the desolation. Can you ever really be?',

        'b Hello...? Are you just going to stand outside and talk to yourself? There are customers waiting you know!',
        
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
    
        'b damn girl that nesting of yours is insane',
        'end'
    ],
});