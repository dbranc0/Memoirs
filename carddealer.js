class CardDealer {

    

    shuffle() {
        var iterations = getRandom(50,200);
        for (let i = 0; i < iterations; i++) {
            this.deck.riffle()
        }
    }

    deal() {
        var cards = this.deck.getCards();
        var html = document.getElementById("table");
        html.innerHTML = "";
        cards.forEach((element, i, array) => {
            var htmlElement = this.generateCard(element);
            //htmlElement.setAttribute("onclick", "table.cardDealer.flip(" + i + ")");
            //htmlElement.setAttribute("class", "card");
            //htmlElement.href = "javascript:void(0);";
            //htmlElement.innerHTML = "<img class= 'cardImg' src='" + element.getContent() + "' alt='" + element.id + "'>";

            html.appendChild(htmlElement);
            if (i == array.length / 2) {
                var separator = document.createElement("BR");
                html.appendChild(separator);
            }
        });
    }

    generateCard(card) {
        var htmlElement = document.createElement("DIV");
        var cardFront = document.createElement("DIV");
        var cardBack = document.createElement("DIV");
        var cardDiv = document.createElement("DIV");

        cardFront.setAttribute("class", "card__face card__face--front");
        cardFront.innerHTML = "<img src='" + card.front +"' height=100px width=100px>";

        cardBack.setAttribute("class", "card__face card__face--back");
        cardBack.innerHTML = "<img src='" + card.back + "' height=100px width=100px>"

        cardDiv.appendChild(cardFront);
        cardDiv.appendChild(cardBack);
        cardDiv.setAttribute("class", "card");
        cardDiv.addEventListener('click', function() {
            cardDiv.classList.toggle('is-flipped');
        });

        htmlElement.appendChild(cardDiv);

        htmlElement.setAttribute("class", "scene scene--card");
        
        console.log(htmlElement);
        return htmlElement;
    }

    flip(i) {
        var card = this.deck.getCards()[i];
        
        console.log(" Id: " + card.id + " From: " + card.from);
        if (this.flippedCardPosition) {
            var flippedCard = this.deck.getCards()[this.flippedCardPosition];
            if (card.from != flippedCard.from) {
                if (card.id != flippedCard.id) {
                    card.flip();
                    this.deal();
                    var context = this;
                    setTimeout(function(){ 
                        card.flip();
                        flippedCard.flip();
                        context.deal();
                    }, 1500);

                } else {
                    card.flip();
                    this.deal();
                }
                this.flippedCardPosition = null;
            }
        

        } else {
            card.flip();
            this.flippedCardPosition = i;
        }
        this.deal();
    }
    setup(deck1, deck2) {
        this.deck = new Deck(deck1, deck2);
    }
}