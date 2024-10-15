window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Create a confetti effect using a basic confetti library
// Add the confetti library script
var confettiScript = document.createElement("script");
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1";
document.head.appendChild(confettiScript);

// When the script loads, run the confetti function
confettiScript.onload = function() {
    // Confetti settings
    var duration = 5 * 1000;  // 5 seconds duration
    var end = Date.now() + duration;

    (function frame() {
        // Create random confetti burst
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        // Keep creating confetti while duration is ongoing
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

}

};
