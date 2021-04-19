
const startRestaurantPage = ()=>{
    //build divs
    const intro = document.createElement('h1');
    intro.className = 'intro';
    intro.innerHTML = '<span class="material-icons">set_meal</span>' + 'Fishers' + '<span class="material-icons">set_meal</span>';

    const hr = document.createElement('hr');
    hr.className = 'hr'
    intro.appendChild(hr);

    return intro;
}

export { startRestaurantPage }