let year = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
oLastModif = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(oLastModif);


document.getElementById(
  "currentyear"
).textContent = `${year}`;
document.getElementById(
  "lastModified"
).textContent = `Last Modification: ${oLastModif}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const certificates = [
  {
    src :"images/pathway.webp",
    alt: "BYU - Pathway Worldwide",
    description: "PathwayConnect, a program teaching life, professional, and student skills with an emphasis on writing and mathematics."
  },
  {
    src :"images/ufrj.webp",
    alt: "Federal University of Rio de Janeiro",
    description: "Bachelor in Computer Science (2023). Where I developed a solid foundation in programming, algorithms, and software development."
  }
];

function displayCertificates() {
  const certificatesDiv = document.getElementById("certificates");
  if (!certificatesDiv) return; 

  certificates.forEach(cert => {
    newCertificate(cert, certificatesDiv);
  });
}

function newCertificate(cert, certificatesDiv) {
  const certDiv = document.createElement("div");

  const img = document.createElement("img");
  img.src = cert.src;
  img.alt = cert.alt;
  img.loading = 'lazy';
  certDiv.appendChild(img);

  const paragraph = document.createElement("p");
  paragraph.textContent = cert.description;
  certDiv.appendChild(paragraph);
  certificatesDiv.appendChild(certDiv);
}

displayCertificates();

let contactArray = getContactList() || [];

function getContactList(){
  return JSON.parse(window.localStorage.getItem("contactList"));
}

function setContactList(){
  window.localStorage.setItem("contactList", JSON.stringify(contactArray));
}


const submit = document.querySelector('input[type="submit"]')
const form = document.querySelector('form');
if (submit && form) {
  submit.addEventListener('click'  , (event) => {
    console.log(event)
    if(form.checkValidity()){
      const formData = new FormData(form);
      const formObject = Object.fromEntries(formData.entries());
      contactArray.push(formObject);
      setContactList();
      alert("Thanks for sumbitting your contact info.");

    }
    else {
      alert("Invalid Form, please fill the required fields.")
    }
  });

}

