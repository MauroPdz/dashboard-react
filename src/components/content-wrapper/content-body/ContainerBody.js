import ContentRowCards from './ContentRowCards'
import DatabaseInfo from './DatabaseInfo'
import Table from './Table'

function ContainerBody() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
                <div className="row">
                <ContentRowCards />
                <DatabaseInfo />
                <Table />
                </div>
        </div>
    )
}

export default ContainerBody