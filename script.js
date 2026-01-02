const track = document.querySelector(".transform-track");
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
if (track) {
  track.innerHTML += track.innerHTML;
}
if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (note) {
      note.textContent = "Sending your request...";
    }
    try {
      await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        mode: "no-cors",
      });
      if (note) {
        note.textContent = "Thanks! We will contact you within 24 hours.";
      }
      form.reset();
    } catch (error) {
      if (note) {
        note.textContent = "Unable to send right now. Please try again later.";
      }
    }
  });
}
