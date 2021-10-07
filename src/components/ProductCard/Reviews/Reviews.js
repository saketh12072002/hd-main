import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import './styles.scss'

function Reviews(review) {
    const {rating,text,name,date} = review
    return (
        <div className="review">
            <div className="stars">
                <div className="starsec">
                    <div>
                    {rating}
                    </div>
                    <div>
                    <StarIcon />
                    </div>
                </div>
                
            </div>
            <div className="description">
                <div className="content">
                    {text}
                </div>
                <div className="name">
                        <div className="">
                            {name} | {date}
                        </div>
                        <div className="">
                            
                        </div>
                </div>
                <div className="reviewline">

                </div>
            </div>
        </div>
    )
}

export default Reviews
