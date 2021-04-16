import React from 'react';
import NotificationIcon from '../../icons/NotificationIcon';
import { fourthSnippet } from '../../snippet-data/Snippets';
import CodeSnippet from '../code-snippet/CodeSnippet';
import { Badge } from 'react-badges';

const BadgeAlignmentSection = () => {
	return (
		<React.Fragment>
			<section>
				<h4>Badge Alignment</h4>
				<p>
					You can use the <code>verticalAlignment</code> property to control vertical alignment of the badge
					and <code>horizontalAlignment</code> property to control horizontal alignment of the badge.
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
					<div style={{ marginRight: '50px' }}>
						<Badge content={5} verticalAlignment="top" horizontalAlignment="right" bgColor="pink">
							<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
						</Badge>
					</div>
					<div style={{ marginRight: '50px' }}>
						<Badge content={5} verticalAlignment="top" horizontalAlignment="left" bgColor="blue">
							<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
						</Badge>
					</div>
					<div style={{ marginRight: '50px' }}>
						<Badge content={5} verticalAlignment="bottom" horizontalAlignment="right" bgColor="orange">
							<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
						</Badge>
					</div>
					<div style={{ marginRight: '50px' }}>
						<Badge content={5} verticalAlignment="bottom" horizontalAlignment="left" bgColor="green">
							<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
						</Badge>
					</div>
				</div>
				<CodeSnippet code={fourthSnippet} language="tsx" fileName="App.tsx" />
			</section>
		</React.Fragment>
	);
};

export default BadgeAlignmentSection;
