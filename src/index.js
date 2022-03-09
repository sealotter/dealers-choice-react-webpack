import axios from "axios";
import React from "react";
import  ReactDOM  from "react-dom";

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            breweries : []
            

        }
    }
    async componentDidMount() {
        const res = await axios.get('/api/breweries')
        const breweries = res.data
        this.setState({breweries: breweries})
    
    }
    render() {
        return (
        <div>
            <h1>Breweries!!!</h1>
            
            
        </div>)
    }
    
}


ReactDOM.render(<App />, document.querySelector('#root'))