import React, { useRef } from 'react'
import Button from './ui/Button';
import Input from './ui/Input';
import classes from './WeatherSearch.module.css';

const WeatherSearch = (props) => {
  const longitudeRef = useRef();
  const latitudeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    
    let enteredLatitudeRef = latitudeRef.current.value;
    let enteredLongitudeRef = longitudeRef.current.value;
    props.submitSearch(enteredLatitudeRef, enteredLongitudeRef);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input ref={latitudeRef} input={{
        type: 'text',
        placeholder: 'Latitude',
        required: true,
      }} />
      <Input ref={longitudeRef} input={{
        type: 'text',
        placeholder: 'Longitude',
        required: true,
      }} />
      <Button>Submit</Button>
    </form>
  )
}

export default WeatherSearch;