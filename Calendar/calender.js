function typeWelcomeMessage(text, elementId, speed = 50) {
    const element = document.getElementById(elementId);
    element.textContent = "";
    let i = 0;
  
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
  
    type();
  }
  
  // Call this when page loads
  window.onload = function () {
    const welcome = "Welcome to e-Patro AI! तपाईंलाई हार्दिक स्वागत छ। तपाईंले कुनै पनि नेपाली पर्वको बारेमा जानकारी लिन सक्नुहुन्छ।";
    typeWelcomeMessage(welcome, "welcomeText", 50);
  };
  document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById('nepaliCalendar').getElementsByTagName('tbody')[0];

    // Days per month in Nepali Calendar 2082 (Baisakh to Chaitra)
    const nepaliMonths = [
        { name: "बैशाख", days: 31 },
        { name: "जेष्ठ", days: 31 },
        { name: "आषाढ", days: 31 },
        { name: "श्रावण", days: 31 },
        { name: "भाद्रपद", days: 30 },
        { name: "आश्विन", days: 30 },
        { name: "कार्तिक", days: 30 },
        { name: "मंसिर", days: 30 },
        { name: "पौष", days: 30 },
        { name: "माघ", days: 30 },
        { name: "फाल्गुन", days: 29 },
        { name: "चैत्र", days: 30 }
    ];

    // Nepali weekdays in Nepali
    const weekdays = ["सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनिबार", "आइतवार"];

    function generateCalendar() {
        // Clear existing rows
        calendar.innerHTML = '';

        // Loop through each month
        nepaliMonths.forEach(month => {
            const row = document.createElement('tr');
            const monthHeader = document.createElement('th');
            monthHeader.colSpan = 7;
            monthHeader.textContent = `${month.name} (2082)`;
            row.appendChild(monthHeader);
            calendar.appendChild(row);

            // Create the weekdays header
            const weekdaysRow = document.createElement('tr');
            weekdays.forEach(day => {
                const th = document.createElement('th');
                th.textContent = day;
                weekdaysRow.appendChild(th);
            });
            calendar.appendChild(weekdaysRow);

            // Create the days of the month
            const daysRow = document.createElement('tr');
            let dayCounter = 1;
            let currentDay = 0;

            // Fill the calendar grid
            while (dayCounter <= month.days) {
                // Create a new row for weeks if needed
                if (currentDay === 7) {
                    currentDay = 0;
                    const newRow = document.createElement('tr');
                    calendar.appendChild(newRow);
                }

                // Add the day to the current week row
                const td = document.createElement('td');
                td.textContent = dayCounter;
                const currentRow = calendar.lastChild;
                currentRow.appendChild(td);
                dayCounter++;
                currentDay++;
            }
        });
    }

    generateCalendar();
});
  