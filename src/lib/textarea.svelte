<script lang="ts">
    import save from "./save";



    let Cache : string = fromCache();

    function fromCache () : string {
        return localStorage.getItem("nano-text") || "null";
    }

    function updateCache () {
        if (Cache.includes("^q")) {
            Cache = clearCache();
        } else if (Cache.includes("^s")) {
            save("filename.txt", Cache);
            Cache = Cache.replace("^s", "");
        }

        
        else
            localStorage.setItem("nano-text", Cache);
    }

    function clearCache () : string {
        localStorage.removeItem("nano-text");
        return "";
    }



</script>


<pre
    id="text"
    contenteditable="true"
    bind:innerHTML={Cache}
    on:input={updateCache}
>{Cache}</pre>