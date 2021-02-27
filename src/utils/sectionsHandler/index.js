const SECTION_HEIGHT = 720;

let pageHeight;
let pagePercentage;
let sectionCount = 1;
let sectionList;

const getWindowSize = () => {
  return document.documentElement.scrollHeight;
}

const isWithinSections = () => {
  return (document.documentElement.scrollTop > SECTION_HEIGHT - (SECTION_HEIGHT/4) && !(document.documentElement.scrollTop + window.innerHeight + (SECTION_HEIGHT/4) >= getWindowSize()));
}

const getSectionNumbering = () => {
  return Math.floor((document.documentElement.scrollTop + SECTION_HEIGHT/4)/SECTION_HEIGHT);
}

const updateWindowSize = (mainComponent, lineElement) => {
  sectionList = document.querySelectorAll('section');
  sectionCount = sectionList.length + 1;

  pageHeight = SECTION_HEIGHT*sectionCount+(SECTION_HEIGHT/4);
  mainComponent.current.style.height = `${pageHeight}px`;
  lineElement.current.style.height = `${pageHeight-600}px`;
}

const updateSectionsVisibility = (lineElement) => {

  if (!isWithinSections() || getSectionNumbering() === 0) {
    lineElement.current.classList.remove('--right', '--left');
    lineElement.current.classList.add('--center');

  } else {
    if (getSectionNumbering() % 2 === 1) {
      lineElement.current.classList.remove('--center', '--right');
      lineElement.current.classList.add('--left');
    } else if (getSectionNumbering() % 2 === 0) {
      lineElement.current.classList.remove('--center', '--left');
      lineElement.current.classList.add('--right');
    }
  }
}

const handleScroll = (debugElement, lineElement) => {
  pagePercentage = Math.floor((document.documentElement.scrollTop/pageHeight)*100);
  debugElement.current.textContent = `ScrollPos ${document.documentElement.scrollTop} | CurrentSection #${Math.floor(document.documentElement.scrollTop / SECTION_HEIGHT)}`;

  updateSectionsVisibility(lineElement);
}

const activeSectionNumber = () => {
  return getSectionNumbering();
}

export default {
  SECTION_HEIGHT : SECTION_HEIGHT,
  updateWindowSize : updateWindowSize,
  handleScroll : handleScroll,
  activeSectionNumber : activeSectionNumber,
}