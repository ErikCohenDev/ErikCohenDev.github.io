import styled from 'styled-components';
import './App.css';

const StyledName = styled.span`
  color: #e31c6d;
  font-family: 'open-sans';
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, I&apos;m <StyledName>Erik Cohen</StyledName>
        </h1>
        <p>I&apos;m a Web Developer</p>
      </header>
    </div>
  );
}

export default App;
