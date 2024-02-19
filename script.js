function getFormvalue() {
    //Write your code here
    let inputs = document.querySelector("input")
	let first_name = inputs[0].value
	let last_name = inputs[1].value

	let full_name = first_name + " " + last_name
	alert(full_name)
}
