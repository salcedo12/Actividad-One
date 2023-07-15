// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// function MyCards() {
//   const [characters, setCharacters] = useState([]);
//   const [evilCharacters, setEvilCharacters] = useState([]);
//   const [evilCharacters2, setEvilCharacters2] = useState([]);
//   useEffect(() => {
//     axios.get('https://rickandmortyapi.com/api/character')
//       .then(response => {
//         setCharacters(response.data.results.slice(0, 5));
//       })
//       .catch(error => {
//         console.error('Error fetching characters:', error);
//       });

//       fetchEvilCharacters();
//       fetchEvilCharacters2()
//   }, []);

//   const fetchEvilCharacters = () => {
//     axios
//       .get('https://rickandmortyapi.com/api/character', {
//         params: {
//           name: 'Evil Morty'
//         }
//       })
//       .then((response) => {
//         setEvilCharacters(response.data.results);
//       })
//       .catch((error) => {
//         console.error('Error fetching evil characters:', error);
//       });
//   };
//   const fetchEvilCharacters2 = () => {
//     axios
//       .get('https://rickandmortyapi.com/api/character', {
//         params: {
//           name: 'Rick prime'
//         }
//       })
//       .then((response) => {
//         setEvilCharacters2(response.data.results);
//       })
//       .catch((error) => {
//         console.error('Error fetching evil characters:', error);
//       });
//   };
//   // Función para obtener datos aleatorios
//   // const getRandomCharacters = (characters, count) => {
//   //   const shuffled = characters.sort(() => 0.5 - Math.random());
//   //   return shuffled.slice(0, count);
//   // };

//   return (
//     <Container >
//     <h2 className='text-center pt-4'>Protagonistas</h2>
//     <Row  xs={1} md={3} className="justify-content-md-center g-7">
//       {characters.map(character => (
//         <Col key={character.id} xs={12} sm={6} md={4} lg={3} xl={4}>
//           <Card className="my-3 shadow">
//             <Card.Img  variant="top" src={character.image} alt={character.name} />
//             <Card.Body>
//               <Card.Title >{character.name}</Card.Title>
//               <Card.Text>Status: {character.status}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     <h2 className='text-center pt-4'>Antagonistas</h2>
//     <Row xs={1} md={3} className="g-7 justify-content-md-center">
//       {evilCharacters.map(character => (
//         <Col key={character.id} xs={12} sm={6} md={4} lg={3} xl={4}>
//           <Card className="my-3 shadow">
//             <Card.Img  variant="top" src={character.image} alt={character.name} />
//             <Card.Body>
//               <Card.Title>{character.name}</Card.Title>
            
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     <Row xs={1} md={3} className="g-5 justify-content-md-center">
//       {evilCharacters2.map(character => (
//         <Col key={character.id} xs={12} sm={6} md={4} lg={3} xl={4}>
//           <Card className="my-3 shadow">
//             <Card.Img  variant="top" src={character.image} alt={character.name} />
//             <Card.Body>
//               <Card.Title>{character.name}</Card.Title>
            
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>

//   </Container>
//   );
// }
  
//   export default MyCards;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyCards() {
  const [characters, setCharacters] = useState([]);
  const [evilCharacters, setEvilCharacters] = useState([]);
  const [evilCharacters2, setEvilCharacters2] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results.slice(0, 5));
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });

      fetchEvilCharacters();
      fetchEvilCharacters2();
  }, []);

  const fetchEvilCharacters = () => {
    axios
      .get('https://rickandmortyapi.com/api/character', {
        params: {
          name: 'Evil Morty'
        }
      })
      .then((response) => {
        setEvilCharacters(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching evil characters:', error);
      });
  };

  const fetchEvilCharacters2 = () => {
    axios
      .get('https://rickandmortyapi.com/api/character', {
        params: {
          name: 'Rick prime'
        }
      })
      .then((response) => {
        setEvilCharacters2(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching evil characters:', error);
      });
  };

  return (
    <Container>
      <h2 className='text-center pt-4'>Protagonistas</h2>
      <Row xs={1} md={3} className="justify-content-md-center g-7">
        {characters.map(character => (
          <Col key={character.id} xs={12} sm={6} md={4} lg={3} xl={4}>
            <Link className='text-decoration-none' to={`/characters/${character.id}`}>
              <Card className="my-3 shadow">
                <Card.Img variant="top" src={character.image} alt={character.name} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>Status: {character.status}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <h2 className='text-center pt-4'>Antagonistas</h2>
      <Row xs={1} md={3} className="g-7 justify-content-md-center">
        {evilCharacters.map(character => (
          <Col key={character.id} xs={12} sm={6} md={4} lg={3} xl={4}>
            <Link className='text-decoration-none' to={`/characters/${character.id}`}>
              <Card className="my-3 shadow">
                <Card.Img variant="top" src={character.image} alt={character.name} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Row xs={1} md={3} className="g-5 justify-content-md-center">
        {evilCharacters2.map(character => (
          <Col key={character.id} xs={12} sm={6} md={4} lg={3} xl={4}>
            <Link className='text-decoration-none' to={`/characters/${character.id}`}>
              <Card className="my-3 shadow">
                <Card.Img variant="top" src={character.image} alt={character.name} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MyCards;
