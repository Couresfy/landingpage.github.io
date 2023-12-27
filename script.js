function openPopup() {
    document.getElementById("popupContainer").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}


// form submition
let loder = document.querySelector(".loader-container")
document.getElementById('myForm').addEventListener('submit', function(e) {
    loder.style.display = "flex";
    e.preventDefault();
    submitForm();
  });

  function submitForm() {
    var formData = new FormData(document.getElementById('myForm'));
    fetch('https://script.google.com/macros/s/AKfycbwWNpsh6xaSrHhRl-IxR1VBWHKcRupqLbkz8huO9n7xqjcxoAYH8_ezXNoYrwDzNms/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        window.location.href = 'https://43386qb1mwy5nz7qn9wf0ufqek.hop.clickbank.net';
      } else {
        console.error('Error submitting form');
      }
    })
    .catch(error => console.error('Error:', error));
  }


