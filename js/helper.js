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