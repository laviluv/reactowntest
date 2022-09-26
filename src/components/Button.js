import PropTypes from 'prop-types'

//const Button = (props) => {
const Button = ({ color, text, onClick }) => {

// const onClick = (e) => {
//     console.log(e)
// }

  return (
    <button 
    style={{backgroundColor: color}} 
    className='btn' 
    onClick={onClick} 
    >{text}
    </button>
  )
}

Button.defaultProps = {
    backgroundColor: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button