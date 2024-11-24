import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChild, faBaby } from "@fortawesome/free-solid-svg-icons";

const PassengersPopup = ({ props, show, handleClose }) => {
  // State untuk menyimpan jumlah Dewasa, Anak, dan Bayi
  const [counts, setCounts] = useState({
    dewasa: 2,
    anak: 0,
    bayi: 1,
  });

  // Fungsi untuk mengatur jumlah berdasarkan tipe (dewasa, anak, bayi)
  const handleCountChange = (type, operation) => {
    setCounts((prevCounts) => {
      const newCount =
        operation === "increment"
          ? prevCounts[type] + 1
          : Math.max(0, prevCounts[type] - 1);
      return { ...prevCounts, [type]: newCount };
    });
  };

  // Mapping kategori ke ikon
  const categoryIcons = {
    dewasa: faUser,
    anak: faChild,
    bayi: faBaby,
  };

  return (
    <Modal {...props} show={show} onHide={handleClose} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {/* Pemilihan jumlah penumpang */}
        {["dewasa", "anak", "bayi"].map((type, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Ikon sesuai kategori */}
              <FontAwesomeIcon icon={categoryIcons[type]} size="lg" />
              <div>
                <div style={{ fontWeight: "bold" }}>
                  {type === "dewasa" && "Dewasa"}
                  {type === "anak" && "Anak"}
                  {type === "bayi" && "Bayi"}
                </div>
                <div style={{ fontSize: "0.9em", color: "gray" }}>
                  {type === "dewasa" && "(12 tahun ke atas)"}
                  {type === "anak" && "(2 - 11 tahun)"}
                  {type === "bayi" && "(Di bawah 2 tahun)"}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Button
                variant="outline-secondary"
                size="sm"
                style={{
                  borderColor: "#7126B5",
                  height: "40px", // Menyamaratakan tinggi
                  width: "40px", // Menyamaratakan lebar tombol
                  padding: "0", // Menghilangkan padding agar ukurannya tetap konsisten
                }}
                onClick={() => handleCountChange(type, "decrement")}
              >
                -
              </Button>
              <span
                style={{
                  border: "1px solid #D0D0D0",
                  padding: "5px 15px", // Padding tambahan untuk memberi ruang lebih pada angka
                  borderRadius: "10px",
                  minWidth: "50px", // Lebar minimal untuk angka lebih besar
                  textAlign: "center",
                  height: "40px", // Menyamaratakan tinggi dengan tombol
                  display: "flex", // Agar angka selalu berada di tengah
                  justifyContent: "center", // Memastikan angka berada di tengah secara horizontal
                  alignItems: "center", // Memastikan angka berada di tengah secara vertikal
                }}
              >
                {counts[type]}
              </span>
              <Button
                variant="outline-secondary"
                size="sm"
                style={{
                  borderColor: "#7126B5",
                  height: "40px", // Menyamaratakan tinggi
                  width: "40px", // Menyamaratakan lebar tombol
                  padding: "0", // Menghilangkan padding agar ukurannya tetap konsisten
                }}
                onClick={() => handleCountChange(type, "increment")}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} style={{ backgroundColor: " #4B1979" }}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PassengersPopup;
