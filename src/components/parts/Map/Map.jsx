import React, { useState } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';

const markers = [
  { id: 1, name: 'Route de Beg Nod', coords: [48.817822, -3.040615], color: '#0072B2', description: 'Aperçu le 28 août à 19h30', img: '/Carbone_Young.jpeg', link: 'https://lilineslab.fr' },
  { id: 2, name: 'Two', coords: [48.80745787519335, -3.054176270416763], color: '#CC0000', img: null },
  { id: 3, name: 'Three', coords: [48.814228, -3.054241], color: '#FFAA00', img: null },
  //{ id: 4, name: 'En route pour Brehat !', coords: [48.823031, -3.012668], color: '#009E73', img: null },
  { id: 5, name: "Le phare du Paon", coords: [48.865329, -2.985839], description: `Le 2 septembre un chat noir portant un bonnet rouge a été aperçu en train de faire une sieste au soleil`, color: '#009E73', img: null },
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
    <div /*style={{ height: '100vh', width: '100%', margin: 'auto' }}*/>
      <Map defaultCenter={[48.817822, -3.040615]} defaultZoom={12} height={500}>
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
            <div
              style={{
                backgroundColor: '#182534',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                //boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
              }}
            >
              <strong>{selectedMarker.name}</strong>
              {/* <p>Coords : {selectedMarker.coords.join(', ')}</p> */}
              <p>{selectedMarker.description}</p>
              {selectedMarker.img !== null ? (
                //<a target='_blank' href={selectedMarker.link}>
                <img src={selectedMarker.img} style={{with: '5rem', height: '5rem' }}/>
                //</a>
              ) : (<p> </p>)}
            </div>
          </Overlay>
        )}
      </Map>
    </div>
  );
};