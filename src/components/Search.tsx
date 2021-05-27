import { useState, useRef } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";

interface SearchProps {
  fetchApi: Function;
}

const Search = ({ fetchApi }: SearchProps) => {
  const [search, setsearch] = useState<string>("");
  const history = useHistory();

  const myRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetchApi(search);
    setsearch("");
    myRef.current?.focus();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav>
          <h4
            className="fw-bold ms-4"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            Home
          </h4>
        </Nav>
        <Form onSubmit={handleSubmit} className="d-flex">
          <FormControl
            ref={myRef}
            autoFocus
            value={search}
            onChange={(e) => setsearch(e.currentTarget.value)}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Search;
