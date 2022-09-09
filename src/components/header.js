import { Navbar , Container } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CreateBlog from "./createBlog";
const Header = ()=> {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
            <Navbar.Brand className="lg p-1">
                <h3 className="text-center">Daily Blogs</h3>
            </Navbar.Brand>
                <CreateBlog />
            </Container>
            </Navbar>
            </>
    );
}

export default Header;