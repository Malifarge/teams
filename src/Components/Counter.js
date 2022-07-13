import React from "react";

class Counter extends React.Component{
    render() {
        return (
            <section className="Counter">

            <h2 className="whiteTitle">Counter</h2>

            <article className="flex">

                <button className="red" onClick={this.props.substract}>-</button>

                <h3>{this.props.count}</h3>

                <button onClick={this.props.increment}>+</button>
                
            </article>

       </section>
        );
    }
}

export default Counter