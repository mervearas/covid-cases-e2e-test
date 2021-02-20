export function convertNumber(num) {
    // https://blog.abelotech.com/posts/number-currency-formatting-javascript/
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
