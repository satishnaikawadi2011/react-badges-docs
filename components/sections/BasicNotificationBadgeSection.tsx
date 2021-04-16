import React from 'react';
import { Badge } from 'react-badges';
import NotificationIcon from '../../icons/NotificationIcon';
import { firstSnippet } from '../../snippet-data/Snippets';
import CodeSnippet from '../code-snippet/CodeSnippet';

const BasicNotificationBadgeSection = () => {
	return (
		<React.Fragment>
			<section>
				<h4>Basic Notification Badges</h4>
				<p>
					Demo examples of badges containing text or number, using any background colors. The badge is applied
					to its children.
				</p>
				<div
					style={{
						backgroundColor: 'var(--bgCard)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '2rem',
						margin: '1rem 3rem'
					}}
				>
					<Badge content={5} contentColor="#ffffff">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="blue">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="pink">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="aqua">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
				</div>
				<CodeSnippet code={firstSnippet} language="tsx" fileName="App.tsx" />
			</section>
		</React.Fragment>
	);
};

export default BasicNotificationBadgeSection;
