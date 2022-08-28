// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

modal = document.getElementById('modal')
modal.className = 'hidden'

const likey = document.querySelectorAll('.like-glyph')
likey.forEach((like) => {
  like.addEventListener('click', (e) => {
    mimicServerCall()

    .then((res) => {
      if (like.innerHTML === EMPTY_HEART) {
        like.className = 'activated-heart'
        return like.innerHTML = FULL_HEART
      }else {
        let activated = document.createElement('activated-heart')
        activated.className.remove
        return like.innerHTML = EMPTY_HEART
      }
    })
    .catch((error) => {
     modal.className.remove
     errorMessage = document.getElementById('modal-message')
     errorMessage.innerHTML = `${error.message}`
     setTimeout(() => {
      modal.className = 'hidden'
     }, 1000);
    })

  })
})







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

