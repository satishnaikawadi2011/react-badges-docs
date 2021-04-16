import Head from 'next/Head';
import React from 'react';
import Header from '../components/Header';
import IntroSection from '../components/sections/IntroSection';
import BasicNotificationBadgeSection from '../components/sections/BasicNotificationBadgeSection';
import MaxValueSection from '../components/sections/MaxValueSection';
import HideZeroSection from '../components/sections/HideZeroSection';
import BadgeAlignmentSection from '../components/sections/BadgeAlignmentSection';
import RegularBadges from '../components/sections/RegularBadges';

export default function Home() {
	const url = '';
	const description =
		'This is a React Component Library. With help of this you can create Customizable and Reusable React Badge component for your all kinds of Projects and WebSites.';
	const image =
		'https://res.cloudinary.com/dg2zkumuc/image/upload/v1618564550/React%20Badges/react-badges_oarucd.gif';
	const title = 'React Badges';
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
				<meta name="og:title" content={title} />
				<meta name="og:type" content="article" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@publisher_handle" />
				<meta name="twitter:title" content={title} />
				<meta name="description" content={description} />
				<meta name="og:description" content={description} />
				<meta name="twitter:description" content={description} />
				<meta name="image" content={image} />
				<meta name="twitter:image" content={image} />
				<meta name="og:image" content={image} />
				<React.Fragment>
					<meta name="og:url" content={url} />
				</React.Fragment>
			</Head>
			<Header />
			<IntroSection />
			<BasicNotificationBadgeSection />
			<MaxValueSection />
			<HideZeroSection />
			<BadgeAlignmentSection />
			<RegularBadges />
		</React.Fragment>
	);
}
