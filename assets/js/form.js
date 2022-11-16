var form = document.getElementById("form");
var input = document.getElementById("inputvalue");

input.addEventListener('input', (event) => {
	event.preventDefault();
	form.classList.remove('was-validated');
	input.classList.remove('is-invalid');
});

form.addEventListener('submit', async function (event) {
	event.preventDefault();
	form.classList.add('was-validated');
	if (!form.checkValidity() || await checkInputCorrect(input) === false) {
		// Form is invalid
	} else {
		// Form is valid
		const clue = '---clue---...';
		$('#validmessage').html(`Your answer is correct!\n\nThe clue for the next challenge is ${clue}`);
	}

}, false);

async function checkInputCorrect(el) {

	var result = await validateInput(el.value);

	if (result.valid) {
		el.classList.add("is-valid");
		el.classList.remove("is-invalid");
		el.setCustomValidity("");
	} else {
		el.classList.remove("is-valid");
		el.classList.add("is-invalid");
		el.setCustomValidity("invalid");
	}

	//button.classList.remove('loading');

	return result.valid;

}

async function validateInput(val) {

	return { valid: false };

	// var result = await fetch('{{ SFMC SERVER PAGE URL }}', {
	// 	method: 'post',
	// 	body: JSON.stringify({
	// 		data: val
	// 	})
	// })
	// 	.then(function (res) {
	// 		return res.json();
	// 	})

	// return result;
}
