let tab4 = function () {
    let arrow = document.querySelectorAll('.arrow'),

    arrow.forEach(item => {
        item.addEventListener('click', moveArrow)
    }); 

   function moveArrow() {
        arrow.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
    }

};


tab4();