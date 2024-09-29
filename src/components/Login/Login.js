import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            if (password.length === 8) {
                window.location.href = "/home";
            } else {
                alert("Password must be 8 characters long");
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container className="login-container">
            <Row className="justify-content-md-center">
                <Col md={6} lg={4}>
                    <Card className="shadow mt-5" style={{ minWidth: '300px' }}>
                        <Card.Body>
                            <h2 className="text-center">
                                <FormattedMessage id="login.title" defaultMessage="Login" />
                            </h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>
                                        <FormattedMessage id="login.email" defaultMessage="Email" />
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>
                                        <FormattedMessage id="login.password" defaultMessage="Password" />
                                    </Form.Label>
                                    <div className="password-container">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEyeSlash : faEye}
                                            className="password-icon"
                                            onClick={togglePasswordVisibility}
                                        />
                                    </div>
                                </Form.Group>
                                <Button type="submit" className="w-100 mt-3">
                                    <FormattedMessage id="login.submit" defaultMessage="Login" />
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
