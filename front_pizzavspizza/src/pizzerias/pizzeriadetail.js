import React, {Component} from "react";
import PizzaUpdate from "./pizzaupdate"

class PizzaDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
    }
    updatePizzeriaDetails() {
        this.setState({showComponent:true});
    }
    render(){
    const obj = this.props.pizzariaDetail;
        return(
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>{obj.pizzeria_name}</h4>
                <h5>
                    Adress: {obj.street} {obj.city} {obj.state} {obj.zip_code}
                </h5>
                <h6>Phone: {obj.phone_number}</h6>
                <p>{obj.description}</p>
                <button 
                style={{backgroundColor:"white"}}
                onClick={()=>this.updatePizzeriaDetails()}
                >
                    Update
                </button>
                {this.state.showComponent ? <PizzaUpdate pizzariaUpdate={obj} />: null}
            </div>
        );
    }
}

export default PizzaDetail;