class CardDealer {

    shuffle() {
        var iterations = getRandom(50,200);
        for (let i = 0; i < iterations; i++) {
            this.deck.riffle()
        }
    }

    deal() {
        var cards = this.deck.getCards();
        cards.forEach(element => {
            console.log(element.getContent());
            element.flip();
            console.log(element.getContent());
        });
    }

    setup(deck1, deck2) {
        this.deck = new Deck(deck1, deck2);
    }

}