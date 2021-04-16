import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '../icons/GithubIcon';
import IconButton from '@material-ui/core/IconButton';
import NpmIcon from '../icons/NpmIcon';
import DarkModeIcon from '../icons/DarkModeIcon';
import LightModeIcon from '../icons/LightModeIcon';
import LogoIcon from '../icons/LogoIcon';

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
				justifyContent: 'space-between',
				width: '100vw'
			}
	})
);

export default function Haeder() {
	const router = useRouter();
	const classes = useStyles();
	const [
		darkMode,
		setDarkMode
	] = useState<boolean>(true);

	const handleChangeTheme = (e: any) => {
		if (!darkMode) {
			document.documentElement.setAttribute('data-theme', 'dark');
			setDarkMode(true);
		}
		else {
			document.documentElement.setAttribute('data-theme', 'light');
			setDarkMode(false);
		}
	};
	return (
		<div className={classes.root}>
			<AppBar position="fixed" style={{ backgroundColor: 'var(--primaryColor)' }}>
				<Toolbar className={classes.toolbar}>
					<div style={{ display: 'flex' }}>
						<LogoIcon height={30} width={30} style={{ marginRight: 10 }} />
						<Typography variant="h5" className={classes.title}>
							React Badges
						</Typography>
					</div>
					<div>
						<IconButton
							onClick={() => router.push('https://github.com/satishnaikawadi2011/react-badges')}
							edge="end"
							className={classes.menuButton}
						>
							<GithubIcon fill="#ffffff" height={30} width={30} />
						</IconButton>
						<IconButton
							edge="end"
							className={classes.menuButton}
							onClick={() => router.push('https://www.npmjs.com/package/customizable-react-badges')}
						>
							<NpmIcon fill="#ffffff" height={40} width={40} />
						</IconButton>
						<IconButton edge="end" className={classes.menuButton}>
							{
								!darkMode ? <DarkModeIcon
									fill="#ffffff"
									height={30}
									width={30}
									onClick={handleChangeTheme}
								/> :
								<LightModeIcon fill="#ffffff" height={30} width={30} onClick={handleChangeTheme} />}
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
