const textarea = document.getElementById("textarea")
const displaySide = document.getElementById("display-side")
const clearBtn = document.getElementById("clear-btn")

textarea.addEventListener('input',callme)
clearBtn.addEventListener('click',clearPreview)

function callme(){
    const text = (textarea.value).split(/[\r\n]+/g);
    displaySide.innerHTML = ''
    text.forEach((e)=>{
        let str = e

        // processItalic(str) ? str = processItalic(str) : str
        // getHeading(str) ? str = getHeading(str) : str
        // processBold(str) ? str = processBold(str) : str

        str = getHeading(str);
        str = processBold(str);
        str = processItalic(str);

        displaySide.innerHTML += `${str}<br>`
    })
}

function clearPreview(){
    displaySide.innerHTML = ''
    textarea.value = ''
}

function processBold(input) {
  return input.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}

function processItalic(input) {
  return input.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<i>$1</i>');
}

function getHeading(input){
    if(input.startsWith('# ')){
        return `<h2>${input.slice(2)}</h2>`
    }else if(input.startsWith('## ')){
        return `<h3>${input.slice(3)}</h3>`
    }else if(input.startsWith('### ')){
        return `<h4>${input.slice(4)}</h4>`
    }
    return input;
}