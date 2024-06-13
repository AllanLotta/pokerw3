import { Player } from "../types";

const randomAvatarUrl = () => {
  let url = "https://xsgames.co/randomusers/assets/avatars/";
  const number = Math.floor(Math.random() * 50) + 1;
  const isMale = Math.random() < 0.8;
  const gender = isMale ? "male" : "female";
  url += `${gender}/${number}.jpg`;
  return url;
};

export const playersList: Player[] = [
  {
    id: "1",
    name: "John Doe",
    avatarUrl: randomAvatarUrl(),
    chips: 1500,
    isDealer: true,
    isBigBlind: false,
    isSmallBlind: false,
    isActive: true,
    cards: [
      { suit: "hearts", rank: "K" },
      { suit: "spades", rank: "A" },
    ],
    betAmount: 0,
    position: 0,
    hasFolded: false,
  },
  {
    id: "2",
    name: "Jane Smith",
    avatarUrl: randomAvatarUrl(),
    chips: 2000,
    isDealer: false,
    isBigBlind: true,
    isSmallBlind: false,
    isActive: true,
    cards: [
      { suit: "diamonds", rank: "7" },
      { suit: "clubs", rank: "8" },
    ],
    betAmount: 0,
    position: 1,
    hasFolded: false,
  },
  {
    id: "3",
    name: "Bob Johnson",
    avatarUrl: randomAvatarUrl(),
    chips: 1200,
    isDealer: false,
    isBigBlind: false,
    isSmallBlind: true,
    isActive: true,
    cards: [
      { suit: "spades", rank: "2" },
      { suit: "clubs", rank: "J" },
    ],
    betAmount: 0,
    position: 2,
    hasFolded: false,
  },
  {
    id: "4",
    name: "Alice Brown",
    avatarUrl: randomAvatarUrl(),
    chips: 1600,
    isDealer: false,
    isBigBlind: false,
    isSmallBlind: false,
    isActive: true,
    cards: [
      { suit: "hearts", rank: "9" },
      { suit: "diamonds", rank: "Q" },
    ],
    betAmount: 0,
    position: 3,
    hasFolded: false,
  },
  {
    id: "5",
    name: "Charlie Wilson",
    avatarUrl: randomAvatarUrl(),
    chips: 1800,
    isDealer: false,
    isBigBlind: false,
    isSmallBlind: false,
    isActive: true,
    cards: [
      { suit: "clubs", rank: "3" },
      { suit: "hearts", rank: "4" },
    ],
    betAmount: 0,
    position: 4,
    hasFolded: false,
  },
  {
    id: "6",
    name: "Dave Lee",
    avatarUrl: randomAvatarUrl(),
    chips: 2200,
    isDealer: false,
    isBigBlind: false,
    isSmallBlind: false,
    isActive: true,
    cards: [
      { suit: "spades", rank: "6" },
      { suit: "diamonds", rank: "8" },
    ],
    betAmount: 0,
    position: 5,
    hasFolded: false,
  },
  {
    id: "7",
    name: "Eve Martinez",
    avatarUrl: randomAvatarUrl(),
    chips: 1300,
    isDealer: false,
    isBigBlind: false,
    isSmallBlind: false,
    isActive: true,
    cards: [
      { suit: "hearts", rank: "5" },
      { suit: "spades", rank: "10" },
    ],
    betAmount: 0,
    position: 6,
    hasFolded: false,
  },
  {
    id: "8",
    name: "Frank Harris",
    avatarUrl: randomAvatarUrl(),
    chips: 1700,
    isDealer: false,
    isBigBlind: false,
    isSmallBlind: false,
    isActive: true,
    cards: [
      { suit: "diamonds", rank: "A" },
      { suit: "clubs", rank: "7" },
    ],
    betAmount: 0,
    position: 7,
    hasFolded: false,
  },
];

export const communityCards = [
  {
    id: 1,
    name: "Flop",
    suit: "hearts",
    rank: "K",
  },
  {
    id: 2,
    name: "Flop",
    suit: "spades",
    rank: "A",
  },
  {
    id: 3,
    name: "Flop",
    suit: "diamonds",
    rank: "7",
  },
  {
    id: 4,
    name: "Flop",
    suit: "clubs",
    rank: "8",
  },
];
