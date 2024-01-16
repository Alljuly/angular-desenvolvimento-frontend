class CardNews extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		var build = this.buildComponent(
			this.buildCardLeft(),
			this.buildCardRight()
		);

		var style = this.styles();
		shadow.appendChild(build);

		shadow.appendChild(style);
	}

	styles() {
		const style = document.createElement("style");
		style.textContent = `* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Segoe UI", sans-serif;
        }
        
        html,
        body {
            min-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #e4e3e2;
        }
        
        
        
        a {
            text-decoration: none;
            font-weight: bold;
            font-size: 2rem;
            color: #000;
        }
        
        .author {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 0.8rem;
        }
        
        .foto {
            border-radius: 50%;
            width: 30px;
            height: 30px;
            background-color: black;
            margin-right: 0.5rem;
        }
        
        .card {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 1rem 0;
            border-radius: 2px;
            width: 65vw;
            max-width: fit-content;
            min-width: min-content;
            flex-wrap: wrap;
            background-color: #f0f8ff;
            transition: transform 0.2s;
        }
        
        .card:hover {
            transform: scale(1.005);

            box-shadow: 2px 3px 5px rgb(211, 210, 210);
        }
        
        .card__left {
            justify-content: space-between;
            align-items: center;
            flex: 1;
            margin-inline: 1rem;
            margin-bottom: 1rem;
            min-height: 100%;
            width: 60vw;
        }
        
        .resume {
            color: #00000070;
        }
        
        .content__card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
        
        .card__footer,
        .content__info {
            display: flex;
            flex-direction: row;
        }
        
        .card__footer {
            font-size: 14px;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.8rem;
            max-width: 95%;
        }
        
        .card__footer > .content__info {
            width: 80%;
            justify-content: left;
        }
        
        .content__info > .time,
        .magazine {
            margin-inline: 0.3rem;
        }
        
        .icon {
            margin-right: 2.5rem;
        }
        
        .magazine {
            border-radius: 8px;
            padding-inline: 0.4em;
            background-color: #0000002c;
        }
        
        .card__rigth,
        img {
            display: flex;
            justify-content: center;
        }
        .image{
            height: 200px;
            min-width: fit-content;
        }
        `;

		return style;
	}

	buildComponent(left, rigth) {
		const componentRoot = document.createElement("div");
		componentRoot.setAttribute("class", "card");

		componentRoot.appendChild(left);
		componentRoot.appendChild(rigth);
		return componentRoot;
	}

	buildCardRight() {
		const cardRigth = document.createElement("div");
		cardRigth.setAttribute("class", "card__rigth");

		const image = document.createElement("img");
		image.setAttribute("class", "image");
		image.src = this.getAttribute("img") || "src/assets/foto-default.jpg";

		cardRigth.appendChild(image);

		return cardRigth;
	}

	buildCardLeft() {
		const cardLeft = document.createElement("div");
		cardLeft.setAttribute("class", "card__left");

		const author = document.createElement("div");
		author.setAttribute("class", "author");

		const photo = document.createElement("img");
		photo.setAttribute("class", "foto");

		const nameAuthor = document.createElement("span");
		nameAuthor.textContent =
			"By " + (this.getAttribute("nameAuthor") || "Anonymous");
		nameAuthor.setAttribute("class", "nameAuthor");

		author.appendChild(photo);
		author.appendChild(nameAuthor);

		const contentCard = document.createElement("div");
		contentCard.setAttribute("class", "content__card");

		const contentText = document.createElement("div");
		contentText.setAttribute("class", "content__text");

		const anchor = document.createElement("a");
		anchor.setAttribute("class", "linkTitle");
		anchor.href = "";
		anchor.textContent = this.getAttribute("linkTitle");

		const resume = document.createElement("p");
		resume.setAttribute("class", "resume");
		resume.textContent = this.getAttribute("resume");

		contentText.appendChild(anchor);
		contentText.appendChild(resume);

		const cardFooter = document.createElement("div");
		cardFooter.setAttribute("class", "card__footer");

		const contentInfo = document.createElement("div");
		contentInfo.setAttribute("class", "content__info");

		const dateResume = document.createElement("p");
		dateResume.setAttribute("class", "date resume");
		dateResume.textContent = this.getAttribute("date");

		const timeResume = document.createElement("p");
		timeResume.setAttribute("class", "time resume");
		timeResume.textContent = this.getAttribute("time");

		const magazineResume = document.createElement("p");
		magazineResume.textContent = this.getAttribute("magazine");
		magazineResume.setAttribute("class", "magazine resume");

		contentInfo.appendChild(dateResume);
		contentInfo.appendChild(timeResume);
		contentInfo.appendChild(magazineResume);

		const iconResume = document.createElement("img");
		iconResume.setAttribute("class", "icon resume");
		iconResume.alt = "icon";

		cardFooter.appendChild(contentInfo);
		cardFooter.appendChild(iconResume);

		contentCard.appendChild(contentText);
		contentCard.appendChild(cardFooter);

		cardLeft.appendChild(author);
		cardLeft.appendChild(contentCard);

		return cardLeft;
	}
}

customElements.define("card-news", CardNews);
