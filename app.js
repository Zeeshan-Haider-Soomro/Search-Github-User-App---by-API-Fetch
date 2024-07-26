let main = document.getElementById('main');
let userInput = document.getElementById('userInput');

const searchProfile = (e) => {
    fetch(`https://api.github.com/users/${userInput.value.toLowerCase()}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
            main.innerHTML = `
            <div class="col-md-3 d-flex justify-content-center align-items-center m-auto">
                    <div class="card">
                    <img src="${data.avatar_url}" class="card-img-top size " alt="...">
                    <div class="card-body d-flex justify-content-center align-items-center m-auto flex-column">
                    <h6 class="card-title text-center text-body-tertiary mb-4">${data.login}</h6>
                    <p>${data.bio}</p>
                        <p class="card-text text-center mb-4"><span class="me-4"><i class="fa-solid fa-plus"></i> ${data.followers}  followers</span><i class="fa-regular fa-user"></i> ${data.following} following</p>
                        <button onclick="${data.html_url}" type="button" class="btn btn-success text-white">Follow</button>
                    </div>
                    </div>
            </div>
            `
        })

    .catch((error)=>{
        console.log(error);
    })
}
