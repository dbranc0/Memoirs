




var male = [
    {data:"./assets/decks/M/king_of_clubs2.png", id:1}, 
    {data:"./assets/decks/M/king_of_diamonds2.png", id:2}, 
    {data:"./assets/decks/M/king_of_hearts2.png", id:3}, 
    {data:"./assets/decks/M/king_of_spades2.png", id:4} 
];

var female = [
    {data:"./assets/decks/F/queen_of_clubs2.png", id:1}, 
    {data:"./assets/decks/F/queen_of_diamonds2.png", id:2}, 
    {data:"./assets/decks/F/queen_of_hearts2.png", id:3}, 
    {data:"./assets/decks/F/queen_of_spades2.png", id:4} 
];
table = new Table(male, female);
table.cardDealer.deal();