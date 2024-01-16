// Function to update the countdown
function updateCountdown(endTime) {
    const now = new Date().getTime();
    const timeDifference = endTime - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown elements
    // Update the countdown elements
    const daysValue = padZero(days);
    document.getElementById('days').innerHTML = `<span>${daysValue.firstDigit}</span><span>${daysValue.secondDigit}</span>:`;

    const hoursValue = padZero(hours);
    document.getElementById('hours').innerHTML = `<span>${hoursValue.firstDigit}</span><span>${hoursValue.secondDigit}</span>:`;

    const minutesValue = padZero(minutes);
    document.getElementById('minutes').innerHTML = `<span>${minutesValue.firstDigit}</span><span>${minutesValue.secondDigit}</span>:`;

    const secondsValue = padZero(seconds);
    document.getElementById('seconds').innerHTML = `<span>${secondsValue.firstDigit}</span><span>${secondsValue.secondDigit}</span>`;

    // If the countdown is still running, update every second
    if (timeDifference > 0) {
      setTimeout(function () {
        updateCountdown(endTime);
      }, 1000);
    } else {
      document.getElementById('days').innerHTML = "00";
      document.getElementById('hours').innerHTML = "00";
      document.getElementById('minutes').innerHTML = "00";
      document.getElementById('seconds').innerHTML = "00";
      document.querySelector('.shop-now-button').disabled = true;
      document.querySelector('.sale-ends-text').innerHTML = "Sale has ended!";
    }
  }

  // Function to pad single-digit numbers with a leading zero
  function padZero(number) {
    const value = number < 10 ? { firstDigit: 0, secondDigit: number } : { firstDigit: Math.floor(number / 10), secondDigit: number % 10 };
    return value;
  }


  // Set the end time for the countdown (replace with your desired end time)
  const endTime = new Date('January 21, 2024 23:59:59').getTime();

  // Start the countdown
  updateCountdown(endTime);