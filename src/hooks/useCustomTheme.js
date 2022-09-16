import { useContext } from "react";
import { CustomThemeContext } from "../contexts/CustomThemeProvider";

export const useCustomTheme = () => {
  const { theme, toggleTheme } = useContext(CustomThemeContext);

  return { theme, toggleTheme };
};
