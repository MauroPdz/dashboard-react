import PropTypes from 'prop-types'

export default function Card ({title, style, number, icon}) {
    return (

        <div className="col-md-4 mb-4">
        <div className={`card border-left-${style} shadow h-100 py-2`}>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
            <div className="col mr-2">
                <div className={`text-xs font-weight-bold text-${style} text-uppercase mb-1`}>{title}</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{number}</div>
            </div>
            <div className="col-auto">
                <i className={`${icon} fa-2x text-gray-300`}></i>
            </div>
            </div>
        </div>
        </div>
    </div>

    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
} 
    

Card.defaultProps = {
title: "Sin titulo",
style: "warning",
number: 0,
icon: "fas fa-ban"
}