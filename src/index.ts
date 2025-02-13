
<!doctype html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
<meta name="viewport"
content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Flex vs Grid</title>
<style>
body {
    margin: 0;
}

section {
    height: 100vh;
}
.section-flex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
center {
    text-align: center;
}
sides {
    text-align: center;
}

</style>
</head>
<body>

<section class="section-flex">
    <div>
        <h3>Levá strana</h3>
</div>
<div class="center">
    <h1>Toto je Flex</h1>
<p>Zde je místo pro text</p>
</div>
<div>
<h3>Pravá strana</h3>
</div>
</section>

<section class="section-grid">
    <div>
        <h3>Levá strana</h3>
</div>
<div class="sides">
    <h1>Toto je Grid</h1>
<p>Zde je text</p>
</div>
<div>
<h3>Pravá strana</h3>
</div>
</section>


</body>
</html>
