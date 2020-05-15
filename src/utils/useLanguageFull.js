export const useLanguageFull = (shortLanguage) => {
    switch (shortLanguage) {
        case "de":
            shortLanguage = shortLanguage + '-de'
            break;
        case "en":
            shortLanguage = shortLanguage + '-gb'
            break;

        default:
            break;
    }
    return shortLanguage

}

export default useLanguageFull