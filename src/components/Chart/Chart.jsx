import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function Chart({ isMobile, data }) {
  console.log(data);
  const isDarkTheme = useTheme().palette.mode === 'dark';

  const getOptions = (isDark) => ({
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0)',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {},
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            if (!value) return;
            return `${value} USD`;
          },
          stepSize: 20000,
        },
        grid: {
          color: isDark ? '#1c1c24' : '#F5F5F8',
        },
      },

      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  });

  // const filteredData = data?.filter(
  //   (job) => job.publisher_name === 'Glassdoor'
  // );

  // let glassdoorAverage = 0;
  // if (filteredData.length > 0) {
  //   const sum = filteredData
  //     .map((job) => job.median_salary)
  //     .reduce((acc, cv) => acc + cv, 0);
  //   glassdoorAverage = sum / filteredData.length;}

  const chartData = {
    labels: ['Glassdoor', 'Indeed', 'Salary.com'],
    datasets: [
      {
        data: [50000, 50000, 40000],
        backgroundColor: '#FDDD8C',
        barThickness: 12,
        borderRadius: 50,
      },
      {
        data: [10000, 60000, 30000],
        backgroundColor: '#0BAB7C',
        barThickness: 12,
        borderRadius: 50,
      },
      {
        data: [20000, 50000, 60000],
        backgroundColor: '#FFBBD7',
        barThickness: 12,
        borderRadius: 50,
      },
    ],
  };

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '90%',
        margin: '0 auto',
        marginTop: '35px',
        height: '100%',
      }}
    >
      <Bar options={getOptions(isDarkTheme)} data={chartData} />
    </Box>
  );
}
