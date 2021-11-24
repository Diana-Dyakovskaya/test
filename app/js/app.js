document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let formData = new FormData(form)
    await fetch('https://private-c4cefc-codepenvf.apiary-mock.com/sendform', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json().then(data => alert(data.message)))
      .catch(data => console.error(data))
  })

})