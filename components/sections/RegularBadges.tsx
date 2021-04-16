import React from 'react';
import { fifthSnippet } from '../../snippet-data/Snippets';
import CodeSnippet from '../code-snippet/CodeSnippet';
import { Badge } from 'customizable-react-badges';

const RegularBadges = () => {
	return (
		<React.Fragment>
			<section>
				<h4>Regular Badges (like Chip)</h4>
				<p>
					To use Badge Component for use other than Notifications you can pass any string to{' '}
					<code>content</code> property of the Badge and don't pass any children to the Badge Component.
				</p>
				<div
					style={{
						backgroundColor: 'var(--bgCard)',
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						padding: '2rem',
						margin: '1rem 3rem'
					}}
				>
					<Badge content="Danger" contentColor="#ffffff" />
					<Badge content="Success" bgColor="green" />
					<Badge content="Warning" bgColor="orange" />
					<Badge content="Info" bgColor="skyblue" />
					<Badge content="Blue" bgColor="blue" />
					<Badge content="Pink" bgColor="pink" />
				</div>
				<CodeSnippet code={fifthSnippet} language="tsx" fileName="App.tsx" />
			</section>
		</React.Fragment>
	);
};

export default RegularBadges;
