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
            var htmlElement = document.createElement("A");
            htmlElement.setAttribute("onclick", "table.cardDealer.flip(" + i + ")");
            //htmlElement.setAttribute("class", "card");
            htmlElement.href = "javascript:void(0);";
            htmlElement.innerHTML = "<img src='" + element.getContent() + "' width=100px height=100px>";

            html.appendChild(htmlElement);
            if (i == array.length / 2) {
                var separator = document.createElement("BR");
                html.appendChild(separator);
            }
        });
    }

    flip(i) {
        var card = this.deck.getCards()[i];
        
        console.log("Content: " + card.front + " Id: " + card.id + " From: " + card.from);
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