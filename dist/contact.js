function contact(){
    //contact details
    const mainDiv = document.createElement('main');
    mainDiv.className = 'mainContact';
    mainDiv.id = 'active';
    const h1d = document.createElement('h1');
    h1d.className = 'contactHeader';
    h1d.textContent = 'Contact Us';
    //add social media and phone icons
    const phoneIcon = document.createElement('a');
    phoneIcon.href = '#';
    phoneIcon.className = 'fa fa-phone';
    const phoneText = document.createElement('p');
    phoneText.className = 'contactText';
    phoneText.textContent = 'Phone us '
    const fBook = document.createElement('a');
    fBook.href = '#';
    fBook.className = 'fa fa-facebook';
    const fBookText = document.createElement('p');
    fBookText.className = 'contactText';
    fBookText.textContent = 'Facebook '
    const twitterIcon = document.createElement('a');
    twitterIcon.href = '#';
    twitterIcon.className = 'fa fa-twitter';
    const twitterText = document.createElement('p');
    twitterText.className = 'contactText';
    twitterText.textContent = 'Tweet us '
    const emailIcon = document.createElement('a');
    emailIcon.href = '#';
    emailIcon.className = 'fa fa-envelope';
    const emailText = document.createElement('p');
    emailText.className = 'contactText';
    emailText.textContent = 'Email us '

    mainDiv.appendChild(h1d);
    mainDiv.appendChild(phoneIcon);
    mainDiv.appendChild(phoneText);
    mainDiv.appendChild(fBook);
    mainDiv.appendChild(fBookText);
    mainDiv.appendChild(twitterIcon);
    mainDiv.appendChild(twitterText);
    mainDiv.appendChild(emailIcon);
    mainDiv.appendChild(emailText);
    return mainDiv;
}
export {contact}