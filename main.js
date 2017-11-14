var subBtn = document.querySelector('input[type="submit"]');
var username = document.querySelector('input[name="username"]');
var password = document.querySelector('input[name="password"]');
var bio = document.querySelector('textarea');

subBtn.addEventListener('click',formValidate);

function formValidate(e) {
    e.preventDefault();
    var person = {
        username : username.value,
        password : password.value,
        bio : bio.value,
        gender : document.querySelector('input[name="gender"]:checked').value,
        food : function () {
            var allCheckedFood = [];
            var foodFields = document.querySelectorAll('input[name="food"]');
            for (var i = 0; i < foodFields.length; i++) {
                if (foodFields[i].checked) {
                    allCheckedFood.push(foodFields[i].value);
                }
            }
            return allCheckedFood;
        }()
    };

    if (person.username != "Danilo") {
        username.style.border = "2px solid red";
        alert("Samo Danilo ima pristup")
    }
}