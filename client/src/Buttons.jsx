const Buttons = () => {
	return (
		<div className="buttons-wrapper">
			<a href="/" className="logo">
				PasteBucket
			</a>
			<div className="buttons">
				<button className="btn" type="submit">
					Save
				</button>
				<a href="/new" className="btn">
					New
				</a>
			</div>
		</div>
	)
}

export default Buttons
