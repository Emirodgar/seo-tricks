import json, urllib.request

spreadsheetID = "1PrRuSt-2IkZplJ3mwllo7YA3J025H65G0X46KtDJ4Wo"
finalUrl = "https://spreadsheets.google.com/feeds/list/" + str(spreadsheetID) + "/1/public/values?alt=json"

with urllib.request.urlopen(finalUrl) as url:
    data = json.loads(url.read().decode())
    with open('../../json/formulas.json', 'w') as f:
        json.dump(data, f)


finalUrl = "https://spreadsheets.google.com/feeds/list/" + str(spreadsheetID) + "/3/public/values?alt=json"

with urllib.request.urlopen(finalUrl) as url:
    data = json.loads(url.read().decode())
    with open('../../json/guides-talks.json', 'w') as f:
        json.dump(data, f)

finalUrl = "https://spreadsheets.google.com/feeds/list/" + str(spreadsheetID) + "/2/public/values?alt=json"

with urllib.request.urlopen(finalUrl) as url:
    data = json.loads(url.read().decode())
    with open('../../json/templates.json', 'w') as f:
        json.dump(data, f)

