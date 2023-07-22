import { Card, CardContent, Typography } from '@mui/material';

import CardHeader from './Cardheader';
import CardTitle from './CardTitle';
import ListSection from './ListSection';
import CompanyDesc from './CompanyDesc';
import { logo } from '../../../assets/images';
// example logo

export default function LargeJobCard() {
  const exampleResponsibilities = [
    'Design, build, test, and deploy software applications and features',
    'Carry software products through the software development life cycle (SDLC)',
    'Write clean, concise, and efficient code',
  ];

  const exampleQualifications = [
    '3+ years of professional experience working on this field',
    'Bachelor degree in computer science, software engineering, or related field',
    'Proficiency in at least one programming language (e.g., Java, C#, C++)',
  ];

  const exampleJobDesc =
    'Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us. In this role, you would use various tech stacks, including Laravel, Node JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS. You will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.';

  return (
    <Card
      sx={{
        width: '100%',
        padding: '8px',
        maxWidth: '53.75rem',
        backgroundColor: 'customColor.jobCardBg',
      }}
    >
      <CardHeader logo={logo} />
      <CardContent>
        <CardTitle
          address={'UIHUT Technologies LLC'}
          title={'Passionate Programmer'}
        />
        <div>
          <Typography
            variant='h4'
            pt={5}
            sx={{ fontSize: '1rem', fontWeight: '700' }}
          >
            About The Job
          </Typography>
          <Typography
            paragraph
            pt={1}
            sx={{
              fontWeight: '400',
              color: 'text.secondary',
              fontSize: '0.9rem',
            }}
          >
            {exampleJobDesc}
          </Typography>
        </div>
        <ListSection
          listData={exampleResponsibilities}
          title='Responsibilities'
        />
        <ListSection
          listData={exampleQualifications}
          title='Qualifications and Skill Sets'
        />

        <CompanyDesc
          companyName={'UIHUT'}
          companydesc={
            "UIHUT is a design and coding resources platform for designers, developers and entrepreneurs. We're building a digital marketplace to simplify the creation of websites, apps and software on any device. UIHUT is based in New York City and is privately funded by some of the industry's leading investors."
          }
          followers={200000}
          logo={logo}
        />
      </CardContent>
    </Card>
  );
}
