import React from "react";
import { ReactComponent as PlayButton } from "../../media/icons/play-button.svg";
import { ReactComponent as PlayButtonCircle } from "../../media/icons/play-button-circle.svg";
import { Link } from "react-router-dom";

const newsAPI = [
  {
    id: 1,
    img: "",
    title: "5 Reasons To Keep Your Beauty Salon Reservation",
    date: "8 March, 2020"
  },
  {
    id: 2,
    img: "",
    title: "Benjamin Franklin Method Of Habit Formation",
    date: "8 March, 2020"
  },
  {
    id: 3,
    img: "",
    title: "29 Motivational Quotes For Business And Other Work Environments",
    date: "8 March, 2020"
  }
];
const News = () => {
  return (
    <div className="App__container">
      <div className="news">
        <h1 className="news__title">Latest News</h1>
        <div className="news__wrapper">
          {newsAPI.map(news => (
            <div key={news.id} className="news__preview">
              <div className="news__preview--img"></div>
              <div className="news__preview--text">
                <div className="news__preview--text--title">{news.title}</div>
                <div className="news__preview--text--date">{news.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <main className="news-main">
        <section className="news-main__left">
          <div className="news-main__left--trending">
            <Link to="/news" className="video">
              <div className="video__button">
                <PlayButton
                  style={{
                    width: 40,
                    height: 40,
                    marginBottom: 50,
                    fill: "#fff"
                  }}
                />
              </div>
              <h1 className="video__text">
                Use Your Reset Button To Change Your Vibration
              </h1>
              <div className="video__date">08 march 2020</div>
            </Link>
            <div className="description">
              <h2 className="description__label">trending</h2>
            </div>
          </div>
          <div className="news-main__left--articles">
            <section className="articles">
              <div className="articles__img"></div>
              <h1 className="articles__text">
                Dream Interpretation Common Symbols And Their Meanings
              </h1>
              <div className="articles__date">08 march 2020</div>
            </section>
            <aside className="videos">
              <div className="videos__play-all">
                <PlayButtonCircle
                  style={{
                    width: 90,
                    height: 90,
                    fill: "#fff",
                    marginRight: 30
                  }}
                />
                <div className="videos__play-all--text">play all</div>
              </div>
            </aside>
          </div>
        </section>
        <div className="news-main__right">
          <div className="news-main__right__img">
          </div>
          <div className="news-main__right__text">
            Motivation And Your Personal Vision An Unbeatable Force
          </div>
          <div className="news-main__right__date">08 march 2020</div>
        </div>
      </main>
    </div>
  );
};

export default News;
