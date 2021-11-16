var config = {
	settings:{
        hasHeaders: true,
        showPopoutIcon: false,
       
    },
    dimensions:{
        headerHeight:40,
        borderWidth: 7,
    },
	content: [{
		type: 'row',
        
		content: [{
			type: 'component',
			componentName: 'gridComponent',
            width: 35,

			title: 'ProblemStatement',
            isClosable: false,
			componentState: {
				html: getContent('#problem'),
			}
		},
        {
        type: 'row',
        
		content: [{
			type: 'component',
			componentName: 'gridComponent',
			title: 'code.cpp',
            width: 40,
            isClosable: false,
			componentState: {
				html: getContent('#goldenify-a'),
			}
		}, {
			type: 'column',
            
            width:25,
          
			content: [{
				type: 'component',
                
				componentName: 'gridComponent',
				title: 'input.txt',
                isClosable: false,
				componentState: {
					html: getContent('#goldenify-b')
				}
			}, {
				type: 'stack',
                isClosable: false,
                content: [{
				type: 'component',
				componentName: 'gridComponent',
				title: 'output.txt',
                isClosable: false,
				componentState: {
					html: getContent('#goldenify-c')}
                },
                {
                type:'component',
				componentName: 'gridComponent',
                title: 'compare',
                isClosable: false,
				componentState: {
					html: getContent('#goldenify-d')},
                }]
			}]
		}]
	}]
    }]
};

var myLayout = new GoldenLayout(config,$("#mydiv"));

myLayout.registerComponent('gridComponent', function(container, componentState) {
	container.getElement().html(componentState.html);
});


myLayout.init();

function getContent(selector) {
	var $el = $(selector);
	var html = $el.html();

	$el.remove();

	return html;
}


/*
myLayout.on("stackCreated", (stack) => {
        const maximizeElement = stack.element.find(".lm_maximise")[0];
        stack.on("maximised", () => {
          console.log("is maximized here");
        });
        stack.on("minimised", () => {
          console.log("is minimized here");
        });
      });
*/
