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

router.put('/:id', async(req, res) => {
  try{
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      {text: req.body.text},
      {new: true}
    )

    if(!updateNote){
      return res.status(404).json({error: 'Note not Found'})
    }
    res.json(updateNote)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

router.delete('/delete/:id', async(req, res) => {
  try{

    const deleteNote = await Note.findByIdAndDelete(req.params.id)
    if(!deleteNote){(
      res.status(404).json({error: 'Note not Found'})
    )}
    res.json({message: 'Note Deleted Successfully'})
  } catch(err){res.status(500).json({error: err.message })}
})

module.exports = router;