import React from 'react';
import NotificationIcon from '../../icons/NotificationIcon';
import { thirdSnippet } from '../../snippet-data/Snippets';
import CodeSnippet from '../code-snippet/CodeSnippet';
import { Badge } from 'react-badges';

const HideZeroSection = () => {
	return (
		<React.Fragment>
			<section>
				<h4>Hide/Show Zero</h4>
				<p>
					You can control wheather badge should show the content or hide it when it is zero with the help of{' '}
					<code>hideZero</code> property. By default hideZero is false , so that when the value of content is
					zero it will show the badge.
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
					<Badge content={0} bgColor="pink">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
					<Badge content={0} hideZero bgColor="aqua">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
				</div>
				<CodeSnippet code={thirdSnippet} language="tsx" fileName="App.tsx" />
			</section>
		</React.Fragment>
	);
};

export default HideZeroSection;
