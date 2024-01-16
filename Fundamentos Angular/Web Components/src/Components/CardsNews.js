class CardNews extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		var build = this.buildComponent(
			this.buildCardLeft(),
			this.buildCardRight()
		);
		shadow.appendChild(build);
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
		image.setAttribute("class", "icon resume");

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
			"By" + (this.getAttribute("nameAuthor") || "Anonymous");
		nameAuthor.setAttribute("class", "nameAuthor");

		author.appendChild(photo);
		author.appendChild(nameAuthor);

		const contentCard = document.createElement("div");
		contentCard.setAttribute("class", "content__card");

		const contentText = document.createElement("div");
		contentText.setAttribute("class", "content__text");

		const anchor = document.createElement("a");
		anchor.setAttribute("class", "linkTitle");
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
