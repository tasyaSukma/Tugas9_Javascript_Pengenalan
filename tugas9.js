var angkaGenap = []
var j = 0;

console.log("Variabel Objek sebelum pemberian nilai = ",angkaGenap)

for(i=1; i<15; i++){
	if(i%2 == 0){
		angkaGenap[j] = i;		
		console.log("Penambahan pada object ke [",j,"]", " dengan nilai ", i)
		j++
	}
}
console.log("Setelah penambahan")
for(i=0; i<angkaGenap.length; i++){
	console.log("Object ke[",i,"] dengan nilai ", angkaGenap[i])
}