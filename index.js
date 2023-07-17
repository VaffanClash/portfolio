//> IMPORTS
const emailCopied = document.querySelector("#emailCopied");

//> COPY EMAIL
//! Will only work in a HTTPS page (but somehow it works already)
const copyEmail = (email) => {
  // Copy the email address to the clipboard
  navigator.clipboard.writeText(email);

  // Optional: Provide feedback to the user
  emailCopied.classList.remove("hidden");
  emailCopied.classList.add("emailCopied");

  emailCopied.addEventListener("animationend", () => {
    setTimeout(() => {
      emailCopied.classList.add("hidden");
    }, 500);
  })
};