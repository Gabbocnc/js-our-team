const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img//female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img//male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img//female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img//male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img//female3.png"
  }
];
//DOM

let rowEl = document.querySelector('.myTeam');

/* let formEl = document.querySelector('form') */
let buttonEl = document.getElementById('button');



//function per generare card member
function cardMember(member) {
  const { name, role, email, img } = member
  return `
      <div class="col-lg-6 col-md-12 col-xxl-4 col-sm-12">
        <div class="card text-white bg-dark flex-row mb-3 ">
        <img src="${img}"alt="">
        <div class = "card-body">
          <h2 class = "card-title">${name}</h2>
          <p class = "card-text">${role}</p>
          <p class="card-text text-primary">${email}</p></div>
        </div>
      </div>
  `
}

//ciclo for per iterare 
for (let i = 0; i < teamMembers.length; i++) {

  let member = teamMembers[i];

  let markup = cardMember(member)

  rowEl.innerHTML += markup
}



buttonEl.addEventListener('click', (e) => {
  e.preventDefault();

  let nameCompleteEl = document.getElementById('name').value;
  let imgEl = document.getElementById('img').value
  let jbPositionEl = document.getElementById('role').value;
  let emailEl = document.getElementById('email').value;
  

  let NewMember = {
    img: imgEl ,
    name : nameCompleteEl,
    role : jbPositionEl,
    email : emailEl,
  }

  const markup = cardMember(NewMember);
  rowEl.insertAdjacentHTML('beforeend', markup);
})