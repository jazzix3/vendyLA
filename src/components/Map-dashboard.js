import React, { useState } from 'react'
import { GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const libraries = ["places"];

const containerStyle = { width: '400px', height: '400px' };

const center = { lat: 34.052235, lng: -118.243683 };

const options ={
    styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }]
        }
    ]
};

export default function Places() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
      });
    
    if (!isLoaded) return <div>Loading</div>;

    return <MapDashboard />;
}
    
function MapDashboard(){
    const [selected, setSelected] = useState(null);
    
    return (
        <>
        <div className="places-container">
            <PlacesAutoComplete setSelected={setSelected} />
        </div>

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={options}
        >
        <></>
            {selected && <Marker position ={selected} />}
        </GoogleMap>
        </>
    );
}



const PlacesAutoComplete = ({ setSelected }) => {
    const {
        ready,                          // Whether script is loaded
        value,                          // What user types into input box
        setValue,
        suggestions: { status, data },    // Whether data is fetched correctly
        clearSuggestions                
    } = usePlacesAutocomplete();


    const handleSelect = async(address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const {lat, lng} = await getLatLng(results[0]);
        setSelected({ lat, lng })
    }

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput value={value} onChange={e => setValue(e.target.value)} disable={!ready}
            className="combobox-input" placeholder="Search for address" />
            <ComboboxPopover>
                <ComboboxList>
                    {status ==="OK" && 
                    data.map(({ place_id, description }) => (
                        <ComboboxOption key= {place_id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}
