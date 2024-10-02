function sendMail(contactForm) {
    emailjs.send("service_3cz29sk", "template_0p71gen", { //three parameters (Service id, template id & object containing parameters)
        "form_name" :contactForm.name.value,
        "form_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then( //promise
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
}