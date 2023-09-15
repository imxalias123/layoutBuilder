// Write your code here
import './index.css'

const ConfigurationController = () => (
  <div className="nav-container">
    <h1 className="nav-h1">Layout</h1>
    <div className="checkboxes-container">
      <input id="checkbox" type="checkbox" className="checkbox" />
      <label htmlFor="checkbox" className="label">
        Content
      </label>
      <input id="checkbox" />
      <label htmlFor="checkbox" className="label">
        Left Navbar
      </label>
      <input id="checkbox" type="checkbox" className="checkbox" />
      <label htmlFor="checkbox" className="label">
        Right Navbar
      </label>
    </div>
  </div>
)

export default ConfigurationController
