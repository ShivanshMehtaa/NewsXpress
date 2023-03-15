import React from 'react'
// import PropTypes from 'prop-types'

export default function NewsItem(props) {
  let {title,description,img,newsUrl,name,date} = props;
  return (
    <div className='m-3'>
      <div className="card" >
          <img src={!img?"https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-04/shutterstock_664193623.jpg?itok=x5aAnCK-":img} className="card-img-top" alt="..." />
          <div className="card-body ">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{!description?"Sorry, but this article contains no description. Click on the below button to read the full Article":description}</p>
              <p className='card-text'>By <span class="badge text-bg-danger">{name}</span><small class="text-muted"> on <span class="badge text-bg-primary">{new Date(date).toGMTString()}</span></small></p>
              <div className="next text-center">
                <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-success mt-3 ">Full Article</a>
              </div>
          </div>
      </div>

      
    </div>
  )
}




