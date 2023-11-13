//@ts-nocheck
import React, { useState, useEffect } from "react";
import AutoCompleteInput from "./autoComplete";
import Map from "./map";
import ReactMapGL from "react-map-gl";
import Geocode from "react-geocode";

const MAPBOX_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN";

// Initialize the Geocoding library
Geocode.setApiKey(MAPBOX_TOKEN);
Geocode.enableDebug();

const Geocoding = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });

  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestionsDeparture, setSuggestionsDeparture] = useState<string[]>(
    []
  );
  const [suggestionsDestination, setSuggestionsDestination] = useState<
    string[]
  >([]);

  const handleDepartureChange = (inputValue: string) => {
    setDeparture(inputValue);
    fetchLocationSuggestions(inputValue, setSuggestionsDeparture);
  };

  const handleDestinationChange = (inputValue: string) => {
    setDestination(inputValue);
    fetchLocationSuggestions(inputValue, setSuggestionsDestination);
  };

  const fetchLocationSuggestions = async (
    inputValue: string,
    setSuggestions: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (inputValue) {
      try {
        const response = await Geocode.fromAddress(inputValue);
        const suggestions = response.results.map(
          (result) => result.formatted_address
        );
        setSuggestions(suggestions);
      } catch (error) {
        console.error("Geocoding error:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <h1>Mapbox Directions</h1>
      <AutoCompleteInput
        suggestions={suggestionsDeparture}
        onChange={handleDepartureChange}
        value={departure}
      />
      <AutoCompleteInput
        suggestions={suggestionsDestination}
        onChange={handleDestinationChange}
        value={destination}
      />
      <div style={{ height: "400px" }}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(newViewport) => setViewport(newViewport)}
        />
      </div>
    </div>
  );
};

export default Geocoding;
