<script lang="ts">
    import save from "./save";

    let state : "write" | "script" | "save" = "write";
    let Cache : string = getCache();

    function getCache () : string {
        return localStorage.getItem("nano-text") || "";
    }

    async function setCache (value : string) {
        if (state === "write")
        localStorage.setItem("nano-text", value);
    }

    function clearCache () : string {
        localStorage.removeItem("nano-text");
        return "";
    }

    function update () {

        if (state === "save" && Cache.endsWith("\n")) {
            save(Cache.replace("\n", ""), getCache());
            state = "write";
            Cache = getCache();

        } else if (state === "save" && Cache.endsWith("^q")) {
            state = "write";
            Cache = getCache();

        } else if (state === "write" && Cache.endsWith("^q")) {
            Cache = clearCache();

        } else if (state === "write" && Cache.endsWith("^s")) {
            setCache(Cache.replace("^s", ""));
            state = "save";
            Cache = "";

        } else if (state === "write") {
            setCache(Cache);
        }
    }

</script>


{#if (state === "save")}
<pre>
    [^q] to cancel.
    File name to write:
</pre>
{/if}


<textarea
    id="text"
    contenteditable="true"
    bind:value={Cache}
    on:input={update}
/>


