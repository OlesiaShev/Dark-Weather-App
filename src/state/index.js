import { createGlobalState } from "react-hooks-global-state";


export const { useGlobalState, setGlobalState } = createGlobalState({
  coords: {
    lat: null,
    lon: null,
  },
 globalCity: "",
  forecastObject: {
    data: {
      name: "Deli"
    }
},
});
