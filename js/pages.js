document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
const orderForm = document.getElementById("music-order");
if (orderForm) {
  orderForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(orderForm);
    const message = [
      "Hello Studio HASH iNf Lk, I'd like to inquire about an iNfysona project.",
      "",
      `Name: ${data.get("name")}`,
      `Contact: ${data.get("contact")}`,
      `Project type: ${data.get("type")}`,
      `Deadline: ${data.get("deadline") || "Not specified"}`,
      `Details: ${data.get("details")}`
    ].join("\\n");
    const url = "https://wa.me/94742432804?text=" + encodeURIComponent(message);
    window.open(url, "_blank", "noopener");
  });
}
