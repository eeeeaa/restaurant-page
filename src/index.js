import './css/style.css';
import { pageLoader } from "./pageLoader";
import { createHomePageContent } from './homePage';

pageLoader(createHomePageContent().container);