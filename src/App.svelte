<script lang="ts">
  import "./app.css";
  import Footer from "./lib/footer/footer.svelte";
  import Header from "./lib/header/header.svelte";
  import Textarea from "./lib/textarea.svelte";

</script>

<main id="main" on:keydown={() => {document.getElementById("text").focus();}}>
  <Header/>
  
  <Textarea/>

  <Footer/>
</main>