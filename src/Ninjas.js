import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninja-list" key={ninja.id}>
        <div>name: {ninja.name}</div>
        <div>age: {ninja.age}</div>
        <div>belt: {ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete Ninja
        </button>
      </div>
    );
  });

  return ninjaList;
};

export default Ninjas;
