import React, { Component } from 'react'
import UsersTable from './tables/UsersTable'
import ProductsTable from './tables/ProductsTable'
// import 'bootstrap/dist/css/bootstrap.min.css'

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: 'products',
            error: null,
        }
    }
    
    render() {
        {
            if (this.state.table == 'products') {
                return (
                    <>
                        <div className="p-3 table-responsive card shadow mb-4" id="table">
                            <a href="/#table" className="h3 text-center"
                                onClick={() => this.setState({ table: 'users' })}
                            >Ver usuarios</a>
                            <ProductsTable />
                        </div>
                    </>
                )
            } else if (this.state.table == 'users') {
                return (
                    <>
                        <div className="p-3 table-responsive card shadow mb-4" id="table">
                            <a href="/#table" className="h3 text-center"
                                onClick={() => this.setState({ table: 'products' })}>Ver productos</a>
                            <UsersTable/>
                        </div>
                    </>
                )
            } else {
                <div>Ha ocurrido un error</div>
            }
        }
    }
}