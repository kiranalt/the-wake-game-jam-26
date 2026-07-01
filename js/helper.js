function characterReveal(id, name){ 
    monogatari.characters({
        [id]: {name}
    });
}

// edit value 
function updateGameValue(objectKey, subKey, val){
    const currentObject = monogatari.storage(objectKey);

    monogatari.storage({
        [objectKey]: {
            ...currentObject,
            [subKey]: val
        }
    });
    console.log(`Updated storage.${objectKey}.${subKey} to:`, val);
}

function checkGameValue(objectKey, subKey, val){
    const currentObject = monogatari.storage(objectKey);
    
    return currentObject[subKey] === val;
}

function determineEnding() {

    const mc = monogatari.storage('mc');
    const story = monogatari.storage('story');

    const totalItems = (mc.has_flowers ? 1 : 0) + 
                       (mc.has_coffin ? 1 : 0) + 
                       (mc.has_cake ? 1 : 0);

    const hasHelped = story.helped_baker || story.helped_florist || story.helped_coffin;

    if (totalItems === 3) {
        monogatari.storage({ story: { ...story, good_ending: true } });
        return 'jump ending_good';
    } 
    
    if (totalItems > 0 && totalItems < 3) {
        monogatari.storage({ story: { ...story, neutral_ending: true } });
        return 'jump ending_neutral';
    } 
    
    if (totalItems === 0 && hasHelped) {
        monogatari.storage({ story: { ...story, neutral_ending: true } });
        return 'jump ending_neutral';
    } 
    monogatari.storage({ story: { ...story, bad_ending: true } });
    return 'jump ending_bad';
}
