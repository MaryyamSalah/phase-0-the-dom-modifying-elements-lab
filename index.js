const element = document.getElementById('main');
element.remove();

const newHeader = document.createElement("h1");
newHeader.id='victory';
newHeader.textContent = "Maryam is is the champion";
document.body.append(newHeader);