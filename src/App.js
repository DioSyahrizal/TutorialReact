/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id:'asd2', name: 'Dio', chakra:20},
      {id:'as45t', name: 'Syahrizal', chakra:19},
      {id: 'xcv', name: 'Lala', chakra: 30}
    ],
    showPersons: false
  }

  deleteHandler = (indexPerson) => {
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let assignedClass = [];
    if(this.state.persons.length <= 2){
      assignedClass.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClass.push(classes.bold);
    }


    let btnClass = '';
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
            click={()=> this.deleteHandler(index)}
            name={person.name}
            chakra={person.chakra}
            key={person.id}
            changed={(event)=> this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )
      btnClass = classes.Red;
    }
    return (
        <div className={classes.App}>
          <h1>My Name is Dio!</h1>
          <p className={assignedClass.join(' ')}>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.tooglePersonHandler}>Change!</button>
          {persons}
        </div>
    );
  }
}

export default App;
