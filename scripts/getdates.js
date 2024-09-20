document.addEventListener("DOMContentLoaded", function () {


const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
  
  
  // Last modified information

  const lastModified = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModified.textContent = `Last Updated: ${lastModifiedDate}`;
});



const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});




const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: [
          'HTML',
          'CSS'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: [
          'C#'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: false
  }
]



const coursesElement = document.querySelector("#courses");
const homeSection = document.querySelector("#homeTitle");

//let templeList = [];

//Recorrer la matriz y crear tarjetas del templo con: nombre, ubicac,
//fecha dedicac, área, imagen y carga diferida (lazyloading)

const displayCourses = (courses) => {

  coursesElement.innerHTML ="";

  courses.forEach((course) => {
      const article = document.createElement("article");

  
      article.classList.add(course.completed ? "completed" : "no-completed");

      const h3 = document.createElement("h3");
      h3.textContent = `${course.subject} ${course.number}`; 
      h3.classList.add("course-title");
    
      const pTitle = document.createElement("p");
      pTitle.innerHTML = `<span class="label"> Title: </span> ${course.title}`;

      const pCredits = document.createElement("p");
      pCredits.innerHTML = `<span class="label"> Credits: </span> ${course.credits}`;

      const pCertificate = document.createElement("p");
      pCertificate.innerHTML = `<span class="label"> Certificate: </span> ${course.certificate}`;

      const pCompleted = document.createElement("p");
    pCompleted.innerHTML = `<span class="label"> Completed: </span> ${course.completed ? "Yes" : "No"}`;
      
      article.appendChild(h3);
      article.appendChild(pTitle);
      article.appendChild(pCredits);
      article.appendChild(pCertificate);
      article.appendChild(pCompleted);

      coursesElement.appendChild(article);
      

  });
 }

 displayCourses(courses);


const allLink = document.querySelector("#All");
const cseLink = document.querySelector("#CSE");
const wddLink = document.querySelector("#WDD");


allLink.addEventListener("click", (e) => {
e.preventDefault();
displayCourses(courses);
homeTitle.innerText = "All Courses";
});

cseLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredCourses = courses.filter((course) => course.subject === "CSE");
  displayCourses(filteredCourses);
  homeTitle.innerText = "CSE Courses";
  console.log(filteredCourses);  
});


wddLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredCourses = courses.filter((course) => course.subject === "WDD");
  displayCourses(filteredCourses);
  homeTitle.innerText = "WDD Courses";
  console.log(filteredCourses);  
});



 const calculateCredits = (courses) => {
    let totalCredits = 0;  // Total de créditos requeridos
    let completedCredits = 0;  // Total de créditos completados
  
    courses.forEach((course) => {
      totalCredits += course.credits;  // Sumar créditos de todos los cursos
      if (course.completed) {
        completedCredits += course.credits;  // Sumar créditos solo de los cursos completados
      }
    });


    // Mostrar estos valores en el DOM, puedes hacerlo así:
    const creditsSummary = document.createElement("divCredits");
    creditsSummary.innerHTML = `
      <p><strong>Total credits required:</strong> ${totalCredits}</p>
      <p><strong>Credits completed:</strong> ${completedCredits}</p>
    `;
    coursesElement.appendChild(creditsSummary); // Agregar resumen al contenedor de cursos
  }
  

calculateCredits(courses); // Calcular y mostrar los créditos








  
