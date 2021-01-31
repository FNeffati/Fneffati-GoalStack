import React from 'react'

export default class GetGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            isLoaded: false,
        }
    }

    async componentDidMount() {
        const response = await fetch("http://hoyahacks.dylantknguyen.com/api/goals/list/");
        const data = await response.json();
        this.setState( {item: data[0]})
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.item ? (
                <div>loading...</div> 
                ) : (
                <div>{this.state.item.name}</div>)}
            </div>
        )
    }

    

}