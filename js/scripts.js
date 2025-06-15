window.addEventListener("load", () => {
    const sampleBtn = document.createElement("button");
    sampleBtn.className = "option-btn";
    sampleBtn.style.visibility = "hidden";
    sampleBtn.textContent = "Sample";
    document.body.appendChild(sampleBtn);
  
    const btnHeight = sampleBtn.offsetHeight;
    document.body.removeChild(sampleBtn);
  
    const inputArea = document.getElementById("input-area");
    inputArea.style.minHeight = `${btnHeight * 2.5}px`;
  });

  
