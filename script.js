const revealItems = document.querySelectorAll(".reveal");
const copyEmailButton = document.querySelector("[data-copy-email]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (copyEmailButton) {
  const originalText = copyEmailButton.textContent.trim();
  const email = copyEmailButton.dataset.copyEmail;

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  copyEmailButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      await copyText(email);
      copyEmailButton.textContent = "Mail copied";
      copyEmailButton.setAttribute("aria-label", "Email address copied");

      window.setTimeout(() => {
        copyEmailButton.textContent = originalText;
        copyEmailButton.setAttribute("aria-label", "Copy email address");
      }, 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}
