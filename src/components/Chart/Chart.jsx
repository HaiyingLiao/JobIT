import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useMemo } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function handleCurrencyFormat(value) {
  if (!value) return;
  if (this.chart.width < 350) {
    return (value / 1000).toFixed(0) + 'k USD';
  } else {
    value = value.toLocaleString('en-US');
    return value + ' USD';
  }
}

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
      ticks: {
        callback: function (value) {
          return handleCurrencyFormat.call(this, value);
        },
      },
      beginAtZero: true,
      grid: {
        color: isDark ? '#1c1c24' : '#F5F5F8',
      },
    },

    x: {
      ticks: {
        font: {
          size: window.innerWidth < 900 ? 10 : 14,
        },
      },
      grid: {
        display: false,
      },
    },
  },
});

export default function Chart({ isMobile, data, error, isFetching }) {
  const isDarkTheme = useTheme().palette.mode === 'dark';

  const refactoredData = useMemo(() => {
    if (!data || !data.data.length > 0) return;
    const uniqueLabels = [
      ...new Set(data.data.map((job) => job.publisher_name)),
    ];
    const barsToDisplay = ['min_salary', 'max_salary', 'median_salary'];
    const colorMap = {
      min_salary: '#FDDD8C',
      max_salary: '#0BAB7C',
      median_salary: '#FFBBD7',
    };

    const salaryData = uniqueLabels.reduce((acc, label) => {
      const samePublisherList = data.data.filter(
        (job) => job.publisher_name === label
      );
      const publishersSalaries = samePublisherList.reduce((acc, job) => {
        barsToDisplay.forEach((barType, i) => {
          acc[i] = (acc[i] || 0) + job[barType];
        });
        return acc;
      }, []);

      acc[label] = publishersSalaries.map((v) =>
        Math.round(v / samePublisherList.length)
      );
      return acc;
    }, {});

    const dataset = barsToDisplay.map((barType, barIndex) => {
      return {
        data: uniqueLabels.map((label) => salaryData[label][barIndex]),
        backgroundColor: colorMap[barType],
        barThickness: 12,
        borderRadius: 50,
        label: barType,
      };
    });
    return {
      labels: uniqueLabels,
      datasets: dataset,
    };
  }, [data]);

  if (error)
    return (
      <Box
        sx={{
          width: isMobile ? '100%' : '90%',
          margin: '0 auto',
          marginTop: '35px',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>Oops! No data found.</Typography>
      </Box>
    );

  if (isFetching)
    return (
      <Box
        sx={{
          width: isMobile ? '100%' : '90%',
          margin: '0 auto',
          marginTop: '35px',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress color='primary' />
      </Box>
    );

  return (
    <>
      {refactoredData ? (
        <Box
          sx={{
            width: isMobile ? '100%' : '90%',
            margin: '0 auto',
            marginTop: '35px',
            height: '100%',
          }}
        >
          <Bar options={getOptions(isDarkTheme)} data={refactoredData} />
        </Box>
      ) : (
        <Box
          sx={{
            width: isMobile ? '100%' : '90%',
            margin: '0 auto',
            marginTop: '35px',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress color='primary' />
        </Box>
      )}
    </>
  );
}
