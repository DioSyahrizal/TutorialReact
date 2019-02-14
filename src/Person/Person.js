import React from 'react';
import classes from './Person.css';

const Person = props => {

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className={classes.Person} style={style}>
      <p onClick={props.click}>
        I am {props.name}! My chakra is {props.chakra} %
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default Person;
