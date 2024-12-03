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

const DestinationPopup = ({ show, handleClose, onSelectCity }) => {
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Jakarta",
    "Bandung",
    "Surabaya",
  ]);

  // Daftar kota untuk pencarian
  const cities = ["Jakarta", "Bandung", "Surabaya", "Bali", "Yogyakarta"];

  // Filter daftar kota berdasarkan input pencarian
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCitySelect = (city) => {
    onSelectCity(city); // Kirim kota yang dipilih ke komponen utama
    setRecentSearches((prevSearches) => {
      if (!prevSearches.includes(city)) {
        return [city, ...prevSearches]; // Tambahkan kota ke pencarian terbaru
      }
      return prevSearches;
    });
    handleClose(); // Tutup modal setelah memilih kota
  };

  const handleClearSearches = () => {
    setRecentSearches([]);
  };

  const handleDeleteSearch = (city) => {
    setRecentSearches(recentSearches.filter((item) => item !== city));
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body>
        {/* Form dengan icon search */}
        <InputGroup className="mb-3">
          <InputGroup.Text
            style={{ backgroundColor: "white", borderRight: "none" }}
          >
            <FaSearch style={{ opacity: 0.5 }} />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Masukkan Kota atau Negara"
            value={searchText}
            onChange={handleSearchChange}
            style={{
              borderLeft: "none",
              borderTopRightRadius: "0.375rem",
              borderBottomRightRadius: "0.375rem",
            }}
          />
          <CloseButton onClick={handleClose} className="ms-2 mt-2" />
        </InputGroup>

        {/* Bagian Pencarian Terkini */}
        <Row className="d-flex justify-content-between">
          <Col md={6} className="d-flex justify-content-start">
            <h5>Pencarian Terkini</h5>
          </Col>
          {recentSearches.length > 0 && (
            <Col md={6} className="d-flex justify-content-end">
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#dc3545",
                }}
                onClick={handleClearSearches}
              >
                <span style={{ fontWeight: "bold" }}>Hapus</span>
              </Button>
            </Col>
          )}
        </Row>

        <ListGroup className="mb-3 list-group-flush">
          {recentSearches.map((city, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center text-start"
              onClick={() => handleCitySelect(city)}
              style={{ cursor: "pointer" }}
            >
              {city}
              <CloseButton
                onClick={(e) => {
                  e.stopPropagation(); // Hindari trigger saat mengklik tombol delete
                  handleDeleteSearch(city);
                }}
                className="text-danger"
              />
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Daftar Kota Berdasarkan Pencarian */}
        <h5>Hasil Pencarian</h5>
        <ListGroup className="list-group-flush">
          {filteredCities.map((city, index) => (
            <ListGroup.Item
              key={index}
              className="text-start"
              onClick={() => handleCitySelect(city)}
              style={{ cursor: "pointer" }}
            >
              {city}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};

export default DestinationPopup;
