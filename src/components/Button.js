import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  return (
        <button type="button" className={"m-1 btn btn-"+props.btnType} onClick={props.onClick}>
            {props.btnText}
        </button>
  )
}

Button.propTypes={
    btnText: PropTypes.string.isRequired,
    btnType: PropTypes.string
}