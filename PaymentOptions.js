// PaymentOptions.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PaymentOptions = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Select Payment Method</Card.Title>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" className="mb-3">
              Credit Card
            </Button>
            <Button variant="success" size="lg" className="mb-3">
              PayPal
            </Button>
            <Button variant="warning" size="lg" className="mb-3">
              Stripe
            </Button>
            <Button variant="info" size="lg" className="mb-3">
              Apple Pay
            </Button>
          </div>
          <Link to="/confirmation">
            <Button variant="secondary" size="lg">
              Back to Cart
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaymentOptions;
