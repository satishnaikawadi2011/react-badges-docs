import React from 'react';
import Header from '../components/Header';
import { Badge } from 'react-badges';
import GithubIcon from '../icons/GithubIcon';
import { Paper } from '@material-ui/core';
import NotificationIcon from '../icons/NotificationIcon';

export default function Home() {
	return (
		<React.Fragment>
			<Header />
			<h1 style={{ textAlign: 'center' }}>React Badges</h1>
			<section>
				<p>With React Badges you can generates two types of badges - </p>
				<ul>
					<li>
						Notifications Badges - Badges which can be used in different types of icons at their corners to
						show notification updates{' '}
					</li>
					<li>Regular Badges - Simple Badges which can be used as chips</li>
				</ul>
			</section>
			<section>
				<h4>Basic Notification Badges</h4>
				<p>
					Demo examples of badges containing text or number, using any background colors. The badge is applied
					to its children.
				</p>
				<Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
					<Badge content={5} contentColor="#ffffff" style={{ marginRight: '20px' }}>
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="blue" style={{ marginRight: '20px' }}>
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="pink" style={{ marginRight: '20px' }}>
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="aqua" style={{ marginRight: '20px' }}>
						<NotificationIcon height={40} width={40} />
					</Badge>
				</Paper>
			</section>
		</React.Fragment>
	);
}
