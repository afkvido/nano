<script lang="ts">

    let Cache : string = fromCache();

    function fromCache () : string {
        return localStorage.getItem("nano-text") || "null";
    }

    function updateCache () {
        localStorage.setItem("nano-text", Cache)
    }



</script>


<pre
    id="text"
    contenteditable="true"
    bind:innerHTML={Cache}
    on:input={updateCache}
>{Cache}</pre>