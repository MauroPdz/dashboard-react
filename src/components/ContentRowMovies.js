import React from 'react';
import PropTypes from 'prop-types'

function ContentRowMovies({cards}){
    return (
        <div className="row">  
            {/* <!-- Movies in Data Base --> */}
            {cards.map((card, i) => (

                <div key={card + i} className="col-md-4 mb-4">
                    <div className={`card border-left-${card.style} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${card.style} text-uppercase mb-1`}>{card.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{card.number}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`${card.icon} fa-2x text-gray-300`}></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
            )}
            {/* <!-- End movies in Data Base --> */}
        </div>
    )

}

ContentRowMovies.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
}

ContentRowMovies.defaultProps = {
    title: "Sin titulo",
    style: "warning",
    number: 0,
    icon: "fas fa-ban"
}

export default ContentRowMovies;