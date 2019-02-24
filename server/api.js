const router = require('express').Router()
let data = []

router.get('/memo', (req, res) => {
  res.json(data)
})

router.post('/memo', (req, res) => {
  data = req.body
  res.json(data)
})

module.exports = router
