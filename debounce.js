function debounce(func, delay) {
	delay=delay || 1000; //setting default value for delay
	let debounceTimer;
	return function() {
		const context=this;
		const args=arguments;
		//this is too clear the previous debounce settimeout timer
		clearTimeout(debounceTimer);
		debounceTimer=setTimeout(()=>func.apply(context, args), delay);
	}
}

function test(a){
  console.log("Test function called using debounce with args=",a);
}

testD = debounce(test);
testD("test-args");
