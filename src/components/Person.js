import React from "react";
import { ReactComponent as Facebook } from "../media/icons/facebook.svg";
import { ReactComponent as Instagram } from "../media/icons/instagram.svg";
import { ReactComponent as Youtube } from "../media/icons/youtube.svg";
import { ReactComponent as Twitter } from "../media/icons/twitter.svg";
import clientsAPI from "../data/clients";
import { Link } from "react-router-dom";

const Person = props => {
  const client = clientsAPI.get(props.match.params.number);
  return (
    <div key={client.id} className="App__container">
      <div className="App__container--wrapper">
        <div className="App__decoration-block"></div>
        <div className="App__social">
          <div className="App__social--wrap">
            <a className="App__social--link" href="#/">
              <Facebook />
            </a>
            <a className="App__social--link" href="#/">
              <Instagram />
            </a>
            <a className="App__social--link" href="#/">
              <Youtube />
            </a>
            <a className="App__social--link" href="#/">
              <Twitter />
            </a>
          </div>
          <div className="App__list">
            <div className="App__list--line"></div>
            <div className="App__list--number">{client.number}</div>
          </div>
          <div className="App__view-profile--wrapper">view profile</div>
        </div>
        <div className="App__person">
          <div className="App__person--wrapper">
            <h1 className="App__person--name">{client.name.split(" ")[0]}</h1>
            <h1 className="App__person--name">
              {client.name
                .split(" ")
                .splice(1)
                .join(" ")}
            </h1>
            <div className="App__person--profession">{client.profession}</div>
          </div>
          <div className="App__play-profile">
            <button className="App__play-profile--btn">
              <span className="App__play-profile--btn--triangle"></span>
            </button>
          </div>
        </div>
        <div className="App__list-number">
          <ul className="App__list-number--wrapper">
            {clientsAPI.all().map(client => (
              <li key={client.id} className="App__list-number--item">
                <Link
                  className={
                    client.number === props.match.params.number
                      ? "App__list-number--link--active"
                      : "App__list-number--link"
                  }
                  to={`/client/${client.number}`}
                >
                  {client.number}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Person;
