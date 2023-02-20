import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';
import Header from "./Header";

const Styles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&display=swap');
  body{
    background: #2d2d2d; 
    color: #fff;
    font-family: Roboto Condensed, sans-serif;
  } 
`;

function App() {
  return (
    <div>
      <Reset />
      <Styles />
      <Header />
    </div>
  );
}

export default App;
