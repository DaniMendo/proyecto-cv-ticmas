
document.getElementById('informacion-adicional').addEventListener('click',function myFunction() {
    var x = document.getElementById('myOL');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
})
document.getElementById('resInPer').addEventListener('click', function(){
const collection = document.getElementsByClassName("resp", "expLab");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}
});
document.getElementById('default').addEventListener('click', function(){
  const collection = document.getElementsByClassName("resp");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "#0715B9";
  }
  });
