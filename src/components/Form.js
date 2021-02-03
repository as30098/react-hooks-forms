// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");

//   // To completely control a form, we also need our form to update state.
//   // we need to use setFirstName and setLastName

//   // In our example, we're passing a callback function function that accepts event as its argument. The event data being passed in is automatically provided by the onChange event listener.
//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value)
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value)
//   }


//   return (
//     <form>
//       {/* //onChange will fire every time the value of an input changes.
//       // IMPORTANT: The new state values we just set are used to set the value attributes of our two inputs.
//       //Controlling forms makes it more convenient to share form values between components. Since the form values are stored in state, they are easily passed down as props or sent upward via a function supplied in props. */}
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;


// Form Notes
// Form elements include <input>, <textarea>, <select>, and <form> itself. When we talk about inputs in this lesson, we broadly mean the form elements (<input>, <textarea>, <select>) and not always specifically just <input>.

// To control the value of these inputs, we use a prop specific to that type of input:

// For <input>, <textarea>, and <option>, we use value, as we have seen.

// For a checkbox (<input type="checkbox">), we use checked=


import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;