<script lang="ts">
  import "./footer.css";
  import save from "../save";

  let f = {
    name: "E",
    content: "X"
  }


  let FooterText = "[^S] Save \t [^Q] Quit";
  let FooterEditable = false;


  function SaveFile () {
    FooterText = "File name to write: ";
    FooterEditable = true;
    document.getElementById("fpre").focus();
  }

  function Save (ev : KeyboardEvent) {
    if (ev.key === "Enter") {
      save(f.name, f.content)
      FooterEditable = false;
      FooterText = "[^S] Save \t [^Q] Quit";
    }

    else if (ev.key === "Backspace")
      f.name = f.name.substring(0, f.name.length - 1);

    else if (ev.key.length === 1)
      f.name += ev.key
  }

</script>


<div id="footer" align="center">
  <pre
    id="fpre"
    contenteditable={FooterEditable}
    {FooterText}>
  </pre>
</div>