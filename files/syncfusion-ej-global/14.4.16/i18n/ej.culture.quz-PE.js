ej.addCulture( "quz-PE", {
	name: "quz-PE",
	englishName: "Quechua (Peru)",
	nativeName: "runasimi (Peru)",
	language: "quz",
	numberFormat: {
		currency: {
			pattern: ["$ -n","$ n"],
			symbol: "S/."
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
				namesAbbr: ["Dom","Lun","Mar","Mié","Jue","Vie","Sab"],
				namesShort: ["D","L","M","X","J","V","S"]
			},
			months: {
				names: ["Qulla puquy","Hatun puquy","Pauqar waray","ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarq'a","Kapaq Raymi",""],
				namesAbbr: ["Qul","Hat","Pau","ayr","Aym","Int","Ant","Qha","Uma","Kan","Aya","Kap",""]
			},
			AM: ["a.m.","a.m.","A.M."],
			PM: ["p.m.","p.m.","P.M."],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, d MMMM, yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dddd, d MMMM, yyyy hh:mm tt",
				F: "dddd, d MMMM, yyyy hh:mm:ss tt",
				M: "d MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});
