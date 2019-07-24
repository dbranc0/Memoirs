class CardDealer {
    shuffle() {
        var iterations = getRandom(50,200);
        iterations = 0;
        for (let i = 0; i < iterations; i++) {
            this.levels[this.currentLevel].riffle();
        }
    }

    deal() {
        let maxColumn = 3;
        var cards = this.levels[this.currentLevel].getCards();
        var html = document.getElementById("table");
        html.innerHTML = "";
        var counter = 1;
        var row = document.createElement("DIV");
        row.setAttribute("class", "row");
        cards.forEach((element, i, array) => {
            var htmlElement = this.generateCard(element, i);
            row.appendChild(htmlElement);
            if (i == array.length - 1 && counter < maxColumn) {
                html.appendChild(row);
            }
            if (counter == maxColumn) {
                html.appendChild(row);
                row = document.createElement("DIV");
                row.setAttribute("class","row");
                counter = 1;
            } else {
                counter++;
            }

        });
    }

    generateCard(card, order) {
        var htmlElement = document.createElement("DIV");
        var cardFront = document.createElement("DIV");
        var cardBack = document.createElement("DIV");
        var cardDiv = document.createElement("DIV");

        cardFront.setAttribute("class", "card__face card__face--front");
        cardFront.innerHTML = "<img src='" + card.back +"' height=100% width=100%>";

        cardBack.setAttribute("class", "card__face card__face--back");
        cardBack.innerHTML = "<img src='" + card.front + "' height=100% width=100%>"

        cardDiv.appendChild(cardFront);
        cardDiv.appendChild(cardBack);
        cardDiv.setAttribute("class", "card");
        cardDiv.setAttribute("id",order);
        cardDiv.addEventListener('click', function() {
            table.cardDealer.flip(order);
        });

        htmlElement.appendChild(cardDiv);

        htmlElement.setAttribute("class", "scene scene--card column");
        
        return htmlElement;
    }

    flip(i) {
        var pickedCard = this.getCard(i);
        var flippedCard = this.flippedCardPosition != null ? this.getCard(this.flippedCardPosition) : null;
        
        if (!pickedCard.card.flipped) {
            if(flippedCard == null) {
                this.flipCard(pickedCard);
                this.flippedCardPosition = i;
            } else {
                //compare decks
                if (pickedCard.card.from != flippedCard.card.from) {
                    this.flipCard(pickedCard);
                    //compare cards
                    if (pickedCard.card.id == flippedCard.card.id) {
                        //matching cards
                        this.flippedCardPosition = null;
                        this.foundPairs++;
                        console.log(this.foundPairs);
                        console.log(this.pairs);
                        console.log(this.foundPairs == this.pairs);
                        if (this.foundPairs == this.pairs) {
                            console.log("level complete");
                            this.changeLevel();
                        }
                    } else {
                        //not matching cards
                        setTimeout(function(asd){ 
                            this.flipCard(pickedCard);
                            this.flipCard(flippedCard);
                            this.flippedCardPosition = null;
                        }.bind(this), 1500);
                    }
                }
            }

        }
    }

    flipCard(card) {
        card.card.flip();
        card.html.classList.toggle('is-flipped');
    }

    getCard(i) {
        return {
            card: this.levels[this.currentLevel].getCards()[i], 
            html: document.getElementById(i)
        };
    }

    setup(deck1, deck2) {
        this.levels = [];
        for (let i = 0; i < deck1.levels.length; i++) {
            this.levels.push(new Deck(deck1.levels[i], deck2.levels[i]));
        }
        this.currentLevel = 0;
        this.pairs = deck1.levels[0].length;
        this.foundPairs = 0;
    }

    changeLevel() {
        this.currentLevel++;
        this.pairs = this.levels[this.currentLevel].length;
        this.foundPairs = 0;
        this.shuffle();
        this.deal();
    }
}