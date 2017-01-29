function PlayerController() {

var loading = true;
    var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var ps = new PlayerService(apiUrl, ready);

    function ready() {
        loading = false;
        $('some-button').on('click',function () {
            var teamSF = playerService.getPlayersByTeam("SF");
        });


    drawPlayer = function (roster) {
        var rosterElem = document.getElementById('player-card')
        var template = ''

        for (var i = 1; i < roster.length; i++) {
            var player = roster[i];
            template +=
                ` <div class="flex-item">
                <img src="${player.photo}" alt="player">
        <h4>${player.fullname}</h4>
        <p>${player.position}</p>
        <p>${player.jersey}</p>
        </div>
        `
        }
        rosterElem.innerHTML = template
    }

this.addPlayerByTeam = function(event) {
    event.preventDefault()
    var form = event.target
    ps.getPlayersbyTeam(playerTeam)
    drawPlayer(playersData)
};

    // this.addPlayer = function (event) {
    //     event.preventDefault()
    //     var form = event.target
    //     var playerName = form['playerName'].value
    //     var playerPosition = form['playerPosition'].value
    //     var playerNumber = form['playerNumber'].value

    //     ps.getPlayersByTeam(teamName)
    //     // ps.pushPlayer(playerName, playerPosition, playerNumber)
    //     var playersData = ps.getPlayers()
    //     drawPlayer(playersData)
    // }

    


}
}
