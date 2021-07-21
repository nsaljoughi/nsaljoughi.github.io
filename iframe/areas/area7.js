var sevenMarker = {
	"meta": {
		"createdBy": "Area Learning - AR.js 1.7.2",
		"createdAt": "2021-07-21T10:41:40.520Z"
	},
	"trackingBackend": "artoolkit",
	"subMarkersControls": [
		{
			"parameters": {
				"type": "pattern",
				"patternUrl": "markers/kanji.patt"
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
				"patternUrl": " markers/hiro.patt"
			},
			"poseMatrix": [
				0.9980517844824792,
				-0.06231265663413189,
				0.0030929827879920815,
				0,
				0.06233819493080834,
				0.998014586395557,
				-0.00899624761085048,
				0,
				-0.0025262609079722146,
				0.009171531295064447,
				0.9999549712962026,
				0,
				1.3968471658916828,
				-0.14149125367300092,
				-0.0634915546323719,
				1
			]
		},
		{
			"parameters": {
				"type": "pattern",
				"patternUrl": " markers/pattern-marker_d.patt"
			},
			"poseMatrix": [
				0.9977855459776013,
				-0.0661439719030496,
				0.007010258516622471,
				0,
				0.06588667598961027,
				0.9973097034252684,
				0.03213185744649663,
				0,
				-0.00911672745144347,
				-0.03159881975970279,
				0.9994590658220525,
				0,
				1.4110629469198817,
				-0.21643816460512263,
				1.301780361126519,
				1
			]
		}
	]
}

	localStorage.setItem("sevenMarkerFile", JSON.stringify(sevenMarker));
