import PropTypes from "prop-types";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export const Section = ({title, opt1, opt2, opt3, OnGood, OnNeutral, OnBad, good, neutral,bad,total,positivePercentage}) => {
    return(
        <>
        <h1>{title}</h1>
        <FeedbackOptions
          opt1={opt1}
          opt2={opt2}
          opt3={opt3}
          OnGood={OnGood}
          OnNeutral={OnNeutral}
          OnBad={OnBad}
        />
        <h2>Statistics</h2>
        <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        positivePercentage={positivePercentage}
        />
       </>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    opt1: PropTypes.string.isRequired,
    opt2: PropTypes.string.isRequired,
    opt3: PropTypes.string.isRequired,
    OnGood: PropTypes.func.isRequired,
    OnNeutral: PropTypes.func.isRequired,
    OnBad: PropTypes.func.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.number.isRequired
};
