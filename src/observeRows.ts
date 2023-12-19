export function observeRows(): void {
    document.getElementsByClassName('container')[0].childNodes.forEach(
        (item, key) => {
            item.childNodes.length
            // @ts-ignore
            item.getElementsByClassName('boxFixed').length
            // @ts-ignore
            if (item.childNodes.length === item.getElementsByClassName('boxFixed').length) {
                removeRowFixed(key);
            }
        }
    )
}