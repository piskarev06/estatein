import {checkHtmlElement} from './modules/checkHtmlElement.js'
import { faqSlider } from './modules/faqSlider.js';
import { propertiesSlider } from "./modules/propertiesSlider.js";
import { reviewsSlider } from './modules/reviewsSlider.js';
import { addRotateStars } from "./modules/rotateStars.js";

addRotateStars(".stars__item");

checkHtmlElement(".properties__slider", propertiesSlider);
checkHtmlElement(".faq__slider", faqSlider);
checkHtmlElement(".reviews__slider", reviewsSlider);
