console.log('JS ok')

//Array team
const team = [
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "img/barbara-ramos-graphic-designer.jpg",
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "img/angela-caroll-chief-editor.jpg",
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "img/walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "img/angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        img: "img/scott-estrada-developer.jpg",
    },
    
];

console.log(team);

//print on DOM
for (let i = 0; i < team.length; i++) {

    const member = team[i];
    console.log(member.name);
    console.log(member.role);
    

    const showMembers = document.createElement("div");
    const row = document.querySelector(".row").append(showMembers);

    showMembers.innerHTML += ` <img src="${member.img}" class="img-fluid pt-3"> `
    showMembers.innerHTML += ` <div class=" fs-3 pt-2 text-secondary"> ${member.name} </div> `
    showMembers.innerHTML += ` <div class="text-secondary"> ${member.role} </div> `
    showMembers.className = "col-4 mb-3";
}
