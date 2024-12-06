import React, { useState, useRef } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./paymentPassenger.css";
import DataPassanger from "../../data/data.json";

const bookingFormPassanger = () => {
  const [hasLastName, setHasLastName] = useState(true);
  return (
    <div>
      {DataPassanger.map((passanger) => (
        <Card
          style={{
            padding: "15px",
            border: "1px #3C3C3C solid",
            borderRadius: "12px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Card.Title style={{ marginBottom: "30px", fontWeight: "700" }}>
            Isi Data Penumpang
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
            Data Diri Penumpang {passanger.id} - {passanger.identity}
          </Card.Subtitle>
          <Card.Body>
            <Form style={{ marginTop: "-15px" }}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label className="custom-label">Title</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  style={{
                    borderRadius: "8px",
                    padding: "10px",
                    border: "1px black solid",
                  }}
                >
                  <option value="1">Mr</option>
                  <option value="2">Mrs</option>
                </Form.Select>
              </Form.Group>
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

              <Form.Group as={Row} className="mb-3" controlId="familyName">
                <Form.Label column sm="8" className="custom-label">
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
                  <Form.Label className="custom-label">
                    Nama Keluarga
                  </Form.Label>
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

              <Form.Group className="mb-3" controlId="bornDate">
                <Form.Label column sm="8" className="custom-label">
                  Tanggal Lahir
                </Form.Label>
                <Col sm="12" className="text-end custom-width">
                  <Form.Control
                    type="date"
                    placeholder="yyyy-mm-dd"
                    style={{
                      borderRadius: "8px",
                      padding: "10px",
                      border: "1px black solid",
                    }}
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3" controlId="contry">
                <Form.Label className="custom-label">
                  Kewarganegaraan
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Indonesia"
                  style={{
                    borderRadius: "8px",
                    padding: "10px",
                    border: "1px black solid",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ktp">
                <Form.Label className="custom-label">KTP / Paspor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  style={{
                    borderRadius: "8px",
                    padding: "10px",
                    border: "1px black solid",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="publisherCountry">
                <Form.Label className="custom-label">
                  Negara Penerbit
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  style={{
                    borderRadius: "8px",
                    padding: "10px",
                    border: "1px black solid",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="endDate">
                <Form.Label column sm="8" className="custom-label">
                  Berlaku Sampai
                </Form.Label>
                <Col sm="12" className="text-end custom-width">
                  <Form.Control
                    type="date"
                    placeholder="yyyy-mm-dd"
                    style={{
                      borderRadius: "8px",
                      padding: "10px",
                      border: "1px black solid",
                    }}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default bookingFormPassanger;
