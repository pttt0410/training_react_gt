import React from "react";

const QuizGuide = ({startTest}) => {
    return (
        <>
        <div className="">
        <ul>
            <li>The quiz will consist of 5 questions</li>
            <li>Each correct answer will give you 1 point</li>
            <li>There are no negative making applicable</li>
            <li>The answer will be validated once the submit button is clicked</li>
        </ul>

        <button className="btn-success" onClick={() => startTest()}>Start Test</button>
        </div>
        </>
    )
};

export default QuizGuide;