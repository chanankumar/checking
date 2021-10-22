
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const tab_id = tab_switcher.dataset.tab;
        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            console.log(tab_switcher.parentNode.classList)
            tab_switcher.parentNode.classList.add('is-active');
         
            SwitchPage(tab_id);
        });
    }
//Education page
    const page_switchers = document.querySelectorAll('[page-switcher]');
    for (let i = 0; i < page_switchers.length; i++) {
        const page_switcher = page_switchers[i];
        const page_id = page_switcher.dataset.tab;
        page_switcher.addEventListener('click', () => {
            
            SwitchInternalPage(page_id);
        });
    }

    const project_switchers = document.querySelectorAll('[project-switcher]');
    for (let i = 0; i < project_switchers.length; i++) {
        const project_switcher = project_switchers[i];
        const project_id = project_switcher.dataset.tab;
        project_switcher.addEventListener('click', () => {
            
            SwitchProjectPage(project_id);
        });
    }
}
function SwitchProjectPage(project_id) {
    const current_project = document.querySelector('.tabs-project .tab-project.is-active');
    //console.log('peoject', current_project)
    current_project.classList.remove('is-active');
    //console.log('hello')
    const next_project = document.querySelector(`.tabs-project .tab-project[data-project="${project_id}"]`);
    next_project.classList.add('is-active');
}
function SwitchInternalPage(page_id) {
    const current_page = document.querySelector('.tabs-education .tab-education.is-active');
    console.log(current_page)
    current_page.classList.remove('is-active');
    const next_page = document.querySelector(`.tabs-education .tab-education[data-tab="${page_id}"]`);
    next_page.classList.add('is-active');
}


function SwitchPage (tab_id) {

    const current_tab = document.querySelector('.pages .page.is-active');
    current_tab.classList.remove('is-active');
    const next_tab = document.querySelector(`.pages .page[data-page="${tab_id}"]`);
    next_tab.classList.add('is-active');
}