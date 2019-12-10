import React from 'react';


const newsAPI = [
    {
        id: 1,
        img: '',
        title: '5 Reasons To Keep Your Beauty Salon Reservation',
        date: '8 March, 2020'
    },
    {
        id: 2,
        img: '',
        title: 'Benjamin Franklin Method Of Habit Formation',
        date: '8 March, 2020'
    },
    {
        id: 3,
        img: '',
        title: '29 Motivational Quotes For Business And Other Work Environments',
        date: '8 March, 2020'
    }
];
const News = () => {

    return (
        <div className="App__container">
            <div className="news">
                <h1 className="news__title">Latest News</h1>
                <div className="news__wrapper">
                {newsAPI.map(news =>
                        <div key={news.id}  className="news__preview">
                            <div  className="news__preview--img"></div>
                            <div className="news__preview--text">
                                <div className="news__preview--text--title">
                                    {news.title}
                                </div>
                                <div className="news__preview--text--date">
                                    {news.date}
                                </div>
                            </div>
                    </div>
        )}
                </div>

            </div>
        </div>

    )
}

export default News;