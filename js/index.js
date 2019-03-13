document.addEventListener("DOMContentLoaded", function(e){
  const main = document.getElementById('main');

  main.addEventListener('mouseover', function(e){
      e.target.style.color = 'blue';
  });
  main.addEventListener('mouseout', function(e){
      e.target.style.color = 'red';
  });

  const input = document.querySelector('input');

  input.addEventListener('keydown', function(e){
    if(e.key === 'g'){
      return e.preventDefault();
    } else {
      console.log(e.key);
    }
  });

const divs = document.querySelectorAll('div');

function bubble(e){

  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

for(let i = 0; i < divs.length; i++){
  divs[i].addEventListener('click', bubble);
}

// function capture(e) {
//
//   e.stopPropagation();
//
//   console.log(this.firstChild.nodeValue.trim() + ' captured');
// }
//
// for (let i = 0; i < divs.length; i++) {
//   // set the third argument to `true`!
//   divs[i].addEventListener('click', capture, true);
// }



});
