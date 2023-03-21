export default function TeamMember({
	imageURL,
	imageAlt,
	teamMember,
	jobPosition,
}) {
	return (
		<div className="teamMember">
			<img src={imageURL} alt={imageAlt} width="160" height="160" />
			<h3>{teamMember}</h3>
			<p>{jobPosition}</p>
		</div>
	);
}
