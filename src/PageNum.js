import React,{useState,useEffect} from "react";


const PageNum = ({showPerPage , onPaginatonChangeValue,total}) =>{

    const[counter,setCounter]=useState(1)


    useEffect(() => {
        const value=showPerPage*counter;
        onPaginatonChangeValue(value-showPerPage,value);
    }, [counter]);


    const onButtonClick = (type)=>{
        if(type==='prev'){
            if(counter===1){
                setCounter(1)
            }
            else{
                setCounter(counter-1);
            }
        }
        else if(type==='next'){
            // console.log(noc)
            if((Math.ceil(total/showPerPage))===counter){
                setCounter(counter)
            }
            else{
                setCounter(counter+1)
            }
        }
    }

    return (
        <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class={`page-item ${counter === 1 ? "disabled":null}`}><a class="page-link" href="#!"onClick={()=>onButtonClick('prev')}>Previous</a></li>
                
                
                {new Array(Math.ceil(total/showPerPage)).fill("").map((el,index)=>(
                    <li class={`page-item ${index+1 === counter ? "active":null}`}>
                    <a class="page-link" href="#!" onClick={()=> setCounter(index+1)}>{index+1}</a>
                    </li>
                ))}

                <li class={`page-item ${Math.ceil(total/showPerPage) === counter ? "disabled":null}`}><a class="page-link" href="#!"onClick={()=>onButtonClick('next')}>Next</a></li>
            </ul>
            </nav>
        </div>
    );
};

export default PageNum;