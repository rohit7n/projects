document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".project-card");

  // Card reveal animation
  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

      card.style.transition = "all 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }, index * 150);

  });


  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

      const target = document.querySelector(this.getAttribute("href"));

      if(target){
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });


  // External link protection
  document.querySelectorAll(".project-card a").forEach(link => {

    if(link.href.startsWith("http")) {

      link.setAttribute("rel", "noopener noreferrer");

    }

  });

});
