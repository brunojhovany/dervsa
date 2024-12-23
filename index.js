document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    if (email) {
        const button = document.getElementById("email-button");
        button.addEventListener("click", () => {
            window.location.href = `mailto:${email}?subject=`;
        });
        // button.textContent = `Send Email to ${email}`;
        // mailto:gustavo.rayo@dervsa.com?subject=Test
    } else {
        alert("No email provided in the query string!");
    }
});
