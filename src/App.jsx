import { CustomThemeProvider } from "./contexts/CustomThemeProvider";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <CustomThemeProvider>
      <Layout>
        <Navbar />
        <Profiles />
      </Layout>
    </CustomThemeProvider>
  );
}

export default App;
