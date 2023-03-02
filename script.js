
// To run the html server python3 -m http.server

let movieName = document.getElementById("search-bar");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result")
let getMovie = () => {
    let movie = movieName.value;
    let key = "77ed1ea7" //I know this is bad practice but will people really use it?
    let url = `http://www.omdbapi.com/?t=${movie}&apikey=${key}`;

    if (movie.length <= 0){
        result.innerHTML = `<h3> Enter a movie name </h3>`
    }

    //if input isn't empty
    else {
        fetch(url).then((res) => res.json()).then((data) => {
            //if movie exist in database
            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div class="content">
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <h4>${data.imdbRating}/10</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                    </div>
                    
                    
                `;
            }

            
          
        })
            
        
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);

