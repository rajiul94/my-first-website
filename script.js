 const main =document.getElementById("main")
 const main2 =document.getElementById("main2")


 const array = [
    {
        name:"rayhan", 
        id:"1"
    }, {
        name:"imran", 
        id:"2"
    }, {
        name:"hasan", 
        id:"3"
    }, {
        name:"musa", 
        id:"4"
    },

 ]
 for (let i = 0; i < array.length; i++) {
    // const num = array[i];
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    div.classList.add("div")
    div2.classList.add("div")
    div.innerText= `${array[i].name} ` ;
    div2.innerText= array[i].id;
    main.appendChild(div)
    main2.appendChild(div2)
    
 }
