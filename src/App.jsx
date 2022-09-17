import { CustomThemeProvider } from "./contexts/CustomThemeProvider";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <CustomThemeProvider>
      <Layout>
        <Navbar />
        <Card />
      </Layout>
    </CustomThemeProvider>
  );
}

export default App;
