import express, { urlencoded } from 'express'
import cors from 'cors'
const app = express()
import Document from './doc.js'
import mongoose from 'mongoose'
import dotEnv from 'dotenv'

dotEnv.config()

const PORT = process.env.PORT
const MongoDbUrl = process.env.MongoDbUrl

mongoose.set('strictQuery', true)
// mongdb
mongoose
	.connect(MongoDbUrl)
	.then(() => console.log('connected to mongodb'))
	.catch((err) => console.log(err))

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res) => {
	const code = `# HasteBin

Sharing code is a good thing, and it should be _really_ easy to do it.
A lot of times, I want to show you something I'm seeing - and that's where we
use pastebins.

Haste is the prettiest, easiest to use pastebin ever made.

## Basic Usage

Type what you want me to see, click "Save", and then copy the URL.  Send that
URL to someone and they'll see what you see.

To make a new entry, click "New" `
	res.send(code)
})

app.get('/new', (req, res) => {
	res.send('new')
})

app.post('/save', async (req, res) => {
	const value = req.body.value

	try {
		const newDoc = new Document({ value })
		newDoc.save()
		res.send(newDoc)
		console.log(newDoc)
	} catch (error) {
		console.log(error)
	}
})

app.get('/:id', async (req, res) => {
	const id = req.params.id

	try {
		const data = await Document.findById(id)
		res.send(data)
		console.log(data)
	} catch (err) {
		console.log(err)
	}
})

app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`))
