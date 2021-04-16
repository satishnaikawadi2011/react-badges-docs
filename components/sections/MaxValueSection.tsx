import React from 'react';
import { Badge } from 'react-badges';
import NotificationIcon from '../../icons/NotificationIcon';
import { secondSnippet } from '../../snippet-data/Snippets';
import CodeSnippet from '../code-snippet/CodeSnippet';

const MaxValueSection = () => {
	return (
		<React.Fragment>
			<section>
				<h4>Maximum Value</h4>
				<p>
					You can use the <code>max</code> property on Badge Component to cap the value of the badge content.
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
					<Badge content={99} contentColor="#ffffff">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
					<Badge content={99} max={75} bgColor="blue">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
					<Badge content={100} max={99} bgColor="pink">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
					<Badge content={10000} max={999} bgColor="aqua">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
				</div>
				<CodeSnippet code={secondSnippet} language="tsx" fileName="App.tsx" />
			</section>
		</React.Fragment>
	);
};

export default MaxValueSection;
