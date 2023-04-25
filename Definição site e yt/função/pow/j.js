

  {
    // show message
    let message = 1 + " Hello";
    alert(message);
  }
  
  {
    // show another message
    let message = 2 + " Goodbye";
    alert(message);
  }


  function will(firstName, lastName) {

    // 
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }

  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2