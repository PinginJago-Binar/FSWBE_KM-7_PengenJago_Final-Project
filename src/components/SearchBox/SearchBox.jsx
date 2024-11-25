import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import CityPopup from "../CityPopup/cityPopup";
import Container from "react-bootstrap/Container";
import DatePopup from "../DatePopup/DatePopup";
import DestinationPopup from "../DestinationPopup/DestinationPopup";
import ClassPopup from "../ClassPopup/ClassPopup";
import OneDatePopup from "../OneDatePopup/OneDatePopup";
import PassengersPopup from "../PassengersPopup/PassengeresPopup";
const SearchBox = () => {
  const [modalShow, setModalShow] = useState(false); // State untuk modal destinasi
  const [dateModalShow, setDateModalShow] = useState(false); // State untuk modal tanggal
  const [ClassModalShow, setClassModalShow] = useState(false); // State untuk modal Class
  const [PassengersModalShow, setPassengersModalShow] = useState(false); // State untuk modal Class
  const [isReturnEnabled, setIsReturnEnabled] = useState(false); // State untuk switch
  const handleSwitchChange = () => {
    setIsReturnEnabled(!isReturnEnabled); // Toggle status switch
  };
  return (
    <>
      <style>{`

  .custom-input::placeholder {
    color: #7126B5; 
    font-size: 0.7vw; 
    font-weight: 600; 

  }
`}</style>
      <div>
        <Row className="justify-content-center">
          <Col md={12} sm={12} xs={12}>
            <Form className="rounded shadow-lg p-4 bg-white  position-relative">
              <Row className="mb-4">
                <Col xs={12}>
                  <p style={{ fontSize: 20, fontWeight: "bold" }}>
                    Pilih Jadwal Penerbangan spesial di{" "}
                    <span style={{ color: "#7126B5", fontWeight: "bold" }}>
                      Tiketku!
                    </span>
                  </p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} sm={12}>
                  <Form.Group
                    controlId="fromCity"
                    className="mb-3 d-flex align-items-center"
                    onClick={() => setModalShow(true)}
                  >
                    <Form.Label className="fw-bold mb-1 me-2 d-flex align-items-center">
                      <img
                        src="public/plane.png"
                        alt=""
                        style={{
                          width: "16px",
                          height: "16px",
                          marginRight: "8px",
                        }}
                      />
                      <span style={{ color: "#8A8A8A", fontSize: 12 }}>
                        From
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Pilih Kota"
                      readOnly
                      className="border-0 border-bottom flex-grow-1 custom-input"
                      style={{
                        borderRadius: 0,
                        outline: "none",
                        boxShadow: "none",
                        cursor: "pointer",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col
                  md={2}
                  sm={12}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src="public/return.png" alt="" />
                </Col>
                <Col md={5} sm={12}>
                  <Form.Group
                    controlId="toCity"
                    className="mb-3 d-flex align-items-center"
                    onClick={() => setModalShow(true)}
                  >
                    <Form.Label className="fw-bold mb-1 me-2 d-flex align-items-center">
                      <img
                        src="public/plane.png"
                        alt=""
                        style={{
                          width: "16px",
                          height: "16px",
                          marginRight: "8px",
                        }}
                      />
                      <span style={{ color: "#8A8A8A", fontSize: 12 }}>To</span>
                      <span style={{ color: "white" }}>xx</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Pilih Kota"
                      readOnly
                      className="border-0 border-bottom flex-grow-1  custom-input"
                      style={{
                        borderRadius: 0,
                        outline: "none",
                        boxShadow: "none",
                        cursor: "pointer",
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={5} className="d-flex align-items-center ">
                  <Form.Label className="fw-bold mb-1 me-2 d-flex align-items-center">
                    <img
                      src="public/Vector.png"
                      alt=""
                      style={{
                        width: "16px",
                        height: "16px",
                        marginRight: "8px",
                      }}
                    />
                    <span style={{ color: "#8A8A8A", fontSize: 12 }}>Date</span>
                  </Form.Label>

                  {/* Kolom Tanggal Keberangkatan */}
                  <Col md={3.5} xs={4.5} className="mb-3">
                    <div className="d-flex flex-column gap-2">
                      <Form.Label>
                        <span
                          style={{
                            color: "#8A8A8A",
                            fontSize: "clamp(10px, 1vw, 12px)", // Responsif dengan zoom
                            paddingLeft: "10px",
                          }}
                        >
                          Departure
                        </span>
                      </Form.Label>
                      <Form.Group
                        controlId="departureDate"
                        className="d-flex align-items-center"
                        onClick={() => setDateModalShow(true)}
                      >
                        <Form.Control
                          type="text"
                          placeholder="Pilih Tanggal"
                          readOnly
                          className="border-0 border-bottom flex-grow-1 custom-input"
                          style={{
                            borderRadius: 0,
                            outline: "none",
                            boxShadow: "none",
                            cursor: "pointer",
                          }}
                        />
                      </Form.Group>
                    </div>
                  </Col>

                  {/* Spacer untuk jarak antar kolom */}
                  <Col md={1} xs={2}></Col>

                  {/* Kolom Tanggal Kembali */}
                  <Col md={3.5} xs={4.5} className="mb-3">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex justify-content-between align-items-center gap-2">
                        <Form.Label>
                          <span
                            style={{
                              color: "#8A8A8A",
                              fontSize: "clamp(10px, 1vw, 12px)",
                              paddingLeft: "10px",
                            }}
                          >
                            Return
                          </span>
                        </Form.Label>
                      </div>
                      <Form.Group
                        controlId="returnDate"
                        className="d-flex align-items-center"
                        onClick={() => setDateModalShow(true)}
                      >
                        <Form.Control
                          type="text"
                          placeholder="Pilih Tanggal"
                          readOnly
                          disabled={!isReturnEnabled} // Kolom aktif atau tidak bergantung pada status switch
                          className="border-0 border-bottom flex-grow-1 custom-input"
                          style={{
                            borderRadius: 0,
                            outline: "none",
                            boxShadow: "none",
                            cursor: isReturnEnabled ? "pointer" : "not-allowed",
                          }}
                        />
                      </Form.Group>
                    </div>
                  </Col>

                  {/* <Col className="mb-5 align-items-center">
                    <Form.Label>
                      <Form.Check type="switch" />
                    </Form.Label>
                  </Col> */}
                </Col>
                <Col md={2}>
                  <Form.Check
                    type="switch"
                    id="returnSwitch"
                    onChange={handleSwitchChange}
                  />
                </Col>
                <Col md={5} className="d-flex align-items-center ">
                  <Form.Label className="fw-bold mb-1 me-2 d-flex align-items-center">
                    <img
                      src="public/penumpang.png"
                      alt=""
                      style={{
                        width: "16px",
                        height: "16px",
                        marginRight: "8px",
                      }}
                    />
                    <span style={{ color: "#8A8A8A", fontSize: 12 }}>To</span>
                    <span style={{ color: "white" }}>xx</span>
                  </Form.Label>

                  {/* Kolom Tanggal Keberangkatan */}
                  <Col md={3.5} xs={4.5} className="mb-2">
                    <Form.Label>
                      <span
                        style={{
                          color: "#8A8A8A",
                          fontSize: "clamp(10px, 1vw, 12px)",
                          paddingLeft: "10px",
                        }}
                      >
                        Passengers
                      </span>
                    </Form.Label>
                    <Form.Group
                      controlId="departureDate"
                      className="d-flex align-items-center"
                      onClick={() => setPassengersModalShow(true)}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Penumpang"
                        readOnly
                        className="border-0 border-bottom flex-grow-1  custom-input"
                        style={{
                          borderRadius: 0,
                          outline: "none",
                          boxShadow: "none",
                          cursor: "pointer",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={1} xs={2}></Col>
                  {/* Kolom Tanggal Kembali */}
                  <Col md={3.5} xs={4.5} className="mb-2 align-items-center">
                    <Form.Label className>
                      <span
                        style={{
                          color: "#8A8A8A",
                          fontSize: "clamp(10px, 1vw, 12px)",
                          paddingLeft: "10px",
                        }}
                      >
                        Seat Class
                      </span>
                    </Form.Label>

                    <Form.Group
                      controlId="returnDate"
                      className="d-flex align-items-center"
                      onClick={() => setClassModalShow(true)}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Jenis Kursi"
                        readOnly
                        className="border-0 border-bottom flex-grow-1  custom-input"
                        style={{
                          borderRadius: 0,
                          outline: "none",
                          boxShadow: "none",
                          cursor: "pointer",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Col>
              </Row>

              <Row className="justify-content-center mt-5">
                <Container fluid className="p-0">
                  <Col
                    xs={12}
                    className="position-absolute"
                    style={{ bottom: 0, left: 0, right: 0 }}
                  >
                    <Button
                      className="w-100"
                      style={{
                        backgroundColor: "#7126B5",
                        borderRadius: "0 0 5px 5px",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        Cari Penerbangan
                      </span>
                    </Button>
                  </Col>
                </Container>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
      {isReturnEnabled ? (
        <DatePopup
          show={dateModalShow}
          handleClose={() => setDateModalShow(false)}
        />
      ) : (
        <OneDatePopup
          show={dateModalShow}
          handleClose={() => setDateModalShow(false)}
        />
      )}
      <DestinationPopup
        show={modalShow}
        handleClose={() => setModalShow(false)}
      />

      <ClassPopup
        show={ClassModalShow}
        handleClose={() => setClassModalShow(false)}
      />

      <PassengersPopup
        show={PassengersModalShow}
        handleClose={() => setPassengersModalShow(false)}
      />
    </>
  );
};

export default SearchBox;
