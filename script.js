let table = document.querySelector('table')
let btn = document.querySelector('.btn')

function listen(listener, doing) {
	listener.addEventListener('click', () => {
		table.classList.toggle('unactive')
	})
}

listen(btn)

var options = {
	strings: ['Python', 'HTML', 'CSS', 'Javascript', 'Programmer'],
	typeSpeed: 45,
	backSpeed: 45,
	loop: true
}

var typed = new Typed(".write", options)