let numberOfDogPictures = 3;

function displayDogImgs(item) {
    $(".results").append(`<div class="dog-img"><img src="${item}" alt="Picture of dog"></div>`);   
}

function handleDogImgsArray(responseJson) {
    arrayOfDogImgs = responseJson.message;
    return arrayOfDogImgs.map(item => displayDogImgs(item));
}

function getDogImages() {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogPictures}`)
    .then(response => response.json())
    .then(responseJson => handleDogImgsArray(responseJson));
}

function handleSubmitClicked() {
    $("form").submit(event => {
        event.preventDefault();
        $(".results").empty();
        numberOfDogPictures = $("input").val();
        $(".results").append("<h2>Here are those fur babies you requested!</h2>")
        getDogImages();
    });
}

$(function() {
    console.log("Application Loaded, Now Ready for Submit!");
    handleSubmitClicked();
});