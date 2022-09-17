import { CustomThemeProvider } from "./contexts/CustomThemeProvider";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <CustomThemeProvider>
      <Layout>
        <Navbar />
      </Layout>
    </CustomThemeProvider>
  );
}

export default App;
