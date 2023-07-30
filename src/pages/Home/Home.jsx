import { JobCard, JobDetail } from '../../components';
const Home = () => {
  return (
    <div style={{ marginTop: '200px' }}>
      <JobCard
        actionButton={<button>-</button>}
        type='homeJobcard'
        jobDesc={'jksadhkajhakjhywuiedfhasjkdfhweuidya'}
        title={'Full Stack Web Developer'}
        requiredTech={['PHP', 'Laravel', 'PYTHON']}
        delay={1}
      />
      <br />
      <JobCard
        type='companyDetail'
        actionButton={<button>-</button>}
        variant={'primaryLighter'}
        jobDesc={'jksadhkajhakjhywuiedfhasjkdfhweuidya'}
        title={'Full Stack Web Developer'}
        requiredTech={['PHP', 'Laravel', 'PYTHON']}
        delay={1}
      />
      <br />
      <JobCard
        actionButton={<button>-</button>}
        title={'Full Stack Web Developer'}
        requiredTech={['PHP', 'Laravel', 'PYTHON']}
        delay={1}
        jobDesc={'jksadhkajhakjhywuiedfhasjkdfhweuidya'}
      />
    </div>
  );
};

export default Home;
