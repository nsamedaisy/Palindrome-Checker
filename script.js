	const txtInput = document.querySelector('.inputs input');

	const checkBtn = document.querySelector('.inputs button');

	const infoTxt = document.querySelector('.info-text');

	let filter;

	checkBtn.addEventListener("click", () => {
		let reverse = filter.split("").reverse().join("");
		infoTxt.style.display = "block";
		if(filter != reverse){
			return infoTxt.innerHTML = `False, <span>'${txtInput.value}'</span> isn't a palindrome`;
		}
		infoTxt.innerHTML = `True, <span>'${txtInput.value}'</span> is a palindrome`
	});


  txtInput.addEventListener("keyup", () => {
		filter = txtInput.value.toLowerCase();
	  if(filter) {
		return checkBtn.classList.add("active");
	  }
		infoTxt.style.display = "none";
		checkBtn.classList.remove("active");
	});
