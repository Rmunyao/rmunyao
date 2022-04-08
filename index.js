function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        // Port : "465",
        Username : "ryanmunyao9@gmail.com",
        Password : "**********",
        To : 'munywokiryan@gmail.com',
        From : 'ryanmunyao9@gmail.com',
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
}).then (message => alert("mail sent successfully"))
}