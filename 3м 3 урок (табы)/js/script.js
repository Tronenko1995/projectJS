window.addEventListener('DOMContentLoaded', () => {
        
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
    })


    // const tabs = document.querySelectorAll('.tabheader__item'),
    //       tabsContainer = document.querySelectorAll('.tabcontent');

    //       tabsContainer.forEach((itemContainer) => {
    //         itemContainer.classList.add('hide');
    //     });

    // tabs.forEach((item,index) => {

    //     if (item.classList.contains('tabheader__item_active')) {
    //             tabsContainer[index].classList.remove('hide');
    //         }
    //         item.addEventListener('click', (e) => {
    //             tabs.forEach((item) => {
    //                 item.classList.remove('tabheader__item_active');
    //             });
    //         item.classList.add('tabheader__item_active');
    //         tabsContainer.forEach((itemContainer) => {
    //             itemContainer.classList.add('hide');
    //         });
    //         tabsContainer[index].classList.remove('hide');
    //     });
    // });
});