<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Canvas tests</title>
    <style type = "text/css">
      body{
        margin: 0px;
        overflow: hidden;
        background-color: black;
      }
      
      

      

      .text{
        font-size: 20px;
        z-index: 2;
        position: absolute;
        color: rgba(255,255,255, .5);
        font-family: monospace;
        text-decoration: none;
        font-weight: normal;
        

        margin: 0; /* Reset margin */
        padding: 0; /* Reset padding */
        line-height: 1; /* Consistent line height */
        
      }
      .NumberOfBalls{bottom: 10px;left: 10px;}
      .Author{top: 10px;left: 10px;}
      .Code{bottom:10px; right:10px;}
      .ClickToStart{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px 40px;
      }
      .Reset{
        top: 10px;right: 10px;
      }
      

      .Hover:hover{
        color: rgba(255,255,255, 1);
      }

    </style>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
  </head>
  <body>
    <!-- <button onclick="ResetSimulation()">Click Me</button> -->
    <h1 class="text Reset Hover"  onclick="ResetSimulation()">Reset</h1>
    <h1 class="text NumberOfBalls" id = 'NumberOfBalls' ></h1>
    <h1 class="text Author" > By Alex Ochoa</h1>
    <h1 class="text ClickToStart " id="ClickToStart" > ClickToStart</h1>
    <a class = "text Code Hover" href="https://github.com/Alex1234560/Alex1234560.github.io/tree/main"> Code(click)</a>
    
    <canvas></canvas>
    
    <script src="index.js"></script>
  </body>
</html>
