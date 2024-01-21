const textClip = (text: string) => {
    if (text.length < 20) return text
    return text.substring(0, 20) + "..."
    // eger textin boyu 20 den buyukse texti 20den sonra kırpıp 3 nokta ekler.
}

export default textClip