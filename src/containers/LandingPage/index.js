import React  from 'react';
import Card from '../../components/Card';
import { feedsource } from '../../data/data';
import axios from 'axios';
import './styles.scss';

function LandingPage() {


  if (!isLoad) {
    return <span>Loading done!</span>
  } else {
    return (
      <div className="landing-page">
        {data.map((item, id) => (
          <Card key={id} data={item}/>
        ))}
      </div>
    )
  }
}

export default LandingPage;