import React from 'react'
import PropTypes from 'prop-types';

const Result = ({value}) => {

    //const {user, activo, value} = props;

    return (
        <div>
            <div className="result">
                <span>{value}</span>
            </div>
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}

export default Result