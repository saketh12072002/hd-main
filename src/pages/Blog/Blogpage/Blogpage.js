import React,{useState,useEffect} from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from "react-redux"
import {useHistory,useParams} from 'react-router-dom'
import Blogslider from '../Blogslider/Blogslider'
import { addBlogsStart,  fetchBlogsStart, deleteBlogStart, fetchBlogStart, setBlog } from '../../../redux/Blog/blogs.actions'


const mapState = ({blogsData}) => ({
    blogs:blogsData.blogs
  })
function Blogpage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {blogs} = useSelector(mapState);
    const {blogID} = useParams();

    var settings = {
        // dots: true,
        arrow:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                initialSlide: 2,
                slidesToShow: 2
            }
        }]
      };

    useEffect( ()=>{
        dispatch(
             fetchBlogStart(blogID)
        )
        
        return  () => {
            dispatch(
                 setBlog({})
            )
        }
    },[])


    return (
        <div className="blogssection">
            <div className="blogfullpage">
                <div className="blogheaderimage">
                    <img src="https://www.theannaedit.com/wp-content/uploads/2021/04/fullsizeoutput_10c1e-1920x461.jpeg" />
                </div>
                <div className="date">
                        APRIL 7, 2021
                </div>
                <div className="blogtitlesection">
                A Book Reading Wishlist: From Me To You 
                </div>
                <div className="blogsubtitlesection">
                Like a virtual wander round Waterstones (SOON everyone, SOON!)
                </div>
                <div className="blogimage1">
                    <img src="https://www.theannaedit.com/wp-content/uploads/2021/04/R1-02301-020A-1920x1284.jpg" />
                </div>
                <div className="para">
                Well hello there! Apologies for the brief hiatus. Turns out that the six-week long process of getting your windows replaced is actually a bit of a faff and it really knocked us for six. So we had to slow down there, whilst we got our ducks in a row and we are back and cooking with gas, with fresh new windows to boot (and a newly repainted bedroom – but more on that on Sunday on the <b>ol’ ‘Tube!</b>).
                </div>
                <div className="para">
                Despite the clouds of dust and incessant sanding (sorry neighbours!), one thing that can always provide an escape and a moments peace is a good book, so although I’ve been a little less fast-paced with my reading this year so far, I have *plenty* on my wishlist – and it looks like you lot do too. I asked on Instagram for your favourite reads of the year so far and you DELIVERED. So I’ve tried my best to collate your answers and provide you with the wishlist of all wishlists. Think of this like the really sweet spot of Waterstones where the staff write personal glowing reviews and it makes you want to buy EVERY. SINGLE. BOOK…
                </div>
                <div className="imagesection">
                    <div className="blogimage2">
                        <img src="https://www.theannaedit.com/wp-content/uploads/2021/04/fullsizeoutput_10bf7.jpeg" />
                    </div>
                    <div className="blogimage3">
                    <img src="https://www.theannaedit.com/wp-content/uploads/2021/04/fullsizeoutput_10c05.jpeg" />
                    </div>
                    <div className="blogimage4">
                    <img src="https://www.theannaedit.com/wp-content/uploads/2021/04/fullsizeoutput_10c05.jpeg" />
                    </div>
                    <div className="blogimage5">
                    <img src="https://www.theannaedit.com/wp-content/uploads/2021/04/fullsizeoutput_10bf7.jpeg" />
                    </div>
                </div>
                <div className="blogrecommend">
                WHAT I’D RECOMMEND
                </div>
                <div className="para">
                If you want a page-turner… ‘<b>ALadder to The Sky’ by John Boyne</b>*. I just really love books by Boyne. He’s a brilliant story-teller and this one is almost part historical, part character study and part thriller. I almost don’t want to say too much because it will give it away, but I really loved it and it’s been one of my few five-star reads of the year so far.   
                </div>
                <div className="para">
                If you want a thriller… ‘The Guest List’ by Lucy Foley*. This book seems like a bit of a marmite one, either receiving glowing reviews or not-so-favourable ones. Personally, I fall into the former camp and enjoyed this page-turning thriller that tells the story of a couple getting married on a remote island and the twists and turns that tell the histories of how their guests are intertwined. A sort of easy-read thriller that’s a good one to kickstart you back into reading.
                </div>
                <div className="imagesection">
                    <div className="blogimage6">
                    <img src="https://www.theannaedit.com/wp-content/uploads/2021/04/fullsizeoutput_10bf7.jpeg" />
                    </div>
                    <div className="blogimage7">
                    <img src="https://www.theannaedit.com/wp-content/uploads/2021/04/fullsizeoutput_10bf7.jpeg" />
                    </div>
                </div>
                <div className="blogrecommend">
                WHAT YOU’D RECOMMEND
                </div>
                <div className="para">
                ‘The Midnight Library’ <b>by Matt Haig</b>*. This was BY FAR your most recommended book! It really sounds like the uplifting book about life and all it’s possibilities that we *need* right now. Telling the story and exploring the idea of ‘What goes into a life well lived?‘, I’m adding it to my list for sure.
                </div>
                <div className="para">
                ‘Shuggie Bain’ by <b>Douglas Stuart</b>*. I’d say this was the second-most recommended book that you lot gave and it was the winner of the Booker Prize last year, so there you go! An epic portrayal of a working class family and the story of addiction and sexuality; a lot of you said that this was a tough read, but one well worth digging into.
                </div>
            </div>
            <div className="line">

            </div>
            <div className="shopthestory">
                <dvi className="shopby">
                    Shop by story

                </dvi>
                <div className="slider">
                    <Slider  {...settings}>
                         <Blogslider {...blogs} /> 
                         <Blogslider {...blogs} /> 
                         <Blogslider {...blogs} /> 
                         <Blogslider {...blogs} /> 
                         <Blogslider {...blogs} /> 
                         <Blogslider {...blogs} /> 
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Blogpage
