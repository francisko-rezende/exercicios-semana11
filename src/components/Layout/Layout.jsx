import PropTypes from "prop-types";
import { useCustomTheme } from "../../hooks/useCustomTheme";
import { themeDark, themeLight } from "../../themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../themes/GlobalStyles";
import { UsersProvider } from "../../contexts";

export const Layout = ({ children }) => {
  const { theme } = useCustomTheme();

  const selectedTheme = theme === "dark" ? themeDark : themeLight;

  return (
    <ThemeProvider theme={selectedTheme}>
      <UsersProvider>{children}</UsersProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
