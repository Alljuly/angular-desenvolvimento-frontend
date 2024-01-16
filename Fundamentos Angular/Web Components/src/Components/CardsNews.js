
class CardNews extends HTMLElement{
    constructor(){
        super();
        
        const shadow = this.attachShadow({mode: "open"});

        const componentRoot = document.createElement('div')
        componentRoot.innerHTML = ` <div class="card__left">
        <div class="author">
            <div class="foto">oi</div>
            <span>Alice</span>
        </div>                
        <div class="content__card">
            <div class="content__text">
                <h1>Darth Vader Contrata DEVs</h1>
                <p class="resume">Lord Vader anuncia que está a procura de novos funcionários, e é pré-requisito saber trabalhar com componentização</p>
            </div>
            <div class="card__footer">
                <div class="content__info">
                    <p class="date resume">Jan 14 </p>
                    <p class="time resume"> 3 min read </p>
                    <p class="magazine resume"> Imperio News </p>
                </div>
                <div class="icon resume">oi</div>
            </div>
        </div>
    </div>
    <div class="card__rigth">
        <img src="./src/assets/asset-vader.png" height="100%">
    </div>`

        const style = document.createElement("style")
        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Segoe UI", sans-serif;
        }
        
        html, body{
            min-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #e4e3e2;
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
        
        
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            justify-content: space-around;
            background-color: #f0f8ff;
            border-radius: 2px;
            box-shadow: 5px 5px 5px rgb(97, 94, 94);
            flex-wrap: wrap;
        }
        
        .card {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        
            border-radius: 2px;
            max-width: 900px;
            flex-wrap: wrap;
        
        }   
        
        .card__left {
            justify-content: space-between;
            align-items: center;
            flex: 1;
            margin-inline: 1rem;
            margin-bottom: 1rem;
        }
        
        
        .card__left {
            min-height: 100%;
        }
        
        .resume {
            color:#00000070
        }
        
        .content__card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%; 
        }
        
        .card__footer, .content__info{
            display: flex;
            flex-direction: row;
        }
        
        .card__footer{
            font-size: 14px;
            justify-content: space-between;
            align-items: center;
            margin-top: .8rem;
        }
        
        .card__footer > .content__info {
            width: 80%;
            justify-content: left; 
        }
        
        .content__info > .time, .magazine{
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
        
        `
        shadow.appendChild(style)
        shadow.appendChild(componentRoot)
    }


}

customElements.define('card-news', CardNews)