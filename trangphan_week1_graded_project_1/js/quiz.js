const fetchDataByID = () => {
	const loading = document.getElementById('loading');
	const questionForm = document.getElementById('question');
	const questionIDValue = document.getElementById('questionID').value;

	loading.classList.remove('hidden');

	fetch(`http://localhost:3000/data/${questionIDValue}`)
		.then(response => response.json())
		.then(data => {
			const questionHTML = `<h3>${data.question} </h3>`;
			const optionsHTML = data.options.map((item, index) => `<p class="option" id=${index} onclick="selectAnswer(event,  ${index})">${item}</>`);
			questionForm.innerHTML = `${questionHTML} 
									<div class="d-flex justify-content-center">
										<div class="options margin-top">
											${optionsHTML}
										</div>
									</div>

									<div class="d-flex justify-content-center margin-top">
										<button class="btn btn-success disabled" id="btn-submit" onclick="submit()">Submit</button>
									</div>
									`;
			loading.classList.add('hidden');
		});
}

const removeListClass = (className) => {
	const classActive = document.body.getElementsByClassName(className);

	if (classActive.length > 0) {
		for (let i = 0; i < classActive.length; i++) {
			classActive[i].classList.remove(className)
		}
	}
}

const selectAnswer = (event, index) => {
	const buttonSubmit = document.getElementById('btn-submit');
	buttonSubmit.classList.remove('disabled');
	removeListClass('user-answer');
	removeListClass('correct-answer');
	removeListClass('wrong-answer');

	event.target.classList.add('user-answer');
	document.getElementById('answerID').value = index;
}

const submit = () => {
	const answerValue = document.getElementById('answerID').value;
	const questionIDValue = document.getElementById('questionID').value;

	fetch(`http://localhost:3000/data?id=${questionIDValue}&&answer=${answerValue}`)
		.then(response => response.json())
		.then(data => {
			if (data.length > 0) {
				document.body.getElementsByClassName('user-answer')[0].classList.add('correct-answer');
			} else {
				document.body.getElementsByClassName('user-answer')[0].classList.add('wrong-answer');
			}
		})
}