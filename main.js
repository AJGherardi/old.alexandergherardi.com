let name = document.getElementById('name');
let desc1 = document.getElementsByClassName('line1')[0];
let desc2 = document.getElementsByClassName('line2')[0];
let desc3 = document.getElementsByClassName('line3')[0];
let github = document.getElementById('github');
let linkedin = document.getElementById('linkedin');

name.innerHTML = name.textContent.replace(/\S/g, "<span class='nameLetter'>$&</span>");
desc1.innerHTML = desc1.textContent.replace(/\S/g, "<span class='desc1Letter'>$&</span>");
desc2.innerHTML = desc2.textContent.replace(/\S/g, "<span class='desc2Letter'>$&</span>");
desc3.innerHTML = desc3.textContent.replace(/\S/g, "<span class='desc3Letter'>$&</span>");
github.innerHTML = github.textContent.replace(/\S/g, "<span class='githubLetter'>$&</span>");
linkedin.innerHTML = linkedin.textContent.replace(/\S/g, "<span class='linkedinLetter'>$&</span>");


anime.timeline()
    .add({
        targets: 'h1 .nameLetter',
        opacity: [0, 1],
        easing: "easeInOutElastic",
        delay: (el, i) => 75 * (i + 1)
    })
    .add({
        targets: 'h2 .desc1Letter',
        opacity: [0, 1],
        easing: "easeInOutElastic",
        offset: 0,
        delay: (el, i) => 50 * (i + 1)
    })
    .add({
        targets: 'h2 .desc2Letter',
        opacity: [0, 1],
        easing: "easeInOutElastic",
        offset: 0,
        delay: (el, i) => 50 * (i + 1)
    })
    .add({
        targets: 'h2 .desc3Letter',
        opacity: [0, 1],
        easing: "easeInOutElastic",
        offset: 0,
        delay: (el, i) => 50 * (i + 1)
    })
    .add({
        targets: 'a .githubLetter',
        opacity: [0, 1],
        easing: "easeInOutElastic",
        offset: 0,
        delay: (el, i) => 75 * (i + 1)
    })
    .add({
        targets: 'a .linkedinLetter',
        opacity: [0, 1],
        easing: "easeInOutElastic",
        offset: 0,
        delay: (el, i) => 75 * (i + 1)
    })