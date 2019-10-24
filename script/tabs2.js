let tab2 = function () {
    let tabNav2 = document.querySelectorAll('.tabs-nav2__item'),
        tabContent2 = document.querySelectorAll('.tab2'),
        tabName2;

    tabNav2.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav2.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName2 = this.getAttribute('data-tab-name');
        selectTabContent(tabName2);
    }

    function selectTabContent(tabName2) {
        tabContent2.forEach(item => {
            item.classList.contains(tabName2) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab2();