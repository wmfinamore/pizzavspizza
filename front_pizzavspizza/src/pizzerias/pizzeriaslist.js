import React, {Component} from "react";
import DummyData from './dummydata.json';

class PizzaList extends Component{
    render(){
        return(
            <div>
                {DummyData.map(p=>
                    <h4>{p.pizzeria}-{p.city}</h4>
                    )}
            </div>
        )
    }
}

export default PizzaList;