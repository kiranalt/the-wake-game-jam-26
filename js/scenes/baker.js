monogatari.script({
    'baker_start': [
        'Warmth floods my bones as I step onto Charon Drive. I can feel the gravel crunching under my shoes, comfort wafting through the air.',
        'I can feel the life everywhere- people chattering on their lunch breaks, taking in the crisp winter air. Today is a small respite from the rest of the week',
        'It\'s a rare thing to be able to feel the sun so strongly in the beginning of July. Rain and clouds have been tormenting us for weeks.',
        'j I\'m still not quite used to the desolation. Can you ever really be?',

        'b Hello...? Are you just going to stand outside and talk to yourself? There are customers waiting you know!',
        'j My bad ... Wait! I had an appointment with you..!',
        'b An appointment...?',
        'b ...',
        'b Oh! You\'re one of those Reapers aren\'t you? Oh of course you are, silly me!',
        'b All about those apppointments. Appointments with death, appointments with... I dunno. But can\'t you chill a little?',
        'b This is a bakery, you don\'t need to book an appointment. The old man must\'ve felt bad for you and let it slide.',
        'j ...',
        'j Forgive me for not wanting to waste my scarce lunch breaks on lines and crowds...',

        'b Scarce? Didn\'t you want a Cake for your Wake?',
        'j !',
        'j So you did read my booking?!',
        'b Um yeah? it\'s my job? You deliver souls I deliver baked goods? And I know the baked good you want! Duh!',
        'j ... Whatever',
        'b Why so serious? Come in and lets start picking your perfect pastry- And all me Quinn!',
        
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