player1_name = localStorage.getItem("Player-1_name");
player2_name = localStorage.getItem("Player-2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("player_question").innerHTML = "question_turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "answer_turn - " + player2_name;

function send() {
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    actual_answer = parseInt(no1) * parseInt(no2);

    question_number = "<h4>" + no1 + " X " + no2 + "</h4>";
    input_ans = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_ans + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}