import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import "./paymentItem.css";

const BookingForm = () => {
  const [hasLastName, setHasLastName] = useState(true);

  return (
    <Card
      style={{
        width: "30rem",
        padding: "15px",
        border: "1px #3C3C3C solid",
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Card.Title style={{ marginBottom: "30px" }}>
        Isi Data Pemesanan
      </Card.Title>
      <Card.Subtitle
        className="mb-3 text-white"
        style={{
          backgroundColor: "#3C3C3C",
          borderRadius: "8px 8px 0px 0px",
          padding: "10px 15px",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        Data Diri Pemesan
      </Card.Subtitle>
      <Card.Body>
        <Form style={{ marginTop: "-15px" }}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control type="text" placeholder="Nama Lengkap" />
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="8">
              Punya Nama Keluarga?
            </Form.Label>
            <Col sm="4" className="text-end">
              <Form.Check
                type="switch"
                id="hasLastName"
                checked={hasLastName}
                onChange={(e) => setHasLastName(e.target.checked)}
                className="custom-switch"
              />
            </Col>
          </Form.Group>

          {hasLastName && (
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Nama Keluarga</Form.Label>
              <Form.Control type="text" placeholder="Nama Keluarga" />
            </Form.Group>
          )}

          {/* Nomor Telepon */}
          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Nomor Telepon</Form.Label>
            <Form.Control type="text" placeholder="Nomor Telepon" />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndoe@gmail.com"
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default BookingForm;
