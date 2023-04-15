import React from "react";
import { Section } from "./Section/Section";

class App extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

IncGood = () => {
    this.setState((prevState) => {
    return { good: prevState.good + 1 }
    });
    }

IncNeutral = () => {
    this.setState((prevState) => {
    return { neutral: prevState.neutral + 1 }
    });
}    

IncBad = () => {
    this.setState((prevState) => {
    return { bad: prevState.bad + 1 }
    });
    }        
    
countTotalFeedback = () => {
    return this.state.good+this.state.neutral+this.state.bad
    };

countPositiveFeedbackPercentage = (callback) => {
    if (this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0) {
    return 0;
    }
    else return (this.state.good/callback())*100
    };
    
    render() {
     return (
        <Section
        title="Please leave feedback"
        opt1="Good"
        opt2="Neutral"
        opt3="Bad"
        OnGood={this.IncGood}
        OnNeutral={this.IncNeutral}
        OnBad={this.IncBad}
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback} 
        positivePercentage={Math.round(this.countPositiveFeedbackPercentage(this.countTotalFeedback))}   
         />   
    );
}
}
export default App;