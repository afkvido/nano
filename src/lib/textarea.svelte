<script lang="ts">
    import { keyboard } from "./keyboard";


    export let content : string;
</script>


<pre
    id="text"
    contenteditable="true"
    bind:innerHTML={content}
    on:keydown={keyboard}
/>