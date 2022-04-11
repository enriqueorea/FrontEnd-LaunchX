import React from "react";
import { motion } from "framer-motion";
import "./PokemonCard.scss";
const PokemonCard = ({
  pokemon: { id, sprites, name, weight, height, types },
}) => {
  return (
    <motion.div className="motion-div" animate={{ opacity: [0, .5, 1] }} transition={{ duration: 0.3 }}>
      <div className="pokemon__card">
        <div className="pokemon__card-img">
          <img src={sprites.front_default} alt={name} />
        </div>
        <div className="pokemon__card-info">
          <p>No. {id}</p>
          <p>Name: {name}</p>
          <p>HT: {(height / 3.937).toFixed(2)}"</p>
          <p>WT: {(weight / 4.536).toFixed(2)} lbs.</p>
          <div className="types">
            <p>Type: </p>
            {types.map((type, index) => (
              <p key={index}> {type.type.name} </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;
