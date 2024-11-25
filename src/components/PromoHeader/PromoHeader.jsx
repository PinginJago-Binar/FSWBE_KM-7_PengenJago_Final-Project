import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "../SearchBox/SearchBox";

function PromoHeader() {
  const promoHeaderContainer = document.getElementById(
    "promo-header-container"
  );
  if (!promoHeaderContainer) return null; // Pastikan elemen ada

  return ReactDOM.createPortal(
    <div className="promo-header pt-3">
      <div
        className="row d-flex align-items-center"
        style={{
          height: "40vh", // Tinggi total baris sama dengan kolom tengah
        }}
      >
        <div
          className="col-1 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(113, 38, 181, 0.5)",
            height: "70%", // Tinggi khusus untuk kolom kiri
          }}
        ></div>
        <div
          className="col-10 d-flex "
          style={{
            backgroundImage: "url(imgbanner.png)",
            backgroundSize: "cover",
            height: "100%",
          }}
        >
          <div
            className="d-flex flex-column"
            style={{ height: "100%", width: "100%" }}
          >
            <div style={{ marginTop: "30vh" }}>
              <SearchBox />
            </div>
          </div>
        </div>

        <div
          className="col-1 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(113, 38, 181, 0.5)",
            height: "70%",
          }}
        ></div>
      </div>
    </div>,
    promoHeaderContainer
  );
}

export default PromoHeader;
