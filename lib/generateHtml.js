function generatehtml(data) {

    let cards = ''

    for (i = 0; i < data.length; i++) {
        let emp = data[i]
        if (emp.role === 'manager') {
            cards += ` <div class="card">
        <div class='top'>
            <h4><b>${emp.name}</b></h4>
            <i class="fas fa-mug-hot"></i>
            <span class="role">Manager</span>
        </div>

        <div class="bottom">
            <p class="bottom-item">id:${emp.id} </p>
            <p class="bottom-item">office number:${emp.phone}</p>
            <p class="bottom-item">email:${emp.email} </p>
        </div>
    </div>`
        } else if (emp.role === 'engineer') {
            cards += ` <div class="card">
        <div class='top'>
            <h4><b>${emp.name}</b></h4>
            <i class="fas fa-glasses"></i>
            <span class="role">Engineer</span>
        </div>

        <div class="bottom">
            <p class="bottom-item">id:${emp.id} </p>
            <p class="bottom-item">gitHub:${emp.gitHub}</p>
            <p class="bottom-item">email:${emp.email} </p>
        </div>
    </div>`
        } else {
            cards += ` <div class="card">
            <div class='top'>
                <h4><b>${emp.name}</b></h4>
                <i class="fas fa-graduation-cap"></i>
                <span class="role">Intern</span>
            </div>
    
            <div class="bottom">
                <p class="bottom-item">id:${emp.id} </p>
                <p class="bottom-item">school:${emp.school}</p>
                <p class="bottom-item">email:${emp.email} </p>
            </div>
        </div>`
        }
    }



    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>team profile</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 40%;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
        padding: 2px 16px;
    }
</style>
</head>

<body>

    <h1>team profile</h1>

    <div class="team-cards">
    ${cards}
    </div>

   

    <body>
        <script src="../index.js"></script>
    </body>

</html>`
}

module.exports = generatehtml