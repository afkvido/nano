<script lang="ts">
  import "./app.css";
  import Footer from "./lib/footer/footer.svelte";
  import Header from "./lib/header/header.svelte";
  import { keyboard, setupKeyboard } from "./lib/keyboard";
  import Textarea from "./lib/textarea.svelte";

  setupKeyboard();
</script>

<main id="main">
  <Header/>

  
  <Textarea
  content={keyboard()}
  />

  <Footer/>
</main>