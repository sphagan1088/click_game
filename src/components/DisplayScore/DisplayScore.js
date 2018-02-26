import React, {Component} from "react";
import "./DisplayScore.css";

class DisplayScore extends Component {
    state = {
        message: "",
        animating: false
    };

    componentWillReceiveProps({ score, topScore }) {
        let newState = {animating: true};

        if (score === 0 && topScore === 0) {
            newState.message = "";
        }
        else if (score === 0 && topScore > 0) {
            newState.message = "incorrect";
        }
        // else  {
        //     newState.message = "correct";
        // }
        this.setState(newState, () => 
            setTimeout(() => this.setState({ animating: false}), 500)
        );
    }

    showResults = () => {
        switch (this.state.message) {
            case "correct":
                return "You guessed correctly!";
            case "incorrect":
                return "You guessed incorrectly";
            default:
                    return "Click an Image to Start!";
        }
    };

    render() {
        return (
            <li className={this.state.animating ? this.state.message : ""}>
                {this.showResults()}
            </li>
        );
    }

}

export default DisplayScore;