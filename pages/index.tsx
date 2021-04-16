import React from 'react';
import Header from '../components/Header';
import { Badge } from 'react-badges';
import { Paper } from '@material-ui/core';
import NotificationIcon from '../icons/NotificationIcon';
import CodeSnippet from '../components/code-snippet/CodeSnippet';
import { firstSnippet, secondSnippet, thirdSnippet, fourthSnippet, fifthSnippet } from '../snippet-data/Snippets';

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
				</Paper>
				<CodeSnippet code={firstSnippet} language="tsx" fileName="App.tsx" />
			</section>
			<section>
				<h4>Maximum Value</h4>
				<p>
					You can use the <code>max</code> property on Badge Component to cap the value of the badge content.
				</p>
				<Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
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
				</Paper>
				<CodeSnippet code={secondSnippet} language="tsx" fileName="App.tsx" />
			</section>
			<section>
				<h4>Hide/Show Zero</h4>
				<p>
					You can control wheather badge should show the content or hide it when it is zero with the help of{' '}
					<code>hideZero</code> property. By default hideZero is false , so that when the value of content is
					zero it will show the badge.
				</p>
				<Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
					<Badge content={0} bgColor="pink">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
					<Badge content={0} hideZero bgColor="aqua">
						<NotificationIcon fill="var(--primaryText)" height={40} width={40} />
					</Badge>
				</Paper>
				<CodeSnippet code={thirdSnippet} language="tsx" fileName="App.tsx" />
			</section>
			<section>
				<h4>Badge Alignment</h4>
				<p>
					You can use the <code>verticalAlignment</code> property to control vertical alignment of the badge
					and <code>horizontalAlignment</code> property to control horizontal alignment of the badge.
				</p>
				<Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
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
				</Paper>
				<CodeSnippet code={fourthSnippet} language="tsx" fileName="App.tsx" />
			</section>
			<section>
				<h4>Regular Badges (like Chip)</h4>
				<p>
					To use Badge Component for use other than Notifications you can pass any string to{' '}
					<code>content</code> property of the Badge and don't pass any children to the Badge Component.
				</p>
				<Paper
					style={{
						height: 100,
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						padding: '2rem'
					}}
				>
					<Badge content="Danger" contentColor="#ffffff" />
					<Badge content="Success" bgColor="green" />
					<Badge content="Warning" bgColor="orange" />
					<Badge content="Info" bgColor="skyblue" />
					<Badge content="Blue" bgColor="blue" />
					<Badge content="Pink" bgColor="pink" />
				</Paper>
				<CodeSnippet code={fifthSnippet} language="tsx" fileName="App.tsx" />
			</section>
		</React.Fragment>
	);
}
