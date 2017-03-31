REST-Service:

1. Schema erstellen
2. Routes erstellen http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/#ExpressJS-Routes
3. Auth0 implementieren
4. _ownerID einpflegen

Angular2

1. Schema erstellen
2. Services schreiben
3. Explorer Compnents anpassen
4. Insert, Modify, Delete (erst einmal über Buttons) implementieren
5. vor Tobi angeben

----
Alpha 0.1-a release und auf dem Server aufsetzen
### TODO

- CSS, Look and feel anpassen
- Bugfixing
- Features einpflegen
- Usability verbessern
- Bugfixing
- Style anpassen

- PDF generator programmieren -> java/python

- User wird ausgeloggt, sobald er sich auf einem anderen Client einloggt
-> nur einzelner Zugriff soll möglich sein (oder daten werden überall synchronisiert -> sockets? könnte kompliziert werden :(  )

### Mögliche Änderungen am Schema

```
  barcode: String,
	category: String,
	tags: [pa, ...]
	quantity: Number
	status [lager,angebot,verkauft] -> Reiter, um angebote reinzustellen
```

#### Schema
```var ItemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    department: String,
    description: String,
    gross_price: String,
    height_unit: String,
    manufacturer: String,
    rent: String,
    serialnumber: String,
    weight: String
*    note: String
*    isBox: Boolean
*    content: Array(Item)
});
```

### Ideen
###### Planungssoftware:  
- Zu mietende Teile werden zusätzlich in den Plan eingetragen
- wir sehen, was gerade im Lager verfügbar ist und was gemietet werden muss
- Datamining: was wurde wann, wie häufig verwendet. Was kann verkauft werden? ...
- Welche Anschaffungen lohnen sich?

###### Autocomplete an Hand der bisherigen Daten aus den Arrays (relativ einfach)

###### Anbindung an Shop
- über eine Flag "status" wird ein teil als "zu verkaufen" erfasst. Shopseite  kann sich die zu verkaufenden Teile aus der Datenbank laden und die Daten  aufbereiten

