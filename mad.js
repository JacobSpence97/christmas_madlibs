var noun = [];
var verb = [];
var adj = [];

function enterword() {
    $("#b2").click(function() {
        // noun = [($('#words').val('noun1')), ($('#words').val('noun2')), ($('#words').val('noun3')), ($('#words').val('noun4')), ($('#words').val('noun5'))];
        // verb = [($('#words').val('verb1')), ($('#words').val('verb2')), ($('#words').val('verb3')), ($('#words').val('verb4')), ($('#words').val('verb5'))];
        // adj = [($('#words').val('adj1')), ($('#words').val('adj2')), ($('#words').val('adj3')), ($('#words').val('adj4')), ($('#words').val('adj5'))];
        var y = $("form").children(".noun");
        var z = $("form").children(".verb");
        var d = $("form").children(".adj");
        for (var x = 0; x < 5; x++) {
            noun.push(y[x].value);
            console.log(noun);
            verb.push(z[x].value);
            adj.push(d[x].value);

        }
    })

};
var madlib = ("<h2>Roudolph the " +
    (adj[Math.floor(Math.random() * 5)]) +
    " -nosed " +
    (noun[Math.floor(Math.random() * 5)]) +
    " had a very " +
    (adj[Math.floor(Math.random() * 5)]) +
    " nose. And if you ever " +
    (verb[Math.floor(Math.random() * 5)]) +
    " it you would say it glows. All the other " +
    (noun[Math.floor(Math.random() * 5)]) +
    " used to " +
    (verb[Math.floor(Math.random() * 5)]) +
    " and call him " +
    (noun[Math.floor(Math.random() * 5)]) +
    " they never let " +
    (adj[Math.floor(Math.random() * 5)]) +
    " Roudolph, verb in any " +
    (adj[Math.floor(Math.random() * 5)]) +
    " games. Then one " +
    (adj[Math.floor(Math.random() * 5)]) +
    " Christmas Eve, Santa " +
    (verb[Math.floor(Math.random() * 5)]) +
    " to say, Roudolph , with you " +
    (noun[Math.floor(Math.random() * 5)]) +
    " so " +
    (adj[Math.floor(Math.random() * 5)]) +
    " wont you " +
    (verb[Math.floor(Math.random() * 5)]) +
    " my " +
    (noun[Math.floor(Math.random() * 5)]) +
    " tonight? Then how the reindeer " +
    (verb[Math.floor(Math.random() * 5)]) +
    "- ed him as they " +
    (verb[Math.floor(Math.random() * 5)]) +
    "- ed out with " +
    (noun[Math.floor(Math.random() * 5)]) +
    " Rudolph, the " +
    (adj[Math.floor(Math.random() * 5)]) +
    "- nosed reindeer, youll go down in " +
    (noun[Math.floor(Math.random() * 5)])
);


function show() {
    $("#b3").click(function() {
        $("body").empty();
        $("body").append("<h1> YOUR MAD LIB IS<\h1>");
        $("body").append(madlib);
    });
}




$(document).ready(function() {
    enterword();
    show();
});
