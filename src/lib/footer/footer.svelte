<script lang="ts">
  import "./footer.css";
  import save from "../save";
    import { get } from "svelte/store";


  let FileName = "";

  let FooterText = "[^S] Save \t [^Q] Quit";
  let FooterEditable = false;

  function SaveFile () {
    FooterText = "File name to write: ";
    FooterEditable = true;
  }

  function Save (ev : KeyboardEvent) {
    if (ev.key === "Enter") {
      save(FileName, document.getElementById("text").innerText)
      FooterEditable = false;
      FooterText = "[^S] Save \t [^Q] Quit";
    }

    else if (ev.key === "Backspace")
      FileName = FileName.substring(0, FileName.length - 1);

    else if (ev.key.length === 1)
      FileName += ev.key
  }
</script>


<div id="footer" align="center">
  <pre
    on:click={SaveFile}
    contenteditable={FooterEditable}
    on:keydown={Save}>
    {FooterText}
  </pre>
</div>