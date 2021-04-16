import React from 'react';

const IntroSection = () => {
	return (
		<React.Fragment>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '300px',
					width: '100vw',
					marginTop: '5rem'
				}}
			>
				<img
					alt="Logo"
					style={{ width: '80%' }}
					src="https://res.cloudinary.com/dg2zkumuc/image/upload/v1618564550/React%20Badges/react-badges_oarucd.gif"
				/>
			</div>
			<section style={{ marginTop: 100 }}>
				<h1>React Badges</h1>
				<p>With React Badges you can generates two types of badges - </p>
				<ul>
					<li>
						Notifications Badges - Badges which can be used in different types of icons at their corners to
						show notification updates{' '}
					</li>
					<li>Regular Badges - Simple Badges which can be used as chips</li>
				</ul>
			</section>
		</React.Fragment>
	);
};

export default IntroSection;
