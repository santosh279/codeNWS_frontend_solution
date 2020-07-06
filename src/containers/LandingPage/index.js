/* eslint-disable no-nested-ternary */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from '../../components/Card';
// import { feedsource } from '../../data/data';
import './styles.scss';
import { useFetch } from '../../hooks/useFetch';

function LandingPage() {
  /**
   * spacexdata url
   */
  const SPACEXDATA_URL = 'https://api.spacexdata.com/v4/launches/past';

  /**
   * custom hook to fetch data from the provided URL
   */
  const [response, loading, hasError] = useFetch(SPACEXDATA_URL);

  /**
   * Main view with Error handling.
   * Loader is dislayed until the response is been fetched.
   * 404 Error display page if error occured while fetching data.
   * Response of the spacexdata if there is no error
   */
  return (
    <>
      {loading ? (
        <span className="loader-display">Loading...</span>
      ) : hasError ? (
        <div className="error"> Error while fetching data...</div>
      ) : (
        <div className="landing-page">
          {response.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card key={index} data={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default LandingPage;
