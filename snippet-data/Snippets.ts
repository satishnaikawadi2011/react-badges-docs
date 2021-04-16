export const firstSnippet = `import React from 'react';
import { Badge } from 'react-badges';

const App = () => {
  return (			<React.Fragment>
                    <Badge content={5} contentColor="#ffffff">
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="blue">
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="pink">
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} bgColor="aqua">
						<NotificationIcon height={40} width={40} />
					</Badge>
					</React.Fragment>
	);
};`;

export const secondSnippet = `import React from 'react';
import { Badge } from 'react-badges';

const App = () => {
	return (
        	<React.Fragment>
					<Badge content={99} contentColor="#ffffff">
						<NotificationIcon  height={40} width={40} />
					</Badge>
					<Badge content={99} max={75} bgColor="blue">
						<NotificationIcon  height={40} width={40} />
					</Badge>
					<Badge content={100} max={99} bgColor="pink">
						<NotificationIcon  height={40} width={40} />
					</Badge>
					<Badge content={10000} max={999} bgColor="aqua">
						<NotificationIcon  height={40} width={40} />
					</Badge>
          		</React.Fragment>
	);
};

export default App;
`;

export const thirdSnippet = `import React from 'react';
import { Badge } from 'react-badges';

const App = () => {
	return (
        	<React.Fragment>
					<Badge content={0} bgColor="pink">
						<NotificationIcon  height={40} width={40} />
					</Badge>
					<Badge content={0} hideZero bgColor="aqua">
						<NotificationIcon  height={40} width={40} />
					</Badge>
          		</React.Fragment>
	);
};

export default App;
`;

export const fourthSnippet = `import React from 'react';
import { Badge } from 'react-badges';

const App = () => {
	return (
        	<React.Fragment>
					<Badge content={5} verticalAlignment="top" horizontalAlignment="right" bgColor="pink">
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} verticalAlignment="top" horizontalAlignment="left" bgColor="blue">
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} verticalAlignment="bottom" horizontalAlignment="right" bgColor="orange">
						<NotificationIcon height={40} width={40} />
					</Badge>
					<Badge content={5} verticalAlignment="bottom" horizontalAlignment="left" bgColor="green">
						<NotificationIcon height={40} width={40} />
					</Badge>
          	</React.Fragment>
	);
};

export default App;
`;

export const fifthSnippet = `import React from 'react';
import { Badge } from 'react-badges';

const App = () => {
	return (
        	<React.Fragment>
					<Badge content="Danger" contentColor="#ffffff" />
					<Badge content="Success" bgColor="green" />
					<Badge content="Warning" bgColor="orange" />
					<Badge content="Info" bgColor="skyblue" />
					<Badge content="Blue" bgColor="blue" />
					<Badge content="Pink" bgColor="pink" />
          	</React.Fragment>
	);
};

export default App;
`;
