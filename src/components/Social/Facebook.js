import React from "react";
import Style from "style-it";
import { Link } from "react-router-dom";

let clients = [];
for (let i = 1; i < 21; i++) {
  clients.push({
    id: i,
    followers: i + Math.ceil(Math.random() * 10000)
  });
}
const FacebookApi = [
  {
    id: 1,
    title: "Add Your Profile",
    textPrimary: "and add your Facebook pages and posts.",
    textSecondary: "You get 50 bonus points to get started."
  },
  {
    id: 2,
    title: "Get Facebook Likes",
    textPrimary:
      "Assign points to your pages (or posts) to get likes. Points are spent when somebody likes your pages (or posts).",
    textSecondary: ""
  },
  {
    id: 3,
    title: "Earn Points",
    textPrimary:
      "Your page (or post) is visible as long as you've points in your account.",
    textSecondary:
      "Earn free points by liking other pages (or posts), retweeting, or referring your friends to LIKERS."
  }
];
const supportApi = [
  {
    id: 1,
    text: "100+ new pages a day"
  },
  {
    id: 2,
    text: "Multiple options to earn free points"
  },
  {
    id: 3,
    text: "3-Level referral scheme"
  },
  {
    id: 4,
    text: "Free to use"
  }
];
function Facebook({ color }) {
  return Style.it(
    `
      .support-info__title {
        background-color: ${color}
      }
      .support-info__item::before {
        color: ${color}
      }
      .support-info__button {
        background-color: ${color}
      }
      .support-info__button::after {
        background-color: ${color}
      }
      .support-info__button::before {
        background-color: ${color}
      }
      .social-block__grid--number {
        background-color: ${color}
      }
      .social-block__grid--title {
        color: ${color}
      }
      .social-block__text--works {
        color: ${color}
      }
      .clients__count {
        color: ${color}
      }
    `,
    <div className="App__container">
      <div
        className="App__container--wrapper"
        style={{ alignItems: "flex-start" }}
      >
        <section className="social-block">
          <div className="social-block__wrap">
            <aside className="main-info">
              <h1 className="social-block__title">
                Get Free Facebook Likes on Pages and Posts
              </h1>
              <p className="social-block__text">
                Drive awareness and traffic using our free Facebook promotion
                service developed to help you get likes on Facebook pages and
                posts from people all over the world.{" "}
              </p>
              <p className="social-block__text">
                Promote your pages and posts in front of thousands of real users
                and get free Facebook likes within minutes.
              </p>
            </aside>
            <aside className="support-info">
              <ul className="support-info__list">
                <li className="support-info__title">
                  WHY LIKERS FOR FACEBOOK?
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
          <h1 className="social-block__text--works">
            Get more likes in 3 steps. Here's how it works:
          </h1>
          <div className="social-block__grid">
            {FacebookApi.map(twitt => (
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
            People using Likers and getting more Facebook Likes every day
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

export default Facebook;
