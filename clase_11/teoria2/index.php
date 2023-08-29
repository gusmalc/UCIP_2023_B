<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <style>
        #resultado{
            min-height: 100px;
            border: 1px solid #ccc;
        }
        .form-control{
            border-radius: 0px;
        }
        .btn{
            border-radius: 0px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Repso JS</h1>
        <div class="row">

            <div class="col-md-6">
                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Palabra 1</label>
                        <input type="text" class="form-control miinput">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Palabre 2</label>
                        <input type="text" class="form-control miinput">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Palabre 3</label>
                        <input type="text" class="form-control miinput">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Palabre 4</label>
                        <input type="text" class="form-control miinput">
                    </div>
                    <div id="btn_frase" class="btn btn-primary">CREAR FRASE</div>
                </form>
            </div>

            <div class="col-md-6">
                <p>Frase</p>
                <div id="resultado"></div>
            </div>

        </div>
    </div>




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>

</body>

</html>