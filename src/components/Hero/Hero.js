import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Machine Learning Portfolio
        </SectionTitle>
        <SectionText>
        I am a machine learning enthusiast and enjoy spending time building and testing models, mostly emphasizing on financial analysis.
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/pdwi2020?tab=repositories'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;