const setTheme = (color) => {
    switch(color){
        case 'white':
            document.querySelector('#theme-file').setAttribute("href","");
            break;
        case 'black':
            document.querySelector('#theme-file').setAttribute("href","black.css");
            break;
        case 'green':
            document.querySelector('#theme-file').setAttribute("href","green.css");
            break;
        case 'purple':
            document.querySelector('#theme-file').setAttribute("href","purple.css");
            break;
        default:
    }
}

const scrollToContactForm = () => {
   
    const element = document.querySelector('#s4')
    const topPos = element.getBoundingClientRect().top + window.pageYOffset

    window.scrollTo({
    top: topPos, // scroll so that the element is at the top of the view
    behavior: 'smooth' // smooth scroll
    })
}