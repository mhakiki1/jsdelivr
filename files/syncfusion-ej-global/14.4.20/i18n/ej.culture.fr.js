ej.addCulture( "fr", {
	name: "fr",
	englishName: "French",
	nativeName: "français",
	language: "fr",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "Non numérique",
		negativeInfinity: "-Infini",
		positiveInfinity: "+Infini",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],
				namesAbbr: ["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],
				namesShort: ["di","lu","ma","me","je","ve","sa"]
			},
			months: {
				names: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],
				namesAbbr: ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});
