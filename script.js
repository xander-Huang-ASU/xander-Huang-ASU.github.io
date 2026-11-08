// 点击 [Abstract] 展开 / 收起论文摘要
document.querySelectorAll(".abs-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".pub-body").querySelector(".abstract").classList.toggle("open");
  });
});

// 自动显示“最后更新时间”
const updated = new Date(document.lastModified);
document.getElementById("updated").textContent = updated.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
});
