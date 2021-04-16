import Head from 'next/Head';
import React from 'react';
import Header from '../components/Header';
import { Badge } from 'react-badges';
import NotificationIcon from '../icons/NotificationIcon';
import CodeSnippet from '../components/code-snippet/CodeSnippet';
import { firstSnippet, secondSnippet, thirdSnippet, fourthSnippet, fifthSnippet } from '../snippet-data/Snippets';
import IntroSection from '../components/sections/IntroSection';
import BasicNotificationBadgeSection from '../components/sections/BasicNotificationBadgeSection';
import MaxValueSection from '../components/sections/MaxValueSection';
import HideZeroSection from '../components/sections/HideZeroSection';
import BadgeAlignmentSection from '../components/sections/BadgeAlignmentSection';
import RegularBadges from '../components/sections/RegularBadges';

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>React Badges</title>
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
