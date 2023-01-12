import React, { useEffect, useState } from 'react'
import Highlight from 'react-highlight'
import axios from 'axios'
import Buttons from './Buttons'

const Home = () => {
	const [code, setCode] = useState('') // for home data text
	const [len, setLen] = useState(0) // for numbers list count

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('http://localhost:8800/') //get home data
			setCode(data)
			setLen(data.split('\n').length)
		}
		fetchData()
	}, [])

	const lineLen = [] //  to show numbers on left side of the page

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
