function PlayerService(endpointUrl, callback) {


    var playersData = [];

   

    // function Player(playerName, playerPosition, playerNumber) {
    //     this.name = playerName,
    //         this.position = playerPosition,
    //         this.number = playerNumber
    // };

    this.getPlayers = function () {
        return playersData
    }


    // this.pushPlayer = function (playerName, playerPosition, playerNumber) {
    //     playersData.push(new Player(playerName, playerPosition, playerNumber))
    // }




    this.getPlayersbyTeam = function (teamName) {
        playersData.filter(function (player) {
            if (player.team == teamName) {
                
                return true;
            }
        });
    }

    this.getPlayersByPosition = function (position) {
        playersData.filter(function (player) {
            if (player.position == position) {
                
                return true;
            }
        });
    }
    

    function loadPlayersData() {
        // debugger
        var localData = localStorage.getItem('playerData');
        if (localData) {
            // debugger
            playerData = JSON.parse(localData);
            console.log(playerData);
            return callback();
        }

        var url = "http://bcw-getter.herokuapp.com/?url=";
        var apiUrl = url + encodeURIComponent(endpointUrl);

        $.getJSON(apiUrl, function (data) {
            playerData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playerData', JSON.stringify(playerData))
            console.log('Finished Writing Player Data to localStorage')
            callback(playersData)
        });
            playersData.push(playerData) // I couldnt see where the data was actually getting pushed into the array so I tried to add that here.
    }
    loadPlayersData();













}