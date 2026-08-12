/**
 * Biological Illustration Engine for Zenith Empire Study App
 * Contains custom, hand-drawn style SVG illustrations for all biology topics.
 * Every SVG renders with a transparent background, hand-drawn sketchy ink strokes,
 * serif/monospace labels, thin dashed leader lines, and selective gold/red highlights.
 */

window.getBiologicalDiagramExt = function(caption, alt, block) {
  const norm = (caption + " " + (alt || "")).toLowerCase();

  // Helper for generating standard handwritten-style header inside SVGs
  const sketchStyles = `
    <style>
      .ink-stroke { stroke: #1E293B; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
      .ink-stroke-thick { stroke: #1E293B; stroke-width: 2.8; stroke-linecap: round; stroke-linejoin: round; }
      .ink-stroke-thin { stroke: #1E293B; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
      .red-ink { stroke: #cc3f3f; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
      .red-fill { fill: #cc3f3f; }
      .gold-ink { stroke: #B8841A; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
      .gold-fill { fill: #B8841A; }
      .teal-ink { stroke: #0FA8A0; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
      .sketch-text { font-family: "Georgia", serif; font-size: 10px; fill: #1E293B; }
      .sketch-text-bold { font-family: "Georgia", serif; font-size: 10.5px; font-weight: bold; fill: #1E293B; }
      .sketch-text-small { font-family: "Georgia", serif; font-size: 8.5px; fill: #708090; }
      .leader-line { stroke: #708090; stroke-width: 0.8; stroke-dasharray: 2,2; }
    </style>
  `;

  // --- SECTION 1: MICROBIOLOGY ---

  // 1. Bacteriophage (T4 Phage)
  if (norm.includes("bacteriophage") || norm.includes("t4 phage") || norm.includes("figure 1.2.2a")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- icosahedral head -->
  <polygon points="200,30 235,50 235,90 200,110 165,90 165,50" class="ink-stroke" />
  <!-- coiled DNA inside -->
  <path d="M 185,60 Q 200,45 215,60 T 200,80 T 185,80 T 200,100" class="red-ink" />
  <!-- collar & sheath -->
  <line x1="180" y1="110" x2="220" y2="110" class="ink-stroke-thick" />
  <rect x="193" y="110" width="14" height="65" class="ink-stroke" />
  <!-- sheaths rings -->
  <line x1="193" y1="125" x2="207" y2="125" class="ink-stroke-thin" />
  <line x1="193" y1="140" x2="207" y2="140" class="ink-stroke-thin" />
  <line x1="193" y1="155" x2="207" y2="155" class="ink-stroke-thin" />
  <line x1="193" y1="170" x2="207" y2="170" class="ink-stroke-thin" />
  <!-- baseplate & tail fibers -->
  <polygon points="185,175 215,175 220,180 180,180" fill="#1E293B" class="ink-stroke" />
  <path d="M 185,175 L 150,210 L 120,255" class="ink-stroke" />
  <path d="M 185,175 L 160,225 L 135,275" class="ink-stroke" />
  <path d="M 215,175 L 250,210 L 280,255" class="ink-stroke" />
  <path d="M 215,175 L 240,225 L 265,275" class="ink-stroke" />
  <!-- labels -->
  <path d="M 235,65 L 300,65" class="leader-line" /><circle cx="235" cy="65" r="2.5" class="gold-fill" />
  <text x="305" y="68" class="sketch-text-bold">Capsid Head (Protein)</text>
  <path d="M 200,80 L 110,80" class="leader-line" /><circle cx="200" cy="80" r="2.5" class="red-fill" />
  <text x="35" y="83" class="sketch-text-bold" fill="#cc3f3f">Viral DNA (Genome)</text>
  <path d="M 207,140 L 290,140" class="leader-line" /><circle cx="207" cy="140" r="2.5" class="gold-fill" />
  <text x="295" y="143" class="sketch-text">Contractile Sheath</text>
  <path d="M 150,210 L 70,210" class="leader-line" /><circle cx="150" cy="210" r="2.5" class="gold-fill" />
  <text x="10" y="213" class="sketch-text">Tail Fibers (Anchoring)</text>
</svg>`;
  }

  // 2. Tobacco Mosaic Virus (TMV)
  if (norm.includes("tobacco mosaic") || norm.includes("tmv") || norm.includes("figure 1.2.2b")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Central core axis -->
  <line x1="200" y1="40" x2="200" y2="280" class="leader-line" />
  <!-- Spiral RNA helix -->
  <path d="M 200,260 C 180,240 180,220 200,200 C 220,180 220,160 200,140 C 180,120 180,100 200,80 C 220,60 210,45 195,30 Q 180,15 200,5" class="red-ink" />
  <!-- Layered protein capsomeres stacked -->
  <g class="ink-stroke">
    <ellipse cx="155" cy="220" rx="16" ry="8" />
    <ellipse cx="185" cy="225" rx="16" ry="8" />
    <ellipse cx="215" cy="225" rx="16" ry="8" />
    <ellipse cx="245" cy="220" rx="16" ry="8" />
    <ellipse cx="150" cy="180" rx="16" ry="8" />
    <ellipse cx="180" cy="185" rx="16" ry="8" />
    <ellipse cx="210" cy="185" rx="16" ry="8" />
    <ellipse cx="240" cy="180" rx="16" ry="8" />
    <ellipse cx="155" cy="140" rx="16" ry="8" />
    <ellipse cx="185" cy="145" rx="16" ry="8" />
    <ellipse cx="215" cy="145" rx="16" ry="8" />
    <ellipse cx="245" cy="140" rx="16" ry="8" />
  </g>
  <!-- labels -->
  <path d="M 195,30 L 110,30" class="leader-line" /><circle cx="195" cy="30" r="2.5" class="red-fill" />
  <text x="30" y="33" class="sketch-text-bold" fill="#cc3f3f">SS-RNA Molecule</text>
  <path d="M 155,140 L 70,140" class="leader-line" /><circle cx="155" cy="140" r="2.5" class="gold-fill" />
  <text x="10" y="143" class="sketch-text">Capsomere subunits</text>
  <path d="M 245,220 L 310,220" class="leader-line" /><circle cx="245" cy="220" r="2.5" class="gold-fill" />
  <text x="315" y="223" class="sketch-text-bold">Crystalline Capsid</text>
</svg>`;
  }

  // 3. Lytic and Lysogenic Cycles
  if (norm.includes("lytic") || norm.includes("lysogenic") || norm.includes("figure 1.2.4")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Host cell bacterium -->
  <rect x="30" y="50" width="140" height="90" rx="20" class="ink-stroke" />
  <text x="100" y="35" class="sketch-text-bold" text-anchor="middle">1. Lytic Pathway (Lysis)</text>
  <!-- viral DNA replication inside -->
  <circle cx="60" cy="95" r="10" class="red-ink" />
  <circle cx="100" cy="80" r="8" class="red-ink" />
  <circle cx="140" cy="100" r="12" class="red-ink" />
  <text x="100" y="125" class="sketch-text-small" text-anchor="middle">Host cells replicates phages, then bursts</text>

  <!-- Lysogenic host cell -->
  <rect x="230" y="50" width="140" height="90" rx="20" class="ink-stroke" />
  <text x="300" y="35" class="sketch-text-bold" text-anchor="middle">2. Lysogenic Pathway (Dormant)</text>
  <!-- integrated viral DNA -->
  <path d="M 260,95 Q 300,75 340,95" class="ink-stroke-thin" />
  <path d="M 290,87 Q 300,82 310,87" class="red-ink" />
  <text x="300" y="125" class="sketch-text-small" text-anchor="middle">Prophage DNA integrates into chromosome</text>
  
  <!-- cycle connector lines -->
  <path d="M 170,95 Q 200,95 230,95" class="gold-ink" />
  <polygon points="220,90 230,95 220,100" class="gold-fill" />
  <text x="200" y="85" class="sketch-text-small" text-anchor="middle">Integration</text>
</svg>`;
  }

  // 4. Typical Bacterial Cell (Prokaryote)
  if (norm.includes("bacterial cell") || norm.includes("figure 1.3.2")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Outer capsule boundary -->
  <rect x="85" y="65" width="230" height="140" rx="70" class="ink-stroke-thick" stroke-dasharray="3,1" />
  <!-- Cell wall -->
  <rect x="91" y="71" width="218" height="128" rx="64" class="ink-stroke" />
  <!-- Plasma membrane -->
  <rect x="96" y="76" width="208" height="118" rx="58" class="teal-ink" />
  <!-- Flagellum -->
  <path d="M 315,135 C 345,135 365,110 375,140 S 395,160 390,190" class="ink-stroke" />
  <!-- Circular DNA / Nucleoid (No Nuclear Membrane!) -->
  <path d="M 130,125 Q 160,100 180,135 T 220,115 T 240,145 T 190,155 T 150,145 Z" class="red-ink" />
  <!-- Plasmids -->
  <circle cx="125" cy="155" r="9" class="gold-ink" />
  <!-- Ribosomes -->
  <circle cx="120" cy="100" r="1.5" class="red-fill" />
  <circle cx="150" cy="175" r="1.5" class="red-fill" />
  <circle cx="260" cy="155" r="1.5" class="red-fill" />
  <!-- Labels -->
  <path d="M 110,65 L 45,35" class="leader-line" /><circle cx="110" cy="65" r="2.5" class="gold-fill" />
  <text x="5" y="30" class="sketch-text">Capsule (Slime layer)</text>
  <path d="M 170,120 L 170,25" class="leader-line" /><circle cx="170" cy="120" r="2.5" class="red-fill" />
  <text x="130" y="18" class="sketch-text-bold" fill="#cc3f3f">Nucleoid (Free circular DNA)</text>
  <path d="M 125,155 L 60,240" class="leader-line" /><circle cx="125" cy="155" r="2.5" class="gold-fill" />
  <text x="10" y="253" class="sketch-text-bold">Plasmid (Resistance ring)</text>
  <path d="M 315,135 L 350,90" class="leader-line" /><circle cx="315" cy="135" r="2.5" class="gold-fill" />
  <text x="330" y="80" class="sketch-text">Flagellum (Motility)</text>
</svg>`;
  }

  // 5. Four Shapes of Bacteria
  if (norm.includes("shapes of bacteria") || norm.includes("figure 1.3.3")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <line x1="200" y1="20" x2="200" y2="300" class="leader-line" />
  <line x1="20" y1="160" x2="380" y2="160" class="leader-line" />
  <!-- Cocci -->
  <circle cx="100" cy="60" r="10" class="ink-stroke" />
  <circle cx="118" cy="60" r="10" class="ink-stroke" />
  <circle cx="109" cy="74" r="10" class="ink-stroke" />
  <text x="110" y="115" class="sketch-text-bold" text-anchor="middle">1. Coccus (Spherical)</text>
  <text x="110" y="130" class="sketch-text-small" text-anchor="middle">e.g. Staphylococcus</text>
  <!-- Bacilli -->
  <rect x="270" y="55" width="45" height="15" rx="7.5" class="ink-stroke" />
  <rect x="290" y="75" width="45" height="15" rx="7.5" class="ink-stroke" />
  <text x="300" y="115" class="sketch-text-bold" text-anchor="middle">2. Bacillus (Rod)</text>
  <text x="300" y="130" class="sketch-text-small" text-anchor="middle">e.g. Escherichia coli</text>
  <!-- Spirilla -->
  <path d="M 70,230 Q 90,210 110,230 T 150,230" class="ink-stroke" />
  <text x="110" y="275" class="sketch-text-bold" text-anchor="middle">3. Spirillum (Spiral)</text>
  <text x="110" y="290" class="sketch-text-small" text-anchor="middle">e.g. Treponema pallidum</text>
  <!-- Vibrios -->
  <path d="M 270,220 C 290,225 300,245 285,255" class="ink-stroke" />
  <circle cx="285" cy="255" r="1.5" class="red-fill" /> <!-- flagellum base -->
  <path d="M 285,255 C 290,270 275,280 290,290" class="ink-stroke-thin" />
  <text x="300" y="210" class="sketch-text-bold" text-anchor="middle">4. Vibrio (Comma-shaped)</text>
  <text x="300" y="275" class="sketch-text-small" text-anchor="middle">e.g. Vibrio cholerae</text>
</svg>`;
  }

  // 6. Binary Fission Stages
  if (norm.includes("binary fission") || norm.includes("figure 1.3.5a")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Stage 1 -->
  <rect x="20" y="40" width="100" height="45" rx="15" class="ink-stroke" />
  <path d="M 50,60 Q 70,50 80,65 T 60,70 Z" class="red-ink" />
  <text x="70" y="105" class="sketch-text-bold" text-anchor="middle">1. DNA Replicates</text>
  <!-- Stage 2 -->
  <rect x="150" y="40" width="120" height="45" rx="15" class="ink-stroke" />
  <path d="M 170,60 Q 185,50 190,65 T 180,70 Z" class="red-ink" />
  <path d="M 220,60 Q 235,50 240,65 T 230,70 Z" class="red-ink" />
  <text x="210" y="105" class="sketch-text-bold" text-anchor="middle">2. Cell Elongates</text>
  <!-- Stage 3 -->
  <path d="M 20,180 C 40,180 50,195 50,200 C 50,205 40,220 20,220 L 100,220 C 80,220 70,205 70,200 C 70,195 80,180 100,180 Z" class="ink-stroke" />
  <path d="M 35,200 Q 42,190 45,200 Z" class="red-ink" />
  <path d="M 75,200 Q 82,190 85,200 Z" class="red-ink" />
  <text x="60" y="245" class="sketch-text-bold" text-anchor="middle">3. Cleavage furrow</text>
  <!-- Stage 4 -->
  <rect x="150" y="180" width="90" height="40" rx="15" class="ink-stroke" />
  <rect x="260" y="180" width="90" height="40" rx="15" class="ink-stroke" />
  <path d="M 185,200 Q 195,190 200,205 Z" class="red-ink" />
  <path d="M 295,200 Q 305,190 310,205 Z" class="red-ink" />
  <text x="250" y="245" class="sketch-text-bold" text-anchor="middle">4. Two Daughter Cells</text>
</svg>`;
  }

  // 7. Fungi: Septate vs Aseptate Hyphae and Mushroom
  if (norm.includes("fungi") || norm.includes("hyphae") || norm.includes("figure 1.4.2") || norm.includes("septate")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Septate hypha -->
  <line x1="20" y1="50" x2="180" y2="50" class="ink-stroke" />
  <line x1="20" y1="90" x2="180" y2="90" class="ink-stroke" />
  <line x1="70" y1="50" x2="70" y2="90" class="ink-stroke" stroke-dasharray="2,2" />
  <line x1="130" y1="50" x2="130" y2="90" class="ink-stroke" stroke-dasharray="2,2" />
  <circle cx="45" cy="70" r="4" class="red-fill" />
  <circle cx="100" cy="70" r="4" class="red-fill" />
  <circle cx="155" cy="70" r="4" class="red-fill" />
  <text x="100" y="35" class="sketch-text-bold" text-anchor="middle">Septate Hypha (with walls)</text>

  <!-- Aseptate hypha -->
  <line x1="20" y1="130" x2="180" y2="130" class="ink-stroke" />
  <line x1="20" y1="170" x2="180" y2="170" class="ink-stroke" />
  <circle cx="40" cy="150" r="4" class="red-fill" />
  <circle cx="80" cy="150" r="4" class="red-fill" />
  <circle cx="120" cy="150" r="4" class="red-fill" />
  <circle cx="160" cy="150" r="4" class="red-fill" />
  <text x="100" y="115" class="sketch-text-bold" text-anchor="middle">Aseptate Hypha (coenocytic)</text>

  <!-- Mushroom Structure -->
  <g class="ink-stroke">
    <!-- Cap -->
    <path d="M 240,110 C 240,60 360,60 360,110 Z" fill="#B8841A" fill-opacity="0.1" />
    <!-- Gills -->
    <path d="M 240,110 L 360,110" />
    <line x1="260" y1="110" x2="260" y2="120" />
    <line x1="280" y1="110" x2="280" y2="123" />
    <line x1="300" y1="110" x2="300" y2="125" />
    <line x1="320" y1="110" x2="320" y2="123" />
    <line x1="340" y1="110" x2="340" y2="120" />
    <!-- Stalk -->
    <path d="M 290,110 L 285,210 Q 300,215 315,210 L 310,110" />
  </g>
  <!-- Labels -->
  <path d="M 330,85 L 385,85" class="leader-line" /><circle cx="330" cy="85" r="2.5" class="gold-fill" />
  <text x="390" y="88" class="sketch-text">Cap (Pileus)</text>
  <path d="M 300,120 L 385,145" class="leader-line" /><circle cx="300" cy="120" r="2.5" class="gold-fill" />
  <text x="390" y="148" class="sketch-text">Gills (Basidia)</text>
  <path d="M 300,180 L 385,200" class="leader-line" /><circle cx="300" cy="180" r="2.5" class="gold-fill" />
  <text x="390" y="203" class="sketch-text">Stalk (Stipe)</text>
</svg>`;
  }


  // --- SECTION 2: PLANT KINGDOM ---

  // 8. Plant Kingdom Classification Tree
  if (norm.includes("classification tree") || norm.includes("diagram 2.1")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <rect x="130" y="10" width="140" height="25" rx="5" class="ink-stroke-thick" />
  <text x="200" y="26" class="sketch-text-bold" text-anchor="middle">PLANT KINGDOM</text>
  
  <!-- Branches -->
  <path d="M 200,35 L 200,60 L 80,60 L 80,95" class="ink-stroke" />
  <path d="M 200,60 L 320,60 L 320,95" class="ink-stroke" />

  <!-- Non-Vascular -->
  <rect x="20" y="95" width="120" height="30" rx="4" class="ink-stroke" />
  <text x="80" y="114" class="sketch-text" text-anchor="middle">Non-Vascular (Bryophytes)</text>
  <text x="80" y="145" class="sketch-text-small" text-anchor="middle">e.g., Moss, Liverwort</text>

  <!-- Vascular -->
  <rect x="260" y="95" width="120" height="30" rx="4" class="ink-stroke" stroke="#0FA8A0" />
  <text x="320" y="114" class="sketch-text-bold" text-anchor="middle">Vascular (Tracheophytes)</text>

  <!-- Vascular Branches -->
  <path d="M 320,125 L 320,165 M 320,165 L 230,165 L 230,200" class="ink-stroke" />
  <path d="M 320,165 L 370,165 L 370,200" class="ink-stroke" />

  <!-- Pteridophytes -->
  <rect x="180" y="200" width="100" height="30" rx="4" class="ink-stroke" />
  <text x="230" y="219" class="sketch-text" text-anchor="middle">Ferns (Pteridophytes)</text>

  <!-- Spermatophytes -->
  <rect x="295" y="200" width="100" height="30" rx="4" class="ink-stroke" stroke="#cc3f3f" />
  <text x="345" y="219" class="sketch-text-bold" text-anchor="middle">Seed-bearing</text>
  <text x="345" y="245" class="sketch-text-small" text-anchor="middle">Gymnosperms & Angiosperms</text>
</svg>`;
  }

  // 9. Spirogyra (Diagram 2.2a)
  if (norm.includes("spirogyra") || norm.includes("diagram 2.2a")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Two cylindrical cell structures -->
  <rect x="80" y="50" width="240" height="100" class="ink-stroke-thick" />
  <line x1="200" y1="50" x2="200" y2="150" class="ink-stroke" stroke-dasharray="3,3" /> <!-- cross wall -->
  
  <!-- Spiral chloroplasts ribbon in Cell 1 -->
  <path d="M 90,130 Q 110,70 130,130 T 170,130 T 195,110" class="teal-ink" stroke-width="4" />
  <!-- Pyrenoid dots along the chloroplast -->
  <circle cx="110" cy="100" r="3.5" class="gold-fill" />
  <circle cx="150" cy="100" r="3.5" class="gold-fill" />
  <circle cx="180" cy="115" r="3.5" class="gold-fill" />

  <!-- Spiral chloroplasts ribbon in Cell 2 -->
  <path d="M 210,130 Q 230,70 250,130 T 290,130 T 315,110" class="teal-ink" stroke-width="4" />
  <circle cx="230" cy="100" r="3.5" class="gold-fill" />
  <circle cx="270" cy="100" r="3.5" class="gold-fill" />

  <!-- Suspended nucleus in Cell 1 -->
  <circle cx="145" cy="100" r="8" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.1" />
  <circle cx="145" cy="100" r="2" class="red-fill" />
  <!-- Cytoplasmic strands -->
  <line x1="145" y1="92" x2="145" y2="50" class="ink-stroke-thin" stroke-dasharray="1,1" />
  <line x1="145" y1="108" x2="145" y2="150" class="ink-stroke-thin" stroke-dasharray="1,1" />
  <line x1="137" y1="100" x2="80" y2="100" class="ink-stroke-thin" stroke-dasharray="1,1" />
  <line x1="153" y1="100" x2="200" y2="100" class="ink-stroke-thin" stroke-dasharray="1,1" />

  <!-- Labels -->
  <path d="M 200,100 L 200,20" class="leader-line" /><circle cx="200" cy="100" r="2.5" class="gold-fill" />
  <text x="165" y="15" class="sketch-text-bold">Septum (Cross-wall)</text>
  <path d="M 110,100 L 40,100" class="leader-line" /><circle cx="110" cy="100" r="2.5" class="gold-fill" />
  <text x="5" y="115" class="sketch-text">Pyrenoid (Starch maker)</text>
  <path d="M 130,130 L 70,185" class="leader-line" /><circle cx="130" cy="130" r="2.5" class="gold-fill" />
  <text x="5" y="200" class="sketch-text-bold" fill="#0FA8A0">Spiral Chloroplast</text>
  <path d="M 145,100 L 145,235" class="leader-line" /><circle cx="145" cy="100" r="2.5" class="red-fill" />
  <text x="110" y="250" class="sketch-text-bold" fill="#cc3f3f">Central Nucleus</text>
  <path d="M 320,100 L 350,100" class="leader-line" /><circle cx="320" cy="100" r="2.5" class="gold-fill" />
  <text x="355" y="103" class="sketch-text">Cellulose Wall</text>
</svg>`;
  }

  // 10. Chlamydomonas (Diagram 2.2b)
  if (norm.includes("chlamydomonas") || norm.includes("diagram 2.2b")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Unicellular pear-shaped body -->
  <path d="M 200,60 C 140,110 140,240 200,260 C 260,240 260,110 200,60 Z" class="ink-stroke-thick" fill="#2ECC71" fill-opacity="0.03" />
  
  <!-- Flagella (Two long whip-like hairs at the apex) -->
  <path d="M 195,65 Q 160,20 120,30" class="ink-stroke" />
  <path d="M 205,65 Q 240,20 280,30" class="ink-stroke" />

  <!-- Cup-shaped Chloroplast filling base -->
  <path d="M 155,140 C 150,220 170,250 200,250 C 230,250 250,220 245,140 C 235,170 215,180 200,180 C 185,180 165,170 155,140 Z" class="teal-ink" stroke-width="2.5" />
  
  <!-- Nucleus in the cup cavity -->
  <circle cx="200" cy="140" r="10" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.08" />
  <circle cx="200" cy="140" r="2.5" class="red-fill" />

  <!-- Pyrenoid in chloroplast base -->
  <circle cx="200" cy="220" r="7" class="gold-ink" />
  <circle cx="200" cy="220" r="2.5" class="gold-fill" />

  <!-- Contractile vacuoles at flagella base -->
  <circle cx="190" cy="80" r="4" class="ink-stroke-thin" />
  <circle cx="210" cy="80" r="4" class="ink-stroke-thin" />

  <!-- Eyespot (Stigma) -->
  <circle cx="165" cy="115" r="3" class="red-fill" />

  <!-- Labels -->
  <path d="M 160,20 L 120,55" class="leader-line" /><circle cx="160" cy="20" r="2.5" class="gold-fill" />
  <text x="35" y="65" class="sketch-text-bold">Whip-like Flagella</text>
  <path d="M 165,115 L 60,115" class="leader-line" /><circle cx="165" cy="115" r="2.5" class="red-fill" />
  <text x="10" y="128" class="sketch-text-bold" fill="#cc3f3f">Eyespot (Photoreceptor)</text>
  <path d="M 200,140 L 320,140" class="leader-line" /><circle cx="200" cy="140" r="2.5" class="red-fill" />
  <text x="325" y="143" class="sketch-text">Nucleus (Haploid)</text>
  <path d="M 235,180 L 320,195" class="leader-line" /><circle cx="235" cy="180" r="2.5" class="gold-fill" />
  <text x="325" y="200" class="sketch-text-bold" fill="#0FA8A0">Cup-shaped Chloroplast</text>
  <path d="M 200,220 L 290,265" class="leader-line" /><circle cx="200" cy="220" r="2.5" class="gold-fill" />
  <text x="295" y="278" class="sketch-text">Pyrenoid (Starch body)</text>
</svg>`;
  }

  // 11. Moss Plant / Funaria (Diagram 2.3a)
  if (norm.includes("moss") || norm.includes("funaria") || norm.includes("diagram 2.3a")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Gametophyte at the bottom -->
  <path d="M 200,260 L 200,180" class="ink-stroke-thick" stroke="#2ECC71" />
  <!-- rhizoids anchoring bottom -->
  <path d="M 200,260 Q 185,280 180,290" class="ink-stroke-thin" />
  <path d="M 200,260 Q 200,285 205,295" class="ink-stroke-thin" />
  <path d="M 200,260 Q 215,275 220,285" class="ink-stroke-thin" />
  <!-- leaves on gametophyte -->
  <path d="M 200,240 Q 185,230 175,235 M 200,240 Q 215,230 225,235" class="ink-stroke" />
  <path d="M 200,210 Q 180,200 170,210 M 200,210 Q 220,200 230,210" class="ink-stroke" />
  <path d="M 200,190 Q 185,180 180,185 M 200,190 Q 215,180 220,185" class="ink-stroke" />

  <!-- Sporophyte growing from top -->
  <!-- Long slender seta (stalk) -->
  <path d="M 200,180 L 200,70" class="ink-stroke" stroke="#B8841A" />
  <!-- Capsule at apex -->
  <ellipse cx="200" cy="60" rx="12" ry="16" class="ink-stroke" fill="#B8841A" fill-opacity="0.1" />
  <!-- Lid/Operculum -->
  <path d="M 188,52 C 190,45 210,45 212,52 Z" class="ink-stroke" />

  <!-- Labels -->
  <path d="M 200,280 L 290,280" class="leader-line" /><circle cx="200" cy="280" r="2.5" class="gold-fill" />
  <text x="295" y="283" class="sketch-text">Rhizoids (Anchor/Absorb)</text>
  <path d="M 180,210 L 105,210" class="leader-line" /><circle cx="180" cy="210" r="2.5" class="gold-fill" />
  <text x="10" y="213" class="sketch-text-bold">Gametophyte (n, leafy)</text>
  <path d="M 200,120 L 105,120" class="leader-line" /><circle cx="200" cy="120" r="2.5" class="gold-fill" />
  <text x="10" y="123" class="sketch-text">Seta (Stalk)</text>
  <path d="M 200,60 L 290,60" class="leader-line" /><circle cx="200" cy="60" r="2.5" class="red-fill" />
  <text x="295" y="63" class="sketch-text-bold" fill="#cc3f3f">Capsule (2n Sporophyte)</text>
</svg>`;
  }

  // 12. Marchantia / Liverwort (Diagram 2.3b)
  if (norm.includes("marchantia") || norm.includes("liverwort") || norm.includes("diagram 2.3b")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Flat prostrate dichotomously branched thallus body -->
  <path d="M 150,220 C 100,190 90,140 120,110 C 150,110 170,140 180,160 C 190,140 210,110 240,110 C 270,140 260,190 210,220 Z" class="ink-stroke-thick" fill="#2ECC71" fill-opacity="0.05" />
  
  <!-- Gemma cups on dorsal surface -->
  <ellipse cx="145" cy="145" rx="8" ry="4" class="ink-stroke" fill="#B8841A" fill-opacity="0.2" />
  <ellipse cx="215" cy="145" rx="8" ry="4" class="ink-stroke" fill="#B8841A" fill-opacity="0.2" />
  
  <!-- Rhizoids anchoring ventral surface (underneath) -->
  <path d="M 180,215 C 170,250 160,270 155,280" class="ink-stroke-thin" stroke-dasharray="2,2" />
  <path d="M 180,215 C 180,250 185,270 190,285" class="ink-stroke-thin" stroke-dasharray="2,2" />
  <path d="M 180,215 C 190,250 205,270 210,280" class="ink-stroke-thin" stroke-dasharray="2,2" />

  <!-- Labels -->
  <path d="M 120,110 L 40,80" class="leader-line" /><circle cx="120" cy="110" r="2.5" class="gold-fill" />
  <text x="5" y="65" class="sketch-text-bold">Dichotomous lobe</text>
  <path d="M 145,145 L 40,145" class="leader-line" /><circle cx="145" cy="145" r="2.5" class="gold-fill" />
  <text x="5" y="132" class="sketch-text-bold" fill="#B8841A">Gemma Cup (Asexual)</text>
  <path d="M 180,180 L 300,180" class="leader-line" /><circle cx="180" cy="180" r="2.5" class="gold-fill" />
  <text x="305" y="183" class="sketch-text">Flat Thallus Body (n)</text>
  <path d="M 185,250 L 300,250" class="leader-line" /><circle cx="185" cy="250" r="2.5" class="gold-fill" />
  <text x="305" y="253" class="sketch-text">Unicellular Rhizoids</text>
</svg>`;
  }

  // 13. Fern Plant (Diagram 2.4)
  if (norm.includes("fern") || norm.includes("diagram 2.4")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Horizontal Underground Rhizome (Stem) -->
  <path d="M 100,240 C 150,245 250,245 300,240" class="ink-stroke-thick" />
  <!-- Adventitious roots branching down -->
  <path d="M 150,242 Q 145,265 140,285 M 180,243 Q 185,268 180,290 M 240,243 Q 235,270 245,295" class="ink-stroke-thin" />
  
  <!-- Coiled young leaf (Crozier / Fiddlehead) -->
  <path d="M 140,240 Q 135,180 145,160 Q 155,145 150,135 T 140,145 T 145,155" class="ink-stroke" stroke-width="2" />

  <!-- Fully expanded dissected leaf (Frond) -->
  <path d="M 230,240 Q 240,130 200,50" class="ink-stroke-thick" stroke="#2ECC71" />
  <!-- Leaf pinnae leaflets -->
  <path d="M 235,200 Q 265,190 270,195 M 235,200 Q 205,190 200,195" class="ink-stroke" />
  <path d="M 237,160 Q 267,145 272,150 M 237,160 Q 207,145 202,150" class="ink-stroke" />
  <path d="M 235,120 Q 265,100 270,105 M 235,120 Q 205,100 200,105" class="ink-stroke" />
  <path d="M 225,80 Q 250,65 255,70 M 225,80 Q 195,65 190,70" class="ink-stroke" />

  <!-- Sori dots annotated on the side -->
  <circle cx="260" cy="150" r="2.5" class="red-fill" />
  <circle cx="264" cy="153" r="1.5" class="red-fill" />

  <!-- Labels -->
  <path d="M 140,145 L 60,145" class="leader-line" /><circle cx="140" cy="145" r="2.5" class="gold-fill" />
  <text x="5" y="132" class="sketch-text-bold">Crozier (Coiled leaf)</text>
  <path d="M 210,120 L 305,120" class="leader-line" /><circle cx="210" cy="120" r="2.5" class="gold-fill" />
  <text x="310" y="123" class="sketch-text-bold" fill="#cc3f3f">Frond (Mature sporophyte)</text>
  <path d="M 260,150 L 305,160" class="leader-line" /><circle cx="260" cy="150" r="2.5" class="red-fill" />
  <text x="310" y="163" class="sketch-text">Sorus (with Spores)</text>
  <path d="M 200,242 L 305,250" class="leader-line" /><circle cx="200" cy="242" r="2.5" class="gold-fill" />
  <text x="310" y="253" class="sketch-text">Underground Rhizome</text>
  <path d="M 180,265 L 100,285" class="leader-line" /><circle cx="180" cy="265" r="2.5" class="gold-fill" />
  <text x="5" y="295" class="sketch-text">Adventitious Roots</text>
</svg>`;
  }

  // 14. Pinus / Pine Tree (Diagram 2.5a)
  if (norm.includes("pinus") || norm.includes("pine tree") || norm.includes("diagram 2.5a")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Pine branch woody -->
  <path d="M 50,160 Q 150,155 300,145" class="ink-stroke-thick" />
  
  <!-- Cluster of needle-like leaves (fascicles) -->
  <path d="M 100,158 L 80,100 M 100,158 L 120,100 M 100,158 L 100,90" class="ink-stroke" stroke="#2ECC71" />
  <path d="M 200,153 L 180,95 M 200,153 L 220,95 M 200,153 L 200,85" class="ink-stroke" stroke="#2ECC71" />

  <!-- Large woody female cone -->
  <g class="ink-stroke">
    <path d="M 220,150 C 230,170 250,210 230,230 C 210,210 210,170 220,150 Z" fill="#B8841A" fill-opacity="0.15" />
    <path d="M 215,170 Q 235,175 240,185 M 212,190 Q 232,195 235,205" />
  </g>

  <!-- Small male cone cluster -->
  <ellipse cx="140" cy="145" rx="8" ry="12" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.2" />
  <ellipse cx="148" cy="148" rx="6" ry="10" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.2" />

  <!-- Labels -->
  <path d="M 100,90 L 40,90" class="leader-line" /><circle cx="100" cy="90" r="2.5" class="gold-fill" />
  <text x="5" y="75" class="sketch-text-bold">Needle-like leaves</text>
  <path d="M 140,135 L 60,135" class="leader-line" /><circle cx="140" cy="135" r="2.5" class="red-fill" />
  <text x="5" y="123" class="sketch-text">Male Cone (Pollen)</text>
  <path d="M 230,190 L 305,190" class="leader-line" /><circle cx="230" cy="190" r="2.5" class="gold-fill" />
  <text x="310" y="193" class="sketch-text-bold" fill="#B8841A">Female Cone (Seed)</text>
</svg>`;
  }

  // 15. Cycas (Diagram 2.5b)
  if (norm.includes("cycas") || norm.includes("diagram 2.5b")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Unbranched thick palm-like trunk -->
  <path d="M 180,310 L 185,180 L 215,180 L 220,310" class="ink-stroke-thick" />
  <!-- leaf scars on trunk -->
  <path d="M 185,280 Q 200,275 215,280 M 185,250 Q 200,245 215,250 M 185,210 Q 200,205 215,210" class="ink-stroke" />

  <!-- Crown of large pinnate feather-like leaves at top -->
  <path d="M 185,180 Q 120,110 70,120" class="ink-stroke" stroke="#2ECC71" stroke-width="2" />
  <path d="M 185,180 Q 140,90 100,70" class="ink-stroke" stroke="#2ECC71" stroke-width="2" />
  <path d="M 215,180 Q 280,110 330,120" class="ink-stroke" stroke="#2ECC71" stroke-width="2" />
  <path d="M 215,180 Q 260,90 300,70" class="ink-stroke" stroke="#2ECC71" stroke-width="2" />

  <!-- Large central cone megasporophyll -->
  <ellipse cx="200" cy="165" rx="14" ry="25" class="ink-stroke" fill="#B8841A" fill-opacity="0.25" />

  <!-- Labels -->
  <path d="M 100,70 L 40,70" class="leader-line" /><circle cx="100" cy="70" r="2.5" class="gold-fill" />
  <text x="5" y="55" class="sketch-text-bold">Pinnate Crown</text>
  <path d="M 200,165 L 295,165" class="leader-line" /><circle cx="200" cy="165" r="2.5" class="gold-fill" />
  <text x="300" y="168" class="sketch-text-bold" fill="#B8841A">Central Megasporophyll Cone</text>
  <path d="M 200,240 L 295,240" class="leader-line" /><circle cx="200" cy="240" r="2.5" class="gold-fill" />
  <text x="300" y="243" class="sketch-text">Unbranched Trunk with scars</text>
</svg>`;
  }

  // 16. Monocot vs Dicot (Diagram 2.6)
  if (norm.includes("monocot") || norm.includes("dicot") || norm.includes("diagram 2.6")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <line x1="200" y1="20" x2="200" y2="300" class="leader-line" />
  <text x="100" y="30" class="sketch-text-bold" text-anchor="middle" fill="#cc3f3f">MONOCOTYLEDON</text>
  <text x="300" y="30" class="sketch-text-bold" text-anchor="middle" fill="#0FA8A0">DICOTYLEDON</text>

  <!-- Monocot side -->
  <!-- parallel venation leaf -->
  <path d="M 40,120 Q 100,100 160,120 Q 100,140 40,120 Z" class="ink-stroke" />
  <line x1="40" y1="120" x2="160" y2="120" class="ink-stroke-thin" />
  <line x1="50" y1="117" x2="150" y2="117" class="ink-stroke-thin" stroke-dasharray="2,2" />
  <line x1="50" y1="123" x2="150" y2="123" class="ink-stroke-thin" stroke-dasharray="2,2" />
  <text x="100" y="155" class="sketch-text-small" text-anchor="middle">Parallel Venation</text>
  <!-- fibrous roots -->
  <path d="M 100,200 L 100,210" class="ink-stroke-thick" />
  <path d="M 100,210 L 70,250 M 100,210 L 100,260 M 100,210 L 130,250" class="ink-stroke-thin" />
  <text x="100" y="275" class="sketch-text-small" text-anchor="middle">Fibrous Root System</text>

  <!-- Dicot side -->
  <!-- reticulate venation leaf -->
  <path d="M 240,120 Q 300,90 360,120 Q 300,150 240,120 Z" class="ink-stroke" />
  <line x1="240" y1="120" x2="360" y2="120" class="ink-stroke-thin" />
  <path d="M 280,113 L 290,120 M 300,120 L 315,110 M 270,120 L 285,127" class="ink-stroke-thin" />
  <text x="300" y="155" class="sketch-text-small" text-anchor="middle">Reticulate (Net) Venation</text>
  <!-- tap root -->
  <path d="M 300,200 L 300,250" class="ink-stroke-thick" />
  <path d="M 300,215 L 280,225 M 300,230 L 320,240 M 300,240 L 290,250" class="ink-stroke-thin" />
  <text x="300" y="275" class="sketch-text-small" text-anchor="middle">Tap Root System</text>
</svg>`;
  }

  // 17. Visual Summary: Five Divisions (Diagram 2.8)
  if (norm.includes("visual summary") || norm.includes("diagram 2.8") || norm.includes("five divisions")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Syllabus Guide: Five Divisions of Plant Kingdom</text>
  <!-- Grid layout for five small sketches -->
  <g class="ink-stroke-thin" stroke-opacity="0.3">
    <line x1="80" y1="40" x2="80" y2="280" />
    <line x1="160" y1="40" x2="160" y2="280" />
    <line x1="240" y1="40" x2="240" y2="280" />
    <line x1="320" y1="40" x2="320" y2="280" />
  </g>

  <!-- 1. Algae -->
  <rect x="10" y="100" width="60" height="15" class="ink-stroke-thin" />
  <path d="M 15,107 Q 35,100 55,107" class="teal-ink" />
  <text x="40" y="235" class="sketch-text-bold" text-anchor="middle">Algae</text>
  <text x="40" y="250" class="sketch-text-small" text-anchor="middle">Thallo.</text>

  <!-- 2. Bryophyte -->
  <ellipse cx="120" cy="100" rx="6" ry="10" class="gold-ink" />
  <line x1="120" y1="110" x2="120" y2="130" class="ink-stroke" />
  <text x="120" y="235" class="sketch-text-bold" text-anchor="middle">Moss</text>
  <text x="120" y="250" class="sketch-text-small" text-anchor="middle">Bryo.</text>

  <!-- 3. Pteridophyte -->
  <path d="M 200,130 Q 205,90 190,70" class="ink-stroke" />
  <path d="M 201,110 L 210,105 M 197,100 L 190,95" class="ink-stroke-thin" />
  <text x="200" y="235" class="sketch-text-bold" text-anchor="middle">Fern</text>
  <text x="200" y="250" class="sketch-text-small" text-anchor="middle">Pterido.</text>

  <!-- 4. Gymnosperm -->
  <polygon points="280,75 270,110 290,110" class="ink-stroke" />
  <text x="280" y="235" class="sketch-text-bold" text-anchor="middle">Pine</text>
  <text x="280" y="250" class="sketch-text-small" text-anchor="middle">Gymno.</text>

  <!-- 5. Angiosperm -->
  <circle cx="360" cy="90" r="12" class="red-ink" fill="#cc3f3f" fill-opacity="0.1" />
  <line x1="360" y1="102" x2="360" y2="130" class="ink-stroke" />
  <text x="360" y="235" class="sketch-text-bold" text-anchor="middle">Flower</text>
  <text x="360" y="250" class="sketch-text-small" text-anchor="middle">Angio.</text>
</svg>`;
  }


  // --- SECTION 3: ANIMAL KINGDOM ---

  // 18. Symmetry: Radial vs Bilateral (Diagram 3.1a)
  if (norm.includes("symmetry") || norm.includes("diagram 3.1a")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <line x1="200" y1="20" x2="200" y2="300" class="leader-line" />
  <text x="100" y="30" class="sketch-text-bold" text-anchor="middle" fill="#B8841A">RADIAL (Jellyfish/Starfish)</text>
  <text x="300" y="30" class="sketch-text-bold" text-anchor="middle" fill="#cc3f3f">BILATERAL (Flatworm/Human)</text>

  <!-- Radial Side: Starfish with multiple symmetry lines -->
  <g class="ink-stroke" transform="translate(100, 150)">
    <!-- Sketched 5-point star -->
    <path d="M 0,-40 L 10,-10 L 40,-10 L 15,10 L 25,40 L 0,20 L -25,40 L -15,10 L -40,-10 L -10,-10 Z" fill="#B8841A" fill-opacity="0.1" />
    <!-- Planes of symmetry dashed -->
    <line x1="0" y1="-50" x2="0" y2="50" class="red-ink" stroke-dasharray="3,3" />
    <line x1="-45" y1="-32" x2="45" y2="32" class="red-ink" stroke-dasharray="3,3" />
    <line x1="-45" y1="32" x2="45" y2="-32" class="red-ink" stroke-dasharray="3,3" />
  </g>
  <text x="100" y="260" class="sketch-text-small" text-anchor="middle">Cut along ANY central plane</text>
  <text x="100" y="275" class="sketch-text-small" text-anchor="middle">for identical halves</text>

  <!-- Bilateral Side: Planarian showing single plane -->
  <g class="ink-stroke" transform="translate(300, 150)">
    <!-- Planarian elongated shape with eyespots -->
    <path d="M 0,-50 C -15,-40 -15,-10 -15,20 C -15,40 -5,50 0,60 C 5,50 15,40 15,20 C 15,-10 15,-40 0,-50 Z" fill="#cc3f3f" fill-opacity="0.08" />
    <circle cx="-4" cy="-35" r="1.5" fill="#1E293B" />
    <circle cx="4" cy="-35" r="1.5" fill="#1E293B" />
    <!-- Single symmetry plane -->
    <line x1="0" y1="-60" x2="0" y2="70" class="red-ink" stroke-dasharray="3,3" />
  </g>
  <text x="300" y="260" class="sketch-text-small" text-anchor="middle">ONLY ONE plane (sagittal)</text>
  <text x="300" y="275" class="sketch-text-small" text-anchor="middle">divides left & right halves</text>
</svg>`;
  }

  // 19. Coelom Types (Diagram 3.1b)
  if (norm.includes("coelom") || norm.includes("diagram 3.1b")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Evolution of Body Cavities (Coeloms)</text>
  
  <!-- 1. Acoelomate (Solid) -->
  <g transform="translate(70, 140)">
    <circle cx="0" cy="0" r="30" class="ink-stroke-thick" />
    <!-- endoderm / gut -->
    <circle cx="0" cy="0" r="10" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.2" />
    <!-- solid mesoderm filling -->
    <circle cx="0" cy="0" r="23" class="gold-ink" stroke-dasharray="1,1" />
    <text x="0" y="55" class="sketch-text-bold" text-anchor="middle">Acoelomate</text>
    <text x="0" y="70" class="sketch-text-small" text-anchor="middle">No cavity (Flatworm)</text>
  </g>

  <!-- 2. Pseudocoelomate (False) -->
  <g transform="translate(200, 140)">
    <circle cx="0" cy="0" r="30" class="ink-stroke-thick" />
    <!-- endoderm / gut -->
    <circle cx="0" cy="0" r="10" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.2" />
    <!-- mesoderm lining ONLY body wall -->
    <path d="M -23,0 A 23,23 0 1,1 23,0" class="gold-ink" stroke-width="3.5" />
    <text x="0" y="55" class="sketch-text-bold" text-anchor="middle">Pseudocoelomate</text>
    <text x="0" y="70" class="sketch-text-small" text-anchor="middle">Cavity unlined (Nematode)</text>
  </g>

  <!-- 3. Coelomate (True) -->
  <g transform="translate(330, 140)">
    <circle cx="0" cy="0" r="30" class="ink-stroke-thick" />
    <!-- endoderm / gut -->
    <circle cx="0" cy="0" r="10" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.2" />
    <!-- true mesoderm lining both sides of cavity -->
    <circle cx="0" cy="0" r="15" class="gold-ink" stroke-width="2.2" />
    <circle cx="0" cy="0" r="25" class="gold-ink" stroke-width="2.2" />
    <text x="0" y="55" class="sketch-text-bold" text-anchor="middle">Coelomate</text>
    <text x="0" y="70" class="sketch-text-small" text-anchor="middle">True lining (Annelid/human)</text>
  </g>
</svg>`;
  }

  // Diagram 3.2: Phylum Porifera
  if (norm.includes("porifera") || norm.includes("diagram 3.2") || norm.includes("sponge")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Porifera: Sponge Anatomy</text>
  
  <!-- Sponge Body (Vase-like shape) -->
  <path d="M 150,280 C 120,200 130,100 160,60 L 240,60 C 270,100 280,200 250,280 Z" class="ink-stroke-thick" fill="#0FA8A0" fill-opacity="0.05" />
  
  <!-- Osculum (Top opening) -->
  <ellipse cx="200" cy="60" rx="40" ry="10" class="ink-stroke-thick" fill="#fff" />
  <ellipse cx="200" cy="60" rx="30" ry="6" class="ink-stroke" fill="#1E293B" fill-opacity="0.1" />
  
  <!-- Spongocoel (Central cavity) -->
  <path d="M 170,60 L 170,250 C 170,260 230,260 230,250 L 230,60" class="ink-stroke" stroke-dasharray="4,4" />
  
  <!-- Pores (Ostia) -->
  <circle cx="145" cy="120" r="3" class="gold-ink" stroke-width="2" />
  <circle cx="138" cy="180" r="3" class="gold-ink" stroke-width="2" />
  <circle cx="145" cy="240" r="3" class="gold-ink" stroke-width="2" />
  <circle cx="255" cy="120" r="3" class="gold-ink" stroke-width="2" />
  <circle cx="262" cy="180" r="3" class="gold-ink" stroke-width="2" />
  <circle cx="255" cy="240" r="3" class="gold-ink" stroke-width="2" />
  
  <!-- Water flow arrows -->
  <path d="M 110,120 L 135,120" class="teal-ink" stroke-width="2" />
  <polygon points="130,115 138,120 130,125" class="teal-ink" fill="#0FA8A0" />
  <path d="M 110,180 L 125,180" class="teal-ink" stroke-width="2" />
  <polygon points="120,175 128,180 120,185" class="teal-ink" fill="#0FA8A0" />
  <path d="M 290,120 L 265,120" class="teal-ink" stroke-width="2" />
  <polygon points="270,115 262,120 270,125" class="teal-ink" fill="#0FA8A0" />
  
  <path d="M 200,200 L 200,90" class="teal-ink" stroke-width="2" />
  <polygon points="195,95 200,85 205,95" class="teal-ink" fill="#0FA8A0" />
  <path d="M 200,50 L 200,20" class="teal-ink" stroke-width="2" />
  <polygon points="195,25 200,15 205,25" class="teal-ink" fill="#0FA8A0" />
  
  <!-- Labels -->
  <path d="M 230,55 L 300,45" class="leader-line" /><circle cx="230" cy="55" r="2.5" class="gold-fill" />
  <text x="305" y="48" class="sketch-text-bold">Osculum</text>
  <text x="305" y="63" class="sketch-text-small">(Water exits)</text>
  
  <path d="M 200,160 L 290,160" class="leader-line" /><circle cx="200" cy="160" r="2.5" class="gold-fill" />
  <text x="295" y="163" class="sketch-text-bold" fill="#0FA8A0">Spongocoel</text>
  
  <path d="M 145,240 L 80,240" class="leader-line" /><circle cx="145" cy="240" r="2.5" class="gold-fill" />
  <text x="75" y="243" class="sketch-text-bold" text-anchor="end" fill="#B8841A">Ostia (Pores)</text>
  <text x="75" y="258" class="sketch-text-small" text-anchor="end">(Water enters)</text>
</svg>\`;
  }

  // Diagram 3.3: Phylum Coelenterata
  if (norm.includes("coelenterata") || norm.includes("diagram 3.3") || norm.includes("hydra")) {
    return \`
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Coelenterata: Hydra Anatomy</text>
  
  <!-- Hydra Body (Tubular) -->
  <path d="M 180,280 C 180,200 170,120 180,90 L 220,90 C 230,120 220,200 220,280 Z" class="ink-stroke-thick" fill="#cc3f3f" fill-opacity="0.05" />
  
  <!-- Gastrovascular Cavity -->
  <path d="M 188,100 C 180,150 190,200 188,270 L 212,270 C 210,200 220,150 212,100 Z" class="red-ink" stroke-dasharray="2,2" />
  
  <!-- Tentacles -->
  <path d="M 180,90 C 130,70 100,100 80,80" class="ink-stroke-thick" />
  <path d="M 190,90 C 150,40 120,40 110,20" class="ink-stroke-thick" />
  <path d="M 210,90 C 250,40 280,40 290,20" class="ink-stroke-thick" />
  <path d="M 220,90 C 270,70 300,100 320,80" class="ink-stroke-thick" />
  
  <!-- Mouth / Hypostome -->
  <ellipse cx="200" cy="90" rx="15" ry="5" class="ink-stroke" fill="#fff" />
  <circle cx="200" cy="90" r="3" class="red-ink" fill="#cc3f3f" />
  
  <!-- Nematocysts (Stinging cells) represented as small dots on tentacles -->
  <circle cx="100" cy="85" r="2" class="gold-fill" />
  <circle cx="120" cy="72" r="2" class="gold-fill" />
  <circle cx="140" cy="62" r="2" class="gold-fill" />
  <circle cx="260" cy="62" r="2" class="gold-fill" />
  <circle cx="280" cy="72" r="2" class="gold-fill" />
  <circle cx="300" cy="85" r="2" class="gold-fill" />
  
  <!-- Labels -->
  <path d="M 300,85 L 340,110" class="leader-line" /><circle cx="300" cy="85" r="2.5" class="gold-fill" />
  <text x="345" y="113" class="sketch-text-bold" fill="#B8841A">Tentacle</text>
  
  <path d="M 280,72 L 340,60" class="leader-line" /><circle cx="280" cy="72" r="2.5" class="gold-fill" />
  <text x="345" y="63" class="sketch-text-bold" fill="#cc3f3f">Nematocysts</text>
  
  <path d="M 200,90 L 260,140" class="leader-line" />
  <text x="265" y="143" class="sketch-text-bold">Mouth</text>
  
  <path d="M 200,180 L 280,200" class="leader-line" /><circle cx="200" cy="180" r="2.5" class="gold-fill" />
  <text x="285" y="203" class="sketch-text-bold">Gastrovascular</text>
  <text x="285" y="218" class="sketch-text-small">Cavity (Coelenteron)</text>
</svg>\`;
  }

  // Diagram 3.4: Phylum Platyhelminthes
  if (norm.includes("platyhelminthes") || norm.includes("diagram 3.4") || norm.includes("tapeworm")) {
    return \`
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Platyhelminthes: Tapeworm Anatomy</text>
  
  <!-- Scolex (Head) -->
  <circle cx="100" cy="120" r="18" class="ink-stroke-thick" fill="#B8841A" fill-opacity="0.1" />
  <!-- Hooks -->
  <path d="M 90,105 Q 100,90 110,105" class="ink-stroke" fill="none" />
  <path d="M 85,110 Q 100,85 115,110" class="ink-stroke" fill="none" />
  <!-- Suckers -->
  <circle cx="90" cy="125" r="5" class="ink-stroke" />
  <circle cx="110" cy="125" r="5" class="ink-stroke" />
  
  <!-- Neck -->
  <rect x="94" y="138" width="12" height="15" class="ink-stroke" />
  
  <!-- Proglottids (Segments) -->
  <rect x="90" y="153" width="20" height="10" class="ink-stroke" fill="#0FA8A0" fill-opacity="0.05" />
  <rect x="88" y="163" width="24" height="12" class="ink-stroke" fill="#0FA8A0" fill-opacity="0.05" />
  <rect x="86" y="175" width="28" height="14" class="ink-stroke" fill="#0FA8A0" fill-opacity="0.05" />
  <rect x="84" y="189" width="32" height="16" class="ink-stroke" fill="#0FA8A0" fill-opacity="0.05" />
  <rect x="82" y="205" width="36" height="20" class="ink-stroke" fill="#0FA8A0" fill-opacity="0.05" />
  
  <!-- Arrow to indicate length -->
  <path d="M 120,235 C 150,260 250,260 280,230" class="ink-stroke" stroke-dasharray="4,4" />
  <polygon points="275,225 285,225 280,235" class="ink-stroke" fill="#1E293B" />
  
  <!-- Mature Proglottid (magnified) -->
  <rect x="230" y="100" width="120" height="80" rx="4" class="ink-stroke-thick" fill="#0FA8A0" fill-opacity="0.1" />
  <!-- Internal organs: Testes and Ovaries (Hermaphrodite) -->
  <circle cx="260" cy="140" r="15" class="red-ink" fill="#cc3f3f" fill-opacity="0.2" /> <!-- Ovary -->
  <circle cx="320" cy="120" r="3" class="ink-stroke" fill="#1E293B" /> <!-- Testes -->
  <circle cx="330" cy="130" r="3" class="ink-stroke" fill="#1E293B" />
  <circle cx="315" cy="140" r="3" class="ink-stroke" fill="#1E293B" />
  <circle cx="325" cy="150" r="3" class="ink-stroke" fill="#1E293B" />
  <path d="M 275,140 L 305,140" class="ink-stroke" /> <!-- Uterus / Duct -->
  
  <!-- Labels -->
  <path d="M 100,105 L 50,70" class="leader-line" /><circle cx="100" cy="105" r="2.5" class="gold-fill" />
  <text x="45" y="65" class="sketch-text-bold" text-anchor="end">Hooks</text>
  
  <path d="M 110,125 L 160,100" class="leader-line" /><circle cx="110" cy="125" r="2.5" class="gold-fill" />
  <text x="165" y="105" class="sketch-text-bold" fill="#B8841A">Scolex</text>
  <text x="165" y="120" class="sketch-text-small">(Head w/ Suckers)</text>
  
  <path d="M 118,215 L 160,230" class="leader-line" /><circle cx="118" cy="215" r="2.5" class="gold-fill" />
  <text x="165" y="235" class="sketch-text-bold" fill="#0FA8A0">Proglottids</text>
  <text x="165" y="250" class="sketch-text-small">(Body segments)</text>
  
  <path d="M 290,100 L 290,80" class="leader-line" />
  <text x="290" y="70" class="sketch-text-bold" text-anchor="middle">Mature Proglottid</text>
  
  <path d="M 260,140 L 220,165" class="leader-line" /><circle cx="260" cy="140" r="2.5" class="gold-fill" />
  <text x="215" y="175" class="sketch-text-small" text-anchor="end" fill="#cc3f3f">Hermaphroditic</text>
  <text x="215" y="190" class="sketch-text-small" text-anchor="end">(Both male & female)</text>
</svg>\`;
  }

  // Diagram 3.5: Phylum Nematoda
  if (norm.includes("nematoda") || norm.includes("diagram 3.5") || norm.includes("ascaris")) {
    return \`
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Nematoda: Ascaris (Roundworm)</text>
  
  <!-- Male and Female Ascaris -->
  <!-- Female (Larger, straight tail) -->
  <path d="M 100,280 C 100,150 120,80 160,80 C 200,80 230,150 250,280" class="ink-stroke-thick" fill="#0FA8A0" fill-opacity="0.05" />
  <!-- Male (Smaller, curved tail) -->
  <path d="M 280,280 C 280,180 300,120 330,120 C 350,120 360,180 370,240 C 375,270 350,290 330,270 C 320,260 325,250 330,250" class="ink-stroke-thick" fill="#B8841A" fill-opacity="0.05" />
  
  <!-- Cross section (Pseudocoelom) -->
  <g transform="translate(100, 150)">
    <circle cx="0" cy="0" r="40" class="ink-stroke-thick" fill="#fff" />
    <circle cx="0" cy="0" r="35" class="gold-ink" stroke-width="4" stroke-dasharray="2,2" /> <!-- Muscle/mesoderm -->
    <circle cx="0" cy="0" r="10" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.2" /> <!-- Gut -->
    <!-- Internal organs (reproductive) in pseudocoelom -->
    <circle cx="-15" cy="15" r="5" class="ink-stroke" fill="#1E293B" />
    <circle cx="15" cy="-15" r="5" class="ink-stroke" fill="#1E293B" />
    <circle cx="-15" cy="-15" r="5" class="ink-stroke" fill="#1E293B" />
    <circle cx="15" cy="15" r="5" class="ink-stroke" fill="#1E293B" />
  </g>
  
  <!-- Labels -->
  <path d="M 135,85 L 80,70" class="leader-line" />
  <text x="75" y="65" class="sketch-text-bold" text-anchor="end" fill="#0FA8A0">Female (Larger)</text>
  
  <path d="M 330,120 L 370,90" class="leader-line" />
  <text x="375" y="85" class="sketch-text-bold" fill="#B8841A">Male (Smaller)</text>
  <text x="375" y="100" class="sketch-text-small">(Curved tail)</text>
  
  <path d="M 80,150 L 30,150" class="leader-line" />
  <text x="25" y="145" class="sketch-text-bold" text-anchor="end">Cross-Section</text>
  
  <path d="M 100,115 L 100,90" class="leader-line" /><circle cx="100" cy="115" r="2.5" class="gold-fill" />
  <text x="100" y="80" class="sketch-text-small" text-anchor="middle" fill="#B8841A">Pseudocoelom</text>
  <text x="100" y="95" class="sketch-text-small" text-anchor="middle">(False cavity)</text>
</svg>\`;
  }

  // Diagram 3.6: Phylum Annelida
  if (norm.includes("annelida") || norm.includes("diagram 3.6") || norm.includes("earthworm")) {
    return \`
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Annelida: Earthworm Anatomy</text>
  
  <!-- Earthworm Body -->
  <path d="M 40,160 C 100,120 200,120 280,180 C 330,220 370,200 370,180 C 370,160 330,180 280,140 C 200,80 100,80 40,120 Z" class="ink-stroke-thick" fill="#cc3f3f" fill-opacity="0.1" />
  
  <!-- Segments (Metamerism) -->
  <path d="M 50,125 L 50,155" class="ink-stroke" />
  <path d="M 60,120 L 60,150" class="ink-stroke" />
  <path d="M 70,115 L 70,145" class="ink-stroke" />
  <path d="M 80,110 L 80,140" class="ink-stroke" />
  <path d="M 90,108 L 90,138" class="ink-stroke" />
  <path d="M 100,105 L 100,135" class="ink-stroke" />
  <path d="M 110,103 L 110,133" class="ink-stroke" />
  <path d="M 120,102 L 120,132" class="ink-stroke" />
  <path d="M 130,100 L 130,130" class="ink-stroke" />
  <path d="M 180,95 L 180,125" class="ink-stroke" />
  <path d="M 190,98 L 190,128" class="ink-stroke" />
  <path d="M 200,100 L 200,130" class="ink-stroke" />
  <path d="M 210,105 L 210,135" class="ink-stroke" />
  <path d="M 220,108 L 220,138" class="ink-stroke" />
  <path d="M 230,112 L 230,142" class="ink-stroke" />
  <path d="M 240,118 L 240,148" class="ink-stroke" />
  <path d="M 250,125 L 250,155" class="ink-stroke" />
  <path d="M 260,133 L 260,163" class="ink-stroke" />
  <path d="M 270,142 L 270,172" class="ink-stroke" />
  
  <!-- Clitellum (Swollen region) -->
  <path d="M 140,95 C 150,90 160,90 170,95 L 170,125 C 160,130 150,130 140,125 Z" class="ink-stroke-thick" fill="#B8841A" fill-opacity="0.3" />
  
  <!-- Setae (Bristles) -->
  <line x1="80" y1="140" x2="78" y2="148" class="ink-stroke" />
  <line x1="100" y1="135" x2="98" y2="143" class="ink-stroke" />
  <line x1="120" y1="132" x2="118" y2="140" class="ink-stroke" />
  <line x1="200" y1="130" x2="198" y2="138" class="ink-stroke" />
  <line x1="220" y1="138" x2="218" y2="146" class="ink-stroke" />
  
  <!-- Labels -->
  <path d="M 100,105 L 100,60" class="leader-line" /><circle cx="100" cy="105" r="2.5" class="gold-fill" />
  <text x="100" y="50" class="sketch-text-bold" text-anchor="middle">Metameric Segments</text>
  
  <path d="M 155,93 L 155,60" class="leader-line" /><circle cx="155" cy="93" r="2.5" class="gold-fill" />
  <text x="155" y="50" class="sketch-text-bold" text-anchor="middle" fill="#B8841A">Clitellum</text>
  <text x="155" y="65" class="sketch-text-small" text-anchor="middle">(Reproduction)</text>
  
  <path d="M 118,140 L 118,180" class="leader-line" /><circle cx="118" cy="140" r="2.5" class="gold-fill" />
  <text x="118" y="195" class="sketch-text-bold" text-anchor="middle">Setae (Bristles)</text>
  <text x="118" y="210" class="sketch-text-small" text-anchor="middle">(Locomotion)</text>
  
  <path d="M 40,140 L 20,140" class="leader-line" />
  <text x="15" y="145" class="sketch-text-bold" text-anchor="end">Mouth</text>
</svg>\`;
  }

  // Diagram 3.7: Phylum Mollusca
  if (norm.includes("mollusca") || norm.includes("diagram 3.7") || norm.includes("snail")) {
    return \`
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Mollusca: Snail Anatomy</text>
  
  <!-- Foot and Head -->
  <path d="M 80,240 C 50,240 50,260 80,260 L 250,260 C 300,260 320,240 280,240 Z" class="ink-stroke-thick" fill="#0FA8A0" fill-opacity="0.1" />
  
  <!-- Tentacles and Eyes -->
  <path d="M 80,240 C 70,200 60,190 50,180" class="ink-stroke-thick" />
  <circle cx="50" cy="180" r="3" class="red-ink" fill="#1E293B" />
  <path d="M 90,240 C 95,200 105,190 110,180" class="ink-stroke-thick" />
  <circle cx="110" cy="180" r="3" class="red-ink" fill="#1E293B" />
  
  <!-- Shell (Calcareous) -->
  <path d="M 130,240 C 100,100 250,60 280,180 C 280,250 200,250 200,180 C 200,130 150,150 170,200 C 180,220 220,200 210,180" class="ink-stroke-thick" fill="#B8841A" fill-opacity="0.1" />
  <path d="M 140,220 C 120,140 220,100 250,180" class="ink-stroke" />
  <path d="M 160,200 C 150,150 200,130 220,170" class="ink-stroke" />
  
  <!-- Mantle cavity indicator -->
  <path d="M 130,240 C 150,230 180,230 200,240" class="red-ink" stroke-dasharray="3,3" />
  
  <!-- Labels -->
  <path d="M 220,130 L 280,100" class="leader-line" /><circle cx="220" cy="130" r="2.5" class="gold-fill" />
  <text x="285" y="95" class="sketch-text-bold" fill="#B8841A">Calcareous Shell</text>
  <text x="285" y="110" class="sketch-text-small">(Protection)</text>
  
  <path d="M 155,235 L 120,280" class="leader-line" /><circle cx="155" cy="235" r="2.5" class="gold-fill" />
  <text x="115" y="285" class="sketch-text-bold" text-anchor="end" fill="#cc3f3f">Mantle</text>
  <text x="115" y="300" class="sketch-text-small" text-anchor="end">(Secretes shell)</text>
  
  <path d="M 250,250 L 320,220" class="leader-line" /><circle cx="250" cy="250" r="2.5" class="gold-fill" />
  <text x="325" y="215" class="sketch-text-bold" fill="#0FA8A0">Muscular Foot</text>
  <text x="325" y="230" class="sketch-text-small">(Locomotion)</text>
  
  <path d="M 50,180 L 100,140" class="leader-line" /><circle cx="50" cy="180" r="2.5" class="gold-fill" />
  <text x="105" y="135" class="sketch-text-bold">Tentacles</text>
  <text x="105" y="150" class="sketch-text-small">(with eyes)</text>
</svg>\`;
  }

  // Diagram 3.8: Phylum Arthropoda
  if (norm.includes("arthropoda") || norm.includes("diagram 3.8") || norm.includes("insect")) {
    return \`
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Arthropoda: Insect Anatomy</text>
  
  <!-- Head -->
  <circle cx="120" cy="150" r="20" class="ink-stroke-thick" fill="#B8841A" fill-opacity="0.1" />
  <circle cx="110" cy="140" r="5" class="red-ink" fill="#1E293B" /> <!-- Compound Eye -->
  <path d="M 110,130 C 90,100 60,110 50,100" class="ink-stroke" /> <!-- Antenna -->
  
  <!-- Thorax -->
  <ellipse cx="170" cy="150" rx="30" ry="25" class="ink-stroke-thick" fill="#0FA8A0" fill-opacity="0.1" />
  
  <!-- Jointed Legs (3 pairs on thorax) -->
  <path d="M 150,170 L 130,220 L 140,260" class="ink-stroke-thick" />
  <path d="M 170,175 L 170,230 L 180,270" class="ink-stroke-thick" />
  <path d="M 190,170 L 220,220 L 230,260" class="ink-stroke-thick" />
  
  <!-- Wings (attached to thorax) -->
  <path d="M 170,125 C 190,70 250,60 280,100 C 250,120 200,130 170,125" class="ink-stroke" fill="#0FA8A0" fill-opacity="0.05" />
  
  <!-- Abdomen (Segmented) -->
  <path d="M 200,135 C 260,120 320,130 340,150 C 320,170 260,180 200,165 Z" class="ink-stroke-thick" fill="#cc3f3f" fill-opacity="0.1" />
  <path d="M 220,130 L 220,170" class="ink-stroke" />
  <path d="M 240,125 L 240,175" class="ink-stroke" />
  <path d="M 260,125 L 260,175" class="ink-stroke" />
  <path d="M 280,128 L 280,172" class="ink-stroke" />
  <path d="M 300,132 L 300,168" class="ink-stroke" />
  <path d="M 320,138 L 320,162" class="ink-stroke" />
  
  <!-- Labels -->
  <path d="M 120,130 L 120,80" class="leader-line" />
  <text x="120" y="70" class="sketch-text-bold" text-anchor="middle" fill="#B8841A">Head</text>
  
  <path d="M 170,125 L 170,80" class="leader-line" />
  <text x="170" y="70" class="sketch-text-bold" text-anchor="middle" fill="#0FA8A0">Thorax</text>
  
  <path d="M 260,125 L 260,80" class="leader-line" />
  <text x="260" y="70" class="sketch-text-bold" text-anchor="middle" fill="#cc3f3f">Segmented Abdomen</text>
  
  <path d="M 170,220 L 240,240" class="leader-line" /><circle cx="170" cy="220" r="2.5" class="gold-fill" />
  <text x="245" y="245" class="sketch-text-bold">Jointed Appendages</text>
  <text x="245" y="260" class="sketch-text-small">(3 pairs of legs)</text>
  
  <path d="M 50,100 L 50,60" class="leader-line" />
  <text x="50" y="50" class="sketch-text-bold" text-anchor="middle">Antennae</text>
</svg>\`;
  }

  // Diagram 3.9: Phylum Echinodermata
  if (norm.includes("echinodermata") || norm.includes("diagram 3.9") || norm.includes("starfish")) {
    return \`
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="200" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Echinodermata: Starfish Anatomy</text>
  
  <!-- Starfish shape (Pentamerous radial symmetry) -->
  <g class="ink-stroke-thick" fill="#B8841A" fill-opacity="0.1" transform="translate(200, 160)">
    <path d="M 0,-20 L 20,-100 L 30,-20 L 100,10 L 30,30 L 60,100 L 0,40 L -60,100 L -30,30 L -100,10 L -30,-20 Z" />
    
    <!-- Central Disc -->
    <circle cx="0" cy="0" r="25" class="ink-stroke" fill="#fff" />
    <circle cx="10" cy="-10" r="4" class="red-ink" fill="#cc3f3f" /> <!-- Madreporite -->
    
    <!-- Water Vascular System (Ring canal & Radial canals) -->
    <circle cx="0" cy="0" r="15" class="teal-ink" stroke-width="2.5" />
    <path d="M 0,-15 L 15,-80" class="teal-ink" stroke-width="2.5" />
    <path d="M 14,-5 L 75,10" class="teal-ink" stroke-width="2.5" />
    <path d="M 9,12 L 45,75" class="teal-ink" stroke-width="2.5" />
    <path d="M -9,12 L -45,75" class="teal-ink" stroke-width="2.5" />
    <path d="M -14,-5 L -75,10" class="teal-ink" stroke-width="2.5" />
    
    <!-- Tube feet (represented as small cross marks on bottom left arm) -->
    <line x1="-30" y1="50" x2="-25" y2="55" class="red-ink" stroke-width="2" />
    <line x1="-40" y1="65" x2="-35" y2="70" class="red-ink" stroke-width="2" />
    <line x1="-20" y1="40" x2="-15" y2="45" class="red-ink" stroke-width="2" />
  </g>
  
  <!-- Labels -->
  <path d="M 210,150 L 280,100" class="leader-line" /><circle cx="210" cy="150" r="2.5" class="gold-fill" />
  <text x="285" y="95" class="sketch-text-bold" fill="#cc3f3f">Madreporite</text>
  <text x="285" y="110" class="sketch-text-small">(Water entry)</text>
  
  <path d="M 200,135 L 130,80" class="leader-line" /><circle cx="200" cy="135" r="2.5" class="gold-fill" />
  <text x="125" y="75" class="sketch-text-bold" text-anchor="end" fill="#B8841A">Central Disc</text>
  
  <path d="M 215,80 L 290,60" class="leader-line" /><circle cx="215" cy="80" r="2.5" class="gold-fill" />
  <text x="295" y="55" class="sketch-text-bold" fill="#0FA8A0">Radial Canal</text>
  <text x="295" y="70" class="sketch-text-small">(Water vascular system)</text>
  
  <path d="M 160,225 L 100,260" class="leader-line" /><circle cx="160" cy="225" r="2.5" class="gold-fill" />
  <text x="95" y="255" class="sketch-text-bold" text-anchor="end" fill="#cc3f3f">Tube Feet</text>
  <text x="95" y="270" class="sketch-text-small" text-anchor="end">(Locomotion/Feeding)</text>
</svg>\`;
  }

  // Diagram 3.10: Phylum Chordata (Vertebrate Classes)
  if (norm.includes("chordata") || norm.includes("diagram 3.10") || norm.includes("vertebrate")) {
    return \`
<svg viewBox="0 0 500 400" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="250" y="25" class="sketch-text-bold" text-anchor="middle">Phylum Chordata: The Five Vertebrate Classes</text>
  
  <!-- 1. Pisces (Fish) -->
  <g transform="translate(50, 70)">
    <!-- Fish outline -->
    <path d="M 0,0 C 30,-20 70,-20 90,0 C 70,20 30,20 0,0 Z" class="ink-stroke-thick" fill="#0FA8A0" fill-opacity="0.1" />
    <path d="M 90,0 L 110,-15 L 105,0 L 110,15 Z" class="ink-stroke-thick" fill="#0FA8A0" fill-opacity="0.1" /> <!-- Tail fin -->
    <path d="M 40,-13 L 50,-25 L 60,-13" class="ink-stroke" /> <!-- Dorsal fin -->
    <path d="M 40,13 L 50,25 L 60,13" class="ink-stroke" /> <!-- Pelvic fin -->
    <circle cx="15" cy="-2" r="2" class="ink-stroke" fill="#1E293B" />
    <path d="M 25,-10 C 30,-5 30,5 25,10" class="red-ink" /> <!-- Operculum -->
    <text x="130" y="0" class="sketch-text-bold">Pisces (Fish)</text>
    <text x="130" y="15" class="sketch-text-small">Scales, fins, gills</text>
  </g>

  <!-- 2. Amphibia (Frog) -->
  <g transform="translate(50, 140)">
    <!-- Frog outline -->
    <ellipse cx="40" cy="0" rx="25" ry="15" class="ink-stroke-thick" fill="#0FA8A0" fill-opacity="0.1" />
    <circle cx="20" cy="-10" r="4" class="ink-stroke" /> <!-- Eye bulge -->
    <circle cx="20" cy="-11" r="1.5" class="ink-stroke" fill="#1E293B" />
    <path d="M 50,5 C 60,-15 70,5 80,15 L 65,15" class="ink-stroke-thick" /> <!-- Hind leg -->
    <path d="M 30,10 L 35,20 L 25,20" class="ink-stroke-thick" /> <!-- Front leg -->
    <text x="130" y="0" class="sketch-text-bold">Amphibia</text>
    <text x="130" y="15" class="sketch-text-small">Moist skin, legs, lungs/gills</text>
  </g>

  <!-- 3. Reptilia (Lizard) -->
  <g transform="translate(50, 210)">
    <!-- Lizard outline -->
    <path d="M 10,0 C 30,-15 60,-10 80,0 C 60,10 30,15 10,0 Z" class="ink-stroke-thick" fill="#B8841A" fill-opacity="0.1" />
    <path d="M 80,0 C 90,0 110,-10 120,-5" class="ink-stroke-thick" /> <!-- Tail -->
    <path d="M 30,5 L 20,20 L 30,20" class="ink-stroke-thick" /> <!-- Front leg -->
    <path d="M 60,5 L 50,20 L 60,20" class="ink-stroke-thick" /> <!-- Hind leg -->
    <circle cx="20" cy="-2" r="1.5" class="ink-stroke" fill="#1E293B" />
    <text x="130" y="0" class="sketch-text-bold">Reptilia</text>
    <text x="130" y="15" class="sketch-text-small">Dry scales, claws, amniotic egg</text>
  </g>

  <!-- 4. Aves (Bird) -->
  <g transform="translate(50, 280)">
    <!-- Bird outline -->
    <path d="M 30,-10 C 50,-20 70,0 60,15 C 40,20 20,10 30,-10 Z" class="ink-stroke-thick" fill="#cc3f3f" fill-opacity="0.1" />
    <path d="M 25,-8 L 10,-5 L 25,-2" class="ink-stroke-thick" fill="#B8841A" /> <!-- Beak -->
    <path d="M 40,-5 C 60,5 70,-10 80,-5 C 70,-5 60,15 40,5" class="ink-stroke" /> <!-- Wing -->
    <path d="M 60,10 L 80,20 L 75,25 Z" class="ink-stroke" /> <!-- Tail feathers -->
    <line x1="45" y1="15" x2="45" y2="25" class="ink-stroke-thick" />
    <line x1="50" y1="15" x2="50" y2="25" class="ink-stroke-thick" />
    <circle cx="30" cy="-5" r="1.5" class="ink-stroke" fill="#1E293B" />
    <text x="130" y="0" class="sketch-text-bold">Aves (Birds)</text>
    <text x="130" y="15" class="sketch-text-small">Feathers, wings, beak</text>
  </g>

  <!-- 5. Mammalia (Mammal - e.g. Mouse/Dog) -->
  <g transform="translate(50, 350)">
    <!-- Mammal outline -->
    <path d="M 20,0 C 40,-15 70,-10 80,5 C 60,15 30,10 20,0 Z" class="ink-stroke-thick" fill="#B8841A" fill-opacity="0.1" />
    <path d="M 25,-8 C 25,-15 30,-15 30,-8" class="ink-stroke-thick" /> <!-- Ear -->
    <path d="M 80,0 C 90,-10 100,-5 105,0" class="ink-stroke-thick" /> <!-- Tail -->
    <line x1="35" y1="10" x2="35" y2="20" class="ink-stroke-thick" />
    <line x1="45" y1="10" x2="45" y2="20" class="ink-stroke-thick" />
    <line x1="65" y1="10" x2="65" y2="20" class="ink-stroke-thick" />
    <line x1="75" y1="10" x2="75" y2="20" class="ink-stroke-thick" />
    <circle cx="25" cy="-2" r="1.5" class="ink-stroke" fill="#1E293B" />
    <path d="M 15,2 L 5,0" class="ink-stroke-thin" /> <!-- Whiskers -->
    <path d="M 15,2 L 5,4" class="ink-stroke-thin" />
    <text x="130" y="0" class="sketch-text-bold">Mammalia</text>
    <text x="130" y="15" class="sketch-text-small">Hair/fur, mammary glands</text>
  </g>

  <!-- Thermoregulation Brackets -->
  <path d="M 330,60 L 350,60 L 350,220 L 330,220" class="ink-stroke" />
  <text x="360" y="145" class="sketch-text-bold" fill="#0FA8A0">Ectothermic</text>
  <text x="360" y="160" class="sketch-text-small">(Cold-blooded)</text>

  <path d="M 330,270 L 350,270 L 350,360 L 330,360" class="ink-stroke" />
  <text x="360" y="310" class="sketch-text-bold" fill="#cc3f3f">Endothermic</text>
  <text x="360" y="325" class="sketch-text-small">(Warm-blooded)</text>

</svg>\`;
  }

  // Diagram 3.12: Master Comparison Visual Summary
  if (norm.includes("diagram 3.12") || norm.includes("visual summary") || norm.includes("phyla at a glance")) {
    return \`
<svg viewBox="0 0 500 360" fill="none" class="notebook-diagram">
  \${sketchStyles}
  <text x="250" y="25" class="sketch-text-bold" text-anchor="middle">Visual Summary: Major Animal Phyla Evolution</text>
  
  <path d="M 80,330 L 80,40" class="ink-stroke-thick" />
  <polygon points="75,45 80,35 85,45" class="ink-stroke-thick" fill="#1E293B" />
  
  <text x="80" y="345" class="sketch-text-bold" text-anchor="middle" fill="#cc3f3f">Ancestral Protist</text>

  <!-- Branches -->
  <g class="ink-stroke">
    <path d="M 80,290 L 160,290" />
    <path d="M 80,260 L 160,260" />
    <path d="M 80,230 L 160,230" />
    <path d="M 80,200 L 160,200" />
    <path d="M 80,170 L 160,170" />
    <path d="M 80,140 L 160,140" />
    <path d="M 80,110 L 160,110" />
    <path d="M 80,80 L 160,80" />
    <path d="M 80,50 L 160,50" />
  </g>

  <g class="gold-fill">
    <circle cx="80" cy="290" r="3.5" />
    <circle cx="80" cy="260" r="3.5" />
    <circle cx="80" cy="230" r="3.5" />
    <circle cx="80" cy="200" r="3.5" />
    <circle cx="80" cy="170" r="3.5" />
    <circle cx="80" cy="140" r="3.5" />
    <circle cx="80" cy="110" r="3.5" />
    <circle cx="80" cy="80" r="3.5" />
    <circle cx="80" cy="50" r="3.5" />
  </g>

  <!-- Labels -->
  <text x="165" y="294" class="sketch-text-bold">Porifera</text>
  <text x="165" y="264" class="sketch-text-bold">Coelenterata</text>
  <text x="165" y="234" class="sketch-text-bold">Platyhelminthes</text>
  <text x="165" y="204" class="sketch-text-bold">Nematoda</text>
  <text x="165" y="174" class="sketch-text-bold">Annelida</text>
  <text x="165" y="144" class="sketch-text-bold">Mollusca</text>
  <text x="165" y="114" class="sketch-text-bold">Arthropoda</text>
  <text x="165" y="84" class="sketch-text-bold">Echinodermata</text>
  <text x="165" y="54" class="sketch-text-bold">Chordata</text>

  <!-- Evolutionary Milestones (Left side of trunk) -->
  <text x="70" y="280" class="sketch-text-small" text-anchor="end" fill="#0FA8A0">Multicellularity</text>
  <text x="70" y="250" class="sketch-text-small" text-anchor="end" fill="#0FA8A0">True Tissues</text>
  <text x="70" y="220" class="sketch-text-small" text-anchor="end" fill="#0FA8A0">Bilateral Symmetry</text>
  <text x="70" y="190" class="sketch-text-small" text-anchor="end" fill="#0FA8A0">Pseudocoelom</text>
  <text x="70" y="160" class="sketch-text-small" text-anchor="end" fill="#0FA8A0">True Coelom</text>
  <text x="70" y="100" class="sketch-text-small" text-anchor="end" fill="#0FA8A0">Exoskeleton / Joints</text>
  <text x="70" y="70" class="sketch-text-small" text-anchor="end" fill="#cc3f3f">Deuterostomes</text>

  <!-- Descriptions (Right side) -->
  <text x="280" y="294" class="sketch-text-small" fill="#1E293B">(Sponges - cellular level, asymmetrical)</text>
  <text x="280" y="264" class="sketch-text-small" fill="#1E293B">(Hydra - radial, stinging cells)</text>
  <text x="280" y="234" class="sketch-text-small" fill="#1E293B">(Tapeworm - acoelomate, flat)</text>
  <text x="280" y="204" class="sketch-text-small" fill="#1E293B">(Ascaris - unsegmented roundworms)</text>
  <text x="280" y="174" class="sketch-text-small" fill="#1E293B">(Earthworm - metameric segments)</text>
  <text x="280" y="144" class="sketch-text-small" fill="#1E293B">(Snail - muscular foot, mantle)</text>
  <text x="280" y="114" class="sketch-text-small" fill="#1E293B">(Insect - chitin exoskeleton)</text>
  <text x="280" y="84" class="sketch-text-small" fill="#1E293B">(Starfish - water vascular system)</text>
  <text x="280" y="54" class="sketch-text-small" fill="#1E293B">(Vertebrates - notochord, nerve cord)</text>
</svg>\`;
  }


  // --- SECTION 4: ECOLOGICAL ADAPTATIONS ---

  // 23. Carbon Cycle
  if (norm.includes("carbon cycle") || norm.includes("diagram 4.5a")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Atmosphere CO2 -->
  <rect x="130" y="15" width="140" height="30" rx="6" class="ink-stroke" fill="#0FA8A0" fill-opacity="0.05" />
  <text x="200" y="34" class="sketch-text-bold" text-anchor="middle">Atmospheric CO₂</text>
  
  <!-- Land Animals & Plants -->
  <rect x="30" y="150" width="90" height="30" rx="4" class="ink-stroke" />
  <text x="75" y="169" class="sketch-text" text-anchor="middle">Green Plants</text>
  
  <rect x="280" y="150" width="90" height="30" rx="4" class="ink-stroke" />
  <text x="325" y="169" class="sketch-text" text-anchor="middle">Animals</text>

  <!-- Arrows -->
  <!-- Photosynthesis -->
  <path d="M 160,45 L 85,150" class="teal-ink" stroke-width="2" />
  <polygon points="82,142 85,150 91,145" class="red-fill" />
  <text x="100" y="90" class="sketch-text-small" fill="#0FA8A0">Photosynthesis</text>

  <!-- Plant Respiration -->
  <path d="M 75,150 C 95,110 160,45 160,45" class="red-ink" />
  <!-- Animal Respiration -->
  <path d="M 320,150 C 300,110 240,45 240,45" class="red-ink" />
  <text x="290" y="100" class="sketch-text-small" fill="#cc3f3f">Respiration</text>
</svg>`;
  }

  // 24. Nitrogen Cycle
  if (norm.includes("nitrogen cycle") || norm.includes("diagram 4.5b")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <rect x="130" y="15" width="140" height="26" rx="8" class="ink-stroke-thick" />
  <text x="200" y="32" class="sketch-text-bold" text-anchor="middle">Atmospheric N₂</text>
  <path d="M 130,26 C 60,50 60,110 60,110" class="gold-ink" />
  <polygon points="56,102 60,110 64,102" class="gold-fill" />
  <text x="5" y="65" class="sketch-text-small" fill="#B8841A">1. N₂ Fixation (Rhizobium)</text>
  
  <!-- Ammonium & Nitrate -->
  <rect x="20" y="110" width="85" height="26" rx="4" class="ink-stroke" />
  <text x="62" y="126" class="sketch-text" text-anchor="middle">Ammonium (NH₄⁺)</text>
  <rect x="280" y="110" width="85" height="26" rx="4" class="ink-stroke" />
  <text x="322" y="126" class="sketch-text" text-anchor="middle">Nitrate (NO₃⁻)</text>

  <!-- Nitrifiers -->
  <path d="M 105,123 L 275,123" class="red-ink" />
  <polygon points="267,119 275,123 267,127" class="red-fill" />
  <text x="190" y="115" class="sketch-text-small" fill="#cc3f3f">Nitrification (Nitrosomonas/bacter)</text>
</svg>`;
  }

  // 25. Water Cycle
  if (norm.includes("water cycle") || norm.includes("diagram 4.5c")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <path d="M 10,260 L 90,140 L 170,220 L 250,260 L 390,260" class="ink-stroke-thick" />
  <path d="M 250,260 Q 320,260 390,260" fill="#0FA8A0" fill-opacity="0.15" class="ink-stroke" />
  <text x="320" y="280" class="sketch-text-bold" fill="#0FA8A0">Ocean</text>
  <!-- Cloud condensation -->
  <path d="M 270,80 C 255,80 245,95 255,110 C 275,115 305,110 295,85" class="ink-stroke" />
  <!-- evaporation arrows -->
  <path d="M 330,240 L 330,130" class="red-ink" />
  <polygon points="326,138 330,130 334,138" class="red-fill" />
  <text x="340" y="180" class="sketch-text-bold" fill="#cc3f3f">Evaporation</text>
</svg>`;
  }

  // 26. Map of Nigerian Vegetation Zones
  if (norm.includes("nigeria") || norm.includes("vegetation zones") || norm.includes("diagram 4.6")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <path d="M 100,280 C 80,240 70,200 80,140 C 90,80 140,60 210,60 C 280,60 320,80 320,140 C 320,200 310,240 290,280 Z" class="ink-stroke-thick" />
  <!-- Vegetation zone divisions simple lines -->
  <path d="M 85,220 Q 200,210 308,220" class="ink-stroke" />
  <path d="M 80,140 Q 200,135 320,140" class="ink-stroke" />
  <text x="195" y="250" class="sketch-text-bold" fill="#0FA8A0">Tropical Rainforest</text>
  <text x="195" y="175" class="sketch-text-bold" fill="#B8841A">Savannah Belt</text>
  <text x="195" y="100" class="sketch-text-bold" fill="#cc3f3f">Sahel (Desert Edge)</text>
</svg>`;
  }

  // 27. Population Growth Curves
  if (norm.includes("growth curves") || norm.includes("population growth")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- axes -->
  <line x1="50" y1="260" x2="360" y2="260" class="ink-stroke" />
  <line x1="50" y1="50" x2="50" y2="260" class="ink-stroke" />
  <text x="200" y="285" class="sketch-text-bold" text-anchor="middle">Time</text>
  <text x="35" y="150" class="sketch-text-bold" transform="rotate(-90 35 150)" text-anchor="middle">Population Size</text>
  
  <!-- S-shaped sigmoid curve -->
  <path d="M 50,250 C 100,240 130,220 180,140 C 210,90 260,90 340,90" class="teal-ink" stroke-width="2.5" />
  <text x="345" y="85" class="sketch-text-bold" fill="#0FA8A0">Sigmoid (Logistic) Curve</text>

  <!-- J-shaped exponential curve -->
  <path d="M 50,250 C 120,240 180,180 220,60" class="red-ink" stroke-width="2.5" />
  <text x="225" y="55" class="sketch-text-bold" fill="#cc3f3f">Exponential (J) Curve</text>
</svg>`;
  }


  // --- SECTION 5: NUTRITION ---

  // 31. Photosynthesis / Chloroplast Site of Light & Dark Reactions (Diagram 5.2.1)
  if (norm.includes("chloroplast") || norm.includes("diagram 5.2.1")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Double Membrane Oval -->
  <ellipse cx="200" cy="160" rx="140" ry="90" class="ink-stroke-thick" fill="#2ECC71" fill-opacity="0.03" />
  <ellipse cx="200" cy="160" rx="134" ry="84" class="ink-stroke-thin" />
  
  <!-- Stacked Grana (Thylakoids) on the left (Light Reactions) -->
  <g class="ink-stroke" transform="translate(110, 160)">
    <ellipse cx="0" cy="-25" rx="20" ry="6" fill="#0FA8A0" fill-opacity="0.3" />
    <ellipse cx="0" cy="-15" rx="20" ry="6" fill="#0FA8A0" fill-opacity="0.3" />
    <ellipse cx="0" cy="-5" rx="20" ry="6" fill="#0FA8A0" fill-opacity="0.3" />
    <ellipse cx="0" cy="5" rx="20" ry="6" fill="#0FA8A0" fill-opacity="0.3" />
    <text x="0" y="30" class="sketch-text-bold" text-anchor="middle" fill="#0FA8A0">Thylakoid (Grana)</text>
  </g>

  <!-- Stroma space on the right (Calvin / Dark Cycle) -->
  <g transform="translate(280, 160)">
    <circle cx="0" cy="-10" r="22" class="red-ink" stroke-dasharray="3,3" />
    <polygon points="18,-15 22,-10 15,-5" class="red-fill" />
    <text x="0" y="30" class="sketch-text-bold" text-anchor="middle" fill="#cc3f3f">Stroma (Calvin Cycle)</text>
  </g>

  <!-- Labels -->
  <path d="M 200,73 L 200,45" class="leader-line" /><circle cx="200" cy="73" r="2.5" class="gold-fill" />
  <text x="200" y="35" class="sketch-text-bold" text-anchor="middle">Outer/Inner Double Membrane</text>
  <path d="M 110,135 L 50,110" class="leader-line" /><circle cx="110" cy="135" r="2.5" class="teal-ink" />
  <text x="5" y="100" class="sketch-text-bold" fill="#0FA8A0">LIGHT REACTIONS (O₂ released)</text>
  <path d="M 280,150 L 340,110" class="leader-line" /><circle cx="280" cy="150" r="2.5" class="red-fill" />
  <text x="260" y="95" class="sketch-text-bold" fill="#cc3f3f">DARK REACTIONS (Glucose synthesized)</text>
</svg>`;
  }


  // --- SECTION 6: RESPIRATION ---

  // 40. Structure of a Stoma and Guard Cells
  if (norm.includes("stoma") || norm.includes("guard cells") || norm.includes("diagram 6.5.1a")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Left Side: Open Stoma -->
  <g transform="translate(100, 140)">
    <path d="M -10,-60 C -35,-30 -35,30 -10,60 C 5,30 5,-30 -10,-60 Z" class="ink-stroke" fill="#2ECC71" fill-opacity="0.1" />
    <path d="M 10,-60 C -5,-30 -5,30 10,60 C 35,30 35,-30 10,-60 Z" class="ink-stroke" fill="#2ECC71" fill-opacity="0.1" />
    <ellipse cx="0" cy="0" rx="6" ry="25" class="red-ink" fill="#faf6ec" />
    <text x="0" y="85" class="sketch-text-bold" text-anchor="middle">Open Stoma (Turgid)</text>
  </g>

  <!-- Right Side: Closed Stoma -->
  <g transform="translate(290, 140)">
    <path d="M -5,-60 C -25,-30 -25,30 -5,60 C -5,30 -5,-30 -5,-60 Z" class="ink-stroke" fill="#B8841A" fill-opacity="0.05" />
    <path d="M 5,-60 C 5,-30 5,30 5,60 C 25,30 25,-30 5,-60 Z" class="ink-stroke" fill="#B8841A" fill-opacity="0.05" />
    <line x1="0" y1="-50" x2="0" y2="50" class="red-ink" />
    <text x="0" y="85" class="sketch-text-bold" text-anchor="middle">Closed Stoma (Flaccid)</text>
  </g>
</svg>`;
  }

  // 42. Human Respiratory System
  if (norm.includes("respiratory system") || norm.includes("diagram 6.5.4")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Head & Neck profile simplified -->
  <path d="M 140,40 Q 180,40 180,60 T 170,110 L 170,160" class="ink-stroke" />
  <!-- Trachea (windpipe) -->
  <rect x="180" y="80" width="12" height="60" class="ink-stroke" />
  <!-- trachea rings -->
  <line x1="180" y1="90" x2="192" y2="90" class="ink-stroke-thin" />
  <line x1="180" y1="105" x2="192" y2="105" class="ink-stroke-thin" />
  <line x1="180" y1="120" x2="192" y2="120" class="ink-stroke-thin" />

  <!-- Lungs Left & Right -->
  <path d="M 180,140 Q 120,150 110,220 Q 150,250 185,220 Z" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.05" />
  <path d="M 192,140 Q 250,150 260,220 Q 220,250 187,220 Z" class="ink-stroke" fill="#cc3f3f" fill-opacity="0.05" />

  <!-- Bronchi branching -->
  <path d="M 186,140 L 155,175 M 186,140 L 215,175" class="ink-stroke" />

  <!-- Diaphragm sheet bottom -->
  <path d="M 90,260 Q 186,230 280,260" class="ink-stroke-thick" />

  <!-- Labels -->
  <path d="M 186,95 L 285,95" class="leader-line" /><circle cx="186" cy="95" r="2.5" class="gold-fill" />
  <text x="290" y="98" class="sketch-text-bold">Trachea (Cartilaginous rings)</text>
  <path d="M 130,190 L 50,190" class="leader-line" /><circle cx="130" cy="190" r="2.5" class="red-fill" />
  <text x="5" y="180" class="sketch-text-bold" fill="#cc3f3f">Pleural Cavity & Lung</text>
  <path d="M 186,245 L 285,285" class="leader-line" /><circle cx="186" cy="245" r="2.5" class="gold-fill" />
  <text x="290" y="295" class="sketch-text-bold">Diaphragm muscle sheet</text>
</svg>`;
  }


  // --- SECTION 7: TRANSPORT / CARDIOVASCULAR ---

  // 55. Human Lymphatic System (Diagram 7.9)
  if (norm.includes("lymphatic") || norm.includes("diagram 7.9")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Body outline simplified -->
  <path d="M 170,40 C 170,20 230,20 230,40 C 230,60 260,80 260,120 C 260,160 240,200 240,280 L 160,280 C 160,200 140,160 140,120 C 140,80 170,60 170,40 Z" class="ink-stroke-thin" />
  <!-- Lymph vessels -->
  <path d="M 170,110 Q 190,130 195,160 M 230,110 Q 210,130 205,160 M 200,160 L 200,270" class="teal-ink" stroke-width="1.8" />
  <!-- Nodes as dots -->
  <circle cx="175" cy="70" r="3" class="gold-fill" />
  <circle cx="225" cy="70" r="3" class="gold-fill" />
  <circle cx="185" cy="115" r="3" class="gold-fill" />
  <circle cx="215" cy="115" r="3" class="gold-fill" />
  <!-- Labels -->
  <path d="M 175,70 L 105,70" class="leader-line" /><circle cx="175" cy="70" r="2.5" class="gold-fill" />
  <text x="10" y="73" class="sketch-text-bold">Cervical Lymph Nodes</text>
  <path d="M 200,180 L 295,180" class="leader-line" /><circle cx="200" cy="180" r="2.5" class="teal-ink" />
  <text x="300" y="183" class="sketch-text-bold" fill="#0FA8A0">Lymphatic Vessel network</text>
</svg>`;
  }


  // --- SECTION 8: EXCRETION & OSMOREGULATION ---

  // 57. Structure of a Nephron (Diagram 8.4)
  if (norm.includes("nephron") || norm.includes("diagram 8.4")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Glomerulus inside cup-shaped Bowman's Capsule -->
  <path d="M 60,60 C 20,80 20,130 60,150 L 90,140 Q 75,105 90,70 Z" class="ink-stroke-thick" />
  <path d="M 35,90 Q 55,105 75,90" class="red-ink" stroke-width="2.5" /> <!-- Glomerulus knot -->

  <!-- Proximal Convoluted Tubule (PCT) loops -->
  <path d="M 90,105 Q 120,70 140,110 T 170,110" class="ink-stroke" />

  <!-- Hairpin Loop of Henle running down and up -->
  <path d="M 170,110 L 170,250 Q 185,275 200,250 L 200,110" class="ink-stroke-thick" />

  <!-- Distal Convoluted Tubule (DCT) loops -->
  <path d="M 200,110 Q 220,70 240,110 T 270,110" class="ink-stroke" />

  <!-- Collecting Duct straight down -->
  <rect x="270" y="70" width="14" height="210" class="ink-stroke" fill="#B8841A" fill-opacity="0.05" />

  <!-- Labels -->
  <path d="M 50,105 L 10,40" class="leader-line" /><circle cx="50" cy="105" r="2.5" class="red-fill" />
  <text x="5" y="25" class="sketch-text-bold" fill="#cc3f3f">Bowman's Capsule & Glomerulus</text>
  <path d="M 120,90 L 120,20" class="leader-line" /><circle cx="120" cy="90" r="2.5" class="gold-fill" />
  <text x="120" y="15" class="sketch-text" text-anchor="middle">PCT (Selective Reabsorption)</text>
  <path d="M 185,255 L 105,295" class="leader-line" /><circle cx="185" cy="255" r="2.5" class="gold-fill" />
  <text x="10" y="310" class="sketch-text-bold">Loop of Henle (Salt/Water balance)</text>
  <path d="M 277,150 L 330,150" class="leader-line" /><circle cx="277" cy="150" r="2.5" class="gold-fill" />
  <text x="335" y="153" class="sketch-text-bold" fill="#B8841A">Collecting Duct</text>
</svg>`;
  }


  // --- SECTION 9: REPRODUCTION ---

  // 61. Parts of a Bisexual Flower (Diagram 9.3.1)
  if (norm.includes("bisexual flower") || norm.includes("diagram 9.3.1")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Receptacle base -->
  <path d="M 150,250 C 150,225 250,225 250,250 Z" class="ink-stroke" fill="#2ECC71" fill-opacity="0.1" />
  <!-- Petals -->
  <path d="M 140,240 C 90,160 110,60 160,80" class="red-ink" stroke-width="2.2" />
  <path d="M 260,240 C 310,160 290,60 240,80" class="red-ink" stroke-width="2.2" />
  <!-- Pistil (Stigma, Style, Ovary) -->
  <rect x="180" y="180" width="40" height="60" rx="20" class="ink-stroke" fill="#2ECC71" fill-opacity="0.05" />
  <line x1="200" y1="180" x2="200" y2="90" class="ink-stroke" stroke-width="2" />
  <circle cx="200" cy="85" r="6" class="ink-stroke-thick" />
  <!-- Stamens (Male) -->
  <path d="M 160,240 Q 150,140 170,115 M 240,240 Q 250,140 230,115" class="ink-stroke" />
  <ellipse cx="170" cy="115" rx="6" ry="3" class="gold-fill" />
  <ellipse cx="230" cy="115" rx="6" ry="3" class="gold-fill" />
  <!-- Labels -->
  <path d="M 200,85 L 290,55" class="leader-line" /><circle cx="200" cy="85" r="2.5" class="gold-fill" />
  <text x="295" y="58" class="sketch-text-bold">Stigma (Pistil tip)</text>
  <path d="M 170,115 L 80,115" class="leader-line" /><circle cx="170" cy="115" r="2.5" class="gold-fill" />
  <text x="15" y="118" class="sketch-text-bold" fill="#B8841A">Anther (Pollen production)</text>
  <path d="M 200,210 L 290,210" class="leader-line" /><circle cx="200" cy="210" r="2.5" class="gold-fill" />
  <text x="295" y="213" class="sketch-text">Ovary with Ovules</text>
</svg>`;
  }

  // 62. Double Fertilisation (Diagram 9.3.3)
  if (norm.includes("double fertilisation") || norm.includes("diagram 9.3.3")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <ellipse cx="200" cy="160" rx="90" ry="110" class="ink-stroke" fill="#2ECC71" fill-opacity="0.03" />
  <!-- Pollen Tube entering -->
  <path d="M 200,310 L 200,270" class="red-ink" stroke-width="3" />
  <!-- Polar nuclei in the center -->
  <circle cx="190" cy="150" r="7" class="ink-stroke" />
  <circle cx="210" cy="150" r="7" class="ink-stroke" />
  <!-- Egg cell at base -->
  <circle cx="200" cy="235" r="12" class="ink-stroke" fill="#B8841A" fill-opacity="0.1" />
  <!-- labels -->
  <path d="M 190,150 L 310,150" class="leader-line" /><circle cx="190" cy="150" r="2.5" class="gold-fill" />
  <text x="315" y="153" class="sketch-text-bold">Polar Nuclei (2n)</text>
  <path d="M 200,235 L 310,235" class="leader-line" /><circle cx="200" cy="235" r="2.5" class="gold-fill" />
  <text x="315" y="238" class="sketch-text-bold" fill="#B8841A">Egg Cell (n)</text>
</svg>`;
  }

  // 67. The 28-Day Menstrual Cycle (Diagram 9.4.5)
  if (norm.includes("menstrual cycle") || norm.includes("diagram 9.4.5")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <line x1="50" y1="260" x2="370" y2="260" class="ink-stroke-thick" />
  <text x="50" y="275" class="sketch-text-small">Day 1</text>
  <text x="210" y="275" class="sketch-text-bold" text-anchor="middle" fill="#cc3f3f">Day 14 (Ovulation)</text>
  <text x="370" y="275" class="sketch-text-small" text-anchor="end">Day 28</text>
  
  <!-- Endometrial Lining thickens -->
  <path d="M 50,220 Q 80,240 110,240 T 210,180 Q 280,130 370,150" class="gold-ink" stroke-width="2.5" />
  <line x1="210" y1="50" x2="210" y2="260" class="red-ink" stroke-dasharray="3,3" />
  <text x="220" y="70" class="sketch-text-bold" fill="#cc3f3f">LH Hormone Surge</text>
  <text x="110" y="210" class="sketch-text-small">Menses</text>
  <text x="280" y="210" class="sketch-text-small" fill="#B8841A">Secretory Phase</text>
</svg>`;
  }


  // --- SECTION 10: METAMORPHOSIS, GROWTH & HORMONES ---

  // 61. Primary vs Secondary Growth (Diagram 10.2)
  if (norm.includes("primary vs secondary") || norm.includes("diagram 10.2")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <line x1="200" y1="20" x2="200" y2="300" class="leader-line" />
  <text x="100" y="30" class="sketch-text-bold" text-anchor="middle" fill="#0FA8A0">PRIMARY (Apical elongation)</text>
  <text x="300" y="30" class="sketch-text-bold" text-anchor="middle" fill="#B8841A">SECONDARY (Lateral rings)</text>

  <!-- Left: Apical meristem shoot tip -->
  <g class="ink-stroke" transform="translate(100, 150)">
    <path d="M -15,50 L -15,-20 C -15,-40 15,-40 15,-20 L 15,50" />
    <path d="M 0,-30 C -5,-30 -8,-25 -5,-20 C -2,-15 5,-15 5,-20" class="teal-ink" stroke-width="2.2" />
  </g>
  <text x="100" y="240" class="sketch-text-small" text-anchor="middle">Apical Meristem at tip</text>

  <!-- Right: Secondary woody cross section -->
  <g class="ink-stroke" transform="translate(300, 150)">
    <circle cx="0" cy="0" r="35" class="ink-stroke-thick" />
    <circle cx="0" cy="0" r="25" />
    <circle cx="0" cy="0" r="15" />
    <!-- cambium ring -->
    <circle cx="0" cy="0" r="20" class="gold-ink" stroke-width="1.8" stroke-dasharray="2,2" />
  </g>
  <text x="300" y="240" class="sketch-text-small" text-anchor="middle">Vascular Cambium ring</text>
  <text x="300" y="255" class="sketch-text-small" text-anchor="middle">produces secondary xylem (wood)</text>
</svg>`;
  }

  // 62. Sigmoid Growth Curve (Diagram 10.3)
  if (norm.includes("sigmoid") || norm.includes("diagram 10.3")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- axes -->
  <line x1="50" y1="260" x2="360" y2="260" class="ink-stroke" />
  <line x1="50" y1="50" x2="50" y2="260" class="ink-stroke" />
  <text x="200" y="285" class="sketch-text-bold" text-anchor="middle">Time</text>
  <text x="35" y="150" class="sketch-text-bold" transform="rotate(-90 35 150)" text-anchor="middle">Size / Dry Mass</text>
  
  <!-- carrying capacity K line -->
  <line x1="50" y1="90" x2="360" y2="90" class="red-ink" stroke-dasharray="3,3" />
  <text x="355" y="85" class="sketch-text-bold" text-anchor="end" fill="#cc3f3f">Carrying Capacity (K)</text>

  <!-- Sigmoid curve -->
  <path d="M 50,250 Q 110,250 150,190 T 230,100 Q 280,90 340,90" class="teal-ink" stroke-width="3" />
  
  <!-- Phases labels -->
  <text x="85" y="235" class="sketch-text-small" text-anchor="middle">1. Lag</text>
  <text x="155" y="155" class="sketch-text-small" text-anchor="middle" fill="#0FA8A0">2. Log (Expo.)</text>
  <text x="260" y="125" class="sketch-text-small" text-anchor="middle">3. Stationary</text>
  <text x="330" y="125" class="sketch-text-small" text-anchor="middle">4. Decline</text>
</svg>`;
  }

  // 63. Complete Metamorphosis (Diagram 10.4a)
  if (norm.includes("complete metamorphosis") || norm.includes("diagram 10.4a") || norm.includes("10.9")) {
    return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- Circular cycle layout -->
  <!-- 1. Egg -->
  <g transform="translate(200, 50)">
    <circle cx="0" cy="0" r="8" class="ink-stroke" fill="#B8841A" fill-opacity="0.1" />
    <text x="0" y="22" class="sketch-text-bold" text-anchor="middle">Egg</text>
  </g>
  <!-- 2. Larva -->
  <g transform="translate(320, 150)">
    <path d="M -15,0 Q 0,-10 15,0" class="ink-stroke" stroke-width="2.5" />
    <text x="0" y="22" class="sketch-text-bold" text-anchor="middle">Larva (Caterpillar/Maggot)</text>
  </g>
  <!-- 3. Pupa -->
  <g transform="translate(200, 250)">
    <ellipse cx="0" cy="0" rx="12" ry="18" class="ink-stroke" fill="#B8841A" fill-opacity="0.2" />
    <text x="0" y="28" class="sketch-text-bold" text-anchor="middle">Pupa (Chrysalis)</text>
  </g>
  <!-- 4. Adult -->
  <g transform="translate(80, 150)">
    <path d="M -10,-10 Q 0,-15 10,-10 L 0,15 Z" class="ink-stroke" />
    <text x="0" y="25" class="sketch-text-bold" text-anchor="middle">Adult (Imago)</text>
  </g>
  
  <!-- Connecting arrows -->
  <path d="M 220,50 Q 280,75 310,125" class="gold-ink" />
  <path d="M 310,175 Q 280,225 220,250" class="gold-ink" />
  <path d="M 180,250 Q 120,225 90,175" class="gold-ink" />
  <path d="M 90,125 Q 120,75 180,50" class="gold-ink" />
</svg>`;
  }


  // --- DEFAULT GENERAL FALLBACK (BEAUTIFULLY CRAFTED) ---
  return `
<svg viewBox="0 0 400 320" fill="none" class="notebook-diagram">
  ${sketchStyles}
  <!-- General flow loop or comparison card fallback -->
  <rect x="50" y="60" width="130" height="150" rx="10" class="ink-stroke" />
  <rect x="220" y="60" width="130" height="150" rx="10" class="ink-stroke" />
  <!-- central link -->
  <path d="M 180,135 L 220,135" class="gold-ink" stroke-dasharray="3,3" />
  
  <text x="115" y="140" class="sketch-text-bold" text-anchor="middle" fill="#0FA8A0">Biological</text>
  <text x="115" y="160" class="sketch-text-bold" text-anchor="middle" fill="#0FA8A0">Concept</text>
  
  <text x="285" y="140" class="sketch-text-bold" text-anchor="middle" fill="#cc3f3f">Visual</text>
  <text x="285" y="160" class="sketch-text-bold" text-anchor="middle" fill="#cc3f3f">Summary</text>
  
  <text x="200" y="260" class="sketch-text-small" text-anchor="middle">${caption || "Zenith Study Guide"}</text>
</svg>`;
};
