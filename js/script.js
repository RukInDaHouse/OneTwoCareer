const accordion = document.querySelector('.accordion');
const items     = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.other-review');

function toggleAccordion() {
  const thisItem = this.parentNode;
  
    items.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('open');
        return;
    }
  
    item.classList.remove('open');
  });
}

questions.forEach(question => question.addEventListener('click', toggleAccordion));
