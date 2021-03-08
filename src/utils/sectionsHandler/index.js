const SECTION_HEIGHT = 720;
const SECTION_OFFSET = -100;

const updateWindowSize = (mainComponent, totalSections) => {
  let pageHeight = getPageHeight(totalSections)
  mainComponent.current.style.height = `${pageHeight}px`;
  return pageHeight;
}

const getPageHeight = (totalSections) => {
  let pageHeight = SECTION_HEIGHT*totalSections+(SECTION_HEIGHT/4);
  return pageHeight;
}

const activeSectionNumber = () => {
  return Math.round((document.documentElement.scrollTop + SECTION_OFFSET)/SECTION_HEIGHT);
}

const getSectionRange = (count) => {
  return [
    (count * SECTION_HEIGHT + SECTION_OFFSET),
    ((count+1) * (SECTION_HEIGHT - SECTION_OFFSET))
  ];
}

export default {
  SECTION_HEIGHT : SECTION_HEIGHT,
  updateWindowSize : updateWindowSize,
  activeSectionNumber : activeSectionNumber,
  getSectionRange : getSectionRange,
  getPageHeight : getPageHeight,
}