import React, { useState, useEffect } from 'react';
import BackdropComponent from './komponente/BackdropComponent';
import HeaderComponent from './komponente/HeaderComponent';
import MainComponent from './komponente/MainComponent';

export default function Home() {
	const [dropdown, setDropdown] = useState(false);

	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			e.preventDefault();
			if (e.code === 'Escape') {
				dropdown && setDropdown(!dropdown);
			}
		});
	});

	return (
		<div>
			<BackdropComponent dropdown={dropdown} setDropdown={setDropdown} />
			<HeaderComponent dropdown={dropdown} setDropdown={setDropdown} />

			<MainComponent />
		</div>
	);
}
