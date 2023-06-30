import { Component } from "react";

export default class FeedbackCounter extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    }

    handleIncrement = (event) => {
        const value = event.target.textContent;
        console.log("Increment by click - ", this.state);
        console.log("this.props - ", this.props);
        this.setState((prevState) => {
            console.log(prevState);
        return {[value]: prevState[value] + 1};
        })
    }

    render() {
        const {good, neutral, bad} = this.props;
        console.log(good, neutral, bad);
        return (
            <div>
                <h2>Please leave feedback</h2>

                <div>
                    <button type="button" onClick={this.handleIncrement}>Good</button>
                    <button type="button" onClick={this.handleIncrement}>Neutral</button>
                    <button type="button" onClick={this.handleIncrement}>Bad</button>
                </div>

                <h3>Statistics</h3>

                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                </ul>

            </div>
        )
    }


}