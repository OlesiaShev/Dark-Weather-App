import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  lat: null,
  lon: null,
});
    
export { setGlobalState, useGlobalState };