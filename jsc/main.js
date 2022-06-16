let btn = document.getElementById('btn')

btn.onclick = function(){
    let value = document.getElementById('user').value;
    let div = document.createElement('div');
    let h5  = document.createElement('h5');
    let i  = document.createElement('i')
    i.setAttribute('class','fa-solid fa-trash-can')
    div.setAttribute('class','yoxla')
    h5.innerHTML = value;
    div.appendChild(h5)
    div.appendChild(i);
    document.body.appendChild(div)

    i.onclick = function(){
        i.parentElement.remove();
    }
}