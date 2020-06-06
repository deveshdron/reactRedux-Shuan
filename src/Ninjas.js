import React from "react";

// const Ninjas = ({ninjas}) => {

const Ninjas = (props) => {
  const ninjas = props.ninjas;
  //other way- by destructuring
  // const { ninjas } = props;

  // by destructuring method
  // const Ninjas = ({ninjas}) => {

  const ninjaList = ninjas.map((ninja) => {
    if (ninja.age > 24)
      return (
        <div className="ninja-list" key={ninja.id}>
          <div>name: {ninja.name}</div>
          <div>age: {ninja.age}</div>
          <div>belt: {ninja.belt}</div>
        </div>
      );
    else return null;

    // using ternary operator
    // return ninja.age > 24 ? (
    //   <div className="ninja-list" key={ninja.id}>
    //     <div>name: {ninja.name}</div>
    //     <div>age: {ninja.age}</div>
    //     <div>belt: {ninja.belt}</div>
    //   </div>
    // ) : null;
  });

  return ninjaList;
};

export default Ninjas;
