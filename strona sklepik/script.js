
const allButtons =  document.querySelectorAll('.klasa');

function showData (){

    for(let i=0;i<allButtons.length;i++){
    allButtons[i].classList.remove("active");
}
    console.log(this);
    this.classList.add("active");
    const dataValue = this.dataset.filter;
    console.log(`Wartosc elementu data ${dataValue}`);
    sprawdzanie(dataValue);
    return dataValue;

}

for(let i=0;i<allButtons.length;i++){
    allButtons[i].addEventListener('click', showData);
}

const produkty = document.querySelectorAll('.produkt');

function sprawdzanie(btnf){
    console.log(`Data Filter w Funkcji sprawdzanie: ${btnf}`)
    for(let i=0;i<produkty.length;i++){
        produkty[i].style.display="flex";
        if(btnf != produkty[i].dataset.name){
            console.log(produkty[i]);
            produkty[i].style.display="none";
        }
        
        if(btnf=="all"){
            produkty[i].style.display="flex";
            
        }
    }
}
  
  const name1 = document.getElementById("name1");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const formularz = document.getElementById("myForm");
  function sendForm(e){
    console.log(e)
    e.preventDefault();
    const name1v = name1.value;
    const emailv = email.value;
    const subjectv = subject.value;
    const messagev = message.value; 
    if (name1v === "" || emailv === "" || subjectv === "" || messagev === ""){
        document.getElementById("error-message").textContent = "Wszystkie pola formularza muszą być wypełnione!"}
        else{
            document.getElementById("error-message").textContent = "Fomularz został wysłany!"
        }
  }
  formularz.addEventListener('submit', sendForm);

 

