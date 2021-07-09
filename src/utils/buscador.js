var result = localStorage;

buttonIndex.addEventListener("click", function() {
    result.setItem("rs", buttonIndex.value)
})

function results_recovery() {
    buttonIndex,
    value = result.getItem("rs")
    return result
}

export default results_recovery