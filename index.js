
// Cursor

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove' , (e) => {
    cursor.style.left = e.clientX + 'px' ;
    cursor.style.top = e.clientY + 'px' ; 
})


// Page transition

document.addEventListener('DOMContentLoaded', (event) => {

    function pageTransition() {
        let t1 = gsap.timeline();
    
        t1.to(".transition", {
            duration: 2 ,
            scaleY: 1 ,
            transformOrigin : "bottom" ,
            ease: "power4.inOut",
        }) ;
    
        t1.to(".transition", {
            duration: 3 ,
            scaleY: 0 ,
            transformOrigin : "top" ,
            ease: "power4.inOut",
            delay: 3,
        }) ;
    }
    
    function delay(n) {
        n = n || 0 ;
        return new Promise((done) =>{
            setTimeout(() => {
                done();
            }, n);
        });
    }  
        barba.init({
            sync: true,
            transitions: [
                {
                    async leave(data) {
                        const done = this.async();
                        pageTransition();
                        await delay(3000);
                        done();
                    }
                }
            ]
        })
})