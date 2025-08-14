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
    }
]

function getMovie(id){
    let pr = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          let Movie = movies.find((Movie)=> Movie.id === id);
          if(movies){
            resolve(movies);
          }else{
            reject("Movie not found:");
          }
        },3000)
        
    });
    return pr;
}

function getCenema(MovieName){
      let pr = new Promise((resolve, reject)=>{
  setTimeout(()=>{

      let cenemas = ['sankar Talkies','sila senema', 'inox'];
        if(cenemas){
            resolve(cenemas);
        }else{
            reject("cenema not found:");
        }
  },3000)
});

return pr;

}

function getTicket(newCenema){
    let pr = new Promise((resolve, reject)=>{
      setTimeout(()=>{
          let Ticket = {
            premium: 170,
            gold: 120,
            normal: 100
        }
        if(Ticket){
            resolve(Ticket);
        }else{
            reject("Ticket not fount:");
        }
      },3000)
    });
    return pr;
}

getMovie(101)
    .then((Movie)=>{
     console.log(Movie);
     return getCenema()
     .then((cenemas)=>{
        console.log(cenemas);
        getTicket()
        .then((Ticket)=>{
            console.log(Ticket);
        })  
     })
   })
     
     .catch((err)=>{
        console.log(err);
    })