function adduser() {
    var player1_name= document.getElementById("Player1_username").value;
    var player2_name= document.getElementById("Player2_username").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
}

window.location.replace("quiz_game.html");