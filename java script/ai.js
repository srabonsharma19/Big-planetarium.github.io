
    const aiBtn = document.getElementById("aiBtn");
    const aiPanel = document.getElementById("aiPanel");

    aiBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      aiPanel.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!aiPanel.contains(e.target) && !aiBtn.contains(e.target)) {
        aiPanel.classList.remove("open");
      }
    });