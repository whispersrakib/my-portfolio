import React from 'react';
function Skillcard(props) {
    return(
        <div className="skills">
            <div className='skcard'>
        {props.data.map(( ele,id)=>{
           return(<div className='crd' key={id}>

            <div className="skill_icon">
            <img className="skill_img" src={ele.img} alt={ele.name} />
            </div>
            <p>{ele.name}</p>
            
            </div>) 
        })}
    </div>
    </div>
    );
}
export default Skillcard;