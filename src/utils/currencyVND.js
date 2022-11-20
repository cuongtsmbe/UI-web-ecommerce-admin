export function formatVND(number) {
    var result=undefined;
    if(Number.isInteger(number))
    result = number.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })   
    return result;
}