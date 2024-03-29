import { Link } from "react-router-dom";
import React from 'react';
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Loader'
import '../../utils/style/Loader.css'
import './LocationList.css'

//appel APi pour les datas avec UseFetch et du loader inclus
export default function LocationList() {   // composant fonctionnel 
  const { data, isLoading, error } = useFetch(`/logements.json`) // 'useFetch' {hook}  > données, sinon msg erreur
  if (error) {
    return <pre>{error}</pre>
  }
      return(
          <section className="location_container">
          {isLoading ? (
            <div className="loader_wrapper">
              <Loader data-testid="loader" /></div>
          ) : (data.map((logement) => (
                      <Link className="location_link" key={logement.id} to={`/Logement/${logement.id}`}>
                          <img className="location_img" key={"cover"+logement.id} src={logement.cover} alt={logement.title} />
                          <h2 className="location_title" key={"title"+logement.id}>{logement.title}</h2>
                          <div className="background"></div>
                      </Link>
                  )
              ))}
          </section>
      )
  }





  
  
