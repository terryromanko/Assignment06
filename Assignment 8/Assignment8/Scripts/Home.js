function GetInfo(info)
{
    $(".output").empty();

    for (var i = 0; i < info.PlayerInformation.length; i++)
    {
        $(".output").append(info.PlayerInformation[i].PlayerName + ", ");
        $(".output").append(info.PlayerInformation[i].PlayerNumber + ", ");
    }
}

function ReceiveInfo()
{
    $.ajax
    ({
        url: "Home/GetPlayerInformation",
        data:
        {
            PlayerNumber: $(".player-number-textbox").val()
        },
        success:
            function (info)
            {
                GetInfo(JSON.parse(info));
            }
    });
}

$(document).ready(function ()
{
    $(".player-number-button").click(ReceiveInfo);

});