import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageNum from './PageNum';
import Book_Navbar from './Books_Navbar';
import Book_MainSec from './Book_MainSec';
import Book_Footer from './Book_Footer';
import author_logo from './Images/author_logo.png';


var monthar=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


function BookApiFetch(){
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
    const [showPerPage,setShowPerPage]=useState(10);
    const [pagination,setPagination]=useState({
        start:0,
        end:showPerPage,
    })

    const onPaginatonChangeValue=(start,end)=>{
        setPagination({start:start,end:end});
    };


    return(
        
    <>
        <Book_Navbar/>
        <section className="Main_sec">
        <div className="container">
                <div className="row" >
                    <div className="col-lg-3 col-md-12 col-12 main_left_sec">
                        <Book_MainSec/>
                    </div>
                    <div className="col-lg-9 col-md-12 col-12 main_right_sec" style={{fontSize:'24px',}}>
                        <p>New Arrivals:</p>
                    </div>
      { Books.slice(pagination.start,pagination.end).map((books) => (
          <React.Fragment>
        
            <div className="col-lg-9 col-md-12 col-12 main_right_sec">


                    <div class="card_div">
                        <div className="Book_image">
                            <a href={'id?='+books.id}><img src={books.photo}alt="this"/> </a>
                        </div>
                        <div className="Book_details">
                            <p id="Book_title">{books.name}</p>
                            <p className="Book_author">Author: {books.author}</p>
                            <p className="Book_author">City: {books.city.city_name}</p>
                            <p><span id="post_id">Post by:  </span><span><img src={author_logo}alt="this" width="7%"/> </span>
                                <span id="user_name">{books.user.name}</span>
                            </p>
                            <div className="buttons_group">
                                <button>Buy Books</button>
                                <button>Exchange</button>
                            </div>
                            
                        </div>
                        <div className="Book_price">
                            {books.price==0?(<p><span id="current_price">For Free</span></p>):(<p><span id="current_price">price: &#8377;{books.price} |</span><span id="old_price_inr">&#8377;<span id="old_price">{books.mrp}</span></span></p>)}
                            <p id="publish_date">posted on: <span>{books.created_at.slice(8,10)[0]==0?(books.created_at.slice(9,10)):(books.created_at.slice(8,10))}</span>,
                            <span>{monthar[parseInt(books.created_at.slice(5,8))-1]}</span>
                            </p>
                            
                        </div>
                    </div>


            </div>

          
          
          </React.Fragment>


        ))}
        <div className="col-lg-9 col-md-12 col-12 main_right_sec" style={{textAlign:'center'}}>
        <PageNum showPerPage={showPerPage}
            onPaginatonChangeValue={onPaginatonChangeValue}
            total={totalP}/>
        </div>
        </div>
        </div>
        </section>
        <Book_Footer/>
        




    </>);
    
}


export default BookApiFetch;





// { Books.slice(pagination.start,pagination.end).map((books) => (
//     <React.Fragment>
//     <div className="NewCard" >
//            <p key={books.id}><a  href={'id?='+books.id}>{books.id}</a></p>
//     </div>
    
//     </React.Fragment>


//   ))}
  
//   <PageNum showPerPage={showPerPage}
//       onPaginatonChangeValue={onPaginatonChangeValue}
//       total={totalP}/>

/* <img src={books.photo}alt="this"/> */






































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


 

// function BookApiFetch(){
//     const [Books,setBooks]=useState([])
    
//     useEffect(function(){

//         async function getdata(){
          
            
//             const res= await axios.get(`http://studentdesk.in/api/v1/newarrivals?&apiname=newArrivals`)

             
//                 setBooks(res.data.data)
//         }
//         getdata();
//     });

//     return(<>

       

    
//       { Books.map((books) => (
//           <React.Fragment>
 

//           <p>{books.id}</p>

//           </React.Fragment>
            
//         ))}
 
//     </>);
// }


// export default BookApiFetch;



