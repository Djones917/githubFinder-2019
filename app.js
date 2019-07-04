//console.log('Connected!');

// Search input
const searchUser = document.getElementById('searchUser');

//Search input Eventlistener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
      console.log(userText);
    }
});