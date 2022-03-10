import axios from "axios";
import React from "react";
import  ReactDOM  from "react-dom";



class App extends React.Component{
    constructor(){
        super()
        this.state = {
            breweries : []
        }
       // this.create = this.create.bind(this)
    }
    
    async componentDidMount() {
        const res = await axios.get('/api/breweries')
        const breweries = res.data
        this.setState({breweries})
    
    }
    async create() {
        const addBrew = await axios.post('/api/breweries')
        const brewery = addBrew.data
        const breweries = [...this.state.breweries, brewery]
        this.setState({ breweries  })
       
    }

   
    render() {
        const breweries = this.state.breweries
        return (
        <div>
            <h1>Top Breweries To Try</h1>
            <h3>Click to see some more: <button onClick = {this.create.bind(this)}>Add A Brew</button> </h3>
            
            <div>
                <ul>
                    {breweries.map(brewery => {

                        return (<li>{ brewery.name }</li>)
                    })}
                </ul>
            </div>
            
            
        </div>)
    }
    
}


ReactDOM.render(<App />, document.querySelector('#root'))