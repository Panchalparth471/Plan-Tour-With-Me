
import { useState } from "react";

function Card({id,image,price,name,info,removeTour})
{
     
    //Function to change the state of readmore and show less 
    function readmoreHandler(){
        setreadmore(!readmore);
    }



    const [readmore, setreadmore] = useState(false);

  
//If read more is true show whole description else only show first two hundred characters.
    const description = readmore ? info : `${info.substring(0, 200)}....`
       
    return (
        <div className='card'>
            <img src={image} className='image'></img>
            
            <div className="tour-info">
                <div className='tour-details'>
                <h4 className='tour-price'>₹{price}</h4>
                <h4 className='tour-name'>{name}</h4>


            </div>

            <div className='description'>
                {description}

                {/* if read more is true then display show less else display show more */}

                <span onClick={readmoreHandler} className='read-more'>
                    {readmore ? `Show Less` : `Read More`}
                </span>
                </div>
                
            </div>
            <button className='btn-red' onClick={()=>removeTour(id)}>Not Interested</button>
       </div>
         
    );
}

export default Card