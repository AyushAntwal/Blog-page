import { Navbar , Container , Form , Button } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const SearchBar = ({tagFilter, titleFilter,data})=> {
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
    const tags = data.map(e=>e.Tag).filter(unique);
      return (
        <>
        <Navbar bg="light" variant="light">
            <Form.Label className="m-2 lable">Category</Form.Label>
            <Form.Select className="w-2 m-3" onChange={tagFilter}>
                <option value={"all"} defaultChecked>All</option>
                {tags.map((e,index) =>{return <option key={index} value={e}>{e}</option>
                })}
            </Form.Select>
            <Container fluid>
                <Form className="input-group d-flex" action="#" onSubmit={titleFilter}>
                    <Form.Control
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button type="submit" variant="outline-success">Search</Button>
                </Form>
            </Container>
            </Navbar>
        </>
    );
}

export default SearchBar;