import React, { useState, useEffect } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const Ejercicio = ({ show, handleClose, ejercicioType, exerciseImage }) => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ejercicioType) {
      const fetchExerciseDetails = async () => {
        try {
          const response = await fetch(`https://my.api.mockaroo.com/card_api?key=f30258b0`);
          if (!response.ok) throw new Error("Error al obtener detalles del ejercicio");
          const data = await response.json();
          setExerciseDetail(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchExerciseDetails();
    }
  }, [ejercicioType]);

  if (!show) return null;
  if (loading) return <p><FormattedMessage id="loading" defaultMessage="Cargando detalle..." /></p>;
  if (error) return <p>{error}</p>;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <FormattedMessage id="exercise.detail" defaultMessage="Detalle del" /> {ejercicioType}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {exerciseDetail && (
          <Card className="bg-dark text-white">
            <Card.Img src={exerciseImage} alt="Ejercicio" style={{ height: '400px', objectFit: 'cover' }} />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title><FormattedMessage id="exercise.place" defaultMessage="Lugar" />: {exerciseDetail[0]?.place}</Card.Title>
              <Card.Text><FormattedMessage id="exercise.duration" defaultMessage="Duración" />: {exerciseDetail[0]?.time}</Card.Text>
              <Card.Text><FormattedMessage id="exercise.length" defaultMessage="Longitud" />: {exerciseDetail[0]?.length} km</Card.Text>
            </Card.ImgOverlay>
          </Card>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <FormattedMessage id="close" defaultMessage="Cerrar" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Ejercicio;
