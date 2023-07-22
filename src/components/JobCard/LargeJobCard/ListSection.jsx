import {
	List,
	ListItem,
	Typography,
	ListItemText,
	ListItemIcon,
} from '@mui/material';

import icons from '../../../assets/icons';

export default function ListSection({ title, listData }) {
	return (
		<div>
			<Typography
				variant='h5'
				pt={5}
				sx={{ fontSize: '18px', fontWeight: '700' }}
			>
				{title}
			</Typography>
			<List>
				{listData?.map((data) => (
					<ListItem key={data}>
						<ListItemIcon>
							<img src={icons.oval} alt='oval icon' />
						</ListItemIcon>
						<ListItemText
							primary={data}
							sx={{
								fontWeight: '400',
								color: 'text.secondary',
							}}
						/>
					</ListItem>
				))}
			</List>
		</div>
	);
}
