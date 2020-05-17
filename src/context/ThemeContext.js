import React from "react";

// Object to be consumed by subscribed components
const defaultState = {
  dark: false, 
  toggleDark: () => {},
};

// Create context for theming
const ThemeContext = React.createContext(defaultState);

// Theme Provider Class
class ThemeProvider extends React.Component {
  state = {
    dark: false
  }

  componentDidMount() {
    const lsDark = JSON.parse(localStorage.getItem('dark'))

    if (lsDark) {
      this.setState({ dark: lsDark })
    }
  }

  componentDidUpdate(prevState) {
    const { dark } = this.state

    if (prevState.dark !== dark) {
      localStorage.setItem('dark', JSON.stringify(dark))
    }
  }

  toggleDark = () => {
    this.setState(prevState => ({ dark: !prevState.dark }))
  }

  render() {
    const { children } = this.props
    const { dark } = this.state

    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }