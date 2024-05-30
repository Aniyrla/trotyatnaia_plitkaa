document.getElementById("fixedButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
function showAd() {
    alert("Посетите наш сайт для уникальных товаров и услуг!");
}

// Задаем интервал для появления рекламных окон (например, каждые 30 секунд)
setInterval(showAd, 100000);