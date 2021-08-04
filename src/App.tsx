import styled from 'styled-components';
import { GA4R } from 'ga-4-react';

const StyledName = styled.span`
  color: #e31c6d;
  font-family: 'open-sans';
`;

const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const TagLine = styled.h1`
  margin-bottom: 0;
`;

const CTA = styled.button`
  border: 0;
  font-size: 22px;
  padding: 15px 20px;
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px #171717;
  cursor: pointer;
  background-color: #43a047;
  color: #fff;

  &:hover {
    background-color: #2e7d32;
  }
`;

const CALENDLY_URL = 'https://www.calendly.com/erik-cohen-dev';

function App() {
  return (
    <GA4R code={process.env.GA_ANALYTICS as string}>
      <AppContainer className="App">
        <TagLine>
          Hello, I&apos;m <StyledName>Erik Cohen</StyledName>
        </TagLine>
        <p style={{ maxWidth: '500px' }}>
          I&apos;ve been developing react web applications for the past 10
          years.&nbsp;I&apos;d like to learn more about your project.
        </p>
        <form method="get" action={CALENDLY_URL}>
          <CTA type="submit">Set up a time to talk</CTA>
        </form>
      </AppContainer>
    </GA4R>
  );
}

export default App;
