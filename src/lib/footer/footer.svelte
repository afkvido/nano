<script lang="ts">
  import "./footer.css";


  let FooterText = "[^S] Save \t [^Q] Quit";
  let FooterEditable = false;

</script>


<div id="footer" align="center">
  <pre
    id="fpre"
    contenteditable={FooterEditable}
    >{FooterText}
  </pre>
</div>