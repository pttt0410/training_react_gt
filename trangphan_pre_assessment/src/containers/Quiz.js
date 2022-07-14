import react, { useState } from 'react';
import QuizGuide from '../components/QuizGuide';
import QuizItem from '../components/QuizItem';
import axios from 'axios';
import QuizView from '../components/QuizView';

const QuizPage = () => {

    const [isStart, setStart] = useState(false);
    const [data, setData] = useState();
    const startTest = async() => {
        setStart(true);
        const res = await axios.get('db.json');
        setData(res.data.data)
    }

    return (
        <>
            {isStart ?
                <QuizView data={data} />
                :
                <QuizGuide startTest={startTest}  />
            }
        </>
    )
}

export default QuizPage;