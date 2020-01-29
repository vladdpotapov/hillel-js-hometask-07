// Get data about user and car:
function getData(text) {
    let data;
    do {
        data = prompt(text);
    } while(!data);
    return data;
}

// Get data about the age (of user and car):
function getAgeData(text) {
    let age;
    do {
        age = parseInt(prompt(text));
    } while (isNaN(age) || age <= 0);
    return age;

}

