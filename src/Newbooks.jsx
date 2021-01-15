import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book_Navbar from './Books_Navbar';
import Book_Footer from './Book_Footer';
import RecentBooks from './Recent_Books';
import author_logo from './Images/author_logo.png';

var monthar=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];




var url_books=window.location.href;
var n = url_books.lastIndexOf("id?=")+4;
var book_id = parseInt(url_books.slice(n,));



const Newbooks = () =>{
    const [BookDetails,setBookDetails]=useState([])
    useEffect(function(){
        async function getdata(){
            const res= await axios.get(`http://studentdesk.in/api/v1/book-details/${book_id}`)
            setBookDetails(res.data.data)
            console.log(res.data.data)
        }
        getdata();
    });

    return(
    <>
    <Book_Navbar/>
        <div className="newbook_details_main">
        { BookDetails.map((BookDetails_map) => (  
          <React.Fragment>
        <div className="Newbook1sthalf">
        <div className="newbook_photo_div">
        
            <div className="newbook_photo_div_contant">
                <img src={BookDetails_map.photo}alt="this"/>
            </div>
        </div>
            <div className="newbook_dis_div">
                <div className="newbook_dis_div_contant">
                    <p id="newbook_name">{BookDetails_map.name}</p>
                    <ul className="newbook_condition">
                        {BookDetails_map.price>0?<li>On Sell</li>:<li>For Free</li>}
                        {BookDetails_map.price>0?<li className="newbook_ac">Price: &#8377;{BookDetails_map.price}<span className="newbook_th">&#8377;{BookDetails_map.mrp}</span></li>:<li className="newbook_ac">For Free</li>}
                        {BookDetails_map.condition==2?<li>Book condition New</li>:<li>Book condition Used</li>}
                    </ul>
                    <div className="col-lg-6 col-md-6 col-6 newbook_post_date">
                        <span>Posted On:</span>
                        {BookDetails_map.created_at.slice(8,10)[0]==0?(<p>{BookDetails_map.created_at.slice(9,10)},{monthar[parseInt(BookDetails_map.created_at.slice(5,8))-1]}</p>):(<p>{BookDetails_map.created_at.slice(8,10)},{monthar[parseInt(BookDetails_map.created_at.slice(5,8))-1]}</p>)}
                        <span>Posted From:</span>
                        {BookDetails_map.college!=null?(<p>{BookDetails_map.college.college_name}</p>):("")}
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 newbook_post_date">
                        <span>Category:</span>
                        <p>{BookDetails_map.category.category_name}</p>
                        <br></br>
                        <span>Views on post:</span>
                        <p>{BookDetails_map.view_count}</p>
                    </div>
                </div>
                <div className="newbook_brn_grp">
                <div className="col-lg-6 col-md-6 col-6 newbook_button">
                        <button>buy book</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 newbook_button">
                        <button>get for exchanage</button>
                    </div>
                </div>
  
                <div className="newbook_social_icon">
                    <p>Share book via</p>
                <a href="#" className="fa fa-facebook-square"></a>
                <a href="#" className="fa fa-twitter-square"></a>
                <a href="#" className="fa fa-google"></a>
                <a href="#" className="fa fa-linkedin-square"></a>
                <a href="#" className="fa fa-whatsapp"></a>


                </div>
            </div>
            
            <div className="user_dis_div">
                <div className="newbook_author">
                    <img src={author_logo} alt='AUTHOR LOGO' width="70%" id="newbook_author_img"/>
                </div>
                <p id="newbook_authoe_name">{BookDetails_map.author}</p>
                <p><i className="fa fa-home"></i> {BookDetails_map.city.city_name}</p>

                <button>view all books</button>
                
            </div>
            </div>

            <div className="Note_from_Author">
                <p id="Note_author_name">note from <a href="#!">{BookDetails_map.name}</a></p>
                <p id="authorr_Note">{BookDetails_map.post_note}</p>
        </div>
          </React.Fragment>
        ))}



        <RecentBooks/>
        </div>
            
            <Book_Footer/>
    </>);
};

export default Newbooks;
