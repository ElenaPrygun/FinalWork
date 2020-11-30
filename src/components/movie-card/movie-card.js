import html from "./index.html";
import "../../style.css";
import {renderTemplate} from "../../template-utils";
import {getHistory} from "../../app-history";

const history = getHistory();

class MovieCard {
    constructor(movie) {
        this.id = movie.id || "";
        this.image = movie.image || "";
        this.title = movie.title || "";
        this.titleOriginal = movie.titleOriginal || "";
        this.text = movie.text || "";
        this.rating = movie.rating || "";
        this.year = movie.year || "";
        this.country = movie.country || "";
        this.slogan = movie.slogan || "";
        this.director = movie.director || "";
        this.producer = movie.producer || "";
        this.scenario = movie.scenario || "";
        this.roles = movie.roles || "";
        this.operator = movie.operator || "";
        this.composer = movie.composer || "";
        this.movie = renderTemplate(html,{
            id: this.id,
            image: this.image,
            title: this.title,
            text: this.text,
            rating: this.rating
        })
    }

    openFilm(event) {
        event.preventDefault();
        history.push(event.target.href);
    }    

    render() {  
        const openButton = this.movie.querySelector(".more");
        openButton.addEventListener("click", this.openFilm.bind(this))      

        return this.movie
    }
}

export default MovieCard;
