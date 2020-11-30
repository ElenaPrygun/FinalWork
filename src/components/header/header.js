import html from "./index.html";
import "../../style.css";
import {renderTemplate} from "../../template-utils";
import { getHistory } from "../../app-history";

const history = getHistory();

class Header {
    constructor() {
        this.header = renderTemplate(html);
    }
    showAllFilms(event) {
        event.preventDefault();
        history.push(event.target.href);
    }
    render() {
        const allFilmsButton = this.header.querySelector(".all-movies");
        allFilmsButton.addEventListener("click", this.showAllFilms)        

        return this.header;
    }
}

export default Header;