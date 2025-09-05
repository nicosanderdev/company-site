import { useState, useEffect } from 'react';
import { productFeatures, type ProductFeature } from '../data/ProductFeatures';

// This hook simulates an API call for now, but is ready for a real one.
export const featureService = () => {
  const [data, setData] = useState<ProductFeature[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate network delay
    const timer = setTimeout(() => {
      try {
        // In a real scenario, you would fetch from an API here.
        // For now, we're just using the static data from our file.
        setData(productFeatures);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load features.');
        setIsLoading(false);
      }
    }, 500); // 0.5 second delay to simulate loading

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty dependency array means this effect runs only once

  return { data, isLoading, error };
};