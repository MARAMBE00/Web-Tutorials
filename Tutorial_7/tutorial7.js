function getRadioValue(radioArray) {
    var i;
    for(i=0; i<radioArray.length; i++) {
        if(radioArray[i].checked) {
            return radioArray[i].value;
        }
    }
    return "";
}

function getSelectedValue(selectList) {
    return selectList[selectList.selectedIndex].value;
}

function CheckOptions(formData) {
    var selectedOption = getSelectedValue(formData.bouquetOptions);
    //alert(selectedOption);
    if(selectedOption == "withChampagne"){
        document.images[0].src = "images/white-gift.jpeg";
        document.images[1].src = "images/pink-gift.jpeg";
        document.images[2].src = "images/red-gift.jpeg";
    }
 
    var chosenBouquet = getRadioValue(formData.colour);
    //alert(chosenBouquet);
    displayBouquet(chosenBouquet);
}

function displayBouquet(bouquet) {
    //alert(bouquet);

    switch(bouquet){
        case "white":
            document.getElementById("order").innerHTML = document.getElementById("product1").innerHTML;
            break;
        case "pink":
            document.getElementById("order").innerHTML = document.getElementById("product2").innerHTML;
            break;
        case "red":
            document.getElementById("order").innerHTML = document.getElementById("product3").innerHTML;
            break;
        default:
            document.getElementById("order").innerHTML="";
            break;
    }
}

function resetOrder(){
    //images needs to be reset to the ones without champaign
    document.images[0].src="images/white.jpeg";
    document.images[1].src="images/pink.jpeg";
    document.images[2].src="images/red.jpeg";
    //empty the order div
    document.getElementById("order").innerHTML="";
}
