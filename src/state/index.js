import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  coords: {
    lat: null,
    lon: null,
  },
});

export { useGlobalState, setGlobalState };