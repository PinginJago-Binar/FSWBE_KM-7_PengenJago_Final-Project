import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  Modal,
  ListGroup,
} from "react-bootstrap";

// Data dummy penerbangan
const flightData = [
  {
    id: 1,
    airline: "Jet Air",
    class: "Economy",
    departureTime: "07:00",
    arrivalTime: "11:00",
    departureAirport: "Soekarno Hatta - Terminal 1A Domestik",
    arrivalAirport: "Melbourne International Airport",
    duration: "4 jam (Direct)",
    price: 4950000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "In-Flight Entertainment",
    date: "2023-03-01",
  },
  {
    id: 2,
    airline: "Jet Air",
    class: "Economy",
    departureTime: "08:00",
    arrivalTime: "12:00",
    departureAirport: "Soekarno Hatta - Terminal 1A Domestik",
    arrivalAirport: "Melbourne International Airport",
    duration: "4 jam (Direct)",
    price: 6950000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "In-Flight Entertainment",
    date: "2023-03-02",
  },
  {
    id: 3,
    airline: "Garuda Indonesia",
    class: "Economy",
    departureTime: "09:00",
    arrivalTime: "13:00",
    departureAirport: "Soekarno Hatta - Terminal 2E",
    arrivalAirport: "Sydney International Airport",
    duration: "4 jam 30 menit (Direct)",
    price: 7500000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "In-Flight Entertainment",
    date: "2023-03-03",
  },
  {
    id: 4,
    airline: "AirAsia",
    class: "Economy",
    departureTime: "10:00",
    arrivalTime: "14:00",
    departureAirport: "Soekarno Hatta - Terminal 2D",
    arrivalAirport: "Kuala Lumpur International Airport",
    duration: "4 jam (Direct)",
    price: 4500000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "None",
    date: "2023-03-01",
  },
  {
    id: 5,
    airline: "Lion Air",
    class: "Economy",
    departureTime: "11:00",
    arrivalTime: "15:00",
    departureAirport: "Soekarno Hatta - Terminal 1C Domestik",
    arrivalAirport: "Denpasar Ngurah Rai Airport",
    duration: "3 jam 30 menit (Direct)",
    price: 5500000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "In-Flight Entertainment",
    date: "2023-03-02",
  },
  {
    id: 6,
    airline: "Singapore Airlines",
    class: "Business",
    departureTime: "12:00",
    arrivalTime: "16:00",
    departureAirport: "Soekarno Hatta - Terminal 3",
    arrivalAirport: "Singapore Changi Airport",
    duration: "3 jam 30 menit (Direct)",
    price: 15000000,
    baggage: "40 kg",
    cabinBaggage: "15 kg",
    entertainment: "In-Flight Entertainment, Wifi",
    date: "2023-03-03",
  },
  {
    id: 7,
    airline: "Emirates",
    class: "Economy",
    departureTime: "13:00",
    arrivalTime: "17:00",
    departureAirport: "Soekarno Hatta - Terminal 3",
    arrivalAirport: "Dubai International Airport",
    duration: "8 jam (Direct)",
    price: 10500000,
    baggage: "30 kg",
    cabinBaggage: "10 kg",
    entertainment: "In-Flight Entertainment, Wifi",
    date: "2023-03-01",
  },
  {
    id: 8,
    airline: "Qatar Airways",
    class: "Economy",
    departureTime: "14:00",
    arrivalTime: "18:00",
    departureAirport: "Soekarno Hatta - Terminal 3",
    arrivalAirport: "Hamad International Airport",
    duration: "8 jam (Direct)",
    price: 12000000,
    baggage: "30 kg",
    cabinBaggage: "10 kg",
    entertainment: "In-Flight Entertainment, Wifi",
    date: "2023-03-02",
  },
  {
    id: 9,
    airline: "Cathay Pacific",
    class: "Business",
    departureTime: "15:00",
    arrivalTime: "19:00",
    departureAirport: "Soekarno Hatta - Terminal 2",
    arrivalAirport: "Hong Kong International Airport",
    duration: "7 jam (Direct)",
    price: 25000000,
    baggage: "40 kg",
    cabinBaggage: "15 kg",
    entertainment: "In-Flight Entertainment, Wifi",
    date: "2023-03-04",
  },
  {
    id: 10,
    airline: "Sriwijaya Air",
    class: "Economy",
    departureTime: "16:00",
    arrivalTime: "20:00",
    departureAirport: "Soekarno Hatta - Terminal 1A Domestik",
    arrivalAirport: "Yogyakarta Adisucipto International Airport",
    duration: "1 jam 30 menit (Direct)",
    price: 3500000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "None",
    date: "2023-03-01",
  },
  {
    id: 11,
    airline: "Garuda Indonesia",
    class: "Economy",
    departureTime: "17:00",
    arrivalTime: "21:00",
    departureAirport: "Soekarno Hatta - Terminal 2E",
    arrivalAirport: "Surabaya Juanda International Airport",
    duration: "1 jam 30 menit (Direct)",
    price: 4500000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "None",
    date: "2023-03-02",
  },
  {
    id: 12,
    airline: "Jet Air",
    class: "Business",
    departureTime: "18:00",
    arrivalTime: "22:00",
    departureAirport: "Soekarno Hatta - Terminal 3",
    arrivalAirport: "Singapore Changi Airport",
    duration: "3 jam 30 menit (Direct)",
    price: 8500000,
    baggage: "30 kg",
    cabinBaggage: "10 kg",
    entertainment: "In-Flight Entertainment, Wifi",
    date: "2023-03-03",
  },
  {
    id: 13,
    airline: "Lion Air",
    class: "Economy",
    departureTime: "19:00",
    arrivalTime: "23:00",
    departureAirport: "Soekarno Hatta - Terminal 1A Domestik",
    arrivalAirport: "Makassar Sultan Hasanuddin International Airport",
    duration: "2 jam 30 menit (Direct)",
    price: 4800000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "None",
    date: "2023-03-04",
  },
  {
    id: 14,
    airline: "AirAsia",
    class: "Economy",
    departureTime: "20:00",
    arrivalTime: "00:00",
    departureAirport: "Soekarno Hatta - Terminal 2D",
    arrivalAirport: "Penang International Airport",
    duration: "5 jam (Direct)",
    price: 5500000,
    baggage: "20 kg",
    cabinBaggage: "7 kg",
    entertainment: "None",
    date: "2023-03-05",
  },
  {
    id: 15,
    airline: "Singapore Airlines",
    class: "First Class",
    departureTime: "21:00",
    arrivalTime: "01:00",
    departureAirport: "Soekarno Hatta - Terminal 3",
    arrivalAirport: "Singapore Changi Airport",
    duration: "3 jam 30 menit (Direct)",
    price: 35000000,
    baggage: "50 kg",
    cabinBaggage: "20 kg",
    entertainment: "In-Flight Entertainment, Wifi, Fully Reclining Seat",
    date: "2023-03-06",
  },
];

