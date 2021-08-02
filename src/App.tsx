import styled from 'styled-components';
import './App.css';
import { GA4R } from 'ga-4-react';

const StyledName = styled.span`
  color: #e31c6d;
  font-family: 'open-sans';
`;

function App() {
  return (
    <GA4R code={process.env.GA_ANALYTICS as string}>
      <div className="App">
        <header className="App-header">
          <h1>
            Hello, I&apos;m <StyledName>Erik Cohen</StyledName>
          </h1>
          <p>I&apos;m a Web Developer</p>
        </header>
      </div>
    </GA4R>
  );
}

export default App;
