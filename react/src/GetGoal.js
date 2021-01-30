import React from 'react'

export default class GetGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    async componentDidMount() {
        const response = await fetch("http://hoyahacks.dylantknguyen.com/api/goals/list/");
        const data = await response.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.loading ? <div>loading...</div> : <div>goal...</div>}
            </div>
        )
    }

    

}