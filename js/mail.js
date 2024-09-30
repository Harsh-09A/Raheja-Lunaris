(function () {
  emailjs.init("to9PlFrMMimgruuH0");
  // emailjs.init("BwX8mmKlFidsWvP67");
})();

// Get IP Address
async function getIpAddress() {
  try {
    const response = await fetch("https://api.ipify.org");
    const ip = await response.text();
    console.log(`IP: ${ip}`);
    return ip;
  } catch (error) {
    console.log(error);
    return null; // or throw error if you want to handle it differently
  }
}

// Form Submit
const handleFormSubmit = async (formId, nameField, emailField, phoneField) => {
  const templateParams = {
    user_name: document.getElementById(nameField).value,
    user_email: document.getElementById(emailField).value,
    contact_number: document.getElementById(phoneField).value,
    ip_address: await getIpAddress(),

    to_email: "aristosocialmedia9@gmail.com",
    // to_email: "harsh.autowebbed@gmail.com",
    company_name: "Raheja Lunaris",
  };

  window.Anarock.submitLead({
    api_key: "76a853a227de598c", // get your api/auth key from support team
    env: "production",
    host: "anarock.tech",
    channel_name: "LandingPage",
    campaign_id: "lp_Raheja_Lunaris_Neha",
    name: templateParams.user_name,
    email: templateParams.user_email,
    purpose: "buy",
    country_code: "in",
    phone: templateParams.contact_number, // valid 10-digits phone number
    source: "sms",
    subSource: "sms-december-campaign",
    onLeadSuccessCallback(leadID, data) {
      console.log("lead captured with ID:", leadID);
    },
    onLeadFailureCallback(errorMessage) {
      console.log(errorMessage);
    },
  });
  // Send Form

  emailjs.send("contact_service", "contact_form", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      // alert("Message Sent Final");
      document.getElementById(formId).reset();
      if (response.status === 200) {
        window.location.href = "thank-you.html";
      }
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Message Not Sent");
    }
  );
};

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      handleFormSubmit(
        "contact-form",
        "user_name",
        "user_email",
        "contact_number"
      );
    });

  document
    .getElementById("contact-form-modal")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      handleFormSubmit(
        "contact-form-modal",
        "user_name_modal",
        "user_email_modal",
        "contact_number_modal"
      );
    });
  document
    .getElementById("contact-form-slider")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      handleFormSubmit(
        "contact-form-slider",
        "user_name_slider",
        "user_email_slider",
        "contact_number_slider"
      );
    });
};
