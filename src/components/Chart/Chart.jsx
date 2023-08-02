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
import { useEffect, useMemo } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

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
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return `${value} USD`;
        },
      },
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

// const filteredData = data?.filter(
//   (job) => job.publisher_name === 'Glassdoor'
// );

// let glassdoorAverage = 0;
// if (filteredData.length > 0) {
//   const sum = filteredData
//     .map((job) => job.median_salary)
//     .reduce((acc, cv) => acc + cv, 0);
//   glassdoorAverage = sum / filteredData.length;
// }
// const chartData = {
//   labels: ['Glassdoor', 'Indeed', 'Salary.com'],
//   datasets: [
//     {
//       data: [50000, 50000, 40000],
//       backgroundColor: '#FDDD8C',
//       barThickness: 12,
//       borderRadius: 50,
//       label: 'Minimum salary',
//     },
//     {
//       data: [10000, 60000, 30000],
//       backgroundColor: '#0BAB7C',
//       barThickness: 12,
//       borderRadius: 50,
//       label: 'Maximum salary',
//     },
//     {
//       data: [20000, 50000, 60000],
//       backgroundColor: '#FFBBD7',
//       barThickness: 12,
//       borderRadius: 50,
//       label: 'Median salary',
//     },
//   ],
// };

export default function Chart({ isMobile, data, error, isFetching }) {
  console.log(data);
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
        barsToDisplay.forEach((barType, idx) => {
          acc[idx] = (acc[idx] || 0) + job[barType];
        });
        return acc;
      }, []);

      acc[label] = publishersSalaries.map((v) =>
        Math.round(v / samePublisherList.length)
      );
      return acc;
    }, {});
    console.log(salaryData);

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

  console.log(refactoredData);

  //   [
  //     {
  //         "location": "United Kingdom",
  //         "job_title": "Web Developer",
  //         "publisher_name": "Glassdoor",
  //         "publisher_link": "https://www.glassdoor.co.uk/Salary/Google-Web-Developer-Salaries-E9079_D_KO7,20.htm",
  //         "min_salary": 35000,
  //         "max_salary": 89378,
  //         "median_salary": 53381,
  //         "salary_period": "YEAR",
  //         "salary_currency": "GBP"
  //     },
  //     {
  //         "location": "United Kingdom",
  //         "job_title": "Web Developer",
  //         "publisher_name": "reed.co.uk",
  //         "publisher_link": "https://www.reed.co.uk/average-salary/average-web-developer-salary",
  //         "min_salary": 40235,
  //         "max_salary": 52248,
  //         "median_salary": 45226,
  //         "salary_period": "YEAR",
  //         "salary_currency": "GBP"
  //     },
  //     {
  //         "location": "London, UK",
  //         "job_title": "Web Developer",
  //         "publisher_name": "Indeed",
  //         "publisher_link": "https://uk.indeed.com/career/web-developer/salaries/London",
  //         "min_salary": 25715.848846583503,
  //         "max_salary": 81565.40379719542,
  //         "median_salary": 45798.72918716416,
  //         "salary_period": "YEAR",
  //         "salary_currency": "GBP"
  //     }
  // ]

  // if (!refactoredData.length) {
  //   return (
  //     <Box display='flex' justifyContent='center' alignItems='center' mt='20px'>
  //       <Typography variant='h4'>No data found.</Typography>
  //     </Box>
  //   );
  // }

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

  // if (refactoredData?.length === 0) {
  //   return (
  //     <Box
  //       sx={{
  //         width: isMobile ? '100%' : '90%',
  //         margin: '0 auto',
  //         marginTop: '35px',
  //         height: '100%',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <CircularProgress color='primary' />
  //     </Box>
  //   );
  // }

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
