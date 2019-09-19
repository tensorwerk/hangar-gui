import React, { Component, createContext } from "react";

const ThemeContext = createContext();

export class ThemeProvider extends Component {
  toggleThemeMode = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    });
    if (this.state.isDarkMode) {
      this.setLightTheme();
    } else {
      this.setDefaultTheme();
    }
  };

  getPreferredTheme = () => {
    if (localStorage.getItem("hangarTheme") === null) {
      return true;
    } else {
      this.setLightTheme();
      return false;
    }
  };
  setLightTheme = () => {
    document.documentElement.setAttribute("hangarTheme", "light");
    localStorage.setItem("hangarTheme", "light");
  };

  setDefaultTheme = () => {
    document.documentElement.removeAttribute("hangarTheme");
    localStorage.removeItem("hangarTheme");
  };

  state = {
    isDarkMode: this.getPreferredTheme(),
    toggleThemeMode: this.toggleThemeMode,
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
