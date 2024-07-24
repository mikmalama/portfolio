window.addEventListener("scroll", () => {
  const projects = document.querySelectorAll(".project");
  const skills = document.querySelectorAll(".skill");

  projects.forEach((project) => {
    const rect = project.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      project.classList.add("fade-up");
    }
  });

  skills.forEach((skill) => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      skill.classList.add("zoom-in");
    }
  });
});
