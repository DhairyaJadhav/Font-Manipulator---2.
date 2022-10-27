function setup()
{
    video = createCapture(VIDEO);
    video.size(400,400);
   
    canvas = createCanvas(400,400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized and loaded");
}

    function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+"rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("lefttwrist_x = "+results[0].pose.lefttWrist.x+"leftwrist_y = "+results[0].pose.lefttWrist.y);
    }

}

function draw()
{
    background("#5196e3");
}