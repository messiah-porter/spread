const mcushows = ['Loki', 'Moonknight']

const starWarsShows = ['The Mandalorian', 'The Book Of Boba Fett']

const disneyPlusShows = [...mcushows, ...starWarsShows, `The Beatles: Get Back`]

console.log(disneyPlusShows);

const NetflixMovies = {
action: 'extraction',
crime: 'The Irish Man'
}

const AmazonPrimeMovies = {
action: 'The tomorrow War',
drama: 'one night in miami'
}

const StreamingMovies = {
    ...NetflixMovies,
    ...AmazonPrimeMovies,
    musicule: 'hamelton'
}
console.log(StreamingMovies);

const disneyJunier = ['Mickey Mouse ClubHouse', 'Spidey And His Friends']
const [mickey, spidey] = disneyJunier;


console.log(mickey, spidey);

const avengers = {
    warMachine: 'James Rhodes',
    theHulk: 'Bruce Banner'
}

const {warMachine, theHulk} = avengers

console.log(avengers);

const moreAvengers = {
    blackwidow: 'Natasha Romanoff',
    HawkEye: 'Clint Barton',
    ironMan: 'tony Stark'
}

const {blackwidow: Nat, HawkEye: others, ironMan: other} = moreAvengers

console.log(moreAvengers);

 