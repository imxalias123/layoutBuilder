// Write your code here
import './index.css'

const Layout = () => (
  <div className="layout-container">
    <div className="card-container">
      <div className="header-container">
        <h1 className="header-h1">Header</h1>
      </div>
      <div className="middle-container">
        <div className="left-nav-bar-container">
          <p className="left-nav-h1">Left Navbar Menu</p>
          <div className="flex-wrap">
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
          </div>
        </div>
        <div className="Content-container">
          <p className="content-h1">Content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
            ad minim venim.
          </p>
        </div>
        <div className="right-nav-container">
          <p className="left-nav-h1">Right Navbar</p>
          <div className="wrap-box">
            <div className="box">
              <p>Ad 1</p>
            </div>
            <div className="box">
              <p>Ad 2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <h1 className="footer-h1">Footer</h1>
      </div>
    </div>
  </div>
)

export default Layout
