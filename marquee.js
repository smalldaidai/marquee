(function(){
	var marqueeSheet = null;
	var keyFrameIndex = 0;
    var speed = 20;
	marquee = function(id,type){
		
		this.getMarqueeSheet = function(){

			if(marqueeSheet != null)
				return marqueeSheet;

			var style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML = '';
			document.getElementsByTagName('head')[0].appendChild(style);
			marqueeSheet = document.styleSheets[document.styleSheets.length-1];

			return marqueeSheet;

		}

		this.getKeyFrameIndex = function(){

			return ++keyFrameIndex;

		}


		this.init = function(){
			
			var element = document.getElementById(id);
			var className = element.getAttribute("class");
			if(className){
				className = className + " " + "-marquee-outter";
			}else{
				className = "-marquee-outter";
			}

			element.setAttribute("class",className);
			var span = document.createElement("span");
			span.innerText = element.innerText;
			span.setAttribute("class","-marquee-inner");
			element.innerText = '';
			element.appendChild(span);
			if(span.offsetWidth <= element.clientWidth)
				return;

			var length = span.offsetWidth - element.clientWidth;

			this.ruleIndex = this.getKeyFrameIndex();
			
			var rule = "@keyframes " + "marquee-" + this.ruleIndex + " \n";
			rule = rule + "{\n";
			rule = rule + "	0% {left:0;}\n";
			rule = rule + "	50% {left:-" + length + "px;}\n";
			rule = rule + "	100% {left:0;}\n";
			rule = rule + "}";


			this.getMarqueeSheet().insertRule(rule,0);

			span.style.animationName = "marquee-" + this.ruleIndex;
			span.style.animationDuration = Math.floor(length/speed) + "s";
			span.style.animationIterationCount = 'infinite';
			span.style.animationTimingFunction = 'linear';
		}

		this.init();
	}
})();