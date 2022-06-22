// fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda")
//   .then((resp) => {
//     (resp) => resp.json();
//   })
//   .then((data) => console.log(data));

const click = document
  .getElementById("fbtn")
  .addEventListener("click ", button1);
function button1() {
  alert("I am here to know about cars");
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e62126486dmsh39cebd1facfc876p15e1f0jsn32313b0fc1a8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// fetch(
//   "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
//   options
// )
//   .then((response) => response.json())
//   .then((data) => {
//     //console.log(data);
//       let vehicles = data;
//       let car = data.class;
//       function Vehicle(vehicles) {
//         console.log(vehicles);
//       }
//       Vehicle();
//       //console.log(car);
//     data.forEach((data) => {
//       console.log(data);
//     });
//   })
//   .catch((data) => console.error(data));

// // function loadImagesTodom(car) {
// //   console.log(data);
// //   let dataCount = document.getElementById("fetched");
// //   let data = document.createElement("li");
// //   data.innerHTML = data.model;
// //   dataCount.appendChild(data);
// // }
let vehicles = async () =>
{
    let response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      options
    );
    let cars = await response.json()
    console.log( cars );
    
  

    let dataCount = document.getElementById( "fetched" );
      
    cars.map( ( car ) =>
    {
        let row = `<li>model: ${ car.model } make: ${ car.make }</li>`;
        dataCount.innerHTML+=row
      console.log(car.model);
    });
    // let data = document.createElement("li");
    // data.innerHTML = `model: ${cars[1].model} make: ${cars[1].make}`;
    // dataCount.appendChild(data);
    
}
vehicles()