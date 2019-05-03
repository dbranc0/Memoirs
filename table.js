class Table {

    //data = array with the data to be turned into cards
    constructor(deck1, deck2) {
      this.cardDealer = new CardDealer();
      this.cardDealer.setup(deck1, deck2);
      this.cardDealer.shuffle(); 
    }
  }