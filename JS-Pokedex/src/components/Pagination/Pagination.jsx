import React from "react";

import './Pagination.scss'
const Pagination =  ({prev, next, onNext, onPrev}) => {
  
  return (
    <div className="pagination">
      {prev ? (<button onClick={onPrev} type="button">Anterior</button>) : ''}
      {next ? (<button onClick={onNext} type="button">siguiente</button>) : ''}
      
    </div>
  );
};

export default Pagination;
