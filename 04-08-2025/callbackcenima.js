let movies = [
    {
        id: 101,
        name: 'Gadar',
        type: 'action',
        length: '129 min'
    },
    {
        id: 102,
        name: 'DDLJ',
        type: 'drama',
        length: '130 min'
    },
    {
        id: 103,
        name: 'DON',
        type: 'action',
        length: '130 min'
    },
     {
        id: 104,
        name: 'Indian',
        type: 'action',
        length: '130 min'
    },
]
function getMovie(id, callback) {
    setTimeout(()=> {
        let movie = movies.find((movie)=> movie.id === id);
        callback(movie)
    },3000)
}
function getCinema(movieName, callback){
    setTimeout(()=> {
        let cinemas = ['Maya', 'PVR', 'Inox'];
        callback(cinemas);
    },3000)
}
function getTicket(cinemaName, callback) {
    setTimeout(()=> {
        let ticket = {
            premium: 100,
            gold: 200,
            silver: 250
        }
        callback(ticket);
    },3000)
}
getMovie(101, (movie)=> {
    console.log(movie)
    getCinema(movie.name, (cinemas)=> {
        console.log(cinemas)
        getTicket(cinemas[0], (ticket)=> {
            console.log(ticket);
        })
    })
})