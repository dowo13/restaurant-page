
const homePageCopyFunc = ()=>{
    const mainDiv = document.createElement('main');
    mainDiv.className = 'mainSec';
    mainDiv.id = 'active';
    mainDiv.style.display = 'block';

    const homePageIntro = document.createElement('h1');
    homePageIntro.className = 'homeIntro';
    homePageIntro.innerHTML = `Welcome to <span style="color: blue; font-size: 2.5rem; font-weight: bold; font-style: italic"> Fishers </span>`

    const para = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');

    para.className = 'copyP';
    // para.textContent = copyText;
    para2.className = 'copyP2';
    // para2.textContent = copy2;
    para3.className = 'copy3';

    const restPic = document.createElement('img');
    restPic.className = 'restPic';
    restPic.src = '/home/dom/restaurantPage/dist/restaurant.jpg';
    restPic.alt = 'pic of inside restaurant';

    const pic = document.createElement('img');
    pic.className = 'fishPic';
    pic.src = '/home/dom/restaurantPage/dist/fishnchips.jpg';
    pic.alt = 'pic of fish and chips';

    const pic1 = document.createElement('img');
    pic1.className = 'pic1';
    pic1.src = '/home/dom/restaurantPage/dist/chippyPic.png';
    pic1.alt = 'more fish and chips pics'

    const pic2 = document.createElement('img');
    pic2.className = 'pic2';
    pic2.src = '/home/dom/restaurantPage/dist/Seafood.jpg';
    pic2.alt = 'inside of restaurant';


    //copy text
    let copyText = `Award winning Fish & Chips. With an extensive menu and the freshest fish you can get (caught on the very same day that it is used). FISHERS restaurant has been recognised the world over as the go to restaurant for Fish & Chips. Our Michelin starred chef prides himself on making the menu diverse and exciting, from our delicious line caught cod to our world famous Scampi in the basket, Fishies truly has a Fish for all, add that to our delicious chunky chips made from locally sourced potatoes, mouth watering mushy peas with tartare sauce and lashings of salt and vinegar, Fishers looks forward to welcoming you.`;

    let copy2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh sit amet commodo nulla. Varius sit amet mattis vulputate. Faucibus vitae aliquet nec ullamcorper sit amet risus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Pellentesque id nibh tortor id aliquet lectus proin nibh. Eu mi bibendum neque egestas. Ultrices gravida dictum fusce ut. Est sit amet facilisis magna etiam tempor orci eu lobortis. Vestibulum morbi blandit cursus risus at ultrices. Faucibus interdum posuere lorem ipsum dolor. Dui accumsan sit amet nulla facilisi. Scelerisque varius morbi enim nunc faucibus a. Morbi tristique senectus et netus et malesuada fames ac turpis. In est ante in nibh mauris cursus mattis. Aliquet lectus proin nibh nisl condimentum id venenatis a. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. At augue eget arcu dictum varius duis. Pharetra convallis posuere morbi leo urna molestie. Tincidunt ornare massa eget egestas purus. Feugiat nibh sed pulvinar proin. Amet nulla facilisi morbi tempus iaculis. Fames ac turpis egestas maecenas pharetra convallis posuere. Tincidunt augue interdum velit euismod in pellentesque massa. Mi sit amet mauris commodo quis imperdiet massa. Pellentesque habitant morbi tristique senectus et. Platea dictumst vestibulum rhoncus est pellentesque. Sagittis nisl rhoncus mattis rhoncus urna. Est pellentesque elit ullamcorper dignissim cras tincidunt. Quis vel eros donec ac odio tempor orci dapibus ultrices. Nullam eget felis eget nunc lobortis mattis aliquam. Elit eget gravida cum sociis natoque penatibus.';

    let copy3 = 'Platea dictumst vestibulum rhoncus est pellentesque. Sagittis nisl rhoncus mattis rhoncus urna. Est pellentesque elit ullamcorper dignissim cras tincidunt. Quis vel eros donec ac odio tempor orci dapibus ultrices. Nullam eget felis eget nunc lobortis mattis aliquam. Elit eget gravida cum sociis natoque penatibus.'

    para.textContent = copyText;
    para2.textContent = copy2;
    para3.textContent = copy3;

    mainDiv.appendChild(homePageIntro)
    // mainDiv.appendChild(para);
    // mainDiv.appendChild(para2);
    // mainDiv.appendChild(para3);
    mainDiv.appendChild(restPic)
    mainDiv.appendChild(pic);
    mainDiv.appendChild(para);
    // mainDiv.appendChild(pic1);
    mainDiv.appendChild(pic2);

    return mainDiv;

}
export { homePageCopyFunc };