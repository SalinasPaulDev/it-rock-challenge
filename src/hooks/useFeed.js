import { useState, useEffect } from "react";
import feed from "../../assets/mocks/feed.json";

export const useFeed = () => {
  const [feedData, setFeedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeed = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setFeedData(feed);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadFeed();
  }, []);

  const refreshFeed = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFeedData(feed);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return {
    feedData,
    isLoading,
    error,
    refreshFeed,
  };
};
