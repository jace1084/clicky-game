import React from "react";

class Card extends React.Component {
    render(){
        return this.props.imagesrc((item) => {return (<li>item.name</li>)}) 
    }
}
                    
                
                   
        
   



export default List;