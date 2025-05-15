window.onload = function () {
    // Show after 3 seconds
    setTimeout(function () {
      document.getElementById("popupBox").style.display = "flex";
    }, 3000);
  
    // Hide after 3 more seconds (i.e., total 6 seconds from load)
    setTimeout(function () {
      document.getElementById("popupBox").style.display = "none";
    }, 6000);
  };
  
  window.onload = function () {
    const popup = document.getElementById("aiPopup");
    const typewriter = document.getElementById("typewriterText");
    const credit = document.getElementById("devCredit");
  
    const message = "नमस्ते! म e-Patro AI हुँ। नेपाली पात्रो 2082 को जानकारीका लागि स्वागत छ।";
  
    setTimeout(() => {
      popup.style.display = "block";
      typeText(message, typewriter, () => {
        // Show developer credit after typing is done
        credit.style.display = "block";
  
        // Hide popup 3s after full display
        setTimeout(() => {
          popup.style.display = "none";
        }, 3000);
      });
    }, 3000);
  };
  
  function typeText(text, element, callback) {
    let i = 0;
    const speed = 40;
  
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
  
    type();
  }
  