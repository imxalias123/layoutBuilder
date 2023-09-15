// Write your code here
import './index.css'

const ConfigurationController = () => (
  <div className="nav-container">
    <h1 className="nav-h1">Layout</h1>
    <div className="checkboxes-container">
      <div className="spacing">
        <input id="content" type="checkbox" className="checkbox" />
        <label htmlFor="checkbox" className="label">
          Content
        </label>
      </div>
      <div className="spacing">
        <input id="left-navbar" type="checkbox" className="checkbox" />
        <label htmlFor="checkbox" className="label">
          Left Navbar
        </label>
      </div>
      <div className="spacing">
        <input id="right-navbar" type="checkbox" className="checkbox" />
        <label htmlFor="checkbox" className="label">
          Right Navbar
        </label>
      </div>
    </div>
  </div>
)

export default ConfigurationController
