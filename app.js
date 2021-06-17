let button = document.getElementById("generatedie");
let dieContainer = document.getElementById("dieContainer");
let rollButton = document.getElementById("rolldie");
let sumButton = document.getElementById("sumdie");
let sumContainer = document.createElement("div");
sumContainer.classList.add("sumContainer");
document.body.appendChild(sumContainer);
globalarr = [];

class Die {
  value;
  div;
  constructor() {
    // let value = roll()
    this.div = document.createElement("div");
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div.classList.add("die");
    dieContainer.appendChild(this.div);
    this.roll();
    this.remover()
    this.update();
  };
  roll() {
    globalarr.push(this);
    this.div.append(this.value);
  };
// This isn't working!  But why?  remover() seems to be built like the other methods.
  remover() {
      this.div.addEventListener('mouseenter', () => {
          console.log("hey")
      })
  };
  
  update() {
    this.div.addEventListener("click", () => {
      globalarr.splice(globalarr.indexOf(this), 1)
      this.value = Math.floor(Math.random() * 6) + 1;
      this.div.innerText = null
      this.div.append(this.value);
      globalarr.push(this)
      });
  };
 
}

button.addEventListener("click", function () {
  new Die();
});

sumButton.addEventListener("click", () => {
  sumContainer.innerText = null;
  let sumDice = 0;
  globalarr.forEach((total) => {
    // total = parseInt(this.value);
    sumDice += total.value;
  });
  console.log(sumDice);
  sumContainer.append(
    `The sum of all the dice heretofore mentioned on this most awesome of a website is ${sumDice}`
  );
});

rollButton.addEventListener("click", () => {
  globalarr.forEach((num) => {
    num.div.innerText = null;
    num.value = Math.floor(Math.random() * 6) + 1;
    num.div.append(num.value);
  });
  console.log(globalarr);
});
