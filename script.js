const adc = document.querySelector('.adc');
const bt = document.querySelector('.buton');
const curso = document.querySelector('#fade');

function ativaModal() {
   adc.classList.toggle('ativo');
   curso.classList.add('modal');

   adc.classList.remove('none');
}

bt.addEventListener('click', ativaModal);
ativaModal();
























// function ativaModal(){
//    adc.classList.add('ativo');
   
// }
// function ativaNone() {
//    console.log('none');
//    curso.classList.add('none');
// }
// bt.addEventListener('click', ativaNone);
// ativaNone();

// bt.addEventListener('click', ativaModal);
// ativaModal();