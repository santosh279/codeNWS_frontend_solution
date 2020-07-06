// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = url => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then(res => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [url]);
  return [response, loading, hasError];
};
