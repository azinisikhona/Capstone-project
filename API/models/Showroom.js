const db = require("../config");

class Showroom {
    addCar(req, res) {
        // const car = {
        //   CarID: req.body.CarID,
        //   Brands: req.body.Brands,
        //   Model: req.body.Model,
        //   MakeYear: req.body.MakeYear,
        //   Price: req.body.Price,
        //   Picture: req.body.Picture,
        //   SupplierID: req.body.SupplierID
        // };
    
        const query = `INSERT INTO Showroom SET ?;`
        db.query(query, [req.body], (err) => {
          // if (err) {
          //   console.error(err);
          //   res.status(500).json({
          //     status: 500,
          //     msg: "Failed to add car",
          //   });
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "New car Added"
            })
          // } else {
          //   res.json({
          //     status: res.statusCode,
          //     msg: "Car added successfully",
          //     CarID: result.insertId,
          //   });
          // }
        });
      }
     

  fetchShowroom(req, res) {
    const query = `
            SELECT CarID, Brands, Model, MakeYear, Price, Picture, SupplierID FROM Showroom 
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
              status: res.statusCode,
              results,
            });
          });        
  }


  fetchCar(req, res) {
    const query = `
            SELECT CarID, Brands, Model, MakeYear, Price, Picture, SupplierID FROM Showroom WHERE CarID = ?
        `;
        db.query(query, [req.params.id], (err, result) => {
            if (err) {
              console.error(err);
              res.status(500).json({
                status: 500,
                msg: "Internal Server Error",
              });
              return;
            }
            if (result.length === 0) {
                res.status(404).json({
                  status: 404,
                  msg: "Car not found",
                });
              } else {
                res.json({
                  status: res.statusCode,
                  results: result[0],
                });
              }
            });
  }


  updateCar(req, res) {
    const car = {
        Brands: req.body.Brands,
        Model: req.body.Model,
        MakeYear: req.body.MakeYear,
        Price: req.body.Price,
        Picture: req.body.Picture,
    };    
    const query = `
            UPDATE Showroom SET ? WHERE CarID = ?
        `;

    db.query(query, [car, req.params.id], (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The car was successfully updated",
      });
    });
  }

  deleteCar(req, res) {
    const query = `
      DELETE FROM Showroom WHERE CarID = ${req.params.id}
      `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Car deleted successfully",
      });
    });
  }
}

module.exports = Showroom
