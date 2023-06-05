import React  from 'react'

const NewsItem = (props) => {
    return (
        <div className='my-4'>
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" >{props.source}</span>
                </div>
                <img src={props.imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">By {props.author} on {props.date}</small></p>
                    <a href={props.newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
