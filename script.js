$(document).ready(function(){
    //write regex query here to filter
    
    $('#search').on('submit', function(e){
       e.preventDefault();
       let query = $('#keyword').val().trim()
       if (query != "")
       {
     
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://stream.twitter.com/1.1/statuses/sample.json",
            "method": "GET",
            "dataType":"jsonp",
            "headers": {
              "Authorization": "OAuth oauth_consumer_key=\"H0rOip9Gc5lWfBkwsbAHikHfS\",oauth_token=\"3424025068-CrqtCfBZW2nO7qJf906Kw63I0BLEymOxBTIWWqs\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"GENERATED_TIMESTAMP\",oauth_nonce=\"zMqgOnV6z3lDYTd3khcWtJ0Eyke2PeNmzhz3yPdz3aDUZKKyxT\",oauth_version=\"1.0\""
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
          
          
          
        // $.ajax({
        //     url: 'https://stream.twitter.com/1.1/statuses/sample.json',
        //     method: 'GET',
        //     dataType:'jsonp',
        //     beforeSend: function(x){
        //         x.setRequestHeader('Authorization', 'OAuth oauth_consumer_key="H0rOip9Gc5lWfBkwsbAHikHfS",oauth_token="3424025068-CrqtCfBZW2nO7qJf906Kw63I0BLEymOxBTIWWqs",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1555581058",oauth_nonce="ko7nFxMiHUt",oauth_version="1.0",oauth_signature="pIxPj0C6rpbAhRrZLv%2B4BumIJvs%3D"')
        //     },
        //  success: function(data){
        //     console.log(data)
        // }, error: function(error){
        //     console.log(error)
        // }
        // })
       }

   }) 
});