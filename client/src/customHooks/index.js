import react, { useEffect } from 'react';
import { useRef } from "react";

export function usePrevious(value, intialValue) {
    // Create a ref to store the previous value.
    const ref = useRef(intialValue);
  
    // Use useEffect to update the ref's current value *after* the render completes.
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run the effect if the input value changes.
  
    // Return the ref's current value, which still holds the value from the *previous* render.
    return ref.current;
  }