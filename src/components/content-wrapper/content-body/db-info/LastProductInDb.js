import React, { Component } from 'react'

export default class LastMovieInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            data: []
        }
    }
    
    componentDidMount() {
        fetch('/api/products/dashboardLastProduct')
            .then(response => {
                return response.json()
            })
            .then(lastProduct => {
                return this.setState({data: lastProduct.data, isLoaded: true})
            })
            .catch(err => {
                return this.setState({error: err, isLoaded:true})
            })
    }

    render() {
        
            if(this.state.error && this.state.isLoaded) {
                return (
                    <h2>{`${this.state.error}`}</h2>
                )
            } else if(!this.state.isLoaded) {
                return <h1>Cargando...</h1>
            } else if(this.state.isLoaded && this.state.data) {
                return(
                    <div className="col-lg-6 mb-4">
                            {/* <!-- Last Product in DB --> */}
                        <div className="card shadow mb-4 align-items-center">
                            <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>
                            </div>
                            <div className="card-body text-center">
                                <h6>{ this.state.data.name }</h6>
                            <div>
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem"}} src={`/img/products/${this.state.data.image}`} alt={this.state.data.name} />
                            </div>
                            <p className="text-center">{ `${this.state.data.features}` }</p>
                            <div className="text-center">
                                <a className="btn btn-danger " rel="nofollow" href={`http://localhost:3000/productos/${this.state.data.id}`}>Ver detalle del producto</a>

                            </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }
}