import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onChangeShowContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
  }

  onChangeShowLeftNavbar = () => {
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }))
  }

  onChangeShowRightNavbar = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onChangeShowContent,
          onToggleShowLeftNavbar: this.onChangeShowLeftNavbar,
          onToggleShowRightNavbar: this.onChangeShowRightNavbar,
        }}
      >
        <div className="container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
