import React, { useState } from "react";
import PropTypes from 'prop-types';

const Calculate = ({ CalculateAge }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
    console.log(birthDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CalculateAge(birthDate);
    console.log("button ");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={birthDate} type="date" onChange={handleChangeDate} />
        <button
          disabled={!birthDate}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Calculate Age
        </button>
      </form>
    </div>
  );
};

Calculate.propTypes = {
  CalculateAge: PropTypes.func.isRequired,
};

export default Calculate;
