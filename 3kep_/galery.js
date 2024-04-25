_tomb = ['alma', 'körte', 'kutya', 'macska']

console.log('Hello')
const _div = document.createElement('div')
_div.innerHTML += 'Hello World'
document.body.appendChild(_div)

//console.log(_tomb);

for (t of _tomb) {
  const _div = document.createElement('div')
  _div.innerHTML += t
  document.body.appendChild(_div)
}

let kep_lista = ['cica_kep.jpg', 'delfin_kep.webp', 'kutya_kep.png'];

for(el of kep_lista)
{
  const kep_elem = document.createElement('img');
  kep_elem.src = "img/"+el
  kep_elem.width = "200"
  console.log(kep_elem)
  document.body.appendChild(kep_elem)

  kep_elem.addEventListener('click', ()=>{
    window.open('cica_kep.html')
  });
}
