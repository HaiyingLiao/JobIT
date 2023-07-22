import { Typography } from '@mui/material';

import { RequirementWrapper } from './largeCardStyle';

export default function Requirement() {
	const exampleData = [
		{
			title: 'Experience',
			value: 'Minimum 1 year',
		},
		{
			title: 'Work Level',
			value: 'Senior Level',
		},
		{
			title: 'Employee Type',
			value: 'Full Time Jobs',
		},
		{
			title: 'Offer Salary',
			value: '$2150.0 / month',
		},
	];

	return (
		<RequirementWrapper>
			{exampleData.map((data) => (
				<div key={data.title} style={{ padding: '5px' }}>
					<Typography
						color='lightslategrey'
						variant='subtitle1'
						sx={{
							fontSize: '12px',
							fontWeight: '400',
						}}
					>
						{data.title}
					</Typography>
					<Typography
						variant='h5'
						sx={{
							fontSize: '14px',
							fontWeight: '600',
							lineHeight: '16px',
						}}
					>
						{data.value}
					</Typography>
				</div>
			))}
		</RequirementWrapper>
	);
}
