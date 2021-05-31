var twoMarker = {
		"meta": {
			"createdBy": "Area Learning - AR.js 1.7.2",
			"createdAt": "2021-05-27T09:19:18.944Z"
		},
		"trackingBackend": "artoolkit",
		"subMarkersControls": [
			{
				"parameters": {
					"type": "pattern",
					"patternUrl": "markers/celtich.patt"
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
					"patternUrl": " markers/celticu.patt"
				},
				"poseMatrix": [
					0.9983683714251296,
					-0.05700397248461356,
					0.0033167802061521996,
					0,
					0.05699044306951575,
					0.9983665177842321,
					0.004039333590914232,
					0,
					-0.0035416188773450354,
					-0.003843716787445664,
					0.9999867254203216,
					0,
					1.3710490716001253,
					-0.1251971259056665,
					-1.3245284626605842,
					1
				]
			},
			{
				"parameters": {
					"type": "pattern",
					"patternUrl": " markers/likeaboss.patt"
				},
				"poseMatrix": [
					0.9781002758667728,
					-0.2075690546899366,
					0.015321854125110725,
					0,
					0.20798253206359593,
					0.9775435075050364,
					-0.033935813225407764,
					0,
					-0.007933751661791857,
					0.036379288374246775,
					0.9993069763558825,
					0,
					-1.3272936211017483,
					0.011364989285005112,
					-1.3429438337827655,
					1
				]
			}
		]
	}
	
	localStorage.setItem("twoMarkerFile", JSON.stringify(twoMarker));
