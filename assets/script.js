const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img:  "./assets/img/male1.png"
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


//ciclo for per iterare 

for (let i = 0; i < teamMembers.length; i++) {
  let teamMember = teamMembers[i];

  let { name, role, email, img } = teamMember;

  let markup = `
      <div class="col-4">
        <div class="card">
          <img src="${img}" alt="">
          <h2>"${name}"</h2>
          <p>"${role}"</p>
          <p>"${email}"</p>
        </div>
      </div>
  `
  rowEl.innerHTML += markup;
}

