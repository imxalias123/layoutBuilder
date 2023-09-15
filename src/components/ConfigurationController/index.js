// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeRightNav = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      const onChangeLeftNav = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeContentNav = event => {
        onToggleShowContent(event.target.value)
      }

      return (
        <div className="nav-container">
          <h1 className="nav-h1">Layout</h1>
          <div className="checkboxes-container">
            <div className="spacing">
              <input
                id="Content"
                type="checkbox"
                className="checkbox"
                checked={showContent}
                onClick={onChangeContentNav}
              />
              <label htmlFor="Content" className="label">
                Content
              </label>
            </div>
            <div className="spacing">
              <input
                id="Left Navbar"
                type="checkbox"
                className="checkbox"
                checked={showLeftNavbar}
                onClick={onChangeLeftNav}
              />
              <label htmlFor="Left Navbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="spacing">
              <input
                id="Right Navbar"
                type="checkbox"
                className="checkbox"
                checked={showRightNavbar}
                onClick={onChangeRightNav}
              />
              <label htmlFor="Right Navbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
