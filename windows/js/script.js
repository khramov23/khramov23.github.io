let features1 = document.querySelector(".panel-features1"),
    features2 = document.querySelector(".panel-features2"),
    features3 = document.querySelector(".panel-features3"),
    features4 = document.querySelector(".panel-features4"),
    img1 = document.querySelector(".panel__img1"),
    img2 = document.querySelector(".panel__img2"),
    img3 = document.querySelector(".panel__img3"),
    img4 = document.querySelector(".panel__img4"),
    item1 = document.getElementById("item1"),
    item2 = document.getElementById("item2"),
    item3 = document.getElementById("item3"),
    item4 = document.getElementById("item4");

item1.addEventListener("click", () => {
  img1.classList.add("panel__img_active");
  img2.classList.remove("panel__img_active");
  img3.classList.remove("panel__img_active");
  img4.classList.remove("panel__img_active");
  item1.classList.add("decor-item_active");
  item2.classList.remove("decor-item_active");
  item3.classList.remove("decor-item_active");
  item4.classList.remove("decor-item_active");
  features1.classList.add("panel-features_active");
  features2.classList.remove("panel-features_active");
  features3.classList.remove("panel-features_active");
  features4.classList.remove("panel-features_active");
});

item2.addEventListener("click", () => {
  img2.classList.add("panel__img_active");
  img1.classList.remove("panel__img_active");
  img3.classList.remove("panel__img_active");
  img4.classList.remove("panel__img_active");
  item2.classList.add("decor-item_active");
  item1.classList.remove("decor-item_active");
  item3.classList.remove("decor-item_active");
  item4.classList.remove("decor-item_active");
  features2.classList.add("panel-features_active");
  features1.classList.remove("panel-features_active");
  features3.classList.remove("panel-features_active");
  features4.classList.remove("panel-features_active");
});

item3.addEventListener("click", () => {
  img3.classList.add("panel__img_active");
  img2.classList.remove("panel__img_active");
  img1.classList.remove("panel__img_active");
  img4.classList.remove("panel__img_active");
  item3.classList.add("decor-item_active");
  item2.classList.remove("decor-item_active");
  item1.classList.remove("decor-item_active");
  item4.classList.remove("decor-item_active");
  features3.classList.add("panel-features_active");
  features2.classList.remove("panel-features_active");
  features1.classList.remove("panel-features_active");
  features4.classList.remove("panel-features_active");
});

item4.addEventListener("click", () => {
  img4.classList.add("panel__img_active");
  img2.classList.remove("panel__img_active");
  img3.classList.remove("panel__img_active");
  img1.classList.remove("panel__img_active");
  item4.classList.add("decor-item_active");
  item2.classList.remove("decor-item_active");
  item3.classList.remove("decor-item_active");
  item1.classList.remove("decor-item_active");
  features4.classList.add("panel-features_active");
  features2.classList.remove("panel-features_active");
  features3.classList.remove("panel-features_active");
  features1.classList.remove("panel-features_active");
});





