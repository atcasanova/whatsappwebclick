(() => {
	
	const callback = (mutationList) => {
		messages = targetNode.querySelectorAll('.message-in span.selectable-text > span, .message-out span.selectable-text > span');

		for (let i = messages.length; --i >= 0; ) {
			const message = messages[i];
			var str=message.textContent.replace(/\s|\(|\)|-/g,'');

		if(/^[0-9]{8,11}$/.test(str)) {
				if (message.querySelector('a') != null) {
					// we reached an already processed message
					break;
				}

				// add link
				var tamanho=str.length;

				switch(tamanho){
					case 8:
						var pad=55619;
						break;
					case 9:
						var pad=5561;
						break;
					case 10:
						var pad=55;
						break;
					case 11:
						var pad=55;
						break;
				}

				console.log(message.textContent+" encontrado e alterado com "+pad);
				message.innerHTML="<a href=\"http://wa.me/" + pad + str + "\" title=\"http://wa.me/" + pad + str +"\" target=\"_blank\" rel=\"noopener noreferrer\">"+message.textContent+"</a>";
				
			}
		}
	};

	const targetNode = document.querySelector('.two>div:last-child');
	const observerOptions = {
		childList: true,
		attributes: false,
		subtree: true
	};

	const observer = new MutationObserver(callback);
	observer.observe(targetNode, observerOptions);
})();
