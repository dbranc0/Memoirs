class CardDealer {

    shuffle() {
        var iterations = getRandom(50,200);
        for (let i = 0; i < iterations; i++) {
            this.deck.riffle()
        }
    }

    deal() {
        return this.deck.getCards();
/*        var cards = this.deck.getCards();
        var html = document.getElementById("table");
        html.innerHTML = "";
         cards.forEach((element, i, array) => {
            console.log("");
            var htmlElement = this.generateLink(i, element);

            html.appendChild(htmlElement);
            if (i == array.length / 2) {
                var separator = document.createElement("BR");
                html.appendChild(separator);
            }
        }
        ); */
    }

    flip(i) {
        var card = this.deck.getCards()[i];
        
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

    /* generateLink(position, card) {
        var element = document.createElement("A");
        element.setAttribute("onclick", "table.cardDealer.flip(" + position + ")");
        element.setAttribute("class", "card");
        element.href = "javascript:void(0);";
        var html = "<div class='flip-card'>";
        html += "<div class='flip-card-inner'>";
        html += "<div class='flip-card-back cardImg'>";
        html += "<div class='card-content'><h3>" + card.name + "</h3><br><h3>" + card.age +"</h3><img class= 'cardImg' src='" + card.front + "' alt='" + card.id + "'></div>";
        html += "</div> <div class='flip-card-front'>";
        html += "<img src='" + card.back + "'></div></div></div>";
        element.innerHTML = html;

        return element;
    } */

}