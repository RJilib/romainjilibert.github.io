const slidingAboutMe = document.querySelector('.aboutme');
const slidingJob = document.querySelector('.job');
const slidingJob2 = document.querySelector('.job2');
const slidingSkills = document.querySelector('.abilities');


window.addEventListener('scroll', () => {
    
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementAboutMe = slidingAboutMe.getBoundingClientRect().top;
    const topElementJob = slidingJob.getBoundingClientRect().top;
    const topElementSkills = slidingSkills.getBoundingClientRect().top;

    var test = scrollTop + topElementAboutMe;

    if (scrollY > (scrollTop + topElementAboutMe - topElementAboutMe)) {
        slidingAboutMe.classList.add('active')
    }


    if (scrollY > (scrollTop + topElementJob)) {
        slidingJob.classList.add('active')
        slidingJob2.classList.add('active')
    }


    if (scrollY > (scrollTop + topElementSkills)) {
        slidingSkills.classList.add('active')
    }
})