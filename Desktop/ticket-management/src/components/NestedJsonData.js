import React, { useState } from "react";

const NestedJsonData = () => {
  const data = [
    {
      id: 1,
      name: "India",
      states: [
        {
          id: 11,
          name: "Odisha",
          cities: [
            {
              id: 111,
              name: "Bhubaneswar",
              districts: [
                { id: 1111, name: "Khurda" },
                { id: 1112, name: "Jatni" }
              ]
            },
            {
              id: 112,
              name: "Cuttack",
              districts: [
                { id: 1121, name: "Cuttack Sadar" },
                { id: 1122, name: "Baramba" }
              ]
            }
          ]
        },
        {
          id: 12,
          name: "Maharashtra",
          cities: [
            {
              id: 121,
              name: "Mumbai",
              districts: [
                { id: 1211, name: "Mumbai Suburban" },
                { id: 1212, name: "Mumbai City" }
              ]
            },
            {
              id: 122,
              name: "Pune",
              districts: [
                { id: 1221, name: "Pune City" },
                { id: 1222, name: "Pimpri-Chinchwad" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "USA",
      states: [
        {
          id: 21,
          name: "California",
          cities: [
            {
              id: 211,
              name: "Los Angeles",
              districts: [
                { id: 2111, name: "Hollywood" },
                { id: 2112, name: "Downtown LA" }
              ]
            },
            {
              id: 212,
              name: "San Francisco",
              districts: [
                { id: 2121, name: "Chinatown" },
                { id: 2122, name: "Fisherman's Wharf" }
              ]
            }
          ]
        },
        {
          id: 22,
          name: "New York",
          cities: [
            {
              id: 221,
              name: "New York City",
              districts: [
                { id: 2211, name: "Manhattan" },
                { id: 2212, name: "Brooklyn" }
              ]
            },
            {
              id: 222,
              name: "Buffalo",
              districts: [
                { id: 2221, name: "North Buffalo" },
                { id: 2222, name: "South Buffalo" }
              ]
            }
          ]
        }
      ]
    }
  ];

  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);

  const handleCountryChange = (e) => {
    const selectedCountry = data.find((country) => country.name === e.target.value);
    setCountry(selectedCountry);
    setState(null);
    setCity(null);
    setDistrict(null); // Reset the subsequent selections
  };

  const handleStateChange = (e) => {
    const selectedState = country.states.find((state) => state.name === e.target.value);
    setState(selectedState);
    setCity(null);
    setDistrict(null); // Reset the subsequent selections
  };

  const handleCityChange = (e) => {
    const selectedCity = state.cities.find((city) => city.name === e.target.value);
    setCity(selectedCity);
    setDistrict(null); // Reset the subsequent selections
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = city.districts.find((district) => district.name === e.target.value);
    setDistrict(selectedDistrict);
  };

  return (
    <div className="container">
      {/* Country Dropdown */}
      <div className="form-group">
        <label htmlFor="countrySelect">Select Country: </label>
        <select
          className="custom-select"
          id="countrySelect"
          onChange={handleCountryChange}
          defaultValue=""
        >
          <option value="">Select Country</option>
          {data.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
  
      {/* State Dropdown */}
      {country && (
        <div className="form-group">
          <label htmlFor="stateSelect">Select State: </label>
          <select
            className="custom-select"
            id="stateSelect"
            onChange={handleStateChange}
            defaultValue=""
          >
            <option value="">Select State</option>
            {country.states.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      )}
  
      {/* City Dropdown */}
      {state && (
        <div className="form-group">
          <label htmlFor="citySelect">Select City: </label>
          <select
            className="custom-select"
            id="citySelect"
            onChange={handleCityChange}
            defaultValue=""
          >
            <option value="">Select City</option>
            {state.cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}
  
      {/* District Dropdown */}
      {city && (
        <div className="form-group">
          <label htmlFor="districtSelect">Select District: </label>
          <select
            className="custom-select"
            id="districtSelect"
            onChange={handleDistrictChange}
            defaultValue=""
          >
            <option value="">Select District</option>
            {city.districts.map((district) => (
              <option key={district.id} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
      )}
  
      {/* Final selection */}
      {district && (
        <h4 className="mt-4">
          You have selected: {`${country.name} > ${state.name} > ${city.name} > ${district.name}`}
        </h4>
      )}
    </div>
  );
  
};

export default NestedJsonData;
