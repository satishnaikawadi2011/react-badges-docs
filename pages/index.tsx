import React from 'react';
import Header from '../components/Header';
import IntroSection from '../components/sections/IntroSection';
import BasicNotificationBadgeSection from '../components/sections/BasicNotificationBadgeSection';
import MaxValueSection from '../components/sections/MaxValueSection';
import HideZeroSection from '../components/sections/HideZeroSection';
import BadgeAlignmentSection from '../components/sections/BadgeAlignmentSection';
import RegularBadges from '../components/sections/RegularBadges';
// import Head from 'next/Head';

export default function Home() {
	return (
		<React.Fragment>
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
