import { fetchData } from "../api/api";
import React, { useEffect, useState } from "react";

const List = ({title,param}) => {

    const[list,setList]=useState([]);

    useEffect(()=>{
       fetchData(param).then( res => setList(res.data.results))
    },[]);
    
  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{title}</h2>
        <div className="col">
          <div className="row_posters">
            {
               list.map(item => <img
                    className="row_poster row_posterLarge"
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title}
                  />)
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
