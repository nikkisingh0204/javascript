console.log("fetch example")
function addNewUser() {
    fetch("https://randomuser.me/api/")
        .then(raw => raw.json())
        .then(result =>{
            const {name,gender,email,picture} = result.results[0];
            document.querySelector("#parent").innerHTML += `<div id="card">
    <img src=${picture.large}>
    <h1>${name.first}</h1>
    <h3>${gender}</h3>
    <h3>${email}</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae voluptatum pariatur veritatis fuga, voluptatibus cumque dignissimos aut culpa aperiam laborum? Deserunt, fuga dolores?</p>
</div>`})
}

document.querySelector("#button").addEventListener("click",function(){
    addNewUser();
})