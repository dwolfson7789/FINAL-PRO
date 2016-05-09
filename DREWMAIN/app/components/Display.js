import React from 'react';
import {Link} from 'react-router';
import AddTip from './AddTip';

function DisplayResults(props){

  const SitchList = props.sitches.map((sitch) => {
    return<div key={sitch._id} className="Results"><section >
      <div className="keyInfo">

        <h1>{sitches.name}</h1>
          <h3>{sitches.description}</h3>

                  </div>

                    <hr></hr>

                    <aside>
                    <img src={restaurant.url} />

                  </aside>
            <br/>

              <div className="restInfo">
              <h4>Vegetarian-friendly: {restaurant.veggie}</h4>
              <h4>Accepting Reservations: {restaurant.reservations}</h4>
              <h4>Bottomless: {restaurant.bottomless}</h4>
              <h4>Price Range: {restaurant.price}</h4>
              <h4>Food Rating: {restaurant.foodrating}</h4>
              <h4> Drink Rating: {restaurant.drinkrating}</h4>
              Tips: {restaurant.tips.map((each_tip, i) => {
                return <p key={i}>{each_tip.author}: {each_tip.tip}</p>;
              })}

          <section className="buttonSection">
                <Link to={`/AddTip/${restaurant._id}`}><button className="tipButton">ADD TIP </button></Link>
          </section>
          <br/>

      <form action="http://maps.google.com/maps" method="get" target="_blank">
        <label className="googleInput" htmlFor="saddr">Enter your location</label><br/>
        <input type="text" name="saddr" />
          <input type="hidden" name="daddr" value={restaurant.name} />
            <input className="googleButt"type="submit" value="Get directions" />
          </form>
        </div>
      </section>
    </div>;
  });
  return(
      <div>
        <ul>{SitchList}</ul>
        </div>
  );
}

export default DisplayResults;
