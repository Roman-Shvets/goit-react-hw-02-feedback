import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ opt1, opt2, opt3, OnGood, OnNeutral, OnBad }) => {
    return(
        <div className={css.buttonList}>
        <button onClick={OnGood}>{opt1}</button>
        <button onClick={OnNeutral}>{opt2}</button>
        <button onClick={OnBad}>{opt3}</button>
        </div>
    )
};

FeedbackOptions.propTypes = {
    opt1: PropTypes.string.isRequired,
    opt2: PropTypes.string.isRequired,
    opt3: PropTypes.string.isRequired,
    OnGood: PropTypes.func.isRequired,
    OnNeutral: PropTypes.func.isRequired,
    OnBad: PropTypes.func.isRequired
};

