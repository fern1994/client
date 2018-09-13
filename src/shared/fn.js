const ToggleClass = (e,chkClass = '--active') =>{
    let element = document.getElementById(e)
    element.classList.toggle(chkClass)
}
const DeleteClass = (e,dClass = '--active') =>{
    let element = document.getElementById(e)
    element.classList.remove(dClass)
}

export const fn={
  ToggleClass ,
  DeleteClass
}