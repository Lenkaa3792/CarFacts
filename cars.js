
const click = document
  .getElementById("fbtn")
  .addEventListener("click ", button1);
function button1() {
  alert("I am here to know about cars");
}

function myLoad ()
{
  alert('page fully loaded!!')
}



const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e62126486dmsh39cebd1facfc876p15e1f0jsn32313b0fc1a8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

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
        let row = `<li> ${ car.make }: ${ car.model }</li>`;
        dataCount.innerHTML+=row
      //console.log(car.model);
    });
   
}
vehicles()