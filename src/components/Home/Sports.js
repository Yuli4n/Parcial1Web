import React from 'react';
import { Table, Card } from 'react-bootstrap';

const Sports = () => {
    const image1 = 'biking_grid.jpg';
    const image2 = 'running_grid.webp';
    const image3 = 'swimming_grid.avif';

    return (
        <Table bordered>
            <tbody>
                <tr>
                    <td colSpan="2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Cycling</td>
                    <td colSpan="2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Running</td>
                    <td colSpan="2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Swimming</td>
                </tr>
                {Array.from({ length: 5 }).map((_, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        <tr>
                            <td><Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card></td>
                            <td><Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card></td>
                            <td><Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card></td>
                            <td><Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card></td>
                            <td><Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card></td>
                            <td><Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card></td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    );
};

export default Sports;
