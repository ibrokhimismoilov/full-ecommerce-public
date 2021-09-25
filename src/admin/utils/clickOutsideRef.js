export const clickOutsideRef = (contentRef, toggleRef) => {
  document.addEventListener("mousedown", (e) => {
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList.toggle("show");
    } else {
      // agar dropdown__content bosilmasa yopib qo'y
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        contentRef.current.classList.remove("show");
      }
    }
  });
};

export const objToArray = (obj) => {
  const newArray = [];
  for (const key in obj) {
    newArray.push(obj[key]);
  }
  return newArray;
};
