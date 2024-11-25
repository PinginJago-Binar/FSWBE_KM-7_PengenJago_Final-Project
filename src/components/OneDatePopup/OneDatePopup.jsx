import React, { useState } from "react";
import "react-multi-date-picker/styles/colors/purple.css";
import "react-multi-date-picker/styles/colors/green.css";
import { Calendar } from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

// Styled-components untuk mengganti warna hari-hari dalam minggu
const StyledCalendar = styled(Calendar)`
  .rmdp-week-day {
    color: #8a8a8a !important; /* Ganti warna hari-hari dalam minggu */
  }
`;

const OneDatePopup = ({ props, show, handleClose }) => {
  return (
    <Modal
      {...props}
      Modal
      show={show}
      onHide={handleClose}
      centered
      className="d-flex justify-content-center align-items-center"
    >
      <StyledCalendar color="purple" />
    </Modal>
  );
};

export default OneDatePopup;
