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
        console.log("button click");
        sessionStorage.setItem('ok', 'true');
        window.location = './page_quiz.html';
    };
};