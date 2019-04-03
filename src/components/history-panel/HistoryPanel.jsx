import React from "react";
import PropTypes from "prop-types";

const HistoryPanel = ({ img, altText, text }) => (
  <>
    <div className="page-history__img-container">
      <img src={img} alt={altText} />
    </div>

    <p className="page-history__text">{text}</p>
  </>
);

HistoryPanel.propTypes = {
  img: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HistoryPanel;
