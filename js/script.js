
function generatorEmails() {
    let emails = [];
    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => response.json())
            .then(data => {
                emails.push(data.response);
                if (emails.length === 10) {
                    listEmail(emails);
                }
            })
            
    }
}
function listEmail(emails) {
    let emailContainer = document.getElementById('email-list');
    emailContainer.innerHTML = '';
    emails.forEach(email => {
        let listItem = document.createElement('li');
        listItem.textContent = email;
        listItem.classList.add('list-group-item');
        emailContainer.appendChild(listItem);
    });
}


document.getElementById('Emails-Button').addEventListener('click', generatorEmails);
