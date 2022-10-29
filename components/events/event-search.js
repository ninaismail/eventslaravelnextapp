import { useRef } from 'react';

import classes from './event-search.module.css';

function EventsSearch(props) {
    //we can also use 2 wat binding by using useState
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    //store the selected values
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
   //pass these values as props
   //this prop is a function tghant has 2 parameters
    props.onSearch(selectedYear, selectedMonth);    
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInputRef}>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>Septemer</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
      </div>
      <button>Find Events</button>
    </form>
  );
}

export default EventsSearch;