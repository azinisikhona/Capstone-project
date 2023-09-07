const db = require("../config");

class Orders {
  addOrder(req, res) {
    const order = {
        OrderID: req.body.OrderID,
        UserID: req.body.UserID,
        CarID: req.body.CarID,
        Quantity: req.body.Quantity,
        OrderDate: req.body.OrderDate,
    };

    const query = "INSERT INTO Orders SET ?";
    db.query(query, order, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Order added successfully",
        OrderID: result.insertID,
      });
    });
  }
 

  fetchOrders(req, res) {
    const query = `
            SELECT OrderID, UserID, CarID, Quantity, OrderDate FROM Orders
        `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }


  fetchOrder(req, res) {
    const query = `
      SELECT OrderID, UserID, CarID, Quantity, OrderDate FROM Orders WHERE OrderID = ?
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
          msg: "Order not found",
        });
      } else {
        res.json({
          status: res.statusCode,
          results: result[0],
        });
      }
    });
  }


  updateOrder(req, res) {
    const order = {
        OrderID: req.body.OrderID,
        UserID: req.body.UserID,
        CarID: req.body.CarID,
        Quantity: req.body.Quantity,
        OrderDate: req.body.OrderDate,
    };
    const query = `
            UPDATE Orders SET ? WHERE OrderID = ${req.params.id}
        `;
        
    db.query(query, [order, req.params.id], (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The order was successfully updated",
      });
    });
  }
  
  deleteOrder(req, res) {
    const query = `
      DELETE FROM Orders WHERE OrderID = ${req.params.id}
      `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Order deleted successfully",
      });
    });
  }
}

module.exports = Orders