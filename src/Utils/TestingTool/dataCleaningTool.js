// formatSalary
export function formatSalary(currency, minSalary, maxSalary) {
  if (!maxSalary || !minSalary || !currency) {
    return 'TBD';
  }

  const removeSeparators = salary => {
    return salary
      .toString()
      .replace(',', ' ')
      .replace('.', ' ');
  };

  let formattedMinSalary = removeSeparators(minSalary);
  let formattedMaxSalary = removeSeparators(maxSalary);

  if (formattedMinSalary.endsWith('000')) {
    formattedMinSalary = formattedMinSalary.slice(0, -3);
  }

  if (formattedMaxSalary.endsWith('000')) {
    formattedMaxSalary = formattedMaxSalary.slice(0, -3);
  }

  return `${formattedMinSalary.trim()}k - ${formattedMaxSalary.trim()}k ${currency}`;
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
