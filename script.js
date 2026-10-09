// 作品卡片：点击在新窗口打开对应页面
const mealsContainer = document.getElementById("meals");

if (mealsContainer) {
  mealsContainer.addEventListener("click", (e) => {
    const mealEl = e.target.closest(".meal");
    if (!mealEl) return;

    const url = mealEl.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  });
}

// 导航：滚动到对应区块时高亮手绘图标（active 状态）
const navLinks = document.querySelectorAll(".nav-link");
const sections = ["about", "work", "contact"].map((id) =>
  document.getElementById(id)
);

function onScroll() {
  const offset = window.innerHeight * 0.35;
  let currentId = null;

  sections.forEach((sec) => {
    if (!sec) return;
    const top = sec.getBoundingClientRect().top;
    if (top < offset) currentId = sec.id;
  });

  navLinks.forEach((link) => {
    const href = (link.getAttribute("href") || "").replace("#", "");
    link.classList.toggle("active", href === currentId);
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// 页脚：THANK YOU 外面的手绘边框“沸腾”抖动 ——
// 在 3 个不同种子的手绘滤镜之间快速切换（squigglevision），文字本身保持静止。
// (function () {
//   const border = document.querySelector(".thanks-border");
//   if (!border) return;
//   if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

//   const refs = [
//     "url(#footer-boil-0)",
//     "url(#footer-boil-1)",
//     "url(#footer-boil-2)",
//   ];
//   let i = 0;
//   setInterval(() => {
//     i = (i + 1) % refs.length;
//     border.style.filter = refs[i];
//   }, 130);
// })();
