function navigateToPage(){
    const selectElement = document.getElementById("pageSelect")
    const selectedValue = selectElement.value

    window.location.href = selectedValue;
}