<script lang="ts">
    import save from "./save";

    let state : "write" | "script" | "save" = "write";
    let Cache : string = getCache();
    let lastKey : string = "";

    function updateKey (ev : KeyboardEvent) {
        lastKey = ev.key;
    }

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
        if (Cache.includes("^q")) {
            Cache = clearCache();

        } else if (Cache.includes("^s")) {
            Cache = Cache.replace("^s", "");
            save(prompt("File name to write: "), Cache);
        }

        
        else
            setCache(Cache);
    }

</script>


<pre
    id="text"
    contenteditable="true"
    bind:textContent={Cache}
    on:input={update}
    on:keydown={updateKey}
>{Cache}</pre>


