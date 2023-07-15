import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';
import NavBar from './NavBar';


const EpisodeComponent = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Obtener la lista de episodios al cargar la página
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleEpisodeChange = (event) => {
    const episodeId = event.target.value;
    setSelectedEpisode(episodeId);

    // Obtener los personajes del episodio seleccionado
    axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then(response => {
        const characterUrls = response.data.characters;
        const characterPromises = characterUrls.map(url => axios.get(url));
        Promise.all(characterPromises)
          .then(characterResponses => {
            const characterData = characterResponses.map(response => response.data);
            setCharacters(characterData);
          });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
    <NavBar/>
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="episodeSelect">
              <h2 className='text-center p-4'>Selecciona un episodio: </h2>
              <Form.Control as="select" onChange={handleEpisodeChange}>
              
                <option value="3">-- Selecciona --</option>
                {episodes.map(episode => (
                  
                  <option key={episode.id} value={episode.id}>
                    Episode - {episode.id}
                  </option>
                  
                ))}
                
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      
      {selectedEpisode && (
        
        
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
        <Card.Text>number: {character.id}</Card.Text>
        <Card.Text>Status: {character.status}</Card.Text>
        <Card.Text>Gender: {character.gender}</Card.Text>
        <Card.Text>Species: {character.species}</Card.Text>
        </Card.Body>
    </Card>
    </Col>
))}
</Row>
      )}
    </Container>
    <Footer/>
      </>
  );
};
export default EpisodeComponent;