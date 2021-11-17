document.addEventListener('DOMContentLoaded', ()=>{
  // add the function to increment
  document.querySelector('button#inc').onclick = ()=>incNum();
  function incNum(){
    let number = document.querySelector('input#number');
    if (!Number.isInteger(parseInt(number.value))){
      number.value = 0;
    } 
    number.value = parseInt(number.value) + 1;
  }

  // add the function to descent
  document.querySelector('button#dec').onclick = () => decNum();
  function decNum(){
    let number = document.querySelector('input#number');
    if (!Number.isInteger(parseInt(number.value))){
      number.value = 0;
    } 
    let num = parseInt(number.value) - 1;
    if (num >= 0) {
      number.value = num;
    }
  }
});