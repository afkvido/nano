<script lang="ts">
    import save from "./save";

    let state : "write" | "script" | "save" = "write";
    let Cache : string = getCache();
    let lastKey : string;

    function getCache () : string {
        return localStorage.getItem("nano-text") || " ";
    }

    async function setCache (value : string) {
        if (state === "write") 
        return localStorage.setItem("nano-text", value);
    }

    function clearCache () : string {
        localStorage.removeItem("nano-text");
        return "";
    }

    function update () {

        if (state === "save" && lastKey === "Enter") {
            save(Cache.replace("\n", ""), getCache());
            state = "write";
            Cache = getCache();

        } else if (state === "write" && Cache.includes("^q")) {
            Cache = clearCache();

        } else if (state === "write" && Cache.includes("^s")) {
            setCache(Cache.replace("^s", ""));
            state = "save";
            Cache = "";

        } else if (state === "write") {
            setCache(Cache);
        }
    }

</script>

<pre
    style="{(state === "save") ? "" : "display:none"}"
>File name to write:</pre>

<pre
    id="text"
    contenteditable="true"
    bind:textContent={Cache}
    on:input={update}
    on:keydown={ev => { lastKey = ev.key }}
>{Cache}</pre>


