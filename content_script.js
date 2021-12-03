radio = [...document.querySelectorAll('.radio')].find(x => {
  return [...x.nextElementSibling.querySelectorAll('span')].find(span => span.innerText === 'UK Only');
});

if(!radio){
  console.error('Could not find UK Only radio button! Something fishy going on here lad!');
}
else if(!radio.querySelector('[checked]')){
  radio.click();
}
