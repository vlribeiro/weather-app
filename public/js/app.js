const submit = (e) => {
  e.preventDefault()

  var location = e.target.location.value.trim()

  fetch('/weather?address=' + encodeURIComponent(location))
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
        document.querySelector('#message-1').innerHTML = data.currently.summary + ', ' + data.currently.temperature + ' graus'
        document.querySelector('#message-2').innerHTML = (data.currently.precipProbability * 100) + '% de chance de chuva'
      })
    })
}

const init = () => {
  document.querySelector('form').addEventListener('submit', submit)
}

document.addEventListener('DOMContentLoaded', init)
