var catalog = [];

function fetchCatalog() {
    // ajax request to /catalog/getCatalog
    // print the response from the server

    $.ajax({
        type: "GET",
        url: '/catalog/getCatalog',
        success: function(res) {
            console.log("Server says: ", res);
            catalog = res;
            displayCars();
        },



        error: function(error) {
            console.log("Error loading data", error);
        }
    });
}

function displayCars(){
    // travel the catalog array
    // get each car from the array
    // create the html syntax to display the car
    // add the sintax to a container

    for(let i = 0; i < catalog.length; i++){
        var car = catalog[i];
    
        var syntax =
        `<div class="car" onclick="displayModal(${i})">
            <img src="${car.image}">
            <div class="vehicleDetails">
                <label class="name"> ${car.year} ${car.make} ${car.model} </label>
                <label class="price"> Price: $${car.price.toFixed(2)}</label>

            </div>
            <button class="rentButton">Rent It!</button>
        </div>`;

        $("#catalog-container").append(syntax);
    }
}

function displayModal(index){
    var car = catalog[index];
    console.log("User wants to see a car", car);

    //change the values in the modal
    $("#mdlTitle").text(`${car.year} ${car.make} ${car.model}`);
    $("#mdlContent").html(`<img class="modal-image" src="${car.image}">`);
    $("#mdlPrice").text(`$ ${car.price.toFixed(2)}`);

    $("#mdlCat").text(car.category);
    $("#mdlMiles").text(car.miles);
    $("#mdMPG").text(car.MPG);
    ß

    var transmissionType = car.isManual ? "Manual" : "Automatic";
    $("#mdlTrans").text(transmissionType);


    $("#popup").modal(); // show the modal
}

function init() {
    console.log('Catalog page');

        fetchCatalog(); // call for pizza
}

window.onload = init;