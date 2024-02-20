import { addTabs } from './tabs';

export const discoverTabs = () => {
  const discoverTabs = document.querySelectorAll('.discover__tab');
  const discoverContent = document.querySelectorAll('.discover__content');

  addTabs(discoverTabs, discoverContent);
};
