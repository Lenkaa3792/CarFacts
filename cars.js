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

fetch(
  "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
