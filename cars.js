fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda")
  .then((resp) => {
    return resp.json;
  })
    .then( ( data ) => { } );
  

const click=document.getElementById('fbtn').addEventListener( 'click ',button1 )
function button1()
{
    alert( 'I am here to know about cars' )
}
    