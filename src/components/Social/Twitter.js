import React from "react";
import { Link } from "react-router-dom";

let clients = [];
for (let i = 1; i < 21; i++) {
  clients.push({
    id: i,
    followers: i + Math.ceil(Math.random() * 10000)
  });
}
const twitterApi = [
  {
    id: 1,
    title: "Connect",
    textPrimary:
      "and add your Twitter username. We don't ask for your Twitter password.",
    textSecondary: ""
  },
  {
    id: 2,
    title: "Get Free Followers",
    textPrimary:
      "Assign points to your Twitter profile to get more followers. Points are spent when somebody follows you.",
    textSecondary: ""
  },
  {
    id: 3,
    title: "Earn Points",
    textPrimary:
      "You'll need points to keep your Twitter profile visible to others.",
    textSecondary:
      "Earn free points by following other users, retweeting, visiting websites, or referring your friends to LIKERS."
  }
];
const supportApi = [
  {
    id: 1,
    text: "Most active community of Twitter users"
  },
  {
    id: 2,
    text: "We do not sell followers"
  },
  {
    id: 3,
    text: "Absolutely safe & free to use"
  },
  {
    id: 4,
    text: "Most active community of Twitter users"
  },
  {
    id: 5,
    text: "We never auto-tweet or ask for your password"
  }
];
function Twitter({ color }) {
  return (
    <div className="App__container">
      <div
        className="App__container--wrapper"
        style={{ alignItems: "flex-start" }}
      >
        <section className="social-block">
          <div className="social-block__wrap">
            <aside className="main-info">
              <h1 className="social-block__title">
                Get Free Twitter Followers using Likers
              </h1>
              <p className="social-block__text">
                Likers enables you to get hundreds of free Twitter followers
                every day. Enjoy the benefits of more Twitter followers i.e.
                more audience and more influence, in just 3 steps.
              </p>
              <p className="social-block__text">
                There's no need to buy Twitter followers from other sources when
                you can get followers for free using Likers
              </p>
            </aside>
            <aside className="support-info">
              <ul className="support-info__list">
                <li
                  style={{ backgroundColor: color }}
                  className="support-info__title"
                >
                  WHY LIKERS FOR FOLLOWERS?
                </li>
                {supportApi.map(s => (
                  <li key={s.id} className="support-info__item">
                    {s.text}
                  </li>
                ))}
                <li className="support-info__btn-wrapper">
                  <Link className="support-info__button" to="/signup">
                    Add your profile now
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
          <h1 className="social-block__text--works">Here's how it works:</h1>
          <div className="social-block__grid">
            {twitterApi.map(twitt => (
              <div key={twitt.id} className="social-block__grid--block">
                <div className="social-block__grid--number">{twitt.id}</div>
                <div className="social-block__grid--title">{twitt.title}</div>
                <div className="social-block__grid--text-primary">
                  {twitt.id === 1 && (
                    <Link className="social-block__grid--link" to="/signup">
                      Sign up{" "}
                    </Link>
                  )}
                  {twitt.textPrimary}
                </div>
                <div className="social-block__grid--text-secondary">
                  {twitt.textSecondary}
                </div>
              </div>
            ))}
          </div>
          <div className="social-block--about">
            Likers provides the safest, the fastest and the natural way to get
            free Twitter followers.
          </div>
          <div className="support-info__btn-free-wrapper">
            <Link className="support-info__button" to="/signup">
              Join now for free
            </Link>
          </div>
          <hr className="hr" />
          <p className="social-block__text--works">
            People using Likers and getting more Retweets and Likes every day
          </p>
          <div className="clients">
            {clients.map(client => (
              <div key={client.id} className="clients__wrap">
                <img
                  className="clients__img"
                  src={require(`../../media/profile/${client.id}.jpg`)}
                  alt="profile"
                />
                <div className="clients__count">{client.followers}</div>
                <p className="clients__followers">followers</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Twitter;
