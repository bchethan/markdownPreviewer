const textarea = document.getElementById("textarea")
const displaySide = document.getElementById("display-side")
const clearBtn = document.getElementById("clear-btn")
const h2Id = document.getElementById("h2-id")
const pId = document.getElementById("p-id")

textarea.addEventListener('input',callme)
clearBtn.addEventListener('click',clearDisplay)

function callme(){
    const text = (textarea.value).split(/[\r\n]+/g);
    text.filter((e)=>{
        if(e.includes('# ')){
                h2Id.innerHTML = `<h2>${e.replace('# ','')}</h2>`
        }else{
            pId.innerHTML = `<p>${e}</p>`
        }
    })
}

function clearDisplay(){
    displaySide.innerText = ''
}