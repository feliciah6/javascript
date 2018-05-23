console.log('start program')

const carPromise = new Promise(function(resolve, reject){
	
  setTimeout(function(){
reject("no range rover for you");
},10000)

})
carPromise.then(function(car){
console.log(car)
}).catch(function(error){
	console.log(error)
}).finally(function(){
console.log('request completed')
})

console.log('life moves on');
