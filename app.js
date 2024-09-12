let date = new Date();
let yearChanger = document.querySelector("#yearChanger");
yearChanger.innerText = `${date.getFullYear()}/${
  date.getMonth() + 1
}/${date.getDate()}`;

let main = document.getElementById("main");
let userInput = document.getElementById("userInput");
let btn = document.getElementById("btn");

const searchProfile = () => {
  fetch(`https://api.github.com/users/${userInput.value.toLowerCase()}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      main.innerHTML = `
            <div class="col-md-3 d-flex justify-content-center align-items-center m-auto cardex">
                    <div class="card">
                        <div class="imgSize">
                        <img src="${data.avatar_url}" class="card-img-top size " alt="...">
                        </div>
                    <div class="card-body d-flex justify-content-center align-items-center m-auto flex-column">
                    <h6 class="card-title text-center text-body-tertiary mb-4">${data.name}</h6>
                    <h6 class="card-title text-center text-body-tertiary mb-4">${data.login}</h6>
                    <p>${data.bio}</p>
                        <p class="card-text text-center mb-4"><span class="me-4"><i class="fa-solid fa-plus"></i> ${data.followers}  followers</span><i class="fa-regular fa-user"></i> ${data.following} following</p>
                        <button type="button" class="btn btn-success text-white buttoon"><a class="buttoon" href="${data.html_url}">Follow</a></button>
                    </div>
                    </div>
            </div>
            `;
    })

    .catch((error) => {
      console.log(error);
    });
};

userInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchProfile();
  }
});
btn.addEventListener("click", searchProfile);
