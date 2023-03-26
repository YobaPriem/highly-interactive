const useDragAndDrop = (options: {
    parentElement: HTMLElement,
    targetSelector: string
}) => {
    const handleDragStart = (e: DragEvent) => {
        console.log(e)
    }

    options.parentElement.addEventListener('dragstart', handleDragStart)
}

export default useDragAndDrop

// var dragSrcEl = null;

// function handleDragStart(e) {
//   this.style.opacity = "0.4";
//   dragSrcEl = this;
//   e.dataTransfer.effectAllowed = "move";
// }

// function handleDragOver(e) {
//   if (e.preventDefault) {
//     e.preventDefault();
//   }
//   e.dataTransfer.dropEffect = "move";
//   return false;
// }

// function handleDragEnter(e) {
//   this.classList.add("over");
// }

// function handleDragLeave(e) {
//   this.classList.remove("over");
// }

// function handleDrop(e) {
//   if (e.stopPropagation) {
//     e.stopPropagation();
//   }

//   if (dragSrcEl != this) {
//     this.replaceWith(this, dragSrcEl);
//   }
//   return false;
// }

// function handleDragEnd(e) {
//   this.style.opacity = "1";
//   items.forEach(function(item) {
//     item.classList.remove("over");
//   });
// }
// let items = document.querySelectorAll(".draggable");
// items.forEach(function(item) {
//   item.addEventListener("dragstart", handleDragStart);
//   item.addEventListener("dragenter", handleDragEnter);
//   item.addEventListener("dragover", handleDragOver);
//   item.addEventListener("dragleave", handleDragLeave);
//   item.addEventListener("drop", handleDrop);
//   item.addEventListener("dragend", handleDragEnd);
// });