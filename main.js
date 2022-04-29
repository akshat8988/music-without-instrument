const title = document.querySelector('.smoke-title');

title.innerHTML = title.textContent.replace(/\S/g,"<span>$&</span>");

const letters = document.querySelectorAll('span');

for(let i = 0; i < letters.length; i++){
    letters[i].addEventListener("mouseover", function(){
        letters[i].classList.add('active');
    });
}