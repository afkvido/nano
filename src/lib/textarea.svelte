<script lang="ts">

    let Text : string = fromCache();

    function fromCache () : string {
        return localStorage.getItem("nano-text") || "null";
    }

    function updateCache () {
        localStorage.setItem("nano-text", Text)
    }



</script>


<pre
    id="text"
    contenteditable="true"
    bind:innerHTML={Text}
    on:input={updateCache}
>{Text}</pre>