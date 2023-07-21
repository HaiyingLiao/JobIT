import { Box, Container, Typography, Button } from '@mui/material';

import { ErrorImage } from './style';

export default function ServerError() {
	return (
		<Box
			sx={{
				height: '100%',
				width: '100%',
			}}
		>
			<Container
				maxWidth='sm'
				sx={{
					display: 'flex',
					color: '#000',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					gap: '1rem',
					margin: '0 auto',
				}}
			>
				<ErrorImage
					src='/server-error.png'
					alt='server image error'
					width={577}
					height={400}
				/>
				<Typography align='center' variant='h3' sx={{ fontWeight: '700' }}>
					Something went wrong!
				</Typography>
				<Typography align='center' paragraph sx={{ fontSize: '13px' }}>
					Our server encountered an error while processing your request. We
					apologize for the inconvenience and are working diligently to resolve
					the issue. <br /> <br /> Please try again later Thank you for your
					patience.
				</Typography>
				<Button
					onClick={() => window.location.reload()}
					variant='contained'
					sx={{
						backgroundColor: 'primary',
					}}
				>
					Reload
				</Button>
			</Container>
		</Box>
	);
}
