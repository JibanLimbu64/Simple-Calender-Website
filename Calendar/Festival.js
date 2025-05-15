// Function to provide festival information
function festivalInfo(festivalName) {
    let festivalInfoText = "";
  
    switch (festivalName) {
      case 'Dashain':
        festivalInfoText = "दशैं नेपालको सबैभन्दा ठूलो पर्व हो। यसमा देवी दुर्गाको पूजा गरी परिवार र साथीभाइसँग खुशी सँग समय बिताइन्छ।";
        break;
      case 'Tihar':
        festivalInfoText = "तिहार, दीपावली भनेर पनि चिनिन्छ। यो पर्व दीप र मिष्ठान्नको साथ घर र धर्मको पूजा गर्ने पर्व हो।";
        break;
      case 'Holi':
        festivalInfoText = "होली रंगहरूको पर्व हो। यसमा, विभिन्न रंगहरूको प्रयोग गरी एकअर्कासँग माया र सद्भाव प्रकट गरिन्छ।";
        break;
      case 'Maghe Sankranti':
        festivalInfoText = "माघे संक्रान्ति, विशेषगरी कृषकहरूको पर्व हो। यो पर्वको दिन सूर्य मकर राशिमा प्रवेश गर्छ र शीतलता घट्ने आशा गरिन्छ।";
        break;
      case 'Buddha Jayanti':
        festivalInfoText = "बुद्ध जयन्ती गौतम बुद्धको जन्म, ज्ञान प्राप्ति र निर्वाणको दिन हो। यो विशेष गरी बौद्ध धर्मावलम्बीहरूको पर्व हो।";
        break;
      default:
        festivalInfoText = "माफ गर्नुहोस्, यस पर्वको जानकारी उपलब्ध छैन।";
    }
  
    // Show bot response and play voice
    showBotResponse(festivalInfoText);
    speakText(festivalInfoText);
  }
  
  // Function to display bot response in chatbox
  function showBotResponse(text) {
    const chatBox = document.getElementById("chatBox");
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerText = text;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Function for chatbot to speak the response
  function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "ne-NP"; // Nepali language
    window.speechSynthesis.speak(speech);
  }
  
  // Send message function (for regular user input)
  function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
  
    if (userInput.value.trim() !== "") {
      // Show user message
      const userMessage = document.createElement("div");
      userMessage.className = "user-message";
      userMessage.innerText = userInput.value;
      chatBox.appendChild(userMessage);
  
      // Clear input
      userInput.value = "";
  
      // Bot's response (for general query)
      setTimeout(() => {
        showBotResponse("कृपया पर्वको नाम चयन गर्नुहोस्।");
        speakText("कृपया पर्वको नाम चयन गर्नुहोस्।");
      }, 800);
    }
  }
 