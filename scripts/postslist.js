function deletePost(cardID){
    var element = document.getElementById(cardID);
    element.parentNode.removeChild(element);
}