function ChooseFlight() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Harga - Termurah");
  const [sortedFlights, setSortedFlights] = useState(flightData);
  const [selectedDay, setSelectedDay] = useState("2023-03-01");

  // Function untuk mengonversi durasi ke menit
  const durationToMinutes = (duration) => {
    const [hours, minutes] = duration
      .split(" ")[0]
      .split("jam")
      .map((time) => parseInt(time) || 0);
    return hours * 60 + minutes;
  };

  // Sorting logic
  const handleSortChange = (sortType) => {
    let sortedData = [...flightData];
    switch (sortType) {
      case "Harga - Termurah":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "Durasi - Terpendek":
        sortedData.sort(
          (a, b) =>
            durationToMinutes(a.duration) - durationToMinutes(b.duration)
        );
        break;
      case "Keberangkatan - Paling Awal":
        sortedData.sort(
          (a, b) =>
            new Date(`1970/01/01 ${a.departureTime}`) -
            new Date(`1970/01/01 ${b.departureTime}`)
        );
        break;
      case "Keberangkatan - Paling Akhir":
        sortedData.sort(
          (a, b) =>
            new Date(`1970/01/01 ${b.departureTime}`) -
            new Date(`1970/01/01 ${a.departureTime}`)
        );
        break;
      case "Kedatangan - Paling Awal":
        sortedData.sort(
          (a, b) =>
            new Date(`1970/01/01 ${a.arrivalTime}`) -
            new Date(`1970/01/01 ${b.arrivalTime}`)
        );
        break;
      case "Kedatangan - Paling Akhir":
        sortedData.sort(
          (a, b) =>
            new Date(`1970/01/01 ${b.arrivalTime}`) -
            new Date(`1970/01/01 ${a.arrivalTime}`)
        );
        break;
      default:
        break;
    }
    setSortedFlights(sortedData);
    setSelectedSort(sortType);
    setShowModal(false);
  };

  // Filter flights based on the selected date
  const filteredFlights = sortedFlights.filter(
    (flight) => flight.date === selectedDay
  );

  return (
    <Container className="mt-4">
      {/* Header */}

      <Row style={{ fontSize: 20, fontWeight: "bold" }} className="mb-5">
        Pilih Penerbangan
      </Row>
      <Row className="d-flex justify-content-between align-items-center mb-3 w-100">
        <Col md={10}>
          <Button
            style={{ backgroundColor: "rgba(160, 110, 206, 1)" }}
            className="me-3 w-100 d-flex float-start align-items-center"
          >
            {"<-"} JKT {">"} MLB - 2 Penumpang - Economy
          </Button>
        </Col>
        <Col md={2} className="d-flex justify-content-end align-items-end">
          <Button variant="success" className="w-100">
            Ubah Pencarian
          </Button>
        </Col>
      </Row>

      {/* Navigation Dates */}
      <Row className="mb-4">
        <Col
          md={12}
          className="text-center d-flex justify-content-center flex-wrap gap-1"
        >
          {[
            { day: "Selasa", date: "2023-03-01" },
            { day: "Rabu", date: "2023-03-02" },
            { day: "Kamis", date: "2023-03-03" },
            { day: "Jumat", date: "2023-03-04" },
            { day: "Sabtu", date: "2023-03-05" },
            { day: "Minggu", date: "2023-03-06" },
            { day: "Senin", date: "2023-03-07" },
            { day: "Selasa", date: "2023-03-08" },
          ].map((item, idx) => (
            <Button
              key={idx}
              variant={
                selectedDay === item.date ? "primary" : "outline-secondary"
              }
              onClick={() => setSelectedDay(item.date)}
            >
              <span>{item.day}</span> <br />
              <small>{item.date}</small>
            </Button>
          ))}
        </Col>
      </Row>

      {/* Main Content */}
      <Row>
        {/* Filter Section */}
        <Col md={3} className="mb-3"></Col>

        {/* Flight Results */}
        <Col md={9}>
          {/* Sort Button */}
          <div className="d-flex align-items-center mb-3">
            <Button
              variant="outline-primary"
              onClick={() => setShowModal(true)}
              className="float-right"
            >
              {selectedSort.split(" - ")[1] || "Pilih Penyortiran"}{" "}
              {/* Menampilkan hanya bagian setelah " - " */}
            </Button>
          </div>

          {/* Accordion for Flights */}
          <Accordion>
            {filteredFlights.map((flight, idx) => (
              <Accordion.Item eventKey={idx} key={flight.id} className="mb-3">
                <Accordion.Header>
                  <div className="d-flex justify-content-between w-100">
                    <div>
                      <strong>{flight.airline}</strong> - {flight.class} <br />
                      <small>
                        {flight.departureTime} ➜ {flight.arrivalTime} | Durasi:{" "}
                        {flight.duration}
                      </small>
                    </div>
                    <div className="text-end">
                      <strong>IDR {flight.price.toLocaleString()}</strong>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <p>
                        <strong>Detail Penerbangan:</strong>
                      </p>
                      <ul>
                        <li>
                          Waktu: {flight.departureTime} ➜ {flight.arrivalTime}
                        </li>
                        <li>Keberangkatan: {flight.departureAirport}</li>
                        <li>Tujuan: {flight.arrivalAirport}</li>
                      </ul>
                      <p>
                        <strong>Informasi:</strong>
                      </p>
                      <ul>
                        <li>Bagasi: {flight.baggage}</li>
                        <li>Bagasi Kabin: {flight.cabinBaggage}</li>
                        <li>{flight.entertainment}</li>
                      </ul>
                    </Col>
                    <Col className="text-end">
                      <Button variant="primary">Pilih</Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>

      {/* Sort Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Urutkan Berdasarkan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {[
              { label: "Termurah", value: "Harga - Termurah" },
              { label: "Terpendek", value: "Durasi - Terpendek" },
              { label: "Paling Awal", value: "Keberangkatan - Paling Awal" },
              { label: "Paling Akhir", value: "Keberangkatan - Paling Akhir" },
              { label: "Paling Awal", value: "Kedatangan - Paling Awal" },
              { label: "Paling Akhir", value: "Kedatangan - Paling Akhir" },
            ].map((sortOption, idx) => (
              <ListGroup.Item
                key={idx}
                action
                onClick={() => handleSortChange(sortOption.value)}
                className={
                  selectedSort === sortOption.value
                    ? "d-flex justify-content-between align-items-center bg-light"
                    : "d-flex justify-content-between align-items-center"
                }
              >
                {sortOption.label} {/* Menampilkan label yang lebih pendek */}
                {selectedSort === sortOption.value && (
                  <span className="text-success ms-2">✔</span>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Pilih
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ChooseFlight;