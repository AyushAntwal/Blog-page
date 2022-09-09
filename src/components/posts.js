import Card from 'react-bootstrap/Card';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../img/empty.png'
import './style.css';
import Badge from 'react-bootstrap/Badge';

function Posts({data}) {
    if(data.length){
        return (
            <div className="container-fluid">  
            <div className="row row-cols-3 mx-1 justify-content-md-center">
                {data.map(e => { return (
                                <Card key={e.id} className="card mb-3 col m-3 p-2" style={{ width: '25rem'}}>
                                <Card.Header className='card-header' as="h5"><Badge bg="secondary">{e.Tag}</Badge></Card.Header>
                                <Card.Body>
                                    <Card.Title className="h_truncate">{e.Title}</Card.Title>
                                    <Card.Text className="p_truncate">{e.Post}
                                    </Card.Text>
                                   
                                </Card.Body>
                                <Card.Footer>
                                   <a href="www.google.com">Read More -&gt;</a>
                                </Card.Footer>
                        </Card>
                );} )}
            </div>
            </div>);
    }
    else {
        return (
            <div className='container-fluid '>
                <div class="text-center">
                    <img src={logo} class="rounded" alt="..."/>
                </div>
            </div>
        );
    }
    
}

export default Posts;