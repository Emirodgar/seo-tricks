function getContent(tab){

    var spreadsheetID = "1PrRuSt-2IkZplJ3mwllo7YA3J025H65G0X46KtDJ4Wo";
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + tab + "/public/values?alt=json";

    $.getJSON(url, function(data) {

        var entry = data.feed.entry;


        $(entry).each(function(){

            if(tab==1){
                var add = "<pre><code>"+this.gsx$rule.$t+"</code></pre>";
            }
            else if(tab==3){
                var add = "";
            }

            $('.results').append('<h2>'+this.title.$t+'</h2><p>'+this.gsx$description.$t+'</p>'+ add);

            var blob = new Blob([$("html").html()], {type: "text/html;charset=utf-8"});
            saveAs(blob, "test.html");

          });

        });
}
