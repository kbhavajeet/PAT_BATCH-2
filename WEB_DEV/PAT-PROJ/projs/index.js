// alert("hello there")

// window.navigator
// window.document
// window.location


// document.getElementById()

// var firstname=document.getElementById("fname")
// console.log(firstname)
// firstname.type="password"
// firstname.style="background-color:blue;color:white"
// firstname.classList
// firstname.className

// function myfunction(event){
//     console.log(event)
//     event.preventDefault()
//     var currentElement=event.target
//     console.log(currentElement)
//     currentElement.innertext="Nice Try..Dont Copy"

// }
// var area=document.getElementById("demo")
// area.addEventListener("paste",myfunction)



var f=document.getElementById("form")
function createInputElement(type,className="",id="",placeholder="",labelText){
    const label=document.createElement("label")
    label.for=id
    label.innerText=labelText
    var input=document.createElement("input")
    input.type=type
    input.className=className
    input.id=id
    input.placeholder=placeholder
    input.labelText=labelText
    const div=document.createElement("div")
    div.className="container mt-3 text-center"
    div.appendChild("label")
    div.appendChild("input")

}



f.appendChild(createInputElement(
        "email",
        "form-control",
        "user-email",
        "enter email here:",
        "Email_Id:"

    )
);


function handleSubmit(){
    var formDetails={

    }
}
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.getElementsByName()

