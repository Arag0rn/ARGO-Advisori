// Modal 

const readMoreButtons = document.querySelectorAll('[data-hystmodal^="#myModal"]');

readMoreButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        var modalId = button.getAttribute('data-hystmodal');

        document.querySelector(modalId).style.display = "block";
    });
});


const closeModalButtons = document.querySelectorAll('.close');

closeModalButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {

        closeButton.closest('.modal').style.display = "none";
    });
});


window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}