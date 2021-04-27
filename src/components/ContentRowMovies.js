import React from 'react';
import PropTypes from 'prop-types'
import Card from './Card'

function ContentRowMovies({cards}){
    return (
        <div className="row">  
            {/* <!-- Movies in Data Base --> */}
            {cards.map((card, i) => (
                <Card key={card + i} {...card} />

            )
            )}
            {/* <!-- End movies in Data Base --> */}
        </div>
    )

}

ContentRowMovies.propTypes = {
        cards: PropTypes.array.isRequired,
} 
        

export default ContentRowMovies;