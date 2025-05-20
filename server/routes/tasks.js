
const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM tasks ORDER BY id')
  res.json(rows)
})

router.post('/', async (req, res) => {
  const { title } = req.body
  const { rows } = await db.query(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
    [title]
  )
  res.json(rows[0])
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query(
    'UPDATE tasks SET completed = NOT completed WHERE id = $1 RETURNING *',
    [id]
  )
  res.json(rows[0])
})

module.exports = router
