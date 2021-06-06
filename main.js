function login(){
    var player1 = document.getElementById("Player-1_name").value;
    var player2 = document.getElementById("Player-2_name").value;
    
    localStorage.setItem("Player-1_name",player1);
    localStorage.setItem("Player-2_name",player2);

    window.location="game_index.html";
}