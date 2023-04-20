var checked = false;

window.onload = () => {

    let cb = document.getElementById('cb');
   // cb.setAttribute('checked', 'false');
    cb.removeAttribute('checked');
    cb.checked = false;
    let btn = document.getElementById('btn');
    btn.disabled = true;

    cb.onchange = (srcElement) => {
        checked = !checked;
           console.log(`checkbox: ${checked}`);
          
            btn.disabled = !checked;
           
    }
    btn.onclick = () =>{
        let radio = document.querySelector('input[type=\"radio\"]:checked');
        console.log("button click");
        sessionStorage.setItem('ok', 'true');
        sessionStorage.setItem('difficulty', radio.getAttribute('value'));
        window.location = './page_quiz.html';
    };

    let radios = document.querySelectorAll('input[type=\"radio\"]');
    for(var i = 0; i < radios.length; i++){
        radios[i].checked = i == 0;
    }
    var current;
    radios.forEach(element => element.onchange = () => {
      //  element.checked = !element.checked;
        current = element.getAttribute('value');
        for(var i = 0; i < radios.length; i++){
            if(radios[i].getAttribute('value') == current){
                continue;
            }else{
                radios[i].checked = false;
            }
            
        }
    });
};

