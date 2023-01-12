import { useState } from 'react'
import Buttons from './Buttons'
import './index.css'
import axios from 'axios'

const New = () => {
	const [input, setInput] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const postData = async () => {
			try {
				const { data } = await axios.post('http://localhost:8800/save', { value: input || 'write something' })
				window.location.replace(`/${data._id}`)
			} catch (err) {
				console.log(err)
			}
		}
		postData()
	}

	return (
		<form action="/save" method="POST" onSubmit={handleSubmit}>
			<Buttons />
			<div className="wrapper">
				<div className="line-numbers">&gt;</div>
				<textarea
					name="value"
					value={input}
					onChange={function (e) {
						setInput(e.target.value)
					}}
					autoFocus></textarea>
			</div>
		</form>
	)
}

export default New
