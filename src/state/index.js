import { createGlobalState } from "react-hooks-global-state";


export const { useGlobalState } = createGlobalState({
  coords: {
    lat: null,
    lon: null,
  },
});
