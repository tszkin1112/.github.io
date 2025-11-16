// 获取按钮元素
const btn = document.getElementById('btn');

// 给按钮添加点击事件
btn.addEventListener('click', function() {
    alert('欢迎访问我的网站！😊');
});

// 平滑滚动（点击导航栏链接跳转到对应 section）
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});