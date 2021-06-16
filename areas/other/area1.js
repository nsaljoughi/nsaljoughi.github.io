var oneMarker = {
		"meta": {
			"createdBy": "Area Learning - AR.js 1.7.2",
			"createdAt": "2021-05-27T09:18:31.097Z"
		},
		"trackingBackend": "artoolkit",
		"subMarkersControls": [
			{
				"parameters": {
					"type": "pattern",
					"patternUrl": "markers/hiro.patt"
				},
				"poseMatrix": [
					1,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"parameters": {
					"type": "pattern",
					"patternUrl": " markers/kanji.patt"
				},
				"poseMatrix": [
					0.9994046123234787,
					-0.033008253708913964,
					0.010047211589671874,
					0,
					0.033109001332494205,
					0.9994015067574332,
					-0.010032147029656222,
					0,
					-0.009710055879391616,
					0.010358829933189017,
					0.9998990072695274,
					0,
					1.3739590324012843,
					0.08375414137531637,
					0.7022200805191919,
					1
				]
			},
			{
				"parameters": {
					"type": "pattern",
					"patternUrl": " markers/pattern-marker.patt"
				},
				"poseMatrix": [
					0.9998544313767938,
					-0.0069468581291661485,
					0.015576266516284852,
					0,
					0.0063229947658812275,
					0.9991897881109753,
					0.03974970843614252,
					0,
					-0.015839778897474587,
					-0.03964544507279256,
					0.9990882070660425,
					0,
					0.29220346022723565,
					-0.10187734830282266,
					2.3735481634268494,
					1.0000000000000002
				]
			}
		]
	}	
	localStorage.setItem("oneMarkerFile", JSON.stringify(oneMarker));
