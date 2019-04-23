console.log("it works")

$(document).ready(function() {
  $('.submit').click(function (event) {
    console.log('clicked button')

    let email = $('.email').val()
    let name = $('.name').val()
    let message = $('.message').val()
    let statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Thanks for email</div>')
    } else {
        event.preventDefault()
      statusElm.append('<div>enter email please</div>')
    }

    if(message.length > 10) {
      statusElm.append('<div>Thanks for message</div>')
    } else {
        event.preventDefault()
      statusElm.append('<div>enter message please</div>')
    }
  })
})
