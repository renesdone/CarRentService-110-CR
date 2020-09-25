function Car(year, make, model, miles, cat, color, mpg, price, image, isManual){
    this.year = parseInt(year) || 0;
    this.make = make;
    this.model = model;
    this.miles = parseInt(miles) || 0;
    this.category = cat;
    this.color = color;
    this.MPG = mpg;
    this.price =parseFloat(price) || 0.00;
    this.image = image;
    this.isManual = isManual;

}


function register() {
    var year = $("#txtYear").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var miles = $("#txtMiles").val();
    var cat = $("#selCategory").val();
    var color = $("#txtColor").val();
    var mpg = $("#txtMPG").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var isManual = $("#rdbTrans_1").is(":checked");

    //create the object
    var car = new Car(year, make, model, miles, cat, color, mpg, price, image, isManual);
    console.log(car);

    $.ajax({
        type: 'POST',
        url: '/catalog/registerCar',
        data: JSON.stringify(car),
        contentType: 'application/json',
        success: (res) => {
            console.log('Server says: ', res);
        },

        error: (errorDetails) => {
            console.log("There is an error", errorDetails);
        }
    });
}

function init() {
    console.log("It works");
    $("#btnSave").click(register);
}

window.onload = init;



/*
    catch the click event

    call a register fn

    get the values from the inputs on variables

    create an object with those variables

    the object prop.. should be names like the Car, mode, class

    console log the oject

    */