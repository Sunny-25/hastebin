import React, { useEffect, useState } from 'react'
import Highlight from 'react-highlight'
import axios from 'axios'
import Buttons from './Buttons'
import { useLocation } from 'react-router-dom'

const Saved = ({ URL }) => {
	const [savedCode, setSavedCode] = useState('')
	const [len, setlen] = useState(null)

	const { pathname } = useLocation() // get path name for showning the data

	useEffect(() => {
		const fetchSavedData = async () => {
			try {
				const { data } = await axios.get(`${URL}${pathname}`)
				setSavedCode(data.value)
				setlen(data.value.split('\n').length)
			} catch (error) {
				console.log(error)
			}
		}
		fetchSavedData()
	}, [pathname])

	const linelen = []
	for (let i = 1; i <= len; i++) {
		linelen.push(i)
	}
	return (
		<div className="wrapper">
			<Buttons />

			<div className="line-numbers">
				{linelen.map((num) => (
					<div key={num}> {num}</div>
				))}
			</div>
			<Highlight id="code-display" className="css ">
				{savedCode}
			</Highlight>
		</div>
	)
}

export default Saved
