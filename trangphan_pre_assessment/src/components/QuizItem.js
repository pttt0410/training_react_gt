import react, { useState } from 'react';

const QuizItem = ({ data, onNext }) => {
    const [color, setColor] = useState();
    const [indexActive, setIndexActive] = useState(-1);
    const [key, setKey] = useState('Submit');
    const [totalPoint, setPointTotal] = useState(0);

    const resetValue = () => {
        setColor('');
        setIndexActive(-1);
        setKey('Submit');
    }

    const checkAnswer = (index) => {
        if (key === 'Submit') {
            if (index === data.answer) {
                setColor('blue');
                setPointTotal(totalPoint + 1);
            } else {
                setColor('red');
            }
            setKey('Next');
        } else {
            onNext(totalPoint);
            resetValue();
        }
    }

    return (

        <div className='quiz-item'>
            <h3>{data.question}</h3>
            {
                data.options.map((item, index) =>
                    <a className='option' style={{ color: indexActive === index ? color : 'black', fontWeight: indexActive === index ? 600: 400 }} onClick={() => setIndexActive(index)} key={index}>{item}</a>
                )
            }
            <br />

            <button class="btn-success" onClick={() => checkAnswer(indexActive)} disabled={indexActive < 0}>
                {key}
            </button>
        </div>
    )
}

export default QuizItem;