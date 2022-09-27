
// export const Header = (props) => {

import PropTypes from 'prop-types' /* impt */
import Button from './Button'


export const Header = ({ title }) => {   /* destructured */

// const onClick = (e) => {
//     console.log(e)
const onClick = () => {
    console.log('pressed add button')
}


  return (
    // <header className="header" style={headingStyle}>
        <header className="header">
        {/* <h1 style={{color: 'blue' }}>{title}</h1> */}
        <h1>{title}</h1>
        <Button text='Add' color='green' onClick={onClick}/>
        {/* <Button text='Delete' color='red' /> */}
    </header>
  )
}

Header.defaultProps = {
    title: '>> Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     backgroundColor: 'gray',
//     color: 'blue',
// }
export default Header;