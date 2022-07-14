import react, { useState } from 'react';
import QuizItem from './QuizItem';
import QuizResult from './QuizResult';

const QuizView = ({ data }) => {
    const [questionIndex, setQuestion] = useState(0);
    const [isEnd, setEnd] = useState(false);
    const [point, setPoint] = useState(0);

    const onNext = (totalPoint) => {
        if (questionIndex < data.length - 1) {
            setQuestion(questionIndex + 1);
        } else {
            setEnd(true);
            setPoint(totalPoint);
        }
    }

    return (<>

        {isEnd ?
            <QuizResult totalPoint={point} />
            :
            data ?
                <QuizItem data={data[questionIndex]} onNext={onNext} />
                : null

        }

    </>)
}

export default QuizView;