import React, { Component } from 'react'
import image from './news image.jpeg'

export class Newsitem extends Component {
   

    render() {

        let { title, description, imageurl,newsurl,author,date } = this.props;
        return (
            <div className='my-3 col-md-4'>
                <div className="card" style={{width:'18rem'}}>
                    <img src={imageurl?imageurl:image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted' >By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target='blank' className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
