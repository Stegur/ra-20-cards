import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
    return (

        <div className="card" style={{ width: props.width }}>
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">{props.btnText}</a>
            </div>
        </div>

    )
}

Card.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
}

export default Card

