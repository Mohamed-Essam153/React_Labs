import React ,{ Component }from "react"; 
import {userConsumer} from './compContext'

class comp5 extends Component {
    render(){
        return(
            <div>
                <userConsumer>{
                    (value) =>{
                        return( <h5>Component Five{value}</h5>)
                    }
                    }
                </userConsumer>
           
        </div>
    )

    }
}


export default comp5;
