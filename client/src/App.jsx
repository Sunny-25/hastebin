import '../node_modules/highlight.js/styles/solarized-dark.css'
import Buttons from './Buttons'

import Home from './Home'
import Saved from './Saved'
import New from './new'

const URL = 'https://hastebinbackend1.onrender.com'

import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'

const App = () => {
	return (
		<div>
			{/* <Buttons /> */}
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home URL={URL} />}
					/>
					<Route
						path="/:id"
						element={<Saved URL={URL} />}
					/>
					<Route
						path="/new"
						element={<New URL={URL} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
