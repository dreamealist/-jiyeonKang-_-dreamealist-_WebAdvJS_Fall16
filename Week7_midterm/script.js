var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Lots of Programming Languages",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "A full pie chart to show off label collision detection and resolution.",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "70%",
		"pieOuterRadius": "59%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "1 celery stalk",
				"value": 264131,
				"color": "#d7ffcf"
			},
			{
				"label": "A small bunch of parsley",
				"value": 114384,
				"color": "#64a61f"
			},
			{
				"label": "Dandelion greens",
				"value": 121212,
				"color": "#8ff68a"
			},
			{
				"label": "Kiwi",
				"value": 32170,
				"color": "#12c514"
			},
			{
				"label": "1/2 small brocoli",
				"value": 80000,
				"color": "#209619"
			},
			{
				"label": "1/4 Cantaloupe",
				"value": 50000,
				"color": "#ffce3b"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	}
});
