import React from 'react'

const NewsItem =(props)=> {

      let {title, description, imageUrl, newsUrl } = props;
    return (
      <div>
            <div className="card">
                <img src={!imageUrl?"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/08/0/0/AV2.png?ve=1&tl=1":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel = "noreferrer" href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
   }

export default NewsItem