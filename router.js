const express = require('express')
const router = express.Router()
const handler = require('./handler')

router
  .get('/', handler.showIndex)
  .get('/musicList', handler.getMusicList)
  .get('/add', handler.showAdd)
  .post('/add', handler.doAdd)
  .get('/edit', handler.showEdit)
  .post('/edit', handler.doEdit)
  .get('/remove', handler.doRemove)
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
module.exports = router
