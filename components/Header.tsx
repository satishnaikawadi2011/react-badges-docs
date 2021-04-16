import React from 'react';
import { useRouter } from 'next/router';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '../icons/GithubIcon';
import IconButton from '@material-ui/core/IconButton';
import NpmIcon from '../icons/NpmIcon';
import DarkModeIcon from '../icons/DarkModeIcon';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root:
			{
				flexGrow: 1
			},
		menuButton:
			{
				marginRight: theme.spacing(2)
			},
		title:
			{
				flexGrow: 1
			},
		toolbar:
			{
				display: 'flex',
				justifyContent: 'space-between'
			}
	})
);

export default function Haeder() {
	const router = useRouter();
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ backgroundColor: 'var(--primaryColor)' }}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h5" className={classes.title}>
						React Badges
					</Typography>
					<div>
						<IconButton
							onClick={() => router.push('https://github.com/satishnaikawadi2011/react-badges')}
							edge="end"
							className={classes.menuButton}
						>
							<GithubIcon fill="#ffffff" height={30} width={30} />
						</IconButton>
						<IconButton edge="end" className={classes.menuButton}>
							<NpmIcon fill="#ffffff" height={40} width={40} />
						</IconButton>
						<IconButton edge="end" className={classes.menuButton}>
							<DarkModeIcon fill="#ffffff" height={30} width={30} />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
