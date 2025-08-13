const subjects = ["You", "Your friend", "Someone special"];
const actions = ["will find", "might discover", "will create"];
const objects = ["happiness", "success", "a surprise today"];



function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function generateMessage() {
    const subject = getRandomElement(subjects);
    const action = getRandomElement(actions);
    const object = getRandomElement(objects);

    return `${subject} ${action} ${object}.`;
}

console.log(generateMessage());
