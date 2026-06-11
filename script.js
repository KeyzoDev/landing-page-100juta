const WHATSAPP_NUMBER = "6289654540785";
const DEFAULT_MESSAGE =
  "Halo saya mau beli paket lengkap 100 Juta Pertama dari Gaji UMR";

function buildWhatsappUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
  const message = link.dataset.message || DEFAULT_MESSAGE;
  link.href = buildWhatsappUrl(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("is-open");

    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector("span").textContent = isOpen ? "-" : "+";
  });
});
