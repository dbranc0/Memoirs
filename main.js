var joana = { levels: [] };
joana.levels[0] = [
    {data:"./assets/decks/F/queen_of_hearts1.png", id:1}, 
    {data:"./assets/decks/F/queen_of_hearts2.png", id:2}, 
    {data:"./assets/decks/F/queen_of_hearts3.png", id:3}, 
    {data:"./assets/decks/F/queen_of_hearts4.png", id:4},
    {data:"./assets/decks/F/queen_of_hearts5.png", id:5}, 
    {data:"./assets/decks/F/queen_of_hearts6.png", id:6}
];
joana.levels[1] = [
    {data:"./assets/decks/F/queen_of_hearts7.png", id:7},
    {data:"./assets/decks/F/queen_of_hearts8.png", id:8},
    {data:"./assets/decks/F/queen_of_hearts9.png", id:9}, 
    {data:"./assets/decks/F/queen_of_hearts10.png", id:10}, 
    {data:"./assets/decks/F/queen_of_hearts11.png", id:11}, 
    {data:"./assets/decks/F/queen_of_hearts12.png", id:12} 
];

var paulo = { levels: [] };
paulo.levels[0] = [
    {data:"./assets/decks/M/king_of_hearts1.png", id:1}, 
    {data:"./assets/decks/M/king_of_hearts2.png", id:2}, 
    {data:"./assets/decks/M/king_of_hearts3.png", id:3}, 
    {data:"./assets/decks/M/king_of_hearts4.png", id:4},
    {data:"./assets/decks/M/king_of_hearts5.png", id:5}, 
    {data:"./assets/decks/M/king_of_hearts6.png", id:6}
];
paulo.levels[1] = [
    {data:"./assets/decks/M/king_of_hearts7.png", id:7},
    {data:"./assets/decks/M/king_of_hearts8.png", id:8},
    {data:"./assets/decks/M/king_of_hearts9.png", id:9}, 
    {data:"./assets/decks/M/king_of_hearts10.png", id:10}, 
    {data:"./assets/decks/M/king_of_hearts11.png", id:11}, 
    {data:"./assets/decks/M/king_of_hearts12.png", id:12} 
];

table = new Table(paulo, joana);
table.cardDealer.deal();