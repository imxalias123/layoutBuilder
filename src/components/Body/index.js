// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="middle-container">
          {showLeftNavbar ? (
            <div className="left-nav-bar-container">
              <h1 className="left-nav-h1">Left Navbar Menu</h1>
              <ul className="flex-wrap">
                <li>
                  <p>Item 1</p>
                </li>
                <li>
                  <p>Item 2</p>
                </li>
                <li>
                  <p>Item 3</p>
                </li>
                <li>
                  <p>Item 4</p>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}

          {showContent ? (
            <div className="Content-container">
              <h1 className="content-h1">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim venim.
              </p>
            </div>
          ) : (
            ''
          )}

          {showRightNavbar ? (
            <div className="right-nav-container">
              <h1 className="left-nav-h1">Right Navbar</h1>
              <div className="wrap-box">
                <div className="box">
                  <p>Ad 1</p>
                </div>
                <div className="box">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
