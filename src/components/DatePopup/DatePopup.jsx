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

const DatePopup = ({ props, show, handleClose }) => {
  const [values, setValues] = useState([
    new DateObject().setDay().subtract(1, "month"),
    new DateObject().setDay().add(1, "month"),
  ]);

  return (
    <Modal
      {...props}
      Modal
      show={show}
      onHide={handleClose}
      centered
      className="d-flex justify-content-center align-items-center"
    >
      <StyledCalendar
        color="purple"
        value={values}
        onChange={setValues}
        range
        numberOfMonths={2}
        showOtherDays
      />
    </Modal>
  );
};

export default DatePopup;
