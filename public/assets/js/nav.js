console.log("We are in nav.js!!!")

const sandwich = document.querySelector('.sandwich');
console.log("Var sandwich is:")
console.log(sandwich)
const smallNavItems = document.querySelector('.small-menu');

sandwich.onclick = () => {
  console.log("Sandwich has been clicked.")
  if (smallNavItems.style.display == "none" || !smallNavItems.style.display) {
    smallNavItems.style.display = "flex";
  } else {
    smallNavItems.style.display = "none";
  };
}

window.addEventListener('resize', function(){
  smallNavItems.style.display = 'none';
})