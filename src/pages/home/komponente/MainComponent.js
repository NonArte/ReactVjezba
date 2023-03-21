import React from 'react';
import OurworkComponent from './OurworkComponent';
import PricingplanComponent from './PricingplanComponent';
import TeamMember from './TeamMember';

const TEAM_MEMBERS = [
	{
		id: 'ndhd4-frd34-s3f3x-4dgt4',
		imageURL: 'assets/avatarJoe.jpeg',
		imageAlt: 'Avatar Joe',
		teamMember: 'Johnny Walker',
		jobPosition: 'Web Designer',
	},
	{
		id: '521d-a955a-416bd-93303-91966',
		imageURL: 'assets/avatarJoe.jpeg',
		imageAlt: 'Avatar Joe',
		teamMember: 'Rebecca Flex',
		jobPosition: 'Support',
	},
	{
		id: 'bd7ac-c97ea-422e7-a88b6-07983',
		imageURL: 'assets/avatarJoe.jpeg',
		imageAlt: 'Avatar Joe',
		teamMember: 'Jan Ringo',
		jobPosition: 'Boss man',
	},
	{
		id: 'c2edb-4abf5-486ac-a1359-a2e69',
		imageURL: 'assets/avatarJoe.jpeg',
		imageAlt: 'Avatar Joe',
		teamMember: 'Kai Ringo',
		jobPosition: 'Fixer',
	},
];
const WORK = [
	{
		imgURL: 'https://www.w3schools.com/w3images/snow.jpg',
		title: 'Sales',
		subTitle: 'Bombonjera',
		desc1: 'Kakao',
		desc2: 'Mljeko',
		desc3: 'Nugat',
		desc4: 'Liker',
	},
	{
		imgURL: 'https://www.w3schools.com/w3images/lights.jpg',
		title: 'Island',
		subTitle: 'Bombonjera',
		desc1: 'Kakao',
		desc2: 'Mljeko',
		desc3: 'Nugat',
		desc4: 'Liker',
	},
	{
		imgURL: 'https://www.w3schools.com/w3images/mountains.jpg',
		title: 'Škodska',
		subTitle: 'Bombonjera',
		desc1: 'Kakao',
		desc2: 'Mljeko',
		desc3: 'Nugat',
		desc4: 'Liker',
	},
];
const PRICE = [
	{
		plan: 'Basic',
		storage: 10,
		email: 10,
		domain: 10,
		support: 'Endless',
		cost: 10,
	},
	{
		plan: 'Pro',
		storage: 25,
		email: 25,
		domain: 25,
		support: 'Endless',
		cost: 25,
	},
	{
		plan: 'Premium',
		storage: 50,
		email: 50,
		domain: 50,
		support: 'Endless',
		cost: 50,
	},
];

export default function MainComponent() {
	return (
		<main>
			<section className="banner">
				<a href="https://www.w3schools.com">learn w3.css</a>
			</section>

			<section className="ourTeam" id="ourTeam">
				<h1>our team</h1>
				<p>Meet the team - our office rats:</p>

				<div className="team">
					{TEAM_MEMBERS.map((member) => (
						<TeamMember
							key={member.id}
							imageURL={member.imageURL}
							imageAlt={member.imageAlt}
							teamMember={member.teamMember}
							jobPosition={member.jobPosition}
						/>
					))}
				</div>
			</section>
			<section className="ourWork">
				<div className="text">
					<h3>Our Work</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id
						laboriosam ratione hic libero excepturi, qui quam sed sunt omnis
						repellendus. Fuga ipsam odit facere? Eius esse mollitia corrupti autem.
					</p>
				</div>
				{WORK.map((work) => (
					<OurworkComponent
						key={work.title}
						imgURL={work.imgURL}
						title={work.title}
						subTitle={work.subTitle}
						desc1={work.desc1}
						desc2={work.desc2}
						desc3={work.desc3}
						desc4={work.desc4}
					/>
				))}
			</section>
			<section className="price">
				<h2>PRICING</h2>
				<p>Choose a pricing plan that fits your needs.</p>
				<div className="plan">
					{PRICE.map((price) => (
						<PricingplanComponent
							key={price.plan}
							plan={price.plan}
							storage={price.storage}
							email={price.email}
							domain={price.domain}
							support={price.support}
							cost={price.cost}
						/>
					))}
				</div>
			</section>
			<section className="contact">
				<div className="adress">
					<h2>Contact Us</h2>
					<h3>Adress</h3>
					<p>Swing by for a cup of coffee, or whatever.</p>

					<p>Chicago, US</p>
					<p>+00 1515151515</p>
					<p>test@test.com</p>
				</div>
				<div className="form">
					<form action="#">
						<div className="input">
							<label>Name</label>
							<input type="text" name="name" required />
						</div>
						<div className="input">
							<label>Email</label>
							<input input="email" name="email" required />
						</div>
						<div className="input">
							<label>Message</label>
							<input input="text" name="message" />
						</div>

						<input type="checkbox" name="like" checked />
						<label> I Like it!</label>

						<button type="submit">Send</button>
					</form>
				</div>
			</section>
			<img src="assets/map.jpg" alt="slika" width="100%" />
		</main>
	);
}
