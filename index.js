const toast = document.getElementById("liveToastBtn");
const toastLive = document.getElementById("liveToast");
if (toast) {
  toast.addEventListener("click", () => {
    const toa = new bootstrap.Toast(toastLive);
    toa.show();
  });
}
