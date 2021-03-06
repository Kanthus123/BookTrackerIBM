import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const BookRead = ({ rating, setRating, conclusion, setConclusion }) => {
  return (
    <>
      <p>Nota: 
      <select value={rating} onChange={setRating} required>
        <option value='1'> 1 </option>
        <option value='2'> 2 </option>
        <option value='3'> 3 </option>
        <option value='4'> 4 </option>
        <option value='5'> 5 </option>
      </select></p>
      <p>Concluido Em: </p>
      <DatePicker selected={conclusion} onChange={(date) => setConclusion(date)} required/>
    </>
  );
}
 
export default BookRead;