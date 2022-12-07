let cache : string = "starter conent";

export function setupKeyboard () {
    document.addEventListener("keydown", ev => {
        if (ev.key === "Backspace") { cache = cache.substring(0, cache.length - 1) }
        else { cache += ev.key; }
    });
}

export function keyboard () {
    

    return cache;
}