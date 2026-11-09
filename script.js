(() => {
  const projectList = document.getElementById("project-list");
  const projectCount = document.getElementById("project-count");
  const projectLabel = document.getElementById("project-label");
  const currentYear = document.getElementById("current-year");

  const getDevelopmentDate = (value) => {
    const match = /^(\d{4})-(0[1-9]|1[0-2])$/.exec(value || "");
    if (!match) return null;
    return {
      value: Number(match[1]) * 100 + Number(match[2]),
      year: Number(match[1]),
      month: Number(match[2])
    };
  };

  if (projectList) {
    const cards = Array.from(projectList.querySelectorAll(":scope > .project-card"));

    cards
      .map((card, index) => ({ card, index, date: getDevelopmentDate(card.dataset.developed) }))
      .sort((a, b) => {
        if (a.date && b.date) return b.date.value - a.date.value || a.index - b.index;
        if (a.date) return -1;
        if (b.date) return 1;
        return a.index - b.index;
      })
      .forEach(({ card }) => projectList.appendChild(card));

    cards.forEach((card) => {
      const date = getDevelopmentDate(card.dataset.developed);
      const dateElement = card.querySelector("[data-developed-date]");

      if (date && dateElement) {
        const formatted = new Intl.DateTimeFormat("en", {
          month: "short",
          year: "numeric",
          timeZone: "UTC"
        }).format(new Date(Date.UTC(date.year, date.month - 1, 1)));
        dateElement.textContent = `Developed ${formatted}`;
        dateElement.dateTime = `${date.year}-${String(date.month).padStart(2, "0")}`;
        dateElement.hidden = false;
      }
    });

    if (projectCount) {
      projectCount.textContent = String(cards.length).padStart(2, "0");
    }

    if (projectLabel) {
      projectLabel.textContent = cards.length === 1 ? "PROJECT" : "PROJECTS";
    }
  }

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
})();
