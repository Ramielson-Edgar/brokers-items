document.querySelectorAll(".button__show-info").forEach((el) => {
  el.addEventListener("click", () => {
    let parent = el.closest(".broker-items");

    parent.querySelector(".brokers-body").classList.toggle("open");
    parent.querySelector(".button__show-info").classList.toggle("body-open");
    parent.querySelector(".icon-arrow-up").classList.toggle("show");
    parent.querySelector(".icon-arrow-down").classList.toggle("hide");
  });
});
