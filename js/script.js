function adicionar() {
    let li = document.createElement('LI');
    let input_value = document.form_main.task.value.toUpperCase();
    let input_text = document.createTextNode(input_value);
    li.classList.add("empresa");
    li.appendChild(input_text);
    document.querySelector('ol').appendChild(li);
    document.form_main.task.value="";
    createCloseButton(li);      
}

  function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("[x]");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = () => span.parentElement.style.display = "none"; 
  }

document.querySelectorAll('li').forEach(createCloseButton);
document.querySelector('ol').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI')
    e.target.classList.toggle('checked');
   
});

function adicionar1() {
  let li1 = document.createElement('li');
  let input_value1 = document.form_main.task1.value.toUpperCase();
  let input_text1 = document.createTextNode(input_value1);
  li1.setAttribute('id', 'copiar');
  li1.appendChild(input_text1);
  document.querySelector('ol').appendChild(li1);
  document.form_main.task1.value="";
  createCloseButton(li1);
}


function createCloseButton(li1) {
  let span1 = document.createElement("SPAN");
  let txt1 = document.createTextNode(" [x]");
  span1.className = "close";
  span1.appendChild(txt1);
  li1.appendChild(span1);
  span1.onclick = () => span1.parentElement.style.display = "none"; 
}

document.querySelectorAll('li').forEach(createCloseButton);
document.querySelector('ol').addEventListener('click', (e) => {
if (e.target.tagName === 'li')
  e.target.classList.toggle('checked'); 
});

document.getElementById("cor1").onclick = function() {mudar_cor1()}

function mudar_cor1() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#000";
}

document.getElementById("cor2").onclick = function() {mudar_cor2()}

function mudar_cor2() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "rgb(77,88,77)";
}

window.onbeforeunload = function(e) {
  return '';
};

function mudar() {
  document.getElementById('esconder').innerHTML = "Desenvolvi essa lista para ajudar minhas amigas,<br>pobres sofredoras, que se acabavam anexando aso.";
}

function voltar_footer() {
  document.getElementById('esconder').innerHTML = "Vamos começar, digite aqui o nome da empresa que deseja lembrar:";
}
setTimeout(voltar_footer, 3500);
