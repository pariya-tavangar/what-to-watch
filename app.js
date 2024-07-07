const movie_list = [
    {
        id: 1,
        name: 'family guy',
        image: 'img/avatar-1.jpg',
        text: 'Peter Griffin tries to do the right thing for his assorted family of two teenagers, a smart dog and a devilish baby. Despite his good intentions, Peter ends up making hilarious mistakes all the time.',
    },
    {
        id: 2,
        name: 'coraline',
        image : 'img/avatar-2.jpg',
        text:'An adventurous girl walks through a secret door in her new home and discovers a strangely idealized version of her frustrating home, but it has sinister secrets.',
    },

    {
        id: 3,
        name : 'Fantastic Mr. Fox',
        image : 'img/avatar-3.jpg',
        text:'Mr Fox, a family man, goes back to his ways of stealing, unable to resist his animal instincts. However, he finds himself trapped when three farmers decide to kill him and his kind.',
    },

    {
        id: 4,
        name : 'Shawhank Redemption',
        image : 'img/avatar-4.jpg',
        text:'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.',
    },

    {
        id: 5,
        name : '1917',
        image : 'img/avatar-5.jpg',
        text:'Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.',
    },
    {
        id: 6,
        name : 'Django Unchained',
        image : 'img/avatar-6.jpg',
        text:'Django, an African slave, is freed by a German bounty hunter and becomes his apprentice. Together, they attempt to rescue his wife, who has been enslaved by a charming but cruel plantation owner.',
    }

];

const img = document.getElementById('img-placer');
const movie = document.getElementById('movie-name');
const about = document.getElementById('About'); 

const previous = document.getElementById('previous-btn'); 
const next = document.getElementById('next-btn'); 
const suprise = document.getElementById('suprise-btn'); 

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
});

function showPerson(){
    const item = movie_list[currentItem];

    img.src = item.image; //movies[currentItem].image;
    movie.textContent = item.name;
    about.textContent = item.text;
}

next.addEventListener('click',function(){
    currentItem ++;
    if (currentItem > movie_list.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);    
});

previous.addEventListener('click',function(){

    currentItem --;
    if (currentItem <0){
        currentItem = movie_list.length - 1;
    }
    showPerson(currentItem);
});

suprise.addEventListener('click',function(){
    random();
});

function random(){
    const rand = movie_list.length
    random_list = Math.floor(Math.random()*rand);
    currentItem = random_list;
    showPerson(random_list);
}