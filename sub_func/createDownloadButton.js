export function createDownloadButton(){
    let downloadButton = document.getElementById("download");
    
    if (downloadButton != null){
        return downloadButton;
    } else {
        let downloadButton = document.createElement("button");
        downloadButton.setAttribute("id","download");
        body.append(downloadButton);
        return downloadButton;
    }
}