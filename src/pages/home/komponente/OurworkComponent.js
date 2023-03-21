import React from 'react';

export default function OurworkComponent({
	imgURL,
	title,
	subTitle,
	desc1,
	desc2,
	desc3,
	desc4,
}) {
	return (
		<div className="wrap">
			<img src={imgURL} alt="slika" width="100%" />
			<h3>{title}</h3>
			<h4>{subTitle}</h4>
			<p>{desc1}</p>
			<p>{desc2}</p>
			<p>{desc3}</p>
			<p>{desc4}</p>
		</div>
	);
}
