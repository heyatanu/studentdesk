import React,{useState,useEffect} from "react";


const OnlyBtnPageNum = ({showPerPage , onPaginatonChangeValue,total}) =>{

    const[counter,setCounter]=useState(1)

    useEffect(() => {
        const value=showPerPage*counter;
        onPaginatonChangeValue(value-showPerPage,value);
    }, [counter]);


    const onButtonClick = (type)=>{
        //code
        if(type==='prev'){
            if(counter===1){
                setCounter(1)
            }
            else{
                setCounter(counter-1);
            }
        }
        else if(type==='next'){
            // console.log(total)
            if((Math.ceil(total/showPerPage))===counter){
                setCounter(counter)
            }
            else{
                setCounter(counter+1)
            }
        }
    }

    return (
        <div className="d-flex justify-content-end " id="pagination_two_button">
            <button className="btn btn-danger" onClick={()=>onButtonClick('prev')}>Prev</button>
            <button className="btn btn-danger" onClick={()=>onButtonClick('next')}>Next</button>
        </div>
    );
};

export default OnlyBtnPageNum;