let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.querySelector('.more-text');

readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    moreText.classList.toggle('show-text');

    if (moreText.classList.contains('show-text')) {
        readMoreBtn.innerText = 'Read Less';
    } else {
        readMoreBtn.innerText = 'Read More';
    }
});
const projectModal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const modalImg = document.querySelector('.modal-img');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const projectBtns = document.querySelectorAll('.projects-box .project-card .btn');

const projectContent = {
    "Project 1": "This project involved creating a custom sublimation polo shirt design for the BISU Calape BSED Faculty. The design focuses on a professional blue gradient with intricate patterns to represent the department's identity.",
    "Project 2": "A cohesive uniform design created specifically for the BISU Calape BSED Students. This design emphasizes unity and school spirit, featuring the university colors and a modern, geometric layout.",
    "Project 3": "Sports jersey design for the BISU Balilihan Softball SCUAA Team. I focused on bold typography and high-contrast colors to ensure visibility on the field while maintaining a stylish, athletic aesthetic.",
    "Project 4": "A 3D typography manipulation project. This artwork uses advanced Photoshop texturing techniques to blend the letter 'C' with realistic cheetah fur and lighting effects, creating a surreal 3D visual.",
    "Project 5": "A product manipulation advertisement for Mogu Mogu. This design creates a refreshing atmosphere using splash effects, vibrant color grading, and floating elements to highlight the strawberry flavor.",
    "Project 6": "My personal branding logo. This geometric monogram combines my initials 'HK' into a sleek, modern emblem that represents my style as a designer: clean, precise, and professional."
};

projectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        const imgSrc = card.querySelector('img').src;
        const projectID = card.querySelector('h3').innerText.trim();
        const projectRealName = card.querySelector('p').innerText;

        modalImg.src = imgSrc;
        modalTitle.innerText = projectRealName;

        if (projectContent[projectID]) {
            modalText.innerText = projectContent[projectID];
        } else {
            modalText.innerText = "Description not available.";
        }

        projectModal.classList.add('active');
    });
});

const closeMyModal = () => {
    projectModal.classList.remove('active');
};

closeModal.addEventListener('click', closeMyModal);

window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeMyModal();
    }
});
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const phoneInput = document.querySelector('input[name="user_number"]');
    const phoneNumber = phoneInput.value;

    if (phoneNumber.length !== 11) {
        alert("Phone number must be exactly 11 digits.");
        return; 
    }

    const serviceID = 'service_cuhpiaq'; 
    const templateID = 'template_qugkn0f';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message Sent Successfully!');
            contactForm.reset();
        }, (err) => {
            alert('Failed to send. Error: ' + JSON.stringify(err));
        });
});