const express = require('express')
const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'zjc19990110',
  database: 'test',
})
const router = express.Router()
const config = {
  db,
  router,
}
router.post('/post', (req, res) => {
  db.query('select * from user ', (err, result) => {
    const username = req.body.username
    const password = req.body.password
    const sqlStr = 'select * from user where username = ? and password = ?'
    db.query(sqlStr, [username, password], (err, result) => {
      console.log(result)
      if (result.length > 0) {
        res.send({
          status: 0,
          msg: '登录成功',
          data: req.body,
          token: jwt.sign({ username: username, expresIn: '20s' }, 'zjc'),
        })
      } else {
        res.send({
          status: 1,
          msg: '账号或密码错误',
          data: req.body,
        })
      }
      return
    })
  })
})

module.exports = config
