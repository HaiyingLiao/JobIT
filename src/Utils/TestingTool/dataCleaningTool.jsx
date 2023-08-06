// format salary
export function formatSalary(currency) {
  const result = new Intl.NumberFormat('en-US', {
    useGrouping: false,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    notation: 'compact'
  }).format(currency);
  return result;
}

// getJobResponsbilities
export function getJobResponsibilities(responsibilities) {
  if (!responsibilities) {
    return 'No responsibilities specified';
  }
  return responsibilities.map(item => <li key={item}>{item}</li>);
}

// requiredSkills
export function requiredSkills(requiredSkills) {
  if (!requiredSkills) {
    return 'No required skills specified';
  }
  return requiredSkills.map(item => <li key={item}>{item}</li>);
}

// shortenDescirption - here I have padded it with empty spaces at the end... if the description supplied is too short (so the height of the box stays the same) - but not sure if it will work well.
export function shortenDescription(description) {
  if (description.length === 0) {
    return 'No job description available.';
  }
  if (description.length <= 315) {
    const newDescription = description + '...';
    return newDescription.padEnd(315, ' ');
  }
  return `${description.substring(0, 315).trim()} + '...'`;
}

// formatJobType
export function formatJobType(jobType) {
  switch (jobType) {
    case 'CONTRACTOR':
      return 'Contract';
    case 'FULL_TIME':
      return 'Full-time';
    case 'PART_TIME':
      return 'Part-time';
    case 'TEMPORARY':
      return 'Temporary';
    case 'INTERNSHIP':
      return 'Internship';
    default:
      return 'Not Specified';
  }
}

// Employer Name
export function companyName(employerName) {
  if (!employerName) return 'No Comapny Name found';
  return employerName;
}

// If Job Id exists
export function jobId(jobId) {
  if (!jobId) return 'No Job Id found';
  return jobId;
}

export const handleFalsy = (value, defaultValue) =>
  value !== undefined && value !== null ? value : defaultValue;

export const sinceDays = dateData => {
  // Step 1: Parse the given date string into a Date object
  const givenDate = new Date(dateData);

  // Step 2: Get the current date
  const currentDate = new Date();

  // Step 3: Calculate the time difference between the two dates in milliseconds
  const timeDifference = currentDate - givenDate;

  // Step 4: Calculate the number of days, hours, and seconds
  const numDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const numHours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const numMinutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const numSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  if (numDays >= 1) {
    return `${numDays} days`;
  }
  if (numHours >= 1) {
    return `${numHours} hours `;
  }
  if (numMinutes >= 1) {
    return `${numMinutes} minutes `;
  } else {
    return `${numSeconds} seconds`;
  }
};
