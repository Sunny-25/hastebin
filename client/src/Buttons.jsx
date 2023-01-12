import { useLocation } from 'react-router-dom'

const Buttons = () => {
	const { pathname } = useLocation()

	return (
		<div className="buttons-wrapper">
			<a href="/" className="logo">
				HasteBin
			</a>
			<div className="buttons">
				{pathname === '/new' && (
					<button className="btn" type="submit">
						Save
					</button>
				)}
				{pathname === '/' && (
					<a href="/new" className="btn">
						New
					</a>
				)}
			</div>
		</div>
	)
}

export default Buttons
