class CardDealer {
    shuffle() {
        var iterations = getRandom(500,1000);
        //iterations = 0;
        this.levels[this.currentLevel].riffle();
        //for (let i = 0; i < iterations; i++) {
        //}
    }

    deal() {
        let maxColumn = 4;
        var cards = this.levels[this.currentLevel].getCards();
        var html = document.getElementById("table");
        console.log(html);
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
        //cardFront.style = "{ background: url(" + card.back + ") center; }";

        cardBack.setAttribute("class", "card__face card__face--back");
        cardBack.innerHTML = "<img src='" + card.front + "' height=100% width=100%>"
        //cardBack.style = "{ background: url(" + card.front + ") center; }";

        cardDiv.appendChild(cardFront);
        cardDiv.appendChild(cardBack);
        cardDiv.setAttribute("class", "card permitted " + card.from);
        cardDiv.setAttribute("id",order);
        cardDiv.addEventListener('click', function() {
            table.cardDealer.flip(order);
        });

        htmlElement.appendChild(cardDiv);

        htmlElement.setAttribute("class", "scene scene--card column");
        
        return htmlElement;
    }
    
    flip(i) {
        if (!this.locked) {
            var pickedCard = this.getCard(i);
            var flippedCard = this.flippedCardPosition != null ? this.getCard(this.flippedCardPosition) : null;
            
            if (!pickedCard.card.flipped) {
                if(flippedCard == null) {
                    this.setClickable(pickedCard.card.to);
                    pickedCard.html.classList.toggle("permitted", false);
                    this.flipCard(pickedCard);
                    this.flippedCardPosition = i;
                } else {
                    //compare decks
                    if (pickedCard.card.from != flippedCard.card.from) {
                        pickedCard.html.classList.toggle("permitted");
                        this.flipCard(pickedCard);
                        //compare cards
                        if (pickedCard.card.id == flippedCard.card.id) {
                            //matching cards
                            this.setClickable("card");
                            this.flippedCardPosition = null;
                            this.foundPairs++;
                            if (this.foundPairs == this.pairs) {
                                console.log("level complete");
                                setTimeout(function() {
                                    document.getElementById("table").classList.toggle("fade");
                                }, 3000);
                                setTimeout(function() {
                                    this.changeLevel();
                                }.bind(this), 5000);
                            }
                        } else {
                            //not matching cards
                            this.locked = true;
                            setTimeout(function(){
                                this.flipCard(pickedCard);
                                this.flipCard(flippedCard);
                                this.flippedCardPosition = null;
                                this.setClickable("card"); 
                                this.locked = false;
                            }.bind(this), 2000);
                        }
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

    setClickable(allowed) {
        var cards = document.getElementsByClassName("card");
        console.log(cards);
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            if (card.classList.contains(allowed) && !card.classList.contains("is-flipped")) {
                card.classList.toggle("permitted", true);
            } else {
                card.classList.toggle("permitted", false);
            }
            
        }
    }

    changeLevel() {
        this.currentLevel++;
        if(this.currentLevel < this.levels.length) {
            var table = document.getElementById("table");
            table.classList.toggle("level");
            this.pairs = this.levels[this.currentLevel].length;
            this.foundPairs = 0;
            this.shuffle();
            console.log("creating loadbar");
            table.innerHTML = "<div class='progress'><span class='percent'>NOW LOADING</span><div id='loadbar' class='bar'></div></div>";  
            document.getElementById("loadbar").classList.toggle("loading");
            setTimeout(() => {
                console.log("enter timeout");
                this.deal();
                table.classList.toggle("level");
                table.classList.toggle("fade");
            }, 10*1000);
        }
    }
}