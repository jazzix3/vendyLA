import React from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";
import "@reach/combobox/styles.css";


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

export default PlacesAutoComplete