import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CustomThemeProvider } from "./contexts/CustomThemeProvider";
import { Layout } from "./components/Layout";
import styled from "styled-components";

const Test = styled.div`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 100px;
  height: 100px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <CustomThemeProvider>
        <Layout>
          <Test>a</Test>
        </Layout>
      </CustomThemeProvider>
    </>
  );
}

export default App;
