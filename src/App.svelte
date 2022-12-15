<script lang="ts">
  import "./app.css";
  import Footer from "./lib/footer/footer.svelte";
  import Header from "./lib/header/header.svelte";
  import Textarea from "./lib/textarea.svelte";

  document.addEventListener("keydown", event => {
    document.getElementById('text').focus();
  });
</script>

<main id="main">
  <Header/>
  
  <Textarea/>

  <Footer/>
</main>