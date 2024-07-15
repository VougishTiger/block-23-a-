// create a state function with all the variables.
const state= {
  puppies: []
}
// create a async function called getInfo abd use fetch and .json to grab data from api. don't forget to render
const getInfo= async()=> {
  const response= await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft/players`);
  const responseJson= await response.json();
  const puppiesFromApi= responseJson.data.players;
  state.puppies= puppiesFromApi;
  renderPuppies();
}


console.log(state)
const renderPuppies= ()=> {
  const main= document.querySelector(`main`);
  const ol= document.createElement(`ol`);
  state.puppies.forEach((puppy)=> {
    const newLI= document.createElement(`li`);
    // put the name of the puppies on newLI
    newLI.innerText= puppy.name; 
    // attach the newLI to the ol
    newLI.addEventListener(`click`, (event)=> {
      const clickedPuppy= state.puppies.find((puppy)=> {
        console.log(puppy.name = event.target.innerText);
      })
      main.innerHTML=`
       <h1>${puppy.name}</h1>
       <h2>${puppy.breed}</h2>
       <button>Back</button>`
       const button= document.querySelector(`button`);
       button.addEventListener(`click`, (event)=>{
        window.location.href="./index.html";
       });
      })
    

    ol.appendChild(newLI);
    // attach the ol to the main after the for loop
  });
  main.appendChild(ol);
}


getInfo();
renderPuppies();