

const fetchFilmes = ()=>{
    const url = 'https://sky-frontend.herokuapp.com/movies'

    fetch(url)
    .then (response=>response.json())
    .then (response=>response[2].movies)
    .then (movies=>{
        console.log(movies);
        movies.forEach(movie=>{
            title = movie.title;
            img_url = movie.images[0].url;
            console.log(title);
            console.log(img_url);
            document.getElementById('carroussel-2').insertAdjacentHTML("beforeend", 
            '<img class="filme-img" src="'+img_url+'" title="'+title+'">');
        })
    })
}

fetchFilmes();

