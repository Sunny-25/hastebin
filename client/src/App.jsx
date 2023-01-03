import '../node_modules/highlight.js/styles/solarized-dark.css'
import Buttons from './Buttons'

import Home from './Home'
import Saved from './Saved'
import New from './new'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<div>
			{/* <Buttons /> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<Saved />} />
					<Route path="/new" element={<New />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
