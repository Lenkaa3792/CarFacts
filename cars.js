fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda")
  .then((resp) => {
    return resp.json;
  })
  .then((data) => {});