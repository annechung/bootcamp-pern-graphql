import React from 'react';
import PropTypes from 'prop-types';

import './BasicTable.scss';

const ADDITIONAL_HEADERS = [
  "stars"
];

/**
 * @param id id to determine unique key 
 */
const createStarEmoji = id => (
  <span key={id} role="img" aria-label="star-emoji">
    ⭐
  </span>
);

/**
 * "Get" specifies a generic return
 * @param rating data rating to determine how many emojis aree needed
 */
const getEmojis = rating => {
  const emojis = [];
  for(let i=0; i < rating; i++) {
    emojis.push(createStarEmoji(i));
  }
  return emojis;
}

/**
 * "Get" specifies a generic return
 * @param {*} object data element; see typing in the PropTypes
 */
const getTableHeaders = (object = {}) => {
  return Object.keys(object);
}

/**
 * "render" specifies JSX in the return 
 * @param {*} row data element
 */
const renderRows = (row = {}) => {
  return (
    <tr key={row.id}>
      {Object.values(row).map(
        (value, i) => <td key={i}>{value}</td>
      )}
      <td key={row.rating}>{getEmojis(row.rating)}</td>
    </tr>
  )
}

const BasicTable = ({ data }) => {
  return (
    <table className="basic-table">
      <tbody>
        <tr>
          {getTableHeaders(data[0]).map(
            headerName => <th key={headerName}>{headerName}</th>
            )}
          {ADDITIONAL_HEADERS.map(
            (headerName, i) => <th key={headerName}>{headerName}</th>
          )}
        </tr>
        {data.map(renderRows)}
      </tbody>
    </table>
  )
}

export default BasicTable;

/**
 * Much more substantial example of typing properties. If the data does not align to the type, an error will occur.
 */
BasicTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      budget: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      type: PropTypes.string
    })
  )
};

BasicTable.defaultProps = {
  data: []
};
