import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import Ejercicio from './Ejercicio';

const Sports = () => {
  const cyclingImage = 'biking_grid.jpg';
  const runningImage = 'running_grid.webp';
  const swimmingImage = 'swimming_grid.avif';

  const [cyclingUsers, setCyclingUsers] = useState([]);
  const [runningUsers, setRunningUsers] = useState([]);
  const [swimmingUsers, setSwimmingUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseImage, setExerciseImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (type, image) => {
    setSelectedExercise(type);
    setExerciseImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExercise(null);
    setExerciseImage('');
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const cyclingResponse = await fetch("https://my.api.mockaroo.com/parcial_api?key=45fae900", {
          headers: { "X-API-Key": "45fae900" }
        });
        const runningResponse = await fetch("https://my.api.mockaroo.com/parcial_api?key=45fae900", {
          headers: { "X-API-Key": "45fae900" }
        });
        const swimmingResponse = await fetch("https://my.api.mockaroo.com/parcial_api?key=45fae900", {
          headers: { "X-API-Key": "45fae900" }
        });

        if (!cyclingResponse.ok || !runningResponse.ok || !swimmingResponse.ok) {
          throw new Error("Error al obtener los datos de la API");
        }

        const cyclingData = await cyclingResponse.json();
        const runningData = await runningResponse.json();
        const swimmingData = await swimmingResponse.json();

        setCyclingUsers(cyclingData);
        setRunningUsers(runningData);
        setSwimmingUsers(swimmingData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Row>
            <Col md={4} className="text-center"><h2>Cycling</h2></Col>
            <Col md={4} className="text-center"><h2>Running</h2></Col>
            <Col md={4} className="text-center"><h2>Swimming</h2></Col>
          </Row>
        </Col>

        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <Row>
              {cyclingUsers.slice(rowIndex * 2, rowIndex * 2 + 2).map((user, index) => (
                <Col md={2} key={index} className="d-flex justify-content-center mb-3">
                  <Card style={{ width: '100%', cursor: 'pointer' }} onClick={() => handleShowModal('Cycling', cyclingImage)}>
                    <Card.Img variant="top" src={cyclingImage} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.ImgOverlay className="text-white d-flex flex-column justify-content-end">
                      <Card.Title>{user.name}</Card.Title>
                      <Card.Text>Cycling Time: {user.cycling_time}</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}

              {runningUsers.slice(rowIndex * 2, rowIndex * 2 + 2).map((user, index) => (
                <Col md={2} key={index} className="d-flex justify-content-center mb-3">
                  <Card style={{ width: '100%', cursor: 'pointer' }} onClick={() => handleShowModal('Running', runningImage)}>
                    <Card.Img variant="top" src={runningImage} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.ImgOverlay className="text-white d-flex flex-column justify-content-end">
                      <Card.Title>{user.name}</Card.Title>
                      <Card.Text>Running Time: {user.running_time}</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}

              {swimmingUsers.slice(rowIndex * 2, rowIndex * 2 + 2).map((user, index) => (
                <Col md={2} key={index} className="d-flex justify-content-center mb-3">
                  <Card style={{ width: '100%', cursor: 'pointer' }} onClick={() => handleShowModal('Swimming', swimmingImage)}>
                    <Card.Img variant="top" src={swimmingImage} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.ImgOverlay className="text-white d-flex flex-column justify-content-end">
                      <Card.Title>{user.name}</Card.Title>
                      <Card.Text>Swimming Time: {user.swimming_time}</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
            </Row>
          </React.Fragment>
        ))}
      </Row>

      <Ejercicio show={showModal} handleClose={handleCloseModal} ejercicioType={selectedExercise} exerciseImage={exerciseImage} />
    </Container>
  );
};

export default Sports;
