import {useState} from 'react';

function Family(props){
    const [showMore, setShowMore] = useState(false);
    return(<div>
        <div><h1>{props.nameUs}</h1></div>
        <div className='about cont' >
            <img src={props.img} width="800px" /> 
            </div>
            <div>
            <p>{showMore ? props.description: props.description.substring(0,180) + "..."}<button className='change' onClick={()=> setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>
        </div>
       </div>
      
    
    )
}
export default Family;