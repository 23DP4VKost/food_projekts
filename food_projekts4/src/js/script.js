document.getElementById("download-button").addEventListener("click", function() {
    const link = document.createElement("a");
    
    link.href = "src/project_partiku_calculator.zip";
    link.download = "project_partiku_calculator.zip";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});