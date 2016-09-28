const React = require('react')

const Header = () => (
  <header className='row header group'>
    <h1 className='logo'>ChineseGrub</h1>

    <a href='#' className='bag'>
      <div>
        <img src='img/bag.png' className='bag-icon' />
        <span className='bag-count'>0</span>
      </div>
    </a>
  </header>
)
module.exports = Header
