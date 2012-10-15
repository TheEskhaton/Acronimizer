var Acronimizer =(function(){
			var commonWords = ['the','of','to','and','a','in','is','it'];
			var acronimize= function(text){
				var words = text.split(' ');
				if(words.length >= 20){
					throw new Error("Length must be less than 20 words");
				}
				var output = '';
				var simple = simpleAcronimize(words);
				output = simple;
				return output;
			};

			/* Simple Acronimize  */
			/* excludes common words,returns first characters of words, uses 2 chars for words longer than 7  */
			var simpleAcronimize = function(words){
				var output = '';
				for (var i = 0; i < words.length; i++) {
					var word = words[i];
					if(commonWords.indexOf(word.toLowerCase()) != -1)
					{
						continue;
					}
					if(word.length > 7){
						output += word.charAt(0).toUpperCase()+word.charAt(1);
					}
					else {
						output += word.charAt(0).toUpperCase();
					}
					
				};
				return output;
			};

			return {
				acronimize : acronimize
			};
		}
	)();

console.log(Acronimizer.acronimize('Acronimizing words is so much fun'));

