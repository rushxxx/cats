// adaptive menu
let menuBurger = document.querySelector('.menu-burger')
let menu = document.querySelector('.menu')

menuBurger.onclick = () => {
	menu.classList.toggle('active')
	menuBurger.classList.toggle('active')	
}

// card heart
let cardHeart = document.querySelectorAll('.card-heart-pic')
cardHeart.forEach((heart) => heart.addEventListener('click', () => {
	heart.classList.toggle('active')	
	})
)
