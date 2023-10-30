function sendMail() {

var params ={

   name: document.getElementById("name").Value,
   email :document.getElementById("email").Value,
   message :document.getElementById("message").Value,

};
const serviceID = "service_v7l0nql";
const templateID ="template_fm48dzs";

emailjs.send(serviceID , templateID , params).then((res) => {

    document.getElementById("name").Value ="";
    document.getElementById("email").Value ="";
    document.getElementById("message").Value ="";
    console.log(res);
    alert("your message sent successfully");

}
).catch ((err)  => console.log(err)); 
}

