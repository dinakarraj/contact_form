document.getElementById("contact_form").addEventListener("submit", function(e){
    e.preventDefault();

    let isValid=true;
    fields=["first_name", "last_name", "email", "Message"];
    
    fields.forEach(id => {
        const field=document.getElementById(id);
        const error_msg=field.nextElementSibling;

        if(!field.value.trim())
        {
            field.classList.add("invalid");
            error_msg.style.display="block";
            isValid=false;
        }
        else 
        {
            field.classList.remove("invalid");
            error_msg.style.display="none";
        }
    });

    const email_field=document.getElementById("email");
    const email_next_sibling=email_field.nextElementSibling;

    
   
    email_field.addEventListener("input", validateEmail);

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const emailValue = email_field.value;

        if (emailPattern.test(emailValue)) 
        {
            email_field.classList.add("invalid");
            email_next_sibling.style.display="block";
            isvalid=false;
        } 
        else 
        {
            email_field.classList.remove("invalid");
            email_next_sibling.style.display="none";
        }
    }

    const radioChecked=document.querySelector('input[name="query_type"]:checked');
    const query_error=document.getElementById("query_error");

    if(!radioChecked)
    {
        query_error.style.display="block";
        isValid=false;
    }
    else 
    {
        query_error.style.display="none";
    }

    const consent=document.getElementById("consent");
    const consentError=document.querySelector(".submit_error");
    if(!consent.checked)
    {
        consentError.style.display="block";
        isValid=false;
    }
    else
    {
        consentError.style.display="none";
    }

    function showToast()
    {
        const toast=document.getElementById("toast");
        toast.style.display="block";

        setTimeout(()=>{
            toast.style.display="none";
        }, 4000);

    }

    if(isValid)
    {
       showToast();
       this.reset(); 
    }
})