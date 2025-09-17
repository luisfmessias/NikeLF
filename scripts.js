const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')
const parede = document.querySelector('.parede')
const productNames = document.querySelectorAll('.product-name')


let active = 0;
const total = items.length

function update(direction) {
    const oldItem = items[active]
    const oldName = oldItem.querySelector('.product-name')

    if (direction > 0) {
        active = (active + 1) % total
    } else if (direction < 0) {
        active = (active - 1 + total) % total
    }

    const newItem = items[active]
    const newName = newItem.querySelector('.product-name')

    oldItem.style.opacity = 0
    oldName.style.opacity = 0

    setTimeout(() => {
        animateParede(colors[active].parede)
        newName.style.background = colors[active].name
        newName.style.webkitBackgroundClip = 'text'
        newName.style.webkitTextFillColor = 'transparent'

        newItem.style.opacity = 1
        newName.style.opacity = 1

        document.querySelector('.dot.active').classList.remove('active')
        dots[active].classList.add('active')

        numberIndicator.textContent = String(active + 1).padStart(2, '0')
    }, 200)
}


prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(+1)
})

const colors = [
    {
        parede: 'linear-gradient(#ccbdb0, #899794)', // tênis 1
        name: 'linear-gradient(90deg, #ccbdb0, #419b87)'
    },
    {
        parede: 'linear-gradient(#493b79, #cc5888)', // tênis 2
        name: 'linear-gradient(90deg, #493b79, #cc5888)'
    },
    {
        parede: 'linear-gradient(#8A9CAA, #409AC4)', // tênis 3
        name: 'linear-gradient(90deg, #8A9CAA, #409AC4)'
    },
    {
        parede: 'linear-gradient(#FE4D49, #FF1D5C)', // tênis 4
        name: 'linear-gradient(90deg, #FE4D49, #FF1D5C)'
    },
    {
        parede: 'linear-gradient(#B2DC85, #D42C5B)', // tênis 5
        name: 'linear-gradient(90deg, #B2DC85, #D42C5B)'
    },
]

function animateParede(newColor) {
    parede.style.transform = 'translate(-50%, -300%)'
    parede.style.opacity = '0'

    setTimeout(() => {
        parede.style.backgroundImage = newColor
        parede.style.transform = 'translate(-50%, -50%)'
        parede.style.opacity = '1'
    }, 250)
}