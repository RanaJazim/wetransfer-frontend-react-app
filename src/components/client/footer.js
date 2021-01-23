import React from "react";

const Footer = () => {
  return (
    <div className="row">
      <div className="col-xl-12 ps-5 mb-5" style={{ background: "#e8fcf7" }}>
        <h3>Prevtao</h3>
        <span>
          <img
            src="/assets/images/coronavirus.png"
            className="float-end mt-0"
            width="100px"
          />
        </span>
        <span>
          <img
            src="/assets/images/coronavirus.png"
            className="float-start"
            width="30px"
          />
        </span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <span>
          <img
            src="/assets/images/coronavirus.png"
            className="float-start"
            width="30px"
          />
        </span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <span>
          <img
            src="/assets/images/coronavirus.png"
            className="float-start"
            width="30px"
          />
        </span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Footer;
