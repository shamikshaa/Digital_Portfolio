/Successfully created a responsive and interactive digital portfolio

Highlights personal profile, skills, and academic/professional projects

Provides easy access to resume and contact details

Enhances professional visibility and career opportunities

Serves as a continuous platform for showcasing future growth
  if (i < text.length) {

    document.querySelector(".hero h1").textContent += text.charAt(i);

    i++;

    setTimeout(typeEffect, 100);

  }

}

document.querySelector(".hero h1").textContent = ""; 

typeEffect();

// Button click alert

document.querySelector(".btn")?.addEventListener("click", () => {

  alert("Thanks for checking my work! 🚀");

});
