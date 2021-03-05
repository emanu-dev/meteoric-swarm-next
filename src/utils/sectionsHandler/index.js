const SECTION_HEIGHT = 720;
const SECTION_OFFSET = -100;

let pageHeight;

const updateWindowSize = (mainComponent, lineElement, totalSections) => {
  pageHeight = SECTION_HEIGHT*totalSections+(SECTION_HEIGHT/4);
  mainComponent.current.style.height = `${pageHeight}px`;
  //lineElement.current.style.height = `${pageHeight-600}px`;
}

const getPageHeight = () => {
  return pageHeight;
}

const activeSectionNumber = () => {
  return Math.round((document.documentElement.scrollTop + SECTION_OFFSET)/SECTION_HEIGHT);
}

export default {
  SECTION_HEIGHT : SECTION_HEIGHT,
  updateWindowSize : updateWindowSize,
  activeSectionNumber : activeSectionNumber,
  getPageHeight : getPageHeight,
}