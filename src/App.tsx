import "./App.css";
import "./index.css";
import { RiPinDistanceFill, RiTimeLine, RiPriceTag3Fill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import Modal from "./components/modal";
import { useState } from "react";
import { useConsoleLog } from "./hooks/useConsoleLog";
import AutoCompleteInput from "./components/autoComplete";
import Map from "./components/map";
import Geocoding from "./components/geocoding";
function App() {
  const [departure, setDeparture] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const handleDepartureChange = (
    event: React.FormEvent,
    { newValue }: { newValue: string }
  ) => {
    setDeparture(newValue);
  };

  const handleDestinationChange = (
    event: React.FormEvent,
    { newValue }: { newValue: string }
  ) => {
    setDestination(newValue);
  };

  const token = localStorage.getItem("token");

  return (
    <div>
      {/*      <h1>Mapbox Directions</h1>
      <AutoCompleteInput
        suggestions={[
          "New York, NY",
          "Los Angeles, CA",
          "Chicago, IL",
          "San Francisco, CA",
        ]}
        onChange={handleDepartureChange}
        value={departure}
      />
      <AutoCompleteInput
        suggestions={[
          "New York, NY",
          "Los Angeles, CA",
          "Chicago, IL",
          "San Francisco, CA",
        ]}
        onChange={handleDestinationChange}
        value={destination}
      />
      <Geocoding /> */}
    </div>
  );
}

export default App;
/*  <div className="container font-Poppins">
      {open && <Modal onClose={() => setOpen(false)} />}
      <div className="h-[300px] bg-slate-400"></div>
      <div className="flex flex-col gap-3 p-4">
        <h3 className="mb-[0.15rem]  font-semibold">Location</h3>
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-3">
          <SlLocationPin />
          <input
            onChange={handleChangeRoute}
            className="w-full bg-transparent"
            name="departure"
            value={route.departure}
            onFocus={() => setOpen(true)}
          />
        </div>
        <div className="ml-[1.16rem] h-[25px] w-[1px] border border-dashed border-black border-b-gray-600" />
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-3">
          <SlLocationPin />
          <input
            className="w-full bg-transparent"
            name="destination"
            onChange={handleChangeRoute}
            value={route.destination}
          />
        </div>
        <h3 className="mt-2 mb-[0.15rem] font-semibold">Trip Details</h3>
        <div className="flex justify-between">
          <div className="flex items-center justify-evenly gap-2 rounded-xl  bg-slate-100 p-2  font-medium">
            <RiPinDistanceFill fontSize={"1.25rem"} />
            3.5 km
          </div>
          <div className="flex items-center justify-evenly gap-2 rounded-xl  bg-slate-100 p-2  font-medium">
            <RiTimeLine fontSize={"1.25rem"} />
            3.5 km
          </div>
          <div className="flex items-center justify-evenly gap-2 rounded-xl  bg-slate-100 p-2  font-medium">
            <RiPriceTag3Fill fontSize={"1.25rem"} />
            25 MAD
          </div>
        </div>
      </div>
    </div>  */
