window.onload = function () {
    //生成随机数
    //parseInt(Math.random() * (max - min + 1) + min)
    var num1 = parseInt(Math.random() * 15 + 1);
    var num2 = parseInt(Math.random() * 10 + 1);
    //媒体查询
    const mQuery = window.matchMedia('(max-width:960px)');
    mQuery.addListener(setminscreen);
    function setminscreen() {
        if (mQuery.matches) {
            document.body.style.backgroundImage = `url(https://ghproxy.com/https://raw.githubusercontent.com/htnanako/nanako-blog/main/public-IMG/Genshin%20Impact/%E7%AB%96%E7%89%88/${num2}.JPG)`
        } else {
            document.body.style.backgroundImage = `url(https://ghproxy.com/https://raw.githubusercontent.com/htnanako/nanako-blog/main/public-IMG/Genshin%20Impact/%E6%A8%AA%E7%89%88/${num1}.JPG)`
        }

    }
    setminscreen()
}