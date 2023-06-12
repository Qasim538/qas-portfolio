import React from "react";
import "../styles/ContactMe.css";



function ContactMe() {
    return (
            
            <div class="container">
                <h1> Say Hello </h1>
            <form action="action_page.php">
    
            <label for="fname">First Name</label>
            <input type="text" id="firstName" name="firstname" placeholder="Your name.." />
    
            <label for="lname">Last Name</label>
            <input type="text" id="lastName" name="lastname" placeholder="Your last name.." />
    
            <label for="email">Email Address </label>
            <input type="text" id="emailId" name="emailAddress" placeholder="Your email address.." />
    
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="" placeholder="Type your subject here" />
    
            <label for="details">Your Message</label>
            <textarea id="details" name="details" placeholder="Write Your Text Here.."/>
    
            <button class="submit" type="submit" id="submit-btn">Submit</button>
    
          </form>
        </div>
        );
 

}

export default ContactMe;