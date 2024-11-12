import { Nullable, DateString } from "./types";

export const playgroups = [
  "GenPop",
  "Oldies",
  "BePeepo",
  "Kyo and Sai",
  "Teep and Bruce",
  "PMS",
  "VONS",
  "PS3",
  "Solo",
  "Valhalla"
];

export interface Ferret {
  name: string;
  sex: Nullable<"male" | "female">;
  playgroup: string;
  valhallaDate: Nullable<DateString>;
}

// Initial 57 ferrets added according to arrival date (if provided)
export const ferrets: Ferret[] = [
  {
    name: "Snails",
    sex: "female",
    playgroup: "Valhalla",
    valhallaDate: "2023-04-22"
  },
  {
    name: "Loki",
    sex: "female",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Beef",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Cheese",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Beans",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Onion",
    sex: "female",
    playgroup: "VONS",
    valhallaDate: null,
  },
  {
    name: "Tortilla",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Mouse",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Ghost",
    sex: "female",
    playgroup: "Solo",
    valhallaDate: null,
  },
  {
    name: "Grandpa",
    sex: "male",
    playgroup: "Valhalla",
    valhallaDate: "2024-07-02"
  },
  {
    name: "Banana",
    sex: "female",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Lucky",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Pickle",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Eddie",
    sex: "male",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Max",
    sex: "male",
    playgroup: "Valhalla",
    valhallaDate: "2023-12-26"
  },
  {
    name: "Mocha",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Vincent",
    sex: "male",
    playgroup: "VONS",
    valhallaDate: null,
  },
  {
    name: "Latte",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Moxie",
    sex: "female",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Bandit",
    sex: "male",
    playgroup: "Valhalla",
    valhallaDate: "2024-04-05"
  },
  {
    name: "Rose",
    sex: "female",
    playgroup: "Valhalla",
    valhallaDate: "2024-01-14"
  },
  {
    name: "Chili",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Fig",
    sex: "male",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Kahlua",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Mai Tai",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Mimosa",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Scotch",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Whiskey",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Badger",
    sex: "male" ,
    playgroup: "BePeepo",
    valhallaDate: null,
  },
  {
    name: "Moose",
    sex: "male",
    playgroup: "PMS",
    valhallaDate: null,
  },
  {
    name: "Peepo",
    sex: "female",
    playgroup: "BePeepo",
    valhallaDate: null,
  },
  {
    name: "Pepper",
    sex: "female",
    playgroup: "PMS",
    valhallaDate: null,
  },
  {
    name: "Salt",
    sex: "female",
    playgroup: "PMS",
    valhallaDate: null,
  },
  {
    name: "Henry",
    sex: "male",
    playgroup: "Solo",
    valhallaDate: null,
  },
  {
    name: "Jinx",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Nacho",
    sex: "female",
    playgroup: "VONS",
    valhallaDate: null,
  },
  {
    name: "Salsa",
    sex: "female",
    playgroup: "VONS",
    valhallaDate: null,
  },
  {
    name: "Mishka",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Finn",
    sex: "male",
    playgroup: "Solo",
    valhallaDate: null,
  },
  {
    name: "Louise",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Thelma",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Felix",
    sex: "male",
    playgroup: "Valhalla",
    valhallaDate: "2024-09-17"
  },
  {
    name: "Kyo",
    sex: "female",
    playgroup: "Kyo and Sai",
    valhallaDate: null,
  },
  {
    name: "Sai",
    sex: "female",
    playgroup: "Kyo and Sai",
    valhallaDate: null,
  },
  {
    name: "Rusty",
    sex: "male",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Demeter",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Mistoffelees",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Cashew",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Hazelnut",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Peanut",
    sex: "female",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Cowboy",
    sex: "male",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Torch",
    sex: "male",
    playgroup: "Solo",
    valhallaDate: null,
  },
  {
    name: "Luna",
    sex: "female",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Odin",
    sex: "male",
    playgroup: "Oldies",
    valhallaDate: null,
  },
  {
    name: "Spud",
    sex: "male",
    playgroup: "GenPop",
    valhallaDate: null,
  },
  {
    name: "Teep",
    sex: "female",
    playgroup: "Teep and Bruce",
    valhallaDate: null,
  },
  {
    name: "Bruce",
    sex: "male",
    playgroup: "Teep and Bruce",
    valhallaDate: null,
  },
  {
    name: "Pepper_2",
    sex: "male",
    playgroup: "PS3",
    valhallaDate: null,
  },
  {
    name: "Salt_2",
    sex: "male",
    playgroup: "PS3",
    valhallaDate: null,
  },
  {
    name: "Skye",
    sex: "female",
    playgroup: "PS3",
    valhallaDate: null,
  },
  {
    name: "Snowball",
    sex: "male",
    playgroup: "PS3",
    valhallaDate: null,
  },
];