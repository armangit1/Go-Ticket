
getId('A1').addEventListener('click', function () {
   
    btnclick('A1')
      
      chackArray();
      
    });
  
  getId('A2').addEventListener('click', function () {
     
    btnclick('A2')
      
      chackArray();
      
    });
  
   
  
  getId('A3').addEventListener('click', function () {
     
    btnclick('A3')
      
      chackArray();
      
    });
  
  getId('A4').addEventListener('click', function () {
     
    btnclick('A4')
      
      chackArray();
      
    });
  
  getId('B1').addEventListener('click', function () {
     
    btnclick('B1')
      
      chackArray();
      
    });

  getId('B2').addEventListener('click', function () {
     
    btnclick('B2')
      
      chackArray();
      
    });
  getId('B3').addEventListener('click', function () {
     
    btnclick('B3')
      
      chackArray();
      
    });
  getId('B4').addEventListener('click', function () {
     
    btnclick('B4')
      
      chackArray();
      
    });
  getId('C1').addEventListener('click', function () {
     
    btnclick('C1')
      
      chackArray();
      
    });
  getId('C2').addEventListener('click', function () {
     
    btnclick('C2')
      
      chackArray();
      
    });
  getId('C3').addEventListener('click', function () {
     
    btnclick('C3')
      
      chackArray();
      
    });
  getId('C4').addEventListener('click', function () {
     
    btnclick('C4')
      
      chackArray();
      
    });
  getId('D1').addEventListener('click', function () {
     
    btnclick('D1')
      
      chackArray();
      
    });
  getId('D2').addEventListener('click', function () {
     
    btnclick('D2')
      
      chackArray();
      
    });
  getId('D3').addEventListener('click', function () {
     
    btnclick('D3')
      
      chackArray();
      
    });
  getId('D4').addEventListener('click', function () {
     
    btnclick('D4')
      
      chackArray();
      
    });
  getId('E1').addEventListener('click', function () {
     
    btnclick('E1')
      
      chackArray();
      
    });
  getId('E2').addEventListener('click', function () {
     
    btnclick('E2')
      
      chackArray();
      
    });
  getId('E3').addEventListener('click', function () {
     
    btnclick('E3')
      
      chackArray();
      
    });
  getId('E4').addEventListener('click', function () {
     
    btnclick('E4')
      
      chackArray();
      
    });
  getId('F1').addEventListener('click', function () {
     
    btnclick('F1')
      
      chackArray();
      
    });
  getId('F2').addEventListener('click', function () {
     
    btnclick('F2')
      
      chackArray();
      
    });
  getId('F3').addEventListener('click', function () {
     
    btnclick('F3')
      
      chackArray();
      
    });
  getId('F4').addEventListener('click', function () {
     
    btnclick('F4')
      
      chackArray();
      
    });
  getId('G1').addEventListener('click', function () {
     
    btnclick('G1')
      
      chackArray();
      
    });
  getId('G2').addEventListener('click', function () {
     
    btnclick('G2')
      
      chackArray();
      
    });
  getId('G3').addEventListener('click', function () {
     
    btnclick('G3')
      
      chackArray();
      
    });
  getId('G4').addEventListener('click', function () {
     
    btnclick('G4')
      
      chackArray();
      
    });
  getId('H1').addEventListener('click', function () {
     
    btnclick('H1')
      
      chackArray();
      
    });
  getId('H2').addEventListener('click', function () {
     
    btnclick('H2')
      
      chackArray();
      
    });
  getId('H3').addEventListener('click', function () {
     
    btnclick('H3')
      
      chackArray();
      
    });
  getId('H4').addEventListener('click', function () {
     
    btnclick('H4')
      
      chackArray();
      
    });
  getId('I1').addEventListener('click', function () {
     
    btnclick('I1')
      
      chackArray();
      
    });
  getId('I2').addEventListener('click', function () {
     
    btnclick('I2')
      
      chackArray();
      
    });
  getId('I3').addEventListener('click', function () {
     
    btnclick('I3')
      
      chackArray();
      
    });
  getId('I4').addEventListener('click', function () {
     
    btnclick('I4')
      
      chackArray();
      
    });
  getId('J1').addEventListener('click', function () {
     
    btnclick('J1')
      
      chackArray();
      
    });
  getId('J2').addEventListener('click', function () {
     
    btnclick('J2')
      
      chackArray();
      
    });
  getId('J3').addEventListener('click', function () {
     
    btnclick('J3')
      
      chackArray();
      
    });
  getId('J4').addEventListener('click', function () {
     
    btnclick('J4')
      
      chackArray();
      
    });




    function bookingsit(){
      if (setArray.length >= 1) {

        showEliment('set1div')
  
      }
      if(setArray.length == 0) {
        hiddenEliment('set1div')
        
      }
       if (setArray.length >= 2) {
        showEliment('set2div')
  
      }
       if (setArray.length == 1) {
        hiddenEliment('set2div')
  
      }
     
       if (setArray.length >= 3) {
        showEliment('set3div')
  
      }
       if (setArray.length == 2) {
        hiddenEliment('set3div')
  
      }
       if (setArray.length >= 4) {
        showEliment('set4div')
  
      }
       if (setArray.length == 3) {
        hiddenEliment('set4div')
  
      }
  
      getId('set1').innerText  = setArray[0];
      getId('set2').innerText  = setArray[1];
      getId('set3').innerText  = setArray[2];
      getId('set4').innerText  = setArray[3];
    }



    document.getElementById('passengerForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      const name = document.getElementById('name').value.trim();
      const number = document.getElementById('number').value.trim();
      const email = document.getElementById('email').value.trim();

      if(setArray.length <= 0){
        getId('next').innerText = 'No Seat Booking!'
        return;
      }

      // Validate required fields
      if (!name || !number) {
        alert('Passenger Name and Phone Number are required.');
        return;
      }

      // Validate phone number pattern
      const phoneRegex = /^[0-9]{11}$/;
      if (!phoneRegex.test(number)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }

      // Optional: Validate email format
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      window.location.href = "succes.html";

    });

