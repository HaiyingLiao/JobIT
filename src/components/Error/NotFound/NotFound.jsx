import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.palette.mode === 'light' ? '#FAFAFB' : '#13131A',
				width: '100%',
				height: '100%',
				position: 'fixed',
				top: '0',
			})}
		>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100%',
					width: '100%',
					maxWidth: '500px',
					margin: '0 auto',
					padding: '1rem',
				}}
			>
				<img
					src='/404.svg'
					alt='404 image'
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'contain',
						objectPosition: 'center',
					}}
				/>
				<Typography
					paragraph
					align='center'
					sx={(theme) => ({
						color: theme.palette.mode === 'light' ? '#13131A' : '##FAFAFB',
					})}
				>
					We can't find a page that you looking for
				</Typography>
				<Button
					sx={{
						backgroundColor: '#0BAB7C',
						':hover': {
							backgroundColor: '#00c98d',
						},
					}}
					onClick={() => navigate(-1)}
					variant='contained'
				>
					Go back
				</Button>
			</Container>
		</Box>
	);
}
