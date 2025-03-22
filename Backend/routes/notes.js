const express = require('express')
const Note = require('../models/Note')

const router = express.Router()

router.post('/', async (req, res) => {
  try{
    const newNote = new Note({text: req.body.text})
    await newNote.save()
    res.status(201).json(newNote)
  } catch (err){
      res.status(500).json({ error: err.message })
  }
})

router.get('/', async(req, res) => {
  try{
    const notes = await Note.find();
    res.json(notes);
  } catch(err){
    res.status(500).json({error: err.message})
  }
})

module.exports = router;