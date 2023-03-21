import React from 'react';

export default function BackdropComponent({ dropdown, setDropdown }) {
	return (
		<>
			{dropdown ? (
				<button
					onClick={() => setDropdown(!dropdown)}
					className="backdrop"
				></button>
			) : null}
		</>
	);
}
