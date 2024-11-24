import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  ListGroup,
  CloseButton,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; // Import icon search dari react-icons

const DestinationPopup = ({ props, show, handleClose }) => {
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Jakarta",
    "Bandung",
    "Surabaya",
  ]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClearSearches = () => {
    setRecentSearches([]);
  };

  const handleDeleteSearch = (city) => {
    setRecentSearches(recentSearches.filter((item) => item !== city));
  };

  return (
    <Modal {...props} show={show} onHide={handleClose} centered size="lg">
      <Modal.Body>
        {/* Form dengan icon search di dalam placeholder */}
        <InputGroup className="mb-3">
          <InputGroup.Text
            style={{ backgroundColor: "white", borderRight: "none" }}
          >
            <FaSearch style={{ opacity: 0.5 }} />
          </InputGroup.Text>
          <Form.Control
            rounded
            type="text"
            placeholder="Masukkan Kota atau Negara"
            value={searchText}
            onChange={handleSearchChange}
            style={{
              borderLeft: "none", // Menghilangkan border kiri
              borderTopRightRadius: "0.375rem", // Menambahkan border radius pada sisi kanan
              borderBottomRightRadius: "0.375rem", // Menambahkan border radius pada sisi kanan
            }}
          />
          <CloseButton onClick={handleClose} className="ms-2 mt-2" />
        </InputGroup>

        <Row className="d-flex justify-content-between">
          <Col md={6} className="d-flex justify-content-start">
            <h5>Pencarian terkini</h5>
          </Col>
          {recentSearches.length > 0 && (
            <Col md={6} className="d-flex justify-content-end">
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#dc3545", // Menjaga warna teks merah
                }}
                onClick={handleClearSearches}
              >
                <span style={{ fontWeight: "bold" }}>Hapus</span>
              </Button>
            </Col>
          )}
        </Row>

        {/* List of Recent Searches */}
        <ListGroup className="mb-3 list-group-flush">
          {recentSearches.map((city, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center text-start"
            >
              {city}
              <CloseButton
                onClick={() => handleDeleteSearch(city)}
                className="text-danger"
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};

export default DestinationPopup;
