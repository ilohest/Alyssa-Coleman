<div class="boh-checklist">
  <h3 class="boh-checklist__title">CHECKLIST</h3>

  <ul class="boh-checklist__list">
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>A month’s worth of pre-planned profit activities (value: $50)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Welcome email script (value: $40)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Abandoned cart email script (value: $40)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Freebie workbook design (value: $40)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Quiz &amp; PDF lead magnet templates (value: $150)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>“Thank You” page scripts (value: $40)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>“Thank You” page design (in Canva Site) (value: $100)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>“Thank You” page design (in Leadpages) (value: $100)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Passive product sales page scripts (value: $50)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Passive product sales page designs (value: $50)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Sales page design (in Thrivecart) (value: $150)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Sales page design (in Leadpages) (value: $150)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Sales page design (in Canva) (value: $150)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Automated email marketing bundle (value: $200)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Email sequence automation (value: $50)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Project plans and workflows (value: $50)</span></li>
    <li><button type="button" class="box" aria-label="Toggle checklist item"></button><span>Pre-written launch copy and sales email scripts (value: $500)</span></li>
  </ul>
</div>

<style>
.boh-checklist {
  max-width: 700px;
  margin: auto;
  font-family: "Karla", sans-serif;
  padding: 50px;
  border: 1px solid #000;
}

.boh-checklist__title {
  margin-bottom: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-size: 50px;
  text-align: left;
  font-family: "AtKingBook";
  font-weight: 400;
  font-style: normal;
}

.boh-checklist__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.boh-checklist__list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 1.5;
}

/* checkbox */
.box {
  width: 18px;
  height: 18px;
  min-width: 18px;
  border: 1px solid #000;
  background: transparent;
  flex-shrink: 0;
  position: relative;
  transition: all 0.2s ease;
  padding: 0;
  margin: 3px 0 0 0;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
}

.box:hover {
  opacity: 0.75;
}

.box:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

/* checked state */
.box.checked {
  background: rgba(56, 13, 15, 1);
}

.box.checked::after {
  content: "✓";
  position: absolute;
  color: #fff;
  font-size: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}
</style>

<script>
(function () {
  const boxes = document.querySelectorAll(".boh-checklist .box");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.classList.toggle("checked");
      box.setAttribute(
        "aria-pressed",
        box.classList.contains("checked") ? "true" : "false",
      );
    });
  });

  function randomToggle() {
    if (!boxes.length) return;
    const randomBox = boxes[Math.floor(Math.random() * boxes.length)];
    randomBox.classList.toggle("checked");
    randomBox.setAttribute(
      "aria-pressed",
      randomBox.classList.contains("checked") ? "true" : "false",
    );
  }

  function loop() {
    randomToggle();
    const next = 400 + Math.random() * 1200;
    setTimeout(loop, next);
  }

  loop();
})();
</script>
