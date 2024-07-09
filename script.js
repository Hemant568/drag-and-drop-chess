document.addEventListener("DOMContentLoaded", (_) => {
  const piece = document.querySelector('.chess-piece');
  const squares = document.querySelectorAll('.square');
  const info = document.querySelector('.info');
  
  let draggedPiece;
  
  squares.forEach((sq) => {
  	sq.addEventListener('dragover', (e) => {
    	 e.preventDefault(); // Allow drop
    });
    sq.addEventListener('dragenter', (e) => {
    	e.target.classList.add('highlights');
    });
    sq.addEventListener('dragleave', (e) => {
    	e.target.classList.remove('highlights');
    });
    sq.addEventListener('drop', (e) => {
    	e.target.appendChild(draggedPiece);
      e.target.classList.remove('highlights');
      info.innerText = '';
    });
    sq.addEventListener('dragend', (_) => {
    	//can show the info piece is being dragged from sorce to final index
    });
  })
   
  piece.addEventListener('drag', (_) => {
  	info.innerText = draggedPiece.id + ' is being dragged';
  });
  
  piece.addEventListener('dragstart', (e) => {
  	draggedPiece = e.target;
  });
  
});
