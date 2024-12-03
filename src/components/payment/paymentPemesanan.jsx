import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import "./paymentPemesanan.css";

const BookingForm = () => {
  const [hasLastName, setHasLastName] = useState(true);

  return (
    <Card
      className=""
      style={{
        padding: "15px",
        border: "1px #3C3C3C solid",
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Card.Title style={{ marginBottom: "30px", fontWeight: "700" }}>
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
            <Form.Label className="custom-label">Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Lengkap"
              style={{
                borderRadius: "8px",
                padding: "10px",
                border: "1px black solid",
              }}
            />
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="8" className="custom-label">
              Punya Nama Keluarga?
            </Form.Label>
            <Col sm="4" className="text-end switch d-flex justify-content-end">
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
              <Form.Label className="custom-label">Nama Keluarga</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Keluarga"
                style={{
                  borderRadius: "8px",
                  padding: "10px",
                  border: "1px black solid",
                }}
              />
            </Form.Group>
          )}

          {/* Nomor Telepon */}
          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label className="custom-label">Nomor Telepon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nomor Telepon"
              style={{
                borderRadius: "8px",
                padding: "10px",
                border: "1px black solid",
              }}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="custom-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndoe@gmail.com"
              style={{
                borderRadius: "8px",
                padding: "10px",
                border: "1px black solid",
              }}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>

    // --------------------------------------------------------------------
  );
};

export default BookingForm;
