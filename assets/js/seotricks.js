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
                var add = "<p><b>"+this.gsx$author.$t+"</b> - "+this.gsx$date.$t+"</p><ul class='actions'><li><a target='_blank' href="+this.gsx$link.$t+" class='button small'>Link</a></li></ul><hr>";
            }

            $('.results').append('<h2>'+this.title.$t+'</h2><p>'+this.gsx$description.$t+'</p>'+ add);

          });

        });
}
