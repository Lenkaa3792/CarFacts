fetch("https://api.smartcar.com/v2.0/vehicles")
    .then( ( resp )      => {
        return resp.json;
    } )
  .then((data) => {});