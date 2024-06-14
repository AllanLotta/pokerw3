export interface Player {
  id: string; // Unique identifier for the player
  name: string; // Player's name
  avatarUrl?: string; // URL to the player's avatar image
  chips: number; // Amount of chips the player has
  isDealer: boolean; // Whether the player is the dealer
  isBigBlind: boolean; // Whether the player is the big blind
  isSmallBlind: boolean; // Whether the player is the small blind
  isActive: boolean; // Whether the player is currently active in the game
  cards: Card[]; // The cards that the player holds
  betAmount: number; // The amount the player has bet in the current round
  position: number; // Player's position at the table (0 for dealer, 1 for next, etc.)
  hasFolded: boolean; // Whether the player has folded in the current hand
  itsMe: boolean; // Whether the player is the current user
}

// Example card interface for the player's cards
export interface Card {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades'; // Card suit
  rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'; // Card rank
}