import mongoose from 'mongoose'

const docSchema = new mongoose.Schema({
	value: {
		type: String,
		required: true,
	},
})

export default mongoose.model('Document', docSchema)
