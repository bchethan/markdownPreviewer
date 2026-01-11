const textarea = document.getElementById("textarea")
const displaySide = document.getElementById("display-side")
const clearBtn = document.getElementById("clear-btn")

textarea.addEventListener('input',callme)
clearBtn.addEventListener('click',clearPreview)

function callme(){
    const text = (textarea.value).split(/[\r\n]+/g);
    displaySide.innerHTML = ''
    text.filter((e)=>{
        //### is replaced with h4 
        if(e.includes('### ')){
                displaySide.innerHTML += `<h4>${e.replace('### ','')}</h4>`
        }else if(e.includes('## ')){
            displaySide.innerHTML += `<h3>${e.replace('## ','')}</h3>`
        }else if(e.includes('# ')){
            displaySide.innerHTML += `<h2>${e.replace('# ','')}</h2>`
        }else if(getRandomBoldText(e)){
            getRandomBoldText(e).map((f)=>{
                displaySide.innerHTML += `<b>${f}</b>`
            })
        }else{
            displaySide.innerHTML += `<p>${e}</p>`
        }
    })
}

function clearPreview(){
    displaySide.innerText = ''
    textarea.value = ''
}

function getRandomBoldText(input) {
  const extracted = [...input.matchAll(/\*\*(.*?)\*\*/g)].map(m => m[1]);
  return extracted.length === 0 ? null :extracted;
}