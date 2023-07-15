import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../css/character.css";
import { StatusColor } from "./StatusColor";
import { Link } from "react-router-dom";
function CharacterPage() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [speciesFilter, setSpeciesFilter] = useState("");

    useEffect(() => {
        fetchData();
    }, [searchTerm, statusFilter, genderFilter, speciesFilter]);

    const fetchData = () => {
        let url = "https://rickandmortyapi.com/api/character";
        const filters = [];

        if (searchTerm) {
        filters.push(`name=${searchTerm}`);
        }
        if (statusFilter) {
        filters.push(`status=${statusFilter}`);
        }
        if (genderFilter) {
        filters.push(`gender=${genderFilter}`);
        }
        if (speciesFilter) {
        filters.push(`species=${speciesFilter}`);
        }

        if (filters.length > 0) {
        url += `?${filters.join("&")}`;
        }

        axios
        .get(url)
        .then((response) => {
            setCharacters(response.data.results);
        })
        .catch((error) => {
            console.error("Error fetching characters:", error);
        });
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusFilter = (event) => {
        setStatusFilter(event.target.value);
    };

    const handleGenderFilter = (event) => {
        setGenderFilter(event.target.value);
    };

    const handleSpeciesFilter = (event) => {
        setSpeciesFilter(event.target.value);
    };

    return (
        <>
        <NavBar />
        <Container>
            <Form>
            <Container className="w-50 text-center">
                <h1 className=" p-3">Rick and Morty Characters</h1>
                <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                </Form.Group>
            </Container>
            <Container >
                <Row >
                <Col className="border rounded border-info h-100 p-3 "  xs={2}>
                    <h3>Filters</h3>
                    <Form.Group>
                    <Form.Label>Status:</Form.Label>
                    <Form.Control
                        as="select"
                        value={statusFilter}
                        onChange={handleStatusFilter}
                    >
                        <option value="">All</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control
                        as="select"
                        value={genderFilter}
                        onChange={handleGenderFilter}
                    >
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Species:</Form.Label>
                    <Form.Control
                        as="select"
                        value={speciesFilter}
                        onChange={handleSpeciesFilter}
                    >
                        <option value="">All</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                    </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Row>
                    {characters.map((character) => (
                        <Col key={character.id} xs={12} sm={6} md={4} lg={3} xl={3}>
                            
                        <Card className="my-3">
                            <Card.Img
                            variant="top"
                            src={character.image}
                            alt={character.name}
                            />
                            <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>Status: {character.status==="Alive"?<span className="bg-success text-white rounded p-1">{character.status}</span> :<span className="bg-danger text-white rounded p-1">{character.status}</span>}</Card.Text>
                            <Link className="text-decoration-none border  bg-info rounded p-2 " to={`/characters/${character.id}`}>info</Link>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                    </Row>
                </Col>
                </Row>
            </Container>
            </Form>
        </Container>
        <Footer />
        </>
    );
}

export default CharacterPage;
