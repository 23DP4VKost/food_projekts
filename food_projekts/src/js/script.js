document.querySelectorAll(".nav-bar a").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", 
                block: "start",
            });
        }
    });
});

document.getElementById("download-button").addEventListener("click", function() {
    const link = document.createElement("a");
    
    link.href ="src/project_partiku_calculator.zip";
    link.download = "project_partiku_calculator.zip";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});