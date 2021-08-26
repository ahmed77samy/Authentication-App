/**
 * set Meta Title In Page Component
 * @param {String} title 
 */
export function title (title) {
    document.title = title
}
/**
 * set Meta Description In Page Component
 * @param {String} description 
 */
export function description (description) {
    document.getElementById("meta-description").content = description
}