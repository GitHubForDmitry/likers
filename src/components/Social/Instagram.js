import React from "react";
import Style from 'style-it';
import { Link } from "react-router-dom";

let clients = [];
for (let i = 1; i < 21; i++) {
    clients.push({
        id: i,
        followers: i + Math.ceil(Math.random() * 10000)
    });
}
const InstagramApi = [
    {
        id: 1,
        title: "Add Your Profile",
        textPrimary:
            "and enter your Instagram username. We do not ask for your account password.",
        textSecondary: "You get 50 bonus points to get started."
    },
    {
        id: 2,
        title: "Get Followers and Likes",
        textPrimary:
            "Assign points to your profile and add posts to get likes. Points are spent when a real user follows you or likes your posts.",
        textSecondary: ""
    },
    {
        id: 3,
        title: "Earn Points",
        textPrimary:
            "Your profile and posts are promoted as long as you've points in your account.",
        textSecondary:
            "Earn free instagram points by following other users, liking their posts, doing Retweets, or referring your friends to LIKERS."
    }
];
const supportApi = [
    {
        id: 1,
        text: "No. 1 social exchange network"
    },
    {
        id: 2,
        text: "Absolutely safe to use as we never ask for your account password or any app permissions"
    },
    {
        id: 3,
        text: "Big and active user base"
    },
    {
        id: 4,
        text: "Free Instagram followers"
    },
    {
        id: 5,
        text: "Free Instagram likes"
    }
];
function Instagram({ color }) {
    return (
        Style.it(`
      .support-info__title {
        background-color: ${color(1)}
      }
      .support-info__item::before {
        color: ${color(1)}
      }
      .support-info__button {
        background-color: ${color(1)}
      }
      .support-info__button::after {
        background-color: ${color(1)}
      }
      .support-info__button::before {
        background-color: ${color(1)}
      }
      .social-block__grid--number {
        background-color: ${color(1)}
      }
      .social-block__grid--title {
        color: ${color(1)}
      }
      .social-block__text--works {
        color: ${color(1)}
      }
      .clients__count {
        color: ${color(1)}
      }
    `,
        <div className="App__container">
            <div
                className="App__container--wrapper"
                style={{ alignItems: "flex-start" }}
            >
                <section className="social-block">
                    <h1 className="social-block__title">
                        Free Instagram Followers and Likes
                    </h1>
                    <p className="social-block__text">
                        Traffup is a free Instagram promotion service that helps you increase your Instagram followers and likes on your posts quickly and easily. Showcase your profile, photos or videos in front of thousands of other users and get more followers and likes instantly and free of cost.
                    </p>
                    <p className="social-block__text">
                        You do not have to complete any awkward surveys or share your account password to get followers and likes. Traffup is the No. 1 social exchange network providing instant and free followers and likes to users all over the world. Simply sign up and enter your Instagram username to get started - it takes less than a minute!
                    </p>
                    <p className="social-block__text">
                        Boost your Instagram profile and enjoy the benefits of increased traffic and popularity in just 3 steps.  </p>
                    <p className="social-block__text--works">Here's how it works:</p>
                    <div className="social-block__grid">
                        {InstagramApi.map(twitt => (
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
                    <div className="support-info__btnfree-wrapper">
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
                                <img className="clients__img" src={require(`../../media/profile/${client.id}.jpg`)}  alt="profile" />
                                <div className="clients__count">{client.followers}</div>
                                <p className="clients__followers">followers</p>
                            </div>
                        ))}
                    </div>
                </section>
                <aside className="support-info">
                    <ul className="support-info__list">
                        <li className="support-info__title">WHY LIKERS FOR INSTAGRAM?</li>
                        {supportApi.map(s => (
                            <li style={{

                                '::after': {
                                    content: `''`,
                                    position: 'absolute',
                                    left: '-50px',
                                    top: '50px',
                                    width: '0',
                                    height: '0',
                                    border: '50px solid transparent',
                                    borderTopColor: 'red',
                                }}} key={s.id} className="support-info__item">
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
        </div>
    ));
}

export default Instagram;
