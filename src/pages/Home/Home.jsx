import { JobCard } from '../../components';
import { IconButton } from '@mui/material';
import { logo } from '../../assets/images';
import icons from '../../assets/icons';

const Home = () => {
  return (
    <div
      style={{
        marginTop: '100px',
      }}
    >
      <h1>Home Card</h1>
      <JobCard
        delay={100}
        jobDesc={`In this updated code, the YourComponent now takes a prop cardType that represents the type of the card. You can pass the appropriate cardType value to the component when using it. The shouldRenderTechButtons variable is set to true only if the cardType is neither 'homeCard' nor 'companyDetailCard'. If the cardType matches either of these two values, the tech buttons won't be rendered. Otherwise, the tech buttons will be rendered.`}
        actionButton={
          <IconButton aria-label='settings'>
            <img src={icons.isMore} alt='isMore' />
          </IconButton>
        }
        btnText={'Visit now'}
        maxSalary={100}
        minSalary={50}
        jobId={'64371284'}
        logo={logo}
        type='homeJobcard'
        title={'Passionate Programmer'}
        requiredTech={['PHP', 'LARAVEL', 'JAVASCRIPT', 'REACT']}
      />
      <br />
      <br />
      <h1>Company detail Card</h1>
      <JobCard
        delay={100}
        jobDesc={`In this updated code, the YourComponent now takes a prop cardType that represents the type of the card. You can pass the appropriate cardType value to the component when using it. The shouldRenderTechButtons variable is set to true only if the cardType is neither 'homeCard' nor 'companyDetailCard'. If the cardType matches either of these two values, the tech buttons won't be rendered. Otherwise, the tech buttons will be rendered.`}
        actionButton={
          <IconButton aria-label='settings'>
            <img src={icons.isMore} alt='isMore' />
          </IconButton>
        }
        btnText={'Visit now'}
        maxSalary={100}
        minSalary={50}
        jobId={'64371284'}
        logo={logo}
        type='companyDetail'
        title={'Passionate Programmer'}
        requiredTech={['PHP', 'LARAVEL', 'JAVASCRIPT', 'REACT']}
      />
      <br />
      <br />

      <h1>Job Search Card</h1>
      <JobCard
        delay={100}
        jobDesc={`In this updated code, the YourComponent now takes a prop cardType that represents the type of the card. You can pass the appropriate cardType value to the component when using it. The shouldRenderTechButtons variable is set to true only if the cardType is neither 'homeCard' nor 'companyDetailCard'. If the cardType matches either of these two values, the tech buttons won't be rendered. Otherwise, the tech buttons will be rendered.`}
        actionButton={
          <IconButton aria-label='settings'>
            <img src={icons.isMore} alt='isMore' />
          </IconButton>
        }
        maxSalary={100}
        minSalary={50}
        jobId={'64371284'}
        logo={logo}
        title={'Passionate Programmer'}
        btnText={'Apply Now'}
        requiredTech={['PHP', 'LARAVEL', 'JAVASCRIPT', 'REACT']}
        variant={'primaryLighter'}
      />
    </div>
  );
};

export default Home;
