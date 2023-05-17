const button = document.getElementById('evilButton')
OFFSET= 100

button.addEventListener('click', ()=>{
    alert ("nice try")
     window.close();
})

document.addEventListener('mousemove', (e)=>{
    const x = e.pageX
    const y = e.pageY
    const buttonBox = button.getBoundingClientRect()
    const horizontalDistance=dinstanceFromCenter(buttonBox.x, x,
         buttonBox.width)
    const verticalDistance=dinstanceFromCenter(buttonBox.y, y,
         buttonBox.height)
    const horizontalOffset = buttonBox.width/2 +OFFSET
    const verticalOffset = buttonBox.height/2 +OFFSET

    if(Math.abs(horizontalDistance)<=horizontalOffset && Math.abs(verticalDistance)
    <= verticalOffset){
        setButtonPosition(
            buttonBox.x+horizontalOffset/horizontalDistance*10,
            buttonBox.y + verticalOffset/verticalDistance*10
        )
    }
})
function setButtonPosition(left, top){
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = button.getBoundingClientRect()

    if (dinstanceFromCenter(left, windowBox.left, buttonBox.width) < 0){
        left=windowBox.right - buttonBox.width-OFFSET
    }
    if (dinstanceFromCenter(left, windowBox.right, buttonBox.width) > 0){
        left=windowBox.left+OFFSET
    }
    if (dinstanceFromCenter(top, windowBox.top, buttonBox.height) < 0){
        top=windowBox.bottom-buttonBox.height-OFFSET
    }
    if (dinstanceFromCenter(top, windowBox.bottom, buttonBox.height) >0){
        top=windowBox.top+OFFSET
    }

    button.style.left = `${left}px`
    button.style.top = `${top}px`
    
}
function dinstanceFromCenter(boxPosition, mousePosition,boxSize){
 return boxPosition-mousePosition +boxSize/ 2
}