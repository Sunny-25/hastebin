import React, { useEffect, useState } from 'react'
import Highlight from 'react-highlight'
import axios from 'axios'
import Buttons from './Buttons'

const Home = () => {
	const [code, setCode] = useState('')
	const [len, setLen] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('http://localhost:8800/')
			setCode(data)
			setLen(data.split('\n').length)
		}
		fetchData()
	}, [])

	const lineLen = []
	for (let i = 1; i <= len; i++) {
		lineLen.push(i)
	}
	return (
		<div className="wrapper">
			<Buttons />

			<div className="line-numbers">
				{lineLen.map((num) => (
					<div key={num}> {num}</div>
				))}
			</div>
			<Highlight id="code-display" className="css language-plaintext">
				{code}
			</Highlight>
		</div>
	)
}

export default Home
