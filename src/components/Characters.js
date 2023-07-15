import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
      });
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <Container className="text-center " style={{height: "80vh", display: "flex", textAlign:"center", justifyContent:"center"}}>
      <Container className="border bg-info p-5 " >
        <Row>
          <Col xs={12} md={6} className="text-center">
            <img
              src={character.image}
              alt={character.name}
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={6}>
            <h2>{character.name}</h2>
            <p>
              <strong>ID:</strong> {character.id}
            </p>
            <p>
              <strong>Status:</strong> {character.status}
            </p>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Location:</strong> {character.location.name}
            </p>
          </Col>
        </Row>
        <Link
          className="text-decoration-none border  bg-success text-white rounded p-2 "
          to={`/Character`}
        >
          volver
        </Link>
      </Container>
      </Container>
      <Footer/>
    </>
  );
}

export default CharacterDetails;
