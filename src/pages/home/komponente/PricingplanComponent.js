import React from 'react';

export default function PricingplanComponent({
	plan,
	storage,
	email,
	domain,
	support,
	cost,
}) {
	return (
		<ul>
			<li>
				<h3>{plan}</h3>
			</li>
			<li>
				<p>
					<b>{storage}GB</b> Storage
				</p>
			</li>
			<li>
				<p>
					<b>{email}</b> Emails
				</p>
			</li>
			<li>
				<p>
					<b>{domain}</b> Domains
				</p>
			</li>
			<li>
				<p>
					<b>{support}</b> Support
				</p>
			</li>
			<li>
				<h2>&#36; {cost}</h2>
				<span>per month</span>
			</li>
			<li>
				<button>&#10004; Sing Up</button>
			</li>
		</ul>
	);
}
