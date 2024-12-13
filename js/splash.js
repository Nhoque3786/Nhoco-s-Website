fetch('assets/splashes.txt')
  .then(response => response.text())
  .then(data => {
    const splash = data.split('\n').filter(line => line.trim() !== '');
    var x = Math.floor((Math.random() * splash.length));
    document.getElementById("splashtxt").innerHTML = splash[x];
  })
  .catch(error => {
    console.error('Erro ao carregar os splashes:', error);
    document.getElementById("splashtxt").innerHTML = "Erro ao carregar splash text :(";
  });