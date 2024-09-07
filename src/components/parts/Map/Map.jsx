import { useState } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';
//import { NavLink } from 'react-router-dom';
import './Map.css';
import Carbone from '/Carbone_Young.jpeg';

const markers = [
  { id: 1, name: 'Tout commence', coords: [ 48.740784, -3.074970], color: '#0072B2', description: 'Carbone est né ici il y a un an', img: Carbone, link: null},
  { id: 2, name: 'Un abri !', coords: [ 48.750640, -3.073772], color: '#009E73', description: '10 avril: des enfants ont vu un chat noir qui dormait caché dans un buisson', img: null, link: null},
  { id: 3, name: 'Ventre plein !', coords: [ 48.757855, -3.068396], color: '#FFAA00', description: '25 avril: une mamie affirme avoir nourri un chat noir pendant quelques jours', img: null, link: null},
  { id: 4, name: 'A boire !', coords: [ 48.762533, -3.053998], color: '#FFAA00', description: '27 avril: un chat noir a été aperçu en train de boire', img: null, link: null},
  { id: 5, name: 'Balade', coords: [ 48.779605, -3.044431], color: '#0072B2', description: '2 mai: un chat noir aperçu se promenant sur le port de Paimpol', img: null, link: null},
  { id: 6, name: 'Danger !', coords: [ 48.787483, -3.056020], color: '#CC0000', description: 'Un toutou course un petit chat noir !', img: null, link: null},
  { id: 7, name: 'Ventre plein !', coords: [ 48.792603, -3.063684], color: '#0072B2', description: '20 mai: Une bonne âme a nourri un petit chat noir pendant quelques jours', img: null, link: null},
  { id: 8, name: 'Un abri !', coords: [ 48.800892, -3.057170], color: '#009E73', description: '23 juin: un fermier a vu un petit chat noir dormir dans sa ferme pendant quelques jours', img: null, link: null},
  { id: 9, name: 'Attention !', coords: [48.80745787519335, -3.054176270416763], color: '#CC0000', description: 'Course-poursuite entre un chat blanc et un chat noir !', img: null, link: null},
  { id: 10, name: 'Bien nourri', coords: [48.814228, -3.054241], color: '#FFAA00', description: '5 juillet: des vacanciers ont nourri un petit chat noir pendant quelques jours', img: null, link: null},
  { id: 11, name: 'En route pour Brehat ?', coords: [48.823815, -3.012943], description: '25 juillet: un chat noir vu sur une des vedettes de Brehat ?', color: '#0072B2', img: null, link: null}, 
  { id: 12, name: 'A boire et à manger !', coords: [ 48.846015, -3.000304], color: '#FFAA00', description: '5 août: un chat noir traine régulièrement sur la place et reçoit à boire et à manger', img: null, link: null},
  { id: 13, name: 'En balade', coords: [ 48.854088, -2.999688], color: '#0072B2', description: 'Un chat noir se promène souvent ici', img: null, link: null},
  { id: 14, name: 'Danger !', coords: [48.858103, -2.996965], color: '#CC0000', description: '8 août: un berger allemand aboie car il voit un chat noir', img: null, link: null},
  { id: 15, name: 'En visite', coords: [ 48.857642, -3.004976], color: '#009E73', description: "21 août: un chat noir vu se prélassant au soleil à l'abri des murs du phare", img: null, link: null},
];

export function BreizhMap() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    if (selectedMarker && selectedMarker.id === marker.id) {
      setSelectedMarker(null); 
    } else {
      setSelectedMarker(marker);
    }
  };

  return (
    <div>
      <Map defaultCenter={[48.817822, -3.040615]} defaultZoom={12} height={450}>
        {markers.map(marker => (
          <Marker
            key={marker.id}
            anchor={marker.coords}
            color={marker.color}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}
        {selectedMarker && (
          <Overlay anchor={selectedMarker.coords} offset={[-10, 0]}>
            <div className='mapCard'>
              <p className='mapTitle'>{selectedMarker.name}</p>
              {/* <p>Coords : {selectedMarker.coords.join(', ')}</p> */}
              <p>{selectedMarker.description}</p>
              {selectedMarker.img !== null ? (
                <img className='mapImg' src={selectedMarker.img} />
              ) : (<p></p>)}

              {/*selectedMarker.link !== null ? (
                <NavLink className='mapNavlink' target="_blank" to={selectedMarker.link}>En savoir plus</NavLink>
              ) : (<p></p>)}
              */}
            </div>
          </Overlay>
        )}
      </Map>
    </div>
  );
};