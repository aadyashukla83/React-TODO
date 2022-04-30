import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'
const Header = ({title,onAdd,showAdd}) => {
  return (
      <header className='header'>
        <h1 >{title}</h1>
        <Button  color={showAdd?'red':'green'} text={showAdd?'Close':'Add'} onClick={onAdd}/>
      </header>
  )
}
//default props
Header.defaultProps={
  title:'Default props active'
}
//validating props type as input
Header.propTypes={
  title:PropTypes.string.isRequired,
}
export default Header