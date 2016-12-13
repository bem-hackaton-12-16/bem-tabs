block('tabs')(
	js()(true),
	match(function() {
		return this.ctx.tabs && this.ctx.tabs.length
	})(
		content()(function() {
			var tabs = this.ctx.tabs;
			return [
				{
					elem: 'heads',
					content: tabs.map(function(tab, i) {
						return {
							elem: 'tab',
							js: {
								index: i 
							},
							elemMods: !i ? {active: 'yes'} : '',
							content: tab.title
						}
					})
				},
				{
					elem: 'panes',
					content: tabs.map(function(tab, i) {
						return {
							elem: 'pane',
							js: {
								index: i 
							},
							elemMods: !i ? {active: 'yes'} : '',
							content: tab.content
						}
					})
				}
			];	
		})
	)
);
