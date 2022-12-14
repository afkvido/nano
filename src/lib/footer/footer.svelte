<script lang="ts">
  import "./footer.css";


  let FooterText = "[^s] Save \t [^q] Quit";
  let FooterEditable = false;

</script>


<div id="footer" align="center">
  <pre
    id="fpre"
    contenteditable={FooterEditable}
    >{FooterText}
  </pre>
</div>