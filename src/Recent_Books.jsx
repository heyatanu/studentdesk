import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import OnlyBtnPageNum from './PageNumOLD';



function RecentBooks(){
    const [Books,setBooks]=useState([])
    useEffect(function(){
        async function getdata(){
            const res= await axios.get(`http://studentdesk.in/api/v1/newarrivals?&apiname=newArrivals`)
            setTotalP(res.data.data.length)
                setBooks(res.data.data)
                // console.log(res.data.data)
        }
        getdata();
    });

    const [totalP,setTotalP]=useState(1);
    const [showPerPage,setShowPerPage]=useState(12);
    const [pagination,setPagination]=useState({
        start:0,
        end:showPerPage,
    })

    const onPaginatonChangeValue=(start,end)=>{
        setPagination({start:start,end:end});
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay:true,
        slidesToScroll: 1,

        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 702,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
      };
    return(
        
    <>
    <div className="Main_slider_title">
        <p>Recent Books</p>
    </div>
    <Slider {...settings}>
    
 { Books.slice(pagination.start,pagination.end).map((books) => (
    <React.Fragment>
    <div className="recent_book_card_div" key={books.id} >
    
        <div className="recent_book_card_div_contant">
        <div className="recent_book_card_div_contant_img"></div>
            <a href={'id?='+books.id}><img src={books.photo} alt="this" width="120" height="150" /></a>
            {books.price>0?<p className="newbook_ac">Price: &#8377;{books.price}<span className="newbook_th">&#8377;{books.mrp}</span></p>:<p className="newbook_ac">For Free</p>}
                        
           </div>
    </div>
    
    </React.Fragment>


  ))}
  </Slider>

  <OnlyBtnPageNum showPerPage={showPerPage}
      onPaginatonChangeValue={onPaginatonChangeValue}
      total={totalP}/>



    </>);
    
}


export default RecentBooks;



