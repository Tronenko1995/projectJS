window.addEventListener('DOMContentLoaded', () => {

    /* Табы */
        
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    
    function hideTabContent() {
        tabsContent.forEach( item => {
            item.classList.add('hide');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    /* Модальное окно */
    const modalOpen = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = modal.querySelector('[data-close]');

    modalOpen.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            modal.classList.toggle('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal () {
        modal.classList.toggle('hide');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && !modal.classList.contains('hide')) {
            closeModal();
        }
    })
});