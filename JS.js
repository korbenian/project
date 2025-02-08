const logo = document.getElementById('logo')
if (logo) {
  logo.addEventListener('click', () => {
    window.location.href = 'https://letter-eta.vercel.app/'
  })
}

const first_button = document.getElementById('first_button')

if (first_button) {
  first_button.addEventListener('click', () => {
    const question = confirm(
      'хотите   отправится на поисковую страницу с rublcon?'
    )
    if (question == true) {
      window.location.href =
        'https://yandex.kz/search/?text=rublcon&lr=163&clid=2270455&win=642'
    } else {
      alert('Переход отменен')
    }
  })
}

const second_button = document.getElementById('second_button')

if (second_button) {
  second_button.addEventListener('click', () => {
    const second_button = confirm('хотите отправится на сайт с камерами?')
    if (second_button == true) {
      window.location.href = 'https://expertphotography.com/best-camera-stores/'
    } else {
      alert('Переход отменен')
    }
  })
}

const third_button = document.getElementById('third_button')
if (third_button) {
  third_button.addEventListener('click', () => {
    const third_question = confirm('Хотите отправится на сайт с G Generator?')
    if (third_question == true) {
      window.location.href = 'https://g-generators.ru/catalog/'
    } else {
      alert('Переход не выполнен')
    }
  })
}
const fourth_button = document.getElementById('fourth_button')
if (fourth_button) {
  fourth_button.addEventListener('click', () => {
    const fourth_button = confirm(
      'Хотите отправится на сайт с Invoice creator?'
    )
    if (fourth_button == true) {
      window.location.href = 'https://invoice-generator.com/'
    } else {
      alert('Переход не выполнен')
    }
  })
}

const footerButton = document.getElementById('footer_button')
footerButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    y: 0,
    behavior: 'smooth'
  })
})
