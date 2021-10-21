var male = document.getElementById("male")
    var female = document.getElementById("female")
    var cr = document.querySelector('.carousel-inner')
    $.getJSON("https://storage.frangky.me/ppcp.json",
      function (data) {
        const random_ppcp = data[Math.floor(Math.random() * data.length)]
        cr.innerHTML = `
        <div class="carousel-item">
        <img src="${random_ppcp.female}" class="d-block w-100" alt="Female">
        <div class="carousel-caption d-md-block">
        <h9>Female</h9>
        <a href="${random_ppcp.female}" target="_blank"download=true>Download</a>

        </div>
        </div>
        <div class="carousel-item active">
        <img src="${random_ppcp.male}" class="d-block w-100" alt="Male">
        <div class="carousel-caption d-md-block">
        <h9>Male</h9>
        <a href="${random_ppcp.male}" target="_blank"download=true>Download</a>
        </div>
        </div>
        `
      })
