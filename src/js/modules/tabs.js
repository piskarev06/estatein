const changeTabClass = (currentTab, listOfTabs) => {
  for (let i = 0; i < listOfTabs.length; i++) {
    listOfTabs[i].classList.remove('active');
  }
  currentTab.classList.add('active');
};

const changeContentClass = (currentDataset, listOfContent) => {
  for (let i = 0; i < listOfContent.length; i++) {
    listOfContent[i].classList.remove('active');
    if (listOfContent[i].dataset.content === currentDataset) {
      listOfContent[i].classList.add('active');
    }
  }
};

export const addTabs = (tabs, content) => {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
      let currentTab = e.target;
      changeTabClass(currentTab, tabs);
      changeContentClass(currentTab.dataset.btn, content);
    });
  }
};
