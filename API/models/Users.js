const db = require('../config')
const {hash,compare,hashSync} = require('bcrypt')
const {createToken} =require('../middleware/AuthenticateUser')
class Users{
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, userRole,profileUrl
        FROM Users;
        `
        db.query(query, (err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, 
        gender, userDOB, emailAdd, userRole, profileUrl
        FROM Users
        WHERE userID = ?;
        `
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
                msg: " not found",
              });
            } else {
              res.json({
                status: res.statusCode,
                results: result[0],
              });
            }
          });

    }

    async register(req, res) {
        const data = req.body;
        // encrypt password
        data.userPass = await hash(data.userPass, 10)
        // Payload
        const user = {
          emailAdd: data.emailAdd,
          userPass: data.userPass,
        };
        // Query
        const query = `INSERT INTO Users SET ?;`;
    
        db.query(query, [data], (err) => {
          if (err) throw err;
          let token = createToken(Users);
          res.json({
            msg: "You are now registered.",
          });
        });
      }

      login(req, res) {
        const { emailAdd, userPass } = req.body;
        // query
        const query = `
      SELECT firstName, lastName, userDOB,
      gender, userRole, emailAdd, userPass,
      profileUrl
      FROM Users
      WHERE emailAdd = '${emailAdd}';
      `;
        db.query(query, [emailAdd], async (err, result) => {
          if (err) throw err;
          if (!result?.length) {
            res.json({
              status: res.statusCode,
              msg: "You provided a wrong email.",
            });
          } else {
            await compare(userPass, result[0].userPass, (cErr, cResult) => {
              if (cErr) throw cErr;
              // Create a token
              const token = createToken({
                emailAdd,
                userPass,
              });
              if (cResult) {
                res.json({
                  msg: "Logged in",
                  token,
                  result: result[0],
                });
              } else {
                res.json({
                  status: res.statusCode,
                  msg: "Invalid password or you have not registered",
                });
              }
            });
          }
        });
      }

      deleteUser(req, res) {
        const query = `
                DELETE FROM Users WHERE userID = ${req.params.id}
            `;
    
        db.query(query, [req.params.id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "User record was deleted.",
          });
        });
      }

      updateUser(req, res) {
        const data = req.body;
        if (data.userPass) {
          data.userPass = hashSync(data.userPass, 15);
        }
        const query = `
                UPDATE Users SET ? WHERE userID = ${req.params.id}
            `;
    
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "User record was updated",
          });
        });
      }
}
module.exports = Users