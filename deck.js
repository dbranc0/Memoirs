class Deck {
    constructor(deck1, deck2) {
        this.cards = [];
        deck1.pics.forEach(element => {
            this.cards.push(new Card(element, true, deck1.name));
        });
        deck2.pics.forEach(element => {
            this.cards.push(new Card(element, false, deck2.name));
        });
    }

    cut(top) {
        return ( top ? 
            this.cards.slice(0, this.cards.length / 2) : 
            this.cards.slice(this.cards.length / 2, this.cards.length)
            );
    }

    riffle() {
        var riffledDeck = [];
        var leftDeck = this.cut(true);
        var rightDeck = this.cut(false);

        while(leftDeck.length > 0 || rightDeck.length > 0) {
            if (leftDeck.length > 0 && rightDeck.length > 0) {
                if (getRandom(1, 10) > 5) {
                    riffledDeck.push(leftDeck.pop());
                } else {
                    riffledDeck.push(rightDeck.pop()); 
                }
            } else {
                riffledDeck = riffledDeck.concat(( leftDeck.length > 0 ? leftDeck : rightDeck ));

                if (leftDeck.length > 0) {
                    leftDeck = [];
                } 
                if (rightDeck.length > 0) {
                    rightDeck = [];
                }
            }
            
        }
        this.cards =  riffledDeck;
    }

    getCards() {
        return this.cards;
    }

}