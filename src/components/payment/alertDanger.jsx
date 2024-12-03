import React from "react";

const alertDanger = () => {
  return (
    <div className="container">
      <div className="p-3 text-white fw-bolder fs-6 bg-danger border border-danger-subtle rounded-3">
        Selesaikan dalam 00:15:00
      </div>
    </div>
  );
};

export default alertDanger;
