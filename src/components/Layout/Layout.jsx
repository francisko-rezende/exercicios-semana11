import PropTypes from "prop-types";
import { useCustomTheme } from "../../hooks/useCustomTheme";
import { themeDark, themeLight } from "../../themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../themes/GlobalStyles";

export const Layout = ({ children }) => {
  const { theme } = useCustomTheme();

  const selectedTheme = theme === "dark" ? themeDark : themeLight;

  console.log(selectedTheme);
  return (
    <ThemeProvider theme={selectedTheme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
