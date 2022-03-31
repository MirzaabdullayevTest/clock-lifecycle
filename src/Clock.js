import React from 'react'

class Clock extends React.Component {
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.props.timer)
    }

    
    render() {
        return (
            <div>
                <h1>Date now {this.props.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock