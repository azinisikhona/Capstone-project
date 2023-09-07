const db = require("../config");

class Suppliers {
  addSupplier(req, res) {
    const supplier = {
        SupplierID: req.body.SupplierID,
        FullName: req.body.FullName,
        ContactNo: req.body.FullName,
        Region: req.body.Region,
    };

    const query = "INSERT INTO Suppliers SET ?";
    db.query(query, supplier, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Supplier added successfully",
        SupplierID: result.insertID,
      });
    });
  }
 

  fetchSuppliers(req, res) {
    const query = `
            SELECT SupplierID, FullName, ContactNo, Region FROM Suppliers
        `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }


  fetchSupplier(req, res) {
    const query = `
            SELECT SupplierID, FullName, ContactNo, Region FROM Suppliers WHERE SupplierID = ?
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
              msg: "Supplier not found",
            });
          } else {
            res.json({
              status: res.statusCode,
              results: result[0],
            });
          }
        });      
  }


  updateSupplier(req, res) {
    const supplier = {
        SupplierID: req.body.SupplierID,
        FullName: req.body.FullName,
        ContactNo: req.body.FullName,
        Region: req.body.Region,
    };
    const query = `
            UPDATE Suppliers SET ? WHERE SupplierID = ?
        `;

    db.query(query, [supplier, req.params.id], (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The supplier was successfully updated",
      });
    });
  }
  
  deleteSupplier(req, res) {
    const query = `
      DELETE FROM Suppliers WHERE SupplierID = ${req.params.id}
      `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Supplier deleted successfully",
      });
    });
  }
}

module.exports = Suppliers