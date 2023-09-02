import React, { useState, useRef } from 'react'  // Import de react et hooks pour les besoins du composant
import open from '../../assets/ChevronOpen.png'
import './collapse.css'


export default function Collapse (props) {    // exporte le composant 'Collapse' et usestate pour Créer 3 variables
  const [setActive, setActiveState] = useState(""); // 'setActive, soit "", soit éffondré, soit étendu
  const [setHeight, setHeightState] = useState("0px"); // la hauteur soit 0px éffondré soit la hauteur du contenu
  const [setRotate, setRotateState] = useState("open"); // Orientation image btn fermé/ouvert
  const content = useRef(null); // hook useRef pour créer une référence à l'élément de contenu du composant.
  
  function toggleCollapse() {  // toggleCollapse quand on clique sur le bouton
    setActiveState(setActive === "" ? "active" : ""); //
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`); //
    setRotateState(setRotate === "open" ? "close" : "open"); //
  } // // // Ces lignes mettent à jour l'état du composant.
  return (
        <div className="collapse_div">
          <button className={`collapse_btn ${setActive}`} onClick={toggleCollapse}  >
            <div className="collapse_title" >{props.title}</div>
            <img className={`${setRotate}`} src={open} alt="ouvrir" />
        </button>
    
          <div className="collapse_content" 
          ref={content}
          style={{ maxHeight: `${setHeight}` }}>
            <div className='collapse_content_container'>
            <div className="collapse_text">{props.content}</div>
            </div>
          </div>
        </div>
    )}

  
    
