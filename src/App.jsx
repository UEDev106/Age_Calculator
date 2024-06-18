import React, { useState } from 'react';
import './App.css';
import Result from './Components/Result.jsx';
import Calculate from './Components/Calculate.jsx';
import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

function App() {
  const [age, setAge] = useState(null);

  const CalculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj);
    const ageDays = differenceInDays(today, birthDateObj);

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  return (
    <div>
      <h1 className="text-2xl">Age Calculator React App</h1>
      <Calculate CalculateAge={CalculateAge} />
      {age && <Result age={age} />}
    </div>
  );
}

export default App;
