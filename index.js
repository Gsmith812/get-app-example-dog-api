function handleDogImgsArray(responseJson) {
    arrayOfDogImgs = responseJson.message;
    console.log(responseJson)
    $(".results-img").replaceWith(arrayOfDogImgs.map(item => `<img src="${item}" alt="Picture of dog" class="results-img">`));
    $(".results").removeClass("hidden");
}

function getDogImages(numberOfDogPictures) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogPictures}`)
    .then(response => response.json())
    .then(responseJson => handleDogImgsArray(responseJson));
}

function handleSubmitClicked() {
    $("form").submit(event => {
        event.preventDefault();
        const numberOfDogPictures = $("input").val();
        getDogImages(numberOfDogPictures);
    });
}

$(function() {
    console.log("Application Loaded, Now Ready for Submit!");
    handleSubmitClicked();
